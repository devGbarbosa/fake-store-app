import React, { FC, useEffect } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../hooks'
import { saveProducts } from '../store/actions/products'
import { ProductState } from '../store/reducers/products'

export const Home: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(saveProducts(['Bag', 'Pencil', 'Eraser', 'Ball']))
  }, [])

  const { products } = useAppSelector<ProductState>((state) => state.products)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <View style={{ marginTop: 16 }}>
          <Text style={{fontSize: 24  }}>List of products</Text>
        </View>
        <FlatList
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          data={products}
          renderItem={({ item }) => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}
