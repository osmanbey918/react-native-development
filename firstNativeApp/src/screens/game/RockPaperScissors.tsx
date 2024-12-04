import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

const RockPaperScissors: React.FC = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const choices = ['Rock', 'Paper', 'Scissors'];

  const playGame = (choice: string) => {
    const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerRandomChoice);
    determineWinner(choice, computerRandomChoice);
  };

  const determineWinner = (user: string, computer: string) => {
    if (user === computer) {
      setResult('It\'s a Tie!');
    } else if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Paper' && computer === 'Rock') ||
      (user === 'Scissors' && computer === 'Paper')
    ) {
      setResult('You Win! 🎉');
    } else {
      setResult('You Lose! 😢');
    }
  };

  // Memory Game Logic
  const memoryItems = ['🍎', '🍌', '🍇', '🍉', '🍎', '🍌', '🍇', '🍉'];
  const [shuffledItems, setShuffledItems] = useState<string[]>(
    memoryItems.sort(() => Math.random() - 0.5)
  );
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [matchedItems, setMatchedItems] = useState<number[]>([]);

  const handleMemorySelection = (index: number) => {
    if (selectedItems.length < 2 && !selectedItems.includes(index)) {
      setSelectedItems([...selectedItems, index]);

      if (
        selectedItems.length === 1 &&
        shuffledItems[selectedItems[0]] === shuffledItems[index]
      ) {
        setMatchedItems([...matchedItems, selectedItems[0], index]);
      }

      if (selectedItems.length === 1) {
        setTimeout(() => setSelectedItems([]), 1000);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rock, Paper, Scissors</Text>

      <View style={styles.choicesContainer}>
        {choices.map((choice) => (
          <TouchableOpacity
            key={choice}
            style={styles.choiceButton}
            onPress={() => playGame(choice)}
          >
            <Text style={styles.choiceText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {userChoice && computerChoice && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your Choice: {userChoice}</Text>
          <Text style={styles.resultText}>Computer's Choice: {computerChoice}</Text>
          <Text style={styles.resultText}>Result: {result}</Text>
        </View>
      )}

      <View style={styles.memoryGameContainer}>
        <Text style={styles.memoryTitle}>Memory Game</Text>
        <FlatList
          data={shuffledItems}
          numColumns={4}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.memoryItem,
                matchedItems.includes(index) || selectedItems.includes(index)
                  ? styles.memoryItemMatched
                  : styles.memoryItemHidden,
              ]}
              onPress={() => handleMemorySelection(index)}
              disabled={matchedItems.includes(index)}
            >
              <Text style={styles.memoryItemText}>
                {matchedItems.includes(index) || selectedItems.includes(index)
                  ? item
                  : '?'}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  choicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  choiceButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  choiceText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    color: '#444',
    marginVertical: 5,
  },
  memoryGameContainer: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },
  memoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  memoryItem: {
    width: 50,
    height: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  memoryItemMatched: {
    backgroundColor: '#4caf50',
  },
  memoryItemHidden: {
    backgroundColor: '#9e9e9e',
  },
  memoryItemText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default RockPaperScissors;
