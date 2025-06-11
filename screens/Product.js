import {View, Text, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import { useEffect, useState } from 'react';
import Cell1 from '../images/iphone.png'
import Card from '../screens/card'
import {bank} from './controler';
import { collection, doc, getDocs } from 'firebase/firestore';
import { useCarrinho } from '../components/ProviderCart';

export default function Product({navigation}){
    const [produtos, setProdutos] = useState([]);
    const {adicionarProduto} = useCarrinho();

    useEffect(() => {

        async function carregarProdutos() {
            try{
                const querySnapshot = await getDocs(collection(bank, 'produtos'));
                const lista = [];
                querySnapshot.forEach((doc) => {
                    lista.push({id:doc.id, ...doc.data()});    
                });
                setProdutos(lista);

            } 
            catch(error){
                console.log("Erro ao buscar produtos: ", error);
            }
        }
        carregarProdutos();
        }, []);
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
                    imagem = {item.imagem}
                    nome = {item.nome}
                    valor = {item.valor}
                    comprar = {() => {
                        adicionarProduto(item);
                        navigation.navigate('carrinho');
                    }}
                    />
                )}/>
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
});