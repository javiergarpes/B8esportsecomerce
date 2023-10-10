import { View, Text } from 'react-native'
import React from 'react'

const Location = () => {
    const [location, setLocation] = useState({latitude: '', longitude: ''});
  return (
    <View>
      <Text>My adress</Text>
      {location ? <View></View>: <View></View>}
    </View>
  )
}

export default Location