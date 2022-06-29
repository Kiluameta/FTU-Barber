import React from "react"
import {
    Keyboard,
    Text,
    TouchableWithoutFeedback
} from 'react-native'
import {
    Container
} from './styles'

export function Search () {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <Container>
                <Text>Search</Text>
            </Container>
        </TouchableWithoutFeedback>
    )
}