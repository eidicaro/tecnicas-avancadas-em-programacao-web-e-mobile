import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './StyleHome';

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = (operacao: string) => {
    const n1 = Number(numero1);
    const n2 = Number(numero2);

    if (numero1 === '' || numero2 === '') {
      setResultado('Digite os dois números');
      return;
    }

    let resultadoCalculado = 0;

    switch (operacao) {
      case '+':
        resultadoCalculado = n1 + n2;
        break;

      case '-':
        resultadoCalculado = n1 - n2;
        break;

      case '*':
        resultadoCalculado = n1 * n2;
        break;

      case '/':
        if (n2 === 0) {
          setResultado('Não é possível dividir por zero');
          return;
        }

        resultadoCalculado = n1 / n2;
        break;
    }

    setResultado(String(resultadoCalculado));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />

      <View style={styles.botoes}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => calcular('+')}
        >
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => calcular('-')}
        >
          <Text style={styles.textoBotao}>−</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => calcular('*')}
        >
          <Text style={styles.textoBotao}>×</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => calcular('/')}
        >
          <Text style={styles.textoBotao}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultadoContainer}>
        <Text style={styles.resultadoTitulo}>Resultado:</Text>
        <Text style={styles.resultado}>{resultado || '---'}</Text>
      </View>
    </View>
  );
}