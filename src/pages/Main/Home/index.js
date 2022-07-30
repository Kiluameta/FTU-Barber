import React, { useState } from "react"
import SearchIcon from '../../../assets/search.svg'
import LocationIcon from '../../../assets/my_location.svg'

import {
    Keyboard,
    Text,
    TouchableWithoutFeedback
} from 'react-native'

import {
    Container,
    Header,
    // Title,
    // SearchButton,
    // SearchIcon,
    // Location,
    // LocationInput,
    // LocationButton,
    // LocationIcon,
    // Scroll
} from './styles'

import SerchBarber from "../../../components/SerchBarber" 

export function Home () {

    const [ pesquisa, setPesquisa] = useState('')

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <Container>

                <Header>
                    <SerchBarber
                        IconSvg={SearchIcon}
                        placeholder='Nome do Barbeiro'
                        value={pesquisa}
                        onChangeText={setPesquisa}
                    />
                </Header>
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