import React, { FC } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ProductBody } from '../../types'
import Card from '../Card'

interface Props {
  item: ProductBody
  index: number
  viewProduct: (id: string) => void
}

const Item: FC<Props> = ({ item, viewProduct }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => viewProduct(item.id)}>
        <Card productProps={item} />
      </TouchableOpacity>
    </View>
  )
}

export default Item
