import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3EDF0",
        alignItems: "center",
        justifyContent: "center",
        padding: 25,
    },

    titulo: {
        fontSize: 30,
        fontWeight: "900",
        color: "#C7A57F",
        marginBottom: "15%",
        borderBottomWidth: 4,
        borderBottomColor: '#C7A57F',
        paddingBottom: "2%",
    },

    botao: {
        width: "100%",
        backgroundColor: "#70071F",
        padding: 15,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        boxShadow: "4px 4px 8px rgba(0,0,0, 0.7)"

    },

    textoBotao: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },

});

export default styles;