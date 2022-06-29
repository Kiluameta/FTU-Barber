import React from "react"
import {
    Keyboard,
    Text,
    TouchableWithoutFeedback
} from 'react-native'
import {
    Container
} from './styles'

export function Favorite () {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <Container>
                <Text>Favorite</Text>
            </Container>
        </TouchableWithoutFeedback>
    )
}