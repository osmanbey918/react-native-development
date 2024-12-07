import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const App = () => {
  const handleLogin = () => {
    alert('Login Button Pressed!');
  };

  const handleSignUp = () => {
    alert('Sign-Up Button Pressed!');
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
        style={styles.logo} 
      />
      <Text style={styles.title}>Welcome to SocialApp</Text>

      {/* Input Fields */}
      <TextInput 
        style={styles.input} 
        placeholder="Username or Email" 
        placeholderTextColor="#aaa"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        placeholderTextColor="#aaa" 
        secureTextEntry
      />

      {/* Buttons */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpText}>Create New Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#6200ea',
    width: '80%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpButton: {
    borderColor: '#6200ea',
    borderWidth: 1,
    width: '80%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  signUpText: {
    color: '#6200ea',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
