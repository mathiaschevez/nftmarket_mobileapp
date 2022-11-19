import React from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native'
import tw from 'twrnc'

import { COLORS, NFTData } from '../../constants'
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'

const Home = () => {
  return (
    <SafeAreaView style={tw`flex flex-1`}>
      <FocusedStatusBar background={COLORS.primary}/>
      <View style={tw`flex flex-1 z-10`}>
        <FlatList
          data={NFTData}
          renderItem={({item}) => <NFTCard item={item}/>} 
          // ^^^^^ needs to be deconstructed twice. Example - {item: item: {name: 'name'}}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader/>}
        />
      </View>
      <View style={tw`absolute top-0 bottom-0 right-0 left-0`}>
        <View style={tw`flex h-[300px] bg-[${COLORS.primary}]`}/>
        <View style={tw`flex flex-1 bg-[${COLORS.white}]`}/>
      </View>
    </SafeAreaView>
  )
}

export default Home