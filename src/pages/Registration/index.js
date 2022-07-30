import React, { useState, useEffect } from "react"
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

import Input from "../../components/Input"

import Barber from '../../assets/icone/Barber.svg'
import Person from '../../assets/person.svg'
import Email from '../../assets/email.svg'
import Key from '../../assets/lock.svg'
import { auth } from "../../../firebase"

export function Registration () {

    const navigation = useNavigation()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('Main')
            }
        })

        return unsub
    },[])

    const handleSubmit = () => {
        if (email && password  && name && confirm){
            auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                const token = async () => {
                    await AsyncStorage.setItem('@token', JSON .stringify (user.email))
                }
                token()
                console.log('Registrado com ', user.email)
            })
            .catch(e => alert(e.message))

            navigation.navigate('Login')
        }else{
            Alert.alert("Preencha os campos corretamente!")
        }
    }

    const handleSubmitSingup = () => {
        navigation.navigate('Login')
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <Container>
                <Barber width="100%" height="200" fill="white" />

                <InputArea>

                    <Input 
                        IconSvg={Person} 
                        placeholder="Digite seu Nome" 
                        value={name}
                        onChangeText={t=>setName(t)}
                    />

                    <Input 
                        IconSvg={Email} 
                        placeholder="Digite seu E-mail" 
                        value={email}
                        onChangeText={t=>setEmail(t)}
                    />

                    <Input 
                        IconSvg={Key} 
                        placeholder="Digite sua Senha" 
                        value={password}
                        onChangeText={t=>setPassword(t)}
                        password={true}
                    />

                    <Input 
                        IconSvg={Key} 
                        placeholder="Confirmar Senha" 
                        value={confirm}
                        onChangeText={t=>setConfirm(t)}
                        password={true}
                    />

                    <Button  onPress={handleSubmit} >
                        <TextButtom>CADASTRAR</TextButtom>
                    </Button>

                </InputArea>

                <MessageButtom onPress={handleSubmitSingup} >
                    <MessageTextButtom>Já possui conta?</MessageTextButtom>
                    <MessageTextButtomBold>Faça login</MessageTextButtomBold>
                </MessageButtom>

            </Container>
        </TouchableWithoutFeedback>
    )
}