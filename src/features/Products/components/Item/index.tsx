import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ProductBody } from '../../types'

interface Props {
  item: ProductBody
  index: number
  viewProduct: (id: string) => void
}

const Item: FC<Props> = ({ item, viewProduct }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => viewProduct(item.id)}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Item
