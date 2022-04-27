import React, { FC } from 'react'
import { FlatList, View } from 'react-native'
import { ProductBody } from '../../types'
import EmptyPlaceholder from '../EmptyPlaceholder'
import Item from '../Item'

interface Props {
  savedProducts: ProductBody[]
  viewProduct: (id: string) => void
}

const List: FC<Props> = ({ savedProducts, viewProduct }) => {
  const keyExtractor = (item: ProductBody, index: number) =>
    `${item.category}+${index}`

  return (
    <FlatList
      data={savedProducts}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      renderItem={({item, index}) => <Item item={item} index={index} viewProduct={viewProduct} />}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => <View style={{ marginVertical: 8 }} />}
      ListEmptyComponent={EmptyPlaceholder}
    />
  )
}

export default List
