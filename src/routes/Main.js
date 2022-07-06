import React from "react"
import {
    View
} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons'

import { Home } from '../pages/Main/Home'
import { Search } from '../pages/Main/Search'
import { Appoint } from '../pages/Main/Appoint'
import { Favorite } from '../pages/Main/Favorite'
import { Profile } from '../pages/Main/Profile'

const Bottom = createBottomTabNavigator() 

export default function Main (){
    return(
        <View style={{height: '100%', backgroundColor: '#171618'}}> 
        <Bottom.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#FFF',
                tabBarInactiveTintColor: '#d3d3d3',
                tabBarLabelPosition: 'below-icon',
                tabBarStyle: {
                    height: 90,
                    backgroundColor: '#000',
                    borderTopColor: '#000',
                    paddingVertical: Platform.OS === 'ios' ? 5 : 0,
                    borderTopEndRadius: 25,
                    borderTopStartRadius: 25,
                },
                tabBarLabelStyle: {
                    paddingBottom: 10,
                    fontSize: 12
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name === 'Home'){
                        iconName = focused ? 'ios-home' : 'ios-home-outline'
                    } else if (route.name === 'Search'){
                        iconName = focused ? 'ios-build' : 'ios-build-outline'
                    } else if (route.name === 'Appoint'){
                        iconName = focused ? 'ios-business' : 'ios-business-outline'
                    } else if (route.name === 'Favorite'){
                        iconName = focused ? 'ios-cash' : 'ios-cash-outline'
                    } else if (route.name === 'Profile'){
                        iconName = focused ? 'ios-settings' : 'ios-settings-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} style={{marginBottom: -5}} />
                },

            })} 
        >
            <Bottom.Screen name="Home" component={Home} />
            <Bottom.Screen name="Search" component={Search} />
            <Bottom.Screen name="Appoint" component={Appoint} />
            <Bottom.Screen name="Favorite" component={Favorite} />
            <Bottom.Screen name="Profile" component={Profile} />
        </Bottom.Navigator>
       </View> 
    )
}