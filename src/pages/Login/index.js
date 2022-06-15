import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import {
    Keyboard,
    TouchableWithoutFeedback
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

export function Login () {

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {

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