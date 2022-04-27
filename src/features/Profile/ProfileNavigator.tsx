import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfileInformation } from './screens'

export type ProfileNavigatorParamList = {
  ProfileInformation: undefined
}

const { Navigator, Screen } =
  createNativeStackNavigator<ProfileNavigatorParamList>()

const ProfileNavigator: FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="ProfileInformation" component={ProfileInformation} />
    </Navigator>
  )
}

export default ProfileNavigator
