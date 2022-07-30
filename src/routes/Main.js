import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import CustomBottomBar from "../components/CustomBottomBar"

import { Home } from '../pages/Main/Home'
import { Search } from '../pages/Main/Search'
import { Appoint } from '../pages/Main/Appoint'
import { Favorite } from '../pages/Main/Favorite'
import { Profile } from '../pages/Main/Profile'

const Bottom = createBottomTabNavigator() 

export default function Main (){
    return(
        <Bottom.Navigator tabBar={props=><CustomBottomBar {...props}  />}>
            <Bottom.Screen name="Home" component={Home} options={{
                headerShown: false
                }} />
            <Bottom.Screen name="Search" component={Search} options={{
                headerShown: false
                }} />
            <Bottom.Screen name="Appoint" component={Appoint} options={{
                headerShown: false
                }} />
            <Bottom.Screen name="Favorite" component={Favorite} options={{
                headerShown: false
                }} />
            <Bottom.Screen name="Profile" component={Profile} options={{
                headerShown: false
                }} />
        </Bottom.Navigator>
    )
}