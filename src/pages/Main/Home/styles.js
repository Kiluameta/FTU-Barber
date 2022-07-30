import React from "react"
import styled from "styled-components/native"
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.KeyboardAvoidingView`
    background-color: #171618;
    flex: 1;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`

export const Header = styled.View`
    /* background-color: red; */
    /* justify-self: end; */
    /* align-self: flex-start; */
    /* position: fixed;
    top: 0; */
    margin-top: ${RFValue(80)}px;
    padding: ${RFValue(40)}px;
`