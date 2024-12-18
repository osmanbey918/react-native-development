import { View, Text, Button } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';

export default function SignOut() {
    return (
        <View>
            <Button title='SignOut' onPress={() =>
                auth().signOut().then(() => console.log('User signed out!'))} />
        </View>
    )
}