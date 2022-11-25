import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, NavigationContainer, useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import { HomeHeader } from './src/components';
import { Text } from 'react-native';
import DetailHeader from './src/components/headers/DetailHeader';
import { COLORS } from './constants';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import tw from 'twrnc'

const Stack = createStackNavigator();
const { Screen, Navigator } = Stack

const theme = {
  ...DefaultTheme,
  background: 'transparent',
}

const App = () => {
  const [loaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
  })

  if(!loaded) return null

  const PreviousScreenButton = ({ onPress }) => {
    return (
      <TouchableOpacity 
        onPress={onPress}
        style={tw`w-10 h-10 items-center justify-center`}
      >
        <Icon 
          name='arrow-back'
          color={COLORS.white}
        />
      </TouchableOpacity>
    )
  }

  return (
    <NavigationContainer>
      <Navigator initialRouteName='Home'>
        <Screen 
          name='Home' 
          component={Home}
          options={{
            headerShown: true,
            headerTitle: () => <HomeHeader />,
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerShadowVisible: false,
          }}
        />
        <Screen 
          name='Details' 
          component={Details}
          options={({navigation}) => ({
            headerShown: true,
            headerTitle: () => <DetailHeader />,
            headerStyle: {
              backgroundColor: `${COLORS.primary}`,
            },
            headerShadowVisible: false,
            headerLeft: () => <PreviousScreenButton navigation={navigation} onPress={() => navigation.goBack()}/>
          })}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default App