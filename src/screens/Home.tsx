import React, { FC, useEffect } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../hooks'
import { saveProducts } from '../store/actions/products'

export const Home: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(saveProducts(['Bag', 'Pencil', 'Eraser', 'Ball']))
  }, [])

  const products = useAppSelector(state => state.products.products)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text>Hello world!</Text>

        <FlatList
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
