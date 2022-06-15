import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import  UserContextProvider from './src/global/contexts'
import Main from './src/routes/Main'

export default () => {
  return(
    <UserContextProvider>
      <NavigationContainer>
        <StatusBar style={'inverted'}  />
        <Main/>
      </NavigationContainer>
    </UserContextProvider>
  )
}