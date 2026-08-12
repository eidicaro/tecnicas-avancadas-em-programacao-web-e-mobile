import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 15,
  },

  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },

  botao: {
    width: 65,
    height: 55,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  resultadoContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  resultadoTitulo: {
    fontSize: 18,
    marginBottom: 10,
  },

  resultado: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default styles;