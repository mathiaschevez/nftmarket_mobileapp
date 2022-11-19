import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'

import { COLORS, SIZES, SHADOWS, assets } from '../../constants'
import { CircleButton, RectButton } from './Button'

const NFTCard = ({ item }) => {

  return (
    <View style={tw`rounded-lg shadow-xl m-3`}>
      <View style={tw`w-full h-[250px]`}>
        <Image 
          source={item.image}
          resizeMode='cover'
          style={tw`w-full h-full rounded-t-lg`}
        />
        <CircleButton imgURL={assets.heart} right={10} top={10} />
      </View>
      <Text style={tw`bg-[${COLORS.white}] text-[${COLORS.primary} py-6 px-3]`}>{item.name}</Text>
    </View>
  )
}

export default NFTCard