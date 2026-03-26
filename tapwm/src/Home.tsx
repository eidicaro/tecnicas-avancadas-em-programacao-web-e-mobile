import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './StyleHome';
import { useState } from 'react';

export default function Home({ navigation }) {

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Seja Bem Vindo ao Shopping fontèè</Text>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Lojas')}>
                <Text style={styles.textoBotao}>Lojas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Restaurantes')}>
                <Text style={styles.textoBotao}>Restaurantes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Cinema')}>
                <Text style={styles.textoBotao}>Cinema</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Promocoes')}>
                <Text style={styles.textoBotao}>Promoções</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Mapa')}>
                <Text style={styles.textoBotao}>Mapa do Shopping</Text>
            </TouchableOpacity>

        </View>
    )
}