import { NavigationContainer } from '@react-navigation/native';
import App from 'App';
import AppRoutes from './app.routes';

export const Routes = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};
export default Routes;
