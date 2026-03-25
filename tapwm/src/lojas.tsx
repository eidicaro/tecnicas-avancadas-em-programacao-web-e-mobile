import { View, Text, TouchableOpacity } from 'react-native';

export default function Lojas({ navigation }) {
  return (
    <View>
      <Text>Tela de Lojas</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}