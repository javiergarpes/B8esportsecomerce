import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetOrdersQuery } from '../../services/shopApi'

const Orders = () => {
  const [data,isLoading]= useGetOrdersQuery()
  return (
    <View>
      {!isLoading && (
     <FlatList
     data={data}
     renderItem={({item})=> <Text>{item}</Text>}
     key={item=>item}
      />
      )}
    </View>
  )
}

export default Orders