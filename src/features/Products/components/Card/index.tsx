import React, { FC } from 'react'
import { Text, Image } from 'react-native'
import Container from '../../../../Layout/Container'
import { ProductBody } from '../../types'

interface Props {
  productProps: ProductBody
}

const Card: FC<Props> = ({
  productProps: { image, title, category, price },
}) => {
  return (
    <Container
      testID={'CardComponent'}
      justifyContent={'space-around'}
      alignItems={'center'}
      borderWidth={1}
      borderColor={'gray'}
      width={300}
      height={250}
      bg={'white'}
    >
      <Image style={{ width: 100, height: 100 }} source={{ uri: image }} />

      <Container alignItems={'center'}>
        <Text testID={'TitleLabel'}>{title}</Text>
        <Text testID={'CategoryLabel'}>{category}</Text>
        <Text testID={'PriceLabel'}>$ {price}</Text>
      </Container>
    </Container>
  )
}

export default Card
