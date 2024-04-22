import {Text, View, TextInput} from 'react-native';
import { useState } from 'react';



export default function Gato ({idade}) {
    const texto = idade > 1 ? 'anos' : 'ano';
    const [nome, setNome] = useState("Garfield");

    return (
        <View> 
            <TextInput defaultValue={nome} onChangeText={(novoTexto) => {
                setNome(novoTexto);
            }}/>
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade} {texto}</Text>
        </View>
    );
};
