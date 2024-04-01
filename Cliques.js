import {useState} from "react";
import { Button,Text,View } from 'react-native';
const Cliques = () =>{
    const [cliques, setCliques] = useState(0);

    return (        
        <View>
        <Text>Vezes alimentadas: {cliques}</Text>
            <Button title="Alimentar" onPress = {() => {
                setCliques(cliques + 1 > 10? 'O GATO MORREU' : cliques);
            }}/>
        </View>
    );
}

export default Cliques;
