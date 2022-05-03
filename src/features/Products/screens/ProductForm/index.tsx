import React, { FC } from 'react'
import { TextInput } from 'react-native'
import Container from '../../../../Layout/Container'

interface Props {}

const ProductForm: FC<Props> = () => {
  return (
    <Container flex={1} justifyContent={'center'} alignItems={'center'}>
      <Container
        minHeight={80}
        maxHeight={200}
        justifyContent={'space-between'}
      >
        <Container
          borderWidth={1}
          width={300}
          py={2}
          px={2}
          borderColor={'gray'}
        >
          <TextInput placeholder="Name" />
        </Container>

        <Container
          borderWidth={1}
          width={300}
          py={2}
          px={2}
          borderColor={'gray'}
        >
          <TextInput placeholder="Price $" />
        </Container>
      </Container>
    </Container>
  )
}

export default ProductForm
