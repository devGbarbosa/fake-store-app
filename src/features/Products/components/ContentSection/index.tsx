import React, { FC } from 'react'
import { Image } from 'react-native'
import Container from '../../../../Layout/Container'
import Typography from '../../../../Layout/Typography'
import { ProductBody } from '../../types'

interface Props {
  productInfo: ProductBody
}

const ContentSection: FC<Props> = ({
  productInfo: { title, image, description, price, category },
}) => {
  return (
    <Container
      justifyContent={'space-between'}
      alignItems={'center'}
      height={500}
      maxWidth={360}
    >
      <Container alignItems={'center'}>
        <Image
          style={{ width: 300, height: 300, borderRadius: 200 }}
          source={{ uri: image }}
        />

        <Container alignItems={'center'} mt={2}>
          <Typography fontWeight={'bold'} fontSize={16}>
            {title}
          </Typography>
          <Typography fontSize={14}>{category}</Typography>
          <Container mt={2}>
            <Typography fontWeight={'bold'} textAlign={'center'}>
              $ {price}
            </Typography>
          </Container>
        </Container>
      </Container>

      <Container alignItems={'center'}>
        <Typography textAlign={'center'}>{description}</Typography>
      </Container>
    </Container>
  )
}

export default ContentSection
