import React, { FC } from 'react'
import { Text, View } from 'react-native'

interface Props {
  item: string
  index: number
}

const Item: FC<Props> = ({ item }) => {
  return (
    <View>
      <Text>{item}</Text>
    </View>
  )
}

export default Item
