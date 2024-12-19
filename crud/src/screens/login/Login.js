import { useState } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, TextInput } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '', })
  const handleLogin = async () => {
    const { email, password } = formData;
    console.log(formData);
    try {
      const userData = await auth().signInWithEmailAndPassword(email, password);
      console.log(userData.user);
      navigation.navigate('WelCome')
    }
    catch (error) {
      console.error('Sign up error:', error.message);
    }
  }
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.header}>Login</Text>
      {Object.keys(formData).map((field) => (
        <View key={field} style={styles.inputContainer}>
          <Text style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1)}</Text>
          <TextInput
            style={styles.input}
            placeholder={`Enter ${field}`}
            value={formData[field]}
            onChangeText={(value) => handleInputChange(field, value)}
            secureTextEntry={field === 'password'}
          />
        </View>
      ))}
      <Button title='Login' onPress={handleLogin} />
      <Button title='SignUp' onPress={() => navigation.navigate('SignUp')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
