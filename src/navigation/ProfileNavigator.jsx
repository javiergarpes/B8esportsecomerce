import {  } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
      initialRouteName="Orders"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  )
}

export default ProfileNavigator
