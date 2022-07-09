import styled from "styled-components/native"
import { RFValue } from 'react-native-responsive-fontsize'

export const Tab = styled.View`
    height: ${RFValue(60)}px;
    background-color: black;
    flex-direction: row;
    border-top-left-radius: ${RFValue(25)}px;
    border-top-right-radius: ${RFValue(25)}px;
`

export const Content = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
` 

export const ContentCenter = styled.TouchableOpacity`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 5px solid black;
    margin-top: -20px;
`