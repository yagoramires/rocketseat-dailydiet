import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import New from '@screens/New';
import Stats from '@screens/Stats';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='stats' component={Stats} />
      <Screen name='new' component={New} />
      <Screen name='done' component={Home} />
      <Screen name='meal' component={Home} />
      <Screen name='edit ' component={Home} />
    </Navigator>
  );
};

export default AppRoutes;
