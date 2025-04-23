import {View, Text, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import { useState } from 'react';
import Cell1 from '../images/iphone.png'
import Card from '../screens/card'

export default function Product(){
    const [produtos, setProdutos] = useState([
        {id: 1, nome: 'Camiseta', valor: 99.99, image: Cell1},
        {id:2, nome: 'Moletom', valor: 159.99, image: Cell1},
        {id:3, nome: 'Tênis', valor:89.90, image: Cell1},
        {id:4, nome: 'Calça', valor:250.90, image: Cell1}
    ])
    return(
   
            <View style = {styles.container}>
                <Text style = {styles.text}>
                    Lista de Produtos
                </Text>
                {/* {produtos.map((item) => (
                    <Text style = {styles.txtprod}>
                        {item.nome} - R$ {item.valor}
                    </Text>
                ))} */}
                <FlatList
                data={produtos}
                renderItem={({item}) => (
                    <Card
                    imagem = {item.image}
                    nome = {item.nome}
                    valor = {item.valor}
                    />
                )}
                keyExtractor={item => item.id}
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
    text:{
        fontSize: 30,
        color: 'black',
    },
/*     txtprod:{
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
    },
    image:{
        width:'100px',
        height: '100px',
    } */
})