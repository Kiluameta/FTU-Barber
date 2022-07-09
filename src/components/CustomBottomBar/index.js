import React from "react"
import {
    View
} from 'react-native'
import { Tab, Content, ContentCenter } from "./styles"

import Home from '../../assets/home.svg'
import Search from '../../assets/search.svg'
import Appoint from '../../assets/today.svg'
import Favorite from '../../assets/favorite.svg'
import Profile from '../../assets/account.svg'

export default ({state, navigation}) => {

    const lets = (Name) => {
        navigation.navigate(Name)
    }

    return(
        <View style={{backgroundColor:'#171618'}}>
            <Tab>
                <Content onPress={() => lets('Home')} >
                    <Home width='32' style={{opacity: state.index === 0 ? 1 : 0.7}} height='32' fill="#FFF" />  
                </Content>
                <Content onPress={() => lets('Search')} >
                    <Search width='32' style={{opacity: state.index === 1 ? 1 : 0.7}} height='32' fill="#FFF" />  
                </Content>
                <ContentCenter onPress={() => lets('Appoint')} >
                    <Appoint width='32' height='32' fill="#000" />  
                </ContentCenter>
                <Content onPress={() => lets('Favorite')} >
                    <Favorite width='32' style={{opacity: state.index === 3 ? 1 : 0.7}} height='32' fill="#FFF" />  
                </Content>
                <Content onPress={() => lets('Profile')} >
                    <Profile width='32' style={{opacity: state.index === 4 ? 1 : 0.7}} height='32' fill="#FFF" />  
                </Content>
            </Tab>
        </View>
    )
}