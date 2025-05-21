import { Text, TextInput, Button, View, StyleSheet } from "react-native";
import { useState } from "react";
import { bank } from "./controler";
import { collection, addDoc } from "firebase/firestore";


export default function addProduct(){

    const [imagem, setImagem] = useState("");
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");

    const adicionarProduto = async () => {
        try{
            await addDoc(collection(bank, 'produtos'),{
                nome,
                valor: parseFloat(valor),
                imagem
            });
            setNome('');
            setValor('');
            setImagem('');
        }
        catch(error){
            console.log('erro no cadastro do produto', error)
        }
    } 

    return(
        <View style = {styles.container}>
            <Text style={styles.TitleADD}>Adicionar</Text>
            <View>
            <TextInput
            style = {styles.Input}
            placeholder="Link"
            value={imagem}
            onChangeText={setImagem}
            />
            <TextInput
            style = {styles.Input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            />
            <TextInput
            style = {styles.Input}
            placeholder="Valor"
            value={valor}
            onChangeText={setValor}
            />
            </View>
            <Button
            title="ADICIONAR"
            onPress={adicionarProduto}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin: 30,
        justifyContent:'space-around',
        alignItems:'center'
    },
    TitleADD:{
        fontSize:40,
        fontWeight:'bold',
    },
    Input:{
        borderWidth: 1,
        borderRadius: '15px',
        padding:10,
        width:300,
        fontWeight: 'bold',
        marginBottom: 30,
    },
});