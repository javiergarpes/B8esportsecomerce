import {Profile  } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const ProfileStack = createNativeStackNavigator()

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  )
}

export default ProfileNavigator
