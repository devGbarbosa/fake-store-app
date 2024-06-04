import React from 'react'
import { render } from '@testing-library/react-native'
import ContentSection from '../components/ContentSection'

describe('ProductDetails', () => {
  test('should show a product title on content section', async () => {
    const { getByText } = render(
      <ContentSection
        productInfo={{
          id: '1',
          title: 'FakeProduct',
          category: 'Test',
          image: 'Test',
          price: 'Test',
          description: 'Test',
        }}
      />,
    )

    const titleLabel = getByText('FakeProduct')

    expect(titleLabel.props.children).toBeTruthy()
  })
})
