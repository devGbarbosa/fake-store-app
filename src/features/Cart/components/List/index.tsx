import React, { FC } from 'react'
import { FlatList, View } from 'react-native'
import { ProductBody } from '../../../Products/types'
import EmptyPlaceholder from '../EmptyPlaceholder'
import Item from '../Item'

interface Props {
  productsOnCart: ProductBody[]
  viewProduct: (id: string) => void
}

const List: FC<Props> = ({ productsOnCart, viewProduct }) => {
  const keyExtractor = (item: ProductBody) => `${item.id}`

  return (
    <FlatList
      data={productsOnCart}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      renderItem={({ item, index }) => (
        <Item item={item} index={index} viewProduct={viewProduct} />
      )}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => <View style={{ marginVertical: 8 }} />}
      ListEmptyComponent={EmptyPlaceholder}
    />
  )
}

export default List
