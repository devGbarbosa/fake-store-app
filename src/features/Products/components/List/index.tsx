import React, { FC } from 'react'
import { FlatList, View } from 'react-native'
import EmptyPlaceholder from '../EmptyPlaceholder'
import Item from '../Item'

interface Props {
  savedProducts: string[]
}

const List: FC<Props> = ({ savedProducts }) => {
  const keyExtractor = (item: string, index: number) => `${item}+${index}`

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
