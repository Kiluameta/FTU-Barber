import React from "react"
import { InputArea, Input } from './styles'

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return(
        <InputArea>
            <IconSvg width="24" heigth="24" fill="#28232B" />
            <Input 
                placeholder={placeholder} 
                placeholderTextColor="#28232B" 
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    )
}