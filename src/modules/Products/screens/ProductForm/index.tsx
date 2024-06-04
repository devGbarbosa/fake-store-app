import React, { FC, useState } from 'react'
import {
  Button,
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from 'react-native'
import Container from '../../../../Layout/Container'
import Typography from '../../../../Layout/Typography'
import { ProductBody } from '../../types'
import { useStoreData } from '../useStoreData'

interface Props {}

const ProductForm: FC<Props> = () => {
  const { submitProduct, product } = useStoreData()

  const [values, setValues] = useState<ProductBody>({
    id: '',
    title: '',
    category: '',
    image: '',
    price: '',
    description: '',
  })

  const handleChange = (value: string, field: keyof ProductBody) => {
    setValues({ ...values, [field]: value })
  }

  return (
    <Container flex={1} justifyContent={'center'} alignItems={'center'}>
      <Container
        minHeight={80}
        maxHeight={200}
        justifyContent={'space-between'}
      >
        <Container
          borderWidth={1}
          width={300}
          py={2}
          px={2}
          borderColor={'gray'}
        >
          <TextInput
            onChangeText={(value) => handleChange(value, 'title')}
            testID="TitleInput"
            placeholder="Name"
            value={values.title}
          />
        </Container>

        <Container
          borderWidth={1}
          width={300}
          py={2}
          px={2}
          borderColor={'gray'}
        >
          <TextInput
            testID="PriceInput"
            placeholder="Price $"
            value={values.price}
            onChangeText={(value) => handleChange(value, 'price')}
          />
        </Container>

        <Container>
          <Button
            title="add"
            testID="SubmitButton"
            onPress={() => submitProduct(values)}
          />
        </Container>
      </Container>


      <Container>
        <Typography testID='TitleProduct'>{product.title}</Typography>
      </Container>
    </Container>
  )
}

export default ProductForm
