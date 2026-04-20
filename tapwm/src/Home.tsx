import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { styles } from './Styles';

const DATA = [
  { id: "1", title: "Moonveil Katana", desc: "Espada mágica extremamente forte" },
  { id: "2", title: "Rivers of Blood", desc: "Causa hemorragia absurda" },
  { id: "3", title: "Blasphemous Blade", desc: "Rouba vida ao atacar" },
  { id: "4", title: "Radahn Armor", desc: "Armadura do general lendário" },
  { id: "5", title: "Flask of Crimson Tears", desc: "Recupera HP" },
];

export function Home() {

    const renderItem = ({ item }: { item: { title: string, desc: string } }) => (
        <Pressable 
            onPress={() => alert(`Você selecionou: ${item.title}`)}
            style={({ pressed }) => [
            styles.item,
            pressed && { transform: [{ scale: 0.97 }] }
            ]}
        >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={1}
                style={styles.lista}
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}