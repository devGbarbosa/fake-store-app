import React, { FC, useState } from 'react'
import Container from '../../../Layout/Container'
import Typography from '../../../Layout/Typography'
import { Button } from './elements/Button'
import { CredentialInput } from './elements/CredentialInput'
import { PasswordInput } from './elements/PasswordInput'

export interface AuthInfo {
  credential: string
  password: string
}

const Login: FC = () => {
  const [authInfo, setAuthInfo] = useState<AuthInfo>({
    credential: '',
    password: '',
  })

  const handleChange = (text: string, field: keyof AuthInfo) => {
    setAuthInfo({ ...authInfo, [field]: text })
  }

  return (
    <Container flex={1} justifyContent={'center'} alignItems={'center'}>
      <Typography>Fake Store App</Typography>

      <Container
        mt={4}
        width={'90%'}
        alignItems={'center'}
        height={'15%'}
        justifyContent={'space-between'}
      >
        <CredentialInput
          value={authInfo.credential}
          onChangeText={handleChange}
        />

        <PasswordInput
          value={authInfo.password}
          onChangeText={handleChange}
        />

        <Button />
      </Container>
    </Container>
  )
}

export default Login
