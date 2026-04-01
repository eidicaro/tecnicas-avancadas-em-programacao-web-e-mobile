import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home';
import Lojas from './src/lojas';
import Restaurantes from './src/restaurantes';
import Cinema from './src/cinema';
import Promocoes from './src/promocoes';
import Mapa from './src/mapa';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator   screenOptions={{
        headerStyle: {
          backgroundColor: '#70071F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Lojas" component={Lojas} />
      <Stack.Screen name="Restaurantes" component={Restaurantes} />
      <Stack.Screen name="Cinema" component={Cinema} />
      <Stack.Screen name="Promocoes" component={Promocoes} />
      <Stack.Screen name="Mapa" component={Mapa} />

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
