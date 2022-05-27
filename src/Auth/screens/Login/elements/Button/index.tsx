import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import Container from '../../../../../Layout/Container'
import Typography from '../../../../../Layout/Typography'

interface Props {}

const Button: FC<Props> = () => {
  return (
    <Container width={'80%'} alignItems={'center'}>
      <TouchableOpacity>
        <Typography>Sign In</Typography>
      </TouchableOpacity>
    </Container>
  )
}

export { Button }
