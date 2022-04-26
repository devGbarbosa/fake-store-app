import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { ProductBody } from '../../types'

interface Props {
  item: ProductBody
  index: number
}

const Item: FC<Props> = ({ item }) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  )
}

export default Item
