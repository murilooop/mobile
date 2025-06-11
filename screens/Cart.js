import { View, Text, Image,FlatList, StyleSheet } from "react-native";
import { useCarrinho } from "../components/ProviderCart";
import Card from "./card";

export default function Cart({navigation}){
    const {carrinho, removerProduto} = useCarrinho();
    return(
        <View style = {styles.container}>
            <Text>CARRINHO</Text>
            <FlatList
            data = {carrinho}
            renderItem={({item, index}) => (
                <Card
                imagem = {item.imagem}
                nome = {item.nome}
                valor = {item.valor}
                remover={() => removerProduto(index)}
                />
            )}
            />
        </View>
        )
    }
    
    const styles = StyleSheet.create({
        container:{
            margin:'30px',
            flex: 1,
            justifyContent:'center',
            alignItems:'center',
        },
        txtprod:{
            fontSize:'20px',
            fontWeight:'900',
            color: 'black',
        },
        card:{
            width: '300px',
            padding:10,
            margin:10,
            backgroundColor:'#e1e1e1',
            borderRadius:8,
            alignItems: 'center',
            flexDirection:'row',
        },
        image:{
            width:100,
            height: 100,
        }
    });