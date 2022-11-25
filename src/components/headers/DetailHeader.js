import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const DetailHeader = ({route, navigation}) => {
  return (
    <View style={tw`px-3 py-1`}>
      <Text style={tw`text-white text-center text-lg`}>
       Details
      </Text>
    </View>
  )
}

export default DetailHeader