import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import  UserContextProvider from './src/global/contexts'
import Routes from './src/routes/Routes'

export default () => {
  return(
    <UserContextProvider>
      <NavigationContainer>
        <StatusBar style={'inverted'}  />
        <Routes/>
      </NavigationContainer>
    </UserContextProvider>
  )
}