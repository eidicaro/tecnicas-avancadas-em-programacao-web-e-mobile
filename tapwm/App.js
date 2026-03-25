import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home';
import Lojas from './src/lojas';
import Restaurantes from './src/restaurantes';
import Cinema from './src/cinema';

export default function App() {
  return (
    <Home/>
    <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="lojas" component={Lojas} />
      <Stack.Screen name="restaurantes" component={Restaurantes} />
      <Stack.Screen name="cinema" component={Cinema} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
