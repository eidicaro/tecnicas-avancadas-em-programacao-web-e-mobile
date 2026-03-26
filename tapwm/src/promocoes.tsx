import { View, Text, TouchableOpacity } from 'react-native';

export default function Promocoes({ navigation }) {
  return (
    <View>
      <Text>Tela de Promoções</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}