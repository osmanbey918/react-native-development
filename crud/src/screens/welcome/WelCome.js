import { View, Text } from 'react-native'
import React from 'react'
import SignOut from '../../components/signout/SignOut'

export default function WelCome() {
  return (
    <View>
      <Text>WelCome!! You have successfull to login</Text>
      <SignOut />
    </View>
  )
}