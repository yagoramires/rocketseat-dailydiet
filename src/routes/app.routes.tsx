import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='stats' component={Home} />
      <Screen name='new' component={Home} />
      <Screen name='done' component={Home} />
      <Screen name='meal' component={Home} />
      <Screen name='edit ' component={Home} />
    </Navigator>
  );
};

export default AppRoutes;
