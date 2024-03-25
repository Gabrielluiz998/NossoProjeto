import {Text, View} from 'react-native';


export default function Gato ({nome, idade}) {
    const texto = idade > 1 ? 'ano' : 'anos';
    return (
        <View> 
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade} {texto}</Text>
        </View>
    );
};
