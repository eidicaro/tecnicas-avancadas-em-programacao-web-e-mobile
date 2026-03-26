import { View, Text, TouchableOpacity } from 'react-native';

export default function Restaurantes({ navigation }) {
  return (
    <View>
      <Text>Tela de Restaurantes</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}