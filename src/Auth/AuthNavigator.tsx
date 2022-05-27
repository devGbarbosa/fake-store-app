import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from './screens'

export type AuthNavigatorParamList = {
  Login: undefined
}

const { Navigator, Screen } =
  createNativeStackNavigator<AuthNavigatorParamList>()

const AuthNavigator: FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
    </Navigator>
  )
}

export default AuthNavigator
