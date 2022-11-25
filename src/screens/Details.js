import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { FlatList } from 'react-native'
import tw from 'twrnc'
import { COLORS } from '../../constants'
import { ETHPrice } from '../components/SubInfo'

const Details = ({ route, navigation }) => {
  const { item } = route.params
  console.log(item)

  return (
    <SafeAreaView style={tw`bg-[${COLORS.secondary}] h-full w-full`}>
      <View style={tw`flex flex-row p-3 justify-between`}>
        <Image
          style={tw`w-45 h-45 rounded-sm`}
          source={item.image}
        />
        <View style={tw`flex flex-1 ml-3 justify-between`}>
          <View>
            <Text style={tw`text-xl text-[${COLORS.white}]`}>{item.name}</Text>
            <Text style={tw`text-[${COLORS.primary}]`}>{item.creator}</Text>
          </View>
          <View>
            <ETHPrice price={item.price} color={COLORS.white}/>
          </View>
        </View>
      </View>
      <View style={tw`p-3`}>
        <Text style={tw`text-white`}>{item.description}</Text>
        <Text style={tw`text-[${COLORS.white}] text-lg mt-9 mb-3`}>Previous Bids</Text>
        <FlatList 
          data={item.bids}
          renderItem={({item}) => <Bid item={item}/>}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

const Bid = ({ item }) =>  (
  <View style={tw`flex w-1/3 items-center`}>
    <Image 
      source={item.image}
    />
    <Text style={tw`text-white mt-3`}>{item.name}</Text>
  </View>
)

export default Details