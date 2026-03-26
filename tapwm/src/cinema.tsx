import { View, Text, TouchableOpacity } from 'react-native';

export default function Cinema({ navigation }) {
  return (
    <View>
      <Text>Tela de Cinema</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}