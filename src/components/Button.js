import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../../constants'
import tw from 'twrnc'

export const CircleButton = ({ imgUrl, handlePress, ...props}) => {
  const styles = {
    circleButton: tw`w-[40[px] h-[40px] rounded-full bg-[${COLORS.white}] absolute items-center justify-center shadow-lg shadow-white right-[${props.right}px] top-[${props.top}px]`,
  }

  return (
    <TouchableOpacity
      style={styles.circleButton}
      handlePress={(handlePress)}
    >
      <Image 
        source={imgUrl}
        resizeMode='contain'
        style={tw`w-[24px] h-[24px]`}
      />
    </TouchableOpacity>
  )
}

export const RectButton = ({ minWidth, fontSize, handlePress }) => {
  const styles={
    rectButton: tw`rounded-full bg-[${COLORS.primary}] min-w-[${minWidth}px] p-[${SIZES.small}]`
  }

  return (
    <TouchableOpacity
      style={styles.rectButton}
      onPress={handlePress}
    >
      <Text style={tw`font-[${FONTS.semiBold}] text-[${fontSize}px] text-[${COLORS.white}] text-center`}>
        Place a bid
      </Text>
    </TouchableOpacity>
  )
}

