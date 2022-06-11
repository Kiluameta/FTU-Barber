import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native"

import { Splash } from '../pages/Splash'
import { Login } from '../pages/Login'
import { Registration } from '../pages/Registration'
import { View, Text } from "react-native"

const Stack = createStackNavigator()

export default function Main () {
    return(
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
            </Stack.Navigator>
    )
}