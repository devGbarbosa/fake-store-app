import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfileInformation } from './screens'

const { Navigator, Screen } = createNativeStackNavigator()

const ProfileNavigator: FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="ProfileInformation" component={ProfileInformation} />
    </Navigator>
  )
}

export default ProfileNavigator
