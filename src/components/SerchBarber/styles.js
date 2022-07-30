import styled from "styled-components/native"
import { RFValue } from 'react-native-responsive-fontsize'

export const InputArea = styled.View`
    width: 100%;
    height: ${RFValue(150)}px;
    background-color: #28232B;
    flex-direction: column;
    /* position: fixed; */
    /* top: 0; */
    border-radius: 30px;
    /* padding-left: ${RFValue(15)}px; */
    align-items: center;
    margin-bottom: ${RFValue(15)}px;
`

export const InputSvg = styled.View`
    width: 100%;
    height: ${RFValue(50)}px;
    background-color:rgba(222,184,135,0.5);
    flex-direction: row;
    /* justify-items: flex-start; */
    border: 1px solid #28232B ;
    border-radius: 30px;
    padding-left: ${RFValue(15)}px;
    padding-right: ${RFValue(15)}px;
    align-items: center;
    margin-bottom: ${RFValue(20)}px;
    margin-right: ${RFValue(15)}px;
    margin-left: ${RFValue(15)}px;
`

export const ContentTitle = styled.View`
    /* background-color: blue; */
    align-items: center;
    justify-content: center;
    flex: 1;
`

export const Title = styled.Text`
    color: white;
    font-size: ${RFValue(22)}px;
    /* flex: 1; */
`

export const Input = styled.TextInput`
    flex: 1;
    font-size: ${RFValue(16)}px;
    /* color: #877F7D; */
    /* margin-left: ${RFValue(10)}px; */
    /* margin-right: ${RFValue(25)}px; */
` 