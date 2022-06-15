import React from "react"
import styled from "styled-components/native"
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.KeyboardAvoidingView`
    background-color: #171618;
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const InputArea = styled.View`
    width: 100%;
    padding: ${RFValue(40)}px;
`

export const Button = styled.TouchableOpacity`
    height: ${RFValue(50)}px;
    background-color: #28232B;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`

export const TextButtom = styled.Text`
    font-size: ${RFValue(18)}px;
    color: #FFF;
`

export const MessageButtom = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: ${RFValue(50)}px;
    margin-bottom: ${RFValue(20)}px;
`

export const MessageTextButtom = styled.Text`
    font-size: ${RFValue(16)}px;
    color: #FFF;
`

export const MessageTextButtomBold = styled.Text`
    font-size: ${RFValue(16)}px;
    color: #FFF;
    font-weight: bold;
    margin-left: ${RFValue(5)}px;
`