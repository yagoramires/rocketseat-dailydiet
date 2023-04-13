import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';

import theme from '@theme/index';
import Routes from '@routes/index';
import Loading from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Loading />}
      <StatusBar
        backgroundColor='transparent'
        barStyle='dark-content'
        translucent
      />
    </ThemeProvider>
  );
}
