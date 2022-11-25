import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../../constants'

let persons = [assets.person01, assets.person02, assets.person03]

export const NFTTitle = ({ title, subtitle, titleSize, subtitleSize }) => {
  return (
    <View>
      <Text style={tw`font-[${FONTS.semiBold}] text-[${titleSize}px] text-[${COLORS.primary}]`}>{title}</Text>
      <Text style={tw`font-[${FONTS.regular}] text-[${subtitleSize}px] text-[${COLORS.primary}]`}>{subtitle}</Text>
    </View>
  )
}

export const ETHPrice = ({ price, color }) => {
  return (
    <View style={tw`flex flex-row items-center`}>
      <Image 
        source={assets.eth}
        resizeMode='contain'
        style={tw`w-[20px] h-[20px] mr-[2px]`}
      />
      <Text style={tw`font-[${FONTS.medium}] text-[${SIZES.font}px] text-[${color}]`}>
        {price}
      </Text>
    </View>
  )
}

export const ImageCmp = ({ imgUrl, i}) => {
  return (
    <Image 
      source={imgUrl}
      resizeMode='contain'
      style={tw`w-[48px] h-[48px] ml-[${i === 0 ? 0 : -SIZES.font}]`}
    />
  )
}

export const People = () => {
  return (
    <View style={tw`flex flex-row`}>
      {persons.map((imgUrl, i) => (
        <ImageCmp 
          key={i} 
          i={i} 
          imgUrl={imgUrl}
        />
      ))}
    </View>
  )
}

export const EndDate = () => {
  return (
    <View 
      style={tw`px-[${SIZES.font}] py-[${SIZES.base}] bg-[${COLORS.white}] justify-center items-center shadow-xl elevation-1 max-w-1/2`}
    >
      <Text style={tw`font-[${FONTS.regular}] text-[${SIZES.small}px] color-[${COLORS.primary}]`}>
        Ending in
      </Text>
      <Text style={tw`font-[${FONTS.semiBold}] text-[${SIZES.medium}px] color-[${COLORS.primary}]`}>
        12h 30m
      </Text>
    </View>
  )
}

export const SubInfo = () => {
  return (
    <View style={tw`w-full px-[${SIZES.font}] -mt-[${SIZES.extraLarge}] flex flex-row justify-between`}>
      <People />
      <EndDate />
    </View>
  )
}