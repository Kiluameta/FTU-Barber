import styled from "styled-components/native"
import { RFValue } from 'react-native-responsive-fontsize'

export const InputArea = styled.View`
    width: 100%;
    height: ${RFValue(50)}px;
    background-color: rgba(0,0,0,0.8);
    flex-direction: row;
    border-radius: 30px;
    padding-left: ${RFValue(15)}px;
    align-items: center;
    margin-bottom: ${RFValue(15)}px;
`