import { render } from '@testing-library/react-native'
import React from 'react'
import Card from '../components/Card'

describe('ProductList', () => {
  test("should show a product's title on card", async () => {
    const { getByTestId } = render(
      <Card
        productProps={{
          id: '1',
          title: 'Test',
          category: 'Test',
          image: 'Test',
          price: 'Test',
          description: 'Test',
        }}
      />,
    )

    const titleLabel = getByTestId('TitleLabel')
    const priceLabel = getByTestId('PriceLabel')
    const categoryLabel = getByTestId('CategoryLabel')

    expect(titleLabel.props.children).toBe('Test')
    expect(categoryLabel.props.children).toBe('Test')
    expect(priceLabel.props.children).toStrictEqual(['$ ', 'Test'])
  })
})
