import React from "react"

import { db } from "../../../../firebase"

import {
    Keyboard,
    Text,
    TouchableWithoutFeedback
} from 'react-native'

import {
    Container,
    Header,
    Title,
    SearchButton,
    SearchIcon,
    Location,
    LocationInput,
    LocationButton,
    LocationIcon,
    Scroll
} from './styles'

// import SearchIcon from '../../../assets/search.svg'
// import LocationIcon from '../../../assets/my_location.svg'

export function Home () {
    const docRef = db.collection('users').doc('alovelace');

    (async () => {
        await docRef.set({
            first: 'Ada',
            last: 'Lovelace',
            born: 1815
          });
    })();

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <Container>

                {/* //Header */}
                {/* //Title */}
                {/* //SearchButton */}
                {/* //SearchIcon */}

                {/* //Location */}
                {/* //LocationInput */}
                {/* //LocationButton */}
                {/* //LocationIcon */}

                {/* //Scroll */}

            </Container>
        </TouchableWithoutFeedback>
    )
}