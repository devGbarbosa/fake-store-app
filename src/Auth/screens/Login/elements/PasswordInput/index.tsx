import React, { FC } from 'react'
import { TextInput } from 'react-native'
import { AuthInfo } from '../..'
import Container from '../../../../../Layout/Container'

interface Props {
  value: string
  onChangeText: (text: string, field: keyof AuthInfo) => void
}

const PasswordInput: FC<Props> = ({ onChangeText, value }) => {
  return (
    <Container borderWidth={1} width={'80%'} py={2} px={2}>
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={value}
        onChangeText={(text) => onChangeText(text, 'password')}
      />
    </Container>
  )
}

export { PasswordInput }
