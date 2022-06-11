import React from "react"
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

export function Login () {
    return(
        <Container>
            <Barber width="100%" height="200" fill="white" />

            <InputArea>

                <LoginInput/>
                <LoginInput/>

                <Button>
                    <TextButtom>LOGIN</TextButtom>
                </Button>

            </InputArea>

            <MessageButtom>
                <MessageTextButtom>Não possui conta?</MessageTextButtom>
                <MessageTextButtomBold>Cadastre-se</MessageTextButtomBold>
            </MessageButtom>

        </Container>
    )
}