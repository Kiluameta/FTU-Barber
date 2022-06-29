import React from "react"
import {
    Keyboard,
    Text,
    TouchableWithoutFeedback
} from 'react-native'
import {
    Container
} from './styles'

export function Profile () {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <Container>
                <Text>Profile</Text>
            </Container>
        </TouchableWithoutFeedback>
    )
}