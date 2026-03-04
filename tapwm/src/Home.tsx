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

            <Text style={styles.titulo}>Cadastro</Text>
            <Image 
                source={require('../assets/pessoa.svg')} style={styles.img}/>
            <TextInput 
                placeholder="Nome" placeholderTextColor="#888" value={nome} onChangeText={setNome} style={styles.input}
            />
            <TextInput 
                placeholder="Email" placeholderTextColor="#888" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address"
            />
            <TextInput 
                placeholder="Telefone" placeholderTextColor="#888" value={telefone} onChangeText={setTelefone} style={styles.input}

            />
            <TextInput 
                placeholder="Senha" placeholderTextColor="#888" value={senha} onChangeText={setSenha} style={styles.input}
            />

            <TouchableOpacity style={styles.botao} onPress={abrir}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>

            {mensagem !== "" && (
                <Text style={styles.msg}>{mensagem}</Text>
            )}

        </View>
    )
}