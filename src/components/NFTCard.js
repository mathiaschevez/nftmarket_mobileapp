import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'

import { COLORS, SIZES, SHADOWS, assets } from '../../constants'
import { CircleButton, RectButton } from './Button'
import { ETHPrice, NFTTitle, SubInfo } from './SubInfo'

const NFTCard = ({ item }) => {
  const navigation = useNavigation()

  return (
    <View style={tw`rounded-lg shadow-xl m-3 bg-white`}>
      <View style={tw`w-full h-[250px]`}>
        <Image 
          source={item.image}
          resizeMode='cover'
          style={tw`w-full h-full rounded-t-lg`}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={tw`w-full p-[${SIZES.font}px]`}>
        <NFTTitle 
          title={item.name}
          subtitle={item.creator}
          titleSize={SIZES.large}
          subtitleSize={SIZES.small}
        />
        <View style={tw`mt-[${SIZES.font}] flex flex-row justify-between items-center`}>
          <ETHPrice price={item.price}/>
          <RectButton 
            minWidth={120} 
            fontSize={SIZES.font} 
            handlePress={() => navigation.navigate('Details', {item})}
          />
        </View>
      </View>
    </View>
  )
}

export default NFTCard