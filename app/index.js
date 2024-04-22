import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gato from '../Gato';
import Cliques  from '../Cliques';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Bem-vindo!</Text>
      <Gato idade={1} /> 
      <Cliques/>

        <Link href="/home">Não clique</Link>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});