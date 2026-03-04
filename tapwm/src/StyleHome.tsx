import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1B1818",
        alignItems: "center",
        justifyContent: "center",
        padding: 25,
    },

    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 15,
    },

    img: {
        height: 100,
        width: 100,
        resizeMode: "contain",
        marginBottom: 20,
    },

    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#2A2525",
        borderRadius: 15,
        paddingHorizontal: 15,
        color: "#fff",
        borderWidth: 2,
        borderColor: "#d709d7",
        marginBottom: 15,
    },

    botao: {
        width: "100%",
        backgroundColor: "#d709d7",
        padding: 15,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        elevation: 5, // sombra Android
    },

    textoBotao: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },

    msg:{
        marginTop: 20,
        color: "#00ff88",
        fontSize: 16,
        fontWeight: "bold",
    }
});

export default styles;