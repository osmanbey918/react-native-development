import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View>
      <Text style={StyleSheet.heading}>Login</Text>
    </View>
  )
}

const styles =  StyleSheet.create({
    heading:{
        fontSize: 24,
    },
})