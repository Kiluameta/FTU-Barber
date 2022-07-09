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
        <Bottom.Navigator tabBar={props=><CustomBottomBar {...props} />}
                
            >
            <Bottom.Screen name="Home" component={Home} />
            <Bottom.Screen name="Search" component={Search} />
            <Bottom.Screen name="Appoint" component={Appoint} />
            <Bottom.Screen name="Favorite" component={Favorite} />
            <Bottom.Screen name="Profile" component={Profile} />
        </Bottom.Navigator>
    )
}