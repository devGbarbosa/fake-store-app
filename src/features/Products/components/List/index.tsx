import React, { FC } from 'react'
import { FlatList, View } from 'react-native'
import { ProductBody } from '../../types'
import EmptyPlaceholder from '../EmptyPlaceholder'
import Item from '../Item'

interface Props {
  savedProducts: ProductBody[]
}

const List: FC<Props> = ({ savedProducts }) => {
  const keyExtractor = (item: ProductBody, index: number) =>
    `${item.category}+${index}`

  return (
    <FlatList
      data={savedProducts}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      renderItem={Item}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => <View style={{ marginVertical: 8 }} />}
      ListEmptyComponent={EmptyPlaceholder}
    />
  )
}

export default List
