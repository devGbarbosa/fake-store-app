import React, { FC, useState } from 'react'
import { TextInput } from 'react-native'
import { AuthInfo } from '../..'
import Container from '../../../../../Layout/Container'

interface Props {
  value: string
  onChangeText: (text: string, field: keyof AuthInfo) => void
}

const CredentialInput: FC<Props> = ({ onChangeText, value }) => {
  return (
    <Container borderWidth={1} width={'80%'} py={2} px={2}>
      <TextInput placeholder="Credential" value={value} onChangeText={(text) => onChangeText(text, 'credential')} />
    </Container>
  )
}

export { CredentialInput }
