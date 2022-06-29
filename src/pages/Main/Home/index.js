import React from "react"
import {
    Keyboard,
    Text,
    TouchableWithoutFeedback
} from 'react-native'
import {
    Container
} from './styles'

export function Home () {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <Container>
                <Text>Home</Text>
            </Container>
        </TouchableWithoutFeedback>
    )
}