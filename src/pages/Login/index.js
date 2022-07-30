import React, { useState, useEffect, useContext } from "react"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {
    Keyboard,
    TouchableWithoutFeedback,
    Alert
} from 'react-native'
import { 
    Container,
    InputArea,
    // Log,
    // Password,
    Button,
    TextButtom,
    MessageButtom,
    MessageTextButtom,
    MessageTextButtomBold 
} from './styles'

import LoginInput from "../../components/LoginInput"

import Barber from '../../assets/icone/Barber.svg'
import Email from '../../assets/email.svg'
import Key from '../../assets/lock.svg'
import { auth } from "../../../firebase"

import { UserContext } from '../../global/contexts/index'

export function Login () {

    const { dispatch: userDispatch } = useContext(UserContext)
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('Main')
            }
        })

        return unsub
    },[])

    const handleSubmit =  ()  => {
        if (email && password) {
            auth
            .signInWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                
                const user = userCredentials.user
                const token = JSON.parse(JSON.stringify(userCredentials.user)).accessToken
                const name = user.displayName
                
                (async () => {
                    await AsyncStorage.setItem('@token', token)
                    await AsyncStorage.setItem('@name', JSON.stringify(name))
                })();
                console.log('Logado com ', user.email)
            })
            .catch(e => alert(e.message))

            // userDispatch({
            //     type:'setAvatar',
            //     payload:{
            //         avatar: *avatar*
            //     }
            // })

            navigation.reset({
                routes:[{name: 'Main'}]
            })

        }else{
            Alert.alert("Preencha os campos corretamente!")
        }
    }

    const handleSubmitSingup = () => {
        navigation.navigate('Registration')
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <Container>
                <Barber width="100%" height="200" fill="white" />

                <InputArea>

                    <LoginInput 
                        IconSvg={Email} 
                        placeholder="E-mail" 
                        value={email}
                        onChangeText={t=>setEmail(t)}
                    />
                    <LoginInput 
                        IconSvg={Key} 
                        placeholder="Senha" 
                        value={password}
                        onChangeText={t=>setPassword(t)}
                        password={true}
                    />

                    <Button  onPress={handleSubmit} >
                        <TextButtom>LOGIN</TextButtom>
                    </Button>

                </InputArea>

                <MessageButtom onPress={handleSubmitSingup} >
                    <MessageTextButtom>Não possui conta?</MessageTextButtom>
                    <MessageTextButtomBold>Cadastre-se</MessageTextButtomBold>
                </MessageButtom>

            </Container>
        </TouchableWithoutFeedback>
    )
}