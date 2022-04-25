import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from '../navigators/MainNavigator'

const App = () => {
  return (
      <NavigationContainer>
          <MainNavigator />
      </NavigationContainer>
  )
}

export default App
