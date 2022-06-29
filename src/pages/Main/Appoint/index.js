import React from "react"
import {
    Keyboard,
    Text,
    TouchableWithoutFeedback
} from 'react-native'
import {
    Container
} from './styles'

export function Appoint () {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <Container>
                <Text>Appoint</Text>
            </Container>
        </TouchableWithoutFeedback>
    )
}