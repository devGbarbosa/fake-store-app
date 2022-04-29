import React, { FC } from 'react'
import Container from '../../../../Layout/Container'
import Typography from '../../../../Layout/Typography'
import { ProductBody } from '../../../Products/types'

interface Props {
  item: ProductBody
  index: number
  viewProduct: (id: string) => void
}

const Item: FC<Props> = ({ item, viewProduct }) => {
  return (
    <Container justifyContent={'center'} alignItems={'center'}>
      <Container
        width={340}
        height={40}
        padding={12}
        alignItems={'center'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        bg={'white'}
      >
        <Typography>{item.title}</Typography>
        <Typography>{item.price}</Typography>
      </Container>
    </Container>
  )
}

export default Item
