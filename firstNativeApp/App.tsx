import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home/Home'; // Adjust the path to where Home.tsx is located

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to My React Native App</Text>
      </View>

      {/* Home Component Section */}
      <View style={styles.body}>
        <Home />
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          This is Usman's first Android app, ready for great learning!
          This is Usman's first Android app, ready for great learning!
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    padding: 20,
    backgroundColor: '#6200ea',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: 'skyblue',
    padding: 10,
  },
  footerText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
