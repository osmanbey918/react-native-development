import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SignOut from '../../components/signout/SignOut';
import ContactUs from '../../components/contacus/ContactUs';

export default function WelCome() {
  return (
    <View style={styles.container}>
      <View style={styles.signOutContainer}>
        <SignOut />
      </View>
      <Text style={styles.header}>Welcome!! You have successfully logged in</Text>
      <ContactUs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  signOutContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 100,
  },
});
