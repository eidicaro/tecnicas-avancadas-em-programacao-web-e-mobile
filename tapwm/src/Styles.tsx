import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    paddingTop: 50,
  },

  lista: {
    paddingHorizontal: 15,
  },

  item: {
    backgroundColor: '#1c1c1e',
    padding: 20,
    marginVertical: 10,
    borderRadius: 16,

    borderLeftWidth: 5,
    borderLeftColor: '#d4af37',

    // sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f5f5f5',
  },

  desc: {
    fontSize: 14,
    color: '#b0b0b0',
    marginTop: 6,
  },
});

export default styles