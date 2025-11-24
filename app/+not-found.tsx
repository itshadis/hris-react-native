import { Link, Stack } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
        <View>
          <Link href="/">
            Go Back to Home Screen
          </Link>
        </View>
    </>
  )
}

export default NotFoundScreen