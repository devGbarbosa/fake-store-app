import React, { FC } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Container from '../../../../Layout/Container'
import { ProductBody } from '../../types'
import Card from '../Card'

interface Props {
  item: ProductBody
  index: number
  viewProduct: (id: string) => void
}

const Item: FC<Props> = ({ item, viewProduct }) => {
  return (
    <Container justifyContent={'center'} alignItems={'center'}>
      <TouchableOpacity onPress={() => viewProduct(item.id)}>
        <Card productProps={item} />
      </TouchableOpacity>
    </Container>
  )
}

export default Item
