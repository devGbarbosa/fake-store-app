import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator, { TabNavigatorParamList } from './TabNavigator'
import AuthNavigator, { AuthNavigatorParamList } from '../Auth/AuthNavigator'
import { useStoreData as useAuthStoreData } from '../Auth/screens/useStoreData'

export type MainNavigatorParamList = {
  AuthNavigator: AuthNavigatorParamList
  TabNavigator: TabNavigatorParamList
}

const { Navigator, Screen } =
  createNativeStackNavigator<MainNavigatorParamList>()

const MainNavigator: FC = () => {
  const { userToken } = useAuthStoreData()

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {!userToken ? (
        <Screen name="AuthNavigator" component={AuthNavigator} />
      ) : (
        <Screen name="TabNavigator" component={TabNavigator} />
      )}
    </Navigator>
  )
}

export default MainNavigator
