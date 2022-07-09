import styled from "styled-components/native"
import { RFValue } from 'react-native-responsive-fontsize'

export const InputArea = styled.View`
    width: 100%;
    height: ${RFValue(50)}px;
    background-color: rgba(222,184,135,0.5);
    flex-direction: row;
    border-radius: 30px;
    padding-left: ${RFValue(15)}px;
    padding-right: ${RFValue(15)}px;
    align-items: center;
    margin-bottom: ${RFValue(15)}px;
`

export const Input = styled.TextInput`
    flex: 1;
    font-size: ${RFValue(16)}px;
    color: #28232B;
    margin-left: ${RFValue(10)}px;
` 