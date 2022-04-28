import { render, waitFor } from '@testing-library/react-native'
import React from 'react'
import Card from '../components/Card'

test('should show some informations on cards', async () => {
  const { queryByTestId } = render(
    <Card
      productProps={{
        id: '1',
        title: 'Teste',
        category: 'Teste',
        image: 'Teste',
        price: 'Teste',
        description: 'Teste',
      }}
    />,
  )

  const cardExample = queryByTestId('CardComponent')

  await waitFor(() => expect(queryByTestId('CardComponent')).toBeTruthy())

  expect(cardExample).toBeTruthy()
})
