import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { COLORS } from '../../../constants'

const HomeHeader = () => {
  return (
    <View style={tw`px-3 py-1`}>
      <Text style={tw`text-[${COLORS.white}] text-center text-lg`}>
        Welcome to the NFT Marketplace
      </Text>
    </View>
  )
}

export default HomeHeader