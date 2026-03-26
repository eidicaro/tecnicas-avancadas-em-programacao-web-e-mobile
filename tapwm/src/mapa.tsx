import { View, Text, TouchableOpacity } from 'react-native';

export default function Mapa({ navigation }) {
  return (
    <View>
      <Text>Tela de Mapa</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}