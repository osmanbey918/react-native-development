import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import SignUp from './src/screens/signup/SignUp';
import Login from './src/screens/login/Login';
import WelCome from './src/screens/welcome/WelCome';

const Stack = createNativeStackNavigator();

function RootStack({ user }: { user: FirebaseAuthTypes.User | null }) {
  return (
    <Stack.Navigator >
      {user ? (
        <Stack.Screen name="WelCome" component={WelCome} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(currentUser => {
      setUser(currentUser);
      setLoading(false);  // Stop loading after auth check
    });

    return unsubscribe;  // Cleanup listener on unmount
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Checking Authentication...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootStack user={user} />
    </NavigationContainer>
  );
}
