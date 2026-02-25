import {View, Text, Image, Button} from 'react-native';
import styles from './StyleHome';
import { useState } from 'react';

export default function Home(){
    const [mensagem, setMensagem] = useState('sua sorte de hoje é')

    const abrir = ()=> {
        const numero = Math.floor(Math.random()*10)
        const frases = [
            "tenha bom dia",
            "nobruzera apelão",
            "isack gostoso1",
            "isack gostoso2",
            "isack gostoso3",
            "isack gostoso4",
            "isack gostoso5",
            "isack gostosasso1",
            "isack gostosasso2",
            "isack gostosasso3",
        ]
        setMensagem(frases[numero])
    }

    return(

        <View style={styles.container}>
            <Image source={require('../assets/biscoito.png')} style={styles.img}/>
            <Text style={styles.text}>Aoba</Text>
            <Button title="abrir-biscoito" onPress={abrir} />
            <Text style={styles.text}>{mensagem}</Text>
        </View>
    )
}