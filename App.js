import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

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

  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
        <Screen name='Home' component={Home}/>
        <Screen name='Details' component={Details}/>
      </Navigator>
    </NavigationContainer>
  );
}

export default App