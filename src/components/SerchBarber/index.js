import React from "react"
import { InputArea, Input, Title, InputSvg, ContentTitle } from './styles'

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return(
        <InputArea>
            <ContentTitle>
                <Title>Realize seu Corte</Title>
            </ContentTitle>
            <InputSvg>
                <Input 
                    placeholder={placeholder} 
                    placeholderTextColor="#28232B" 
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={password}
                />
                <IconSvg width="24" heigth="24" fill="#28232B" />
            </InputSvg>
        </InputArea>
    )
}