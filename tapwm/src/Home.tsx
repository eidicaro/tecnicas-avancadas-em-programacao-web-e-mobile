import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './StyleHome';
import { useState } from 'react';

export default function Home(){

    const [mensagem, setMensagem] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");

    const abrir = () => {
        setMensagem("Cadastro concluído com sucesso!");
    }

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Seja Bem Vindo ao Shopping fontèè</Text>

            <TouchableOpacity style={styles.botao} onPress={abrir}>
                <Text style={styles.textoBotao}>Lojas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={abrir}>
                <Text style={styles.textoBotao}>Restaurantes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={abrir}>
                <Text style={styles.textoBotao}>Cinema</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={abrir}>
                <Text style={styles.textoBotao}>Promoções</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={abrir}>
                <Text style={styles.textoBotao}>Mapa do Shopping</Text>
            </TouchableOpacity>

        </View>
    )
}