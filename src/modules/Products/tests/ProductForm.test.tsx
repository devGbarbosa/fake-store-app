import { fireEvent, render, waitFor } from '@testing-library/react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../../../reduxStore'
import { ProductForm } from '../screens'

describe('ProductForm', () => {
  test('should show a submited product title', async () => {
    const { getByTestId, queryByTestId } = render(
      <Provider store={store}>
        <ProductForm />
      </Provider>,
    )

    const titleTextInput = getByTestId('TitleInput')
    fireEvent.changeText(titleTextInput, 'New Product')

    const button = getByTestId('SubmitButton')
    fireEvent.press(button)

    await waitFor(() => expect(queryByTestId('TitleProduct')).toBeTruthy())

    expect(getByTestId('TitleProduct').props.children).toBe('New Product')
  })
})
