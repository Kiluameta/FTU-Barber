import React, { useEffect } from "react"
import { Container, Loading } from './styles'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"

import FTUBarber from '../../assets/barber.svg' 

export function Splash (){

    const navigation = useNavigation()

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('@token')
            
            if(token){
                navigation.navigate('Main')
            } else {
                navigation.navigate('Login')
            }
        }

        checkToken()

    },[])

    return(
        <Container>
            <FTUBarber width="100%" height="160" />
            <Loading size="large" color="#FFF" />
        </Container>
    )
}