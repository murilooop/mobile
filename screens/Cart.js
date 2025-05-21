import { View, Text, Image,FlatList, StyleSheet } from "react-native";
import { useCarrinho } from "../components/ProviderCart";

export default function Cart({navigation}){
    const {carrinho} = useCarrinho();
    return(
        <View style = {styles.container}>
            <Text>CARRINHO</Text>
            <FlatList
            data = {carrinho}
            renderItem={({item}) => (
                <View style = {styles.card}>
                    <Image style = {styles.image} source={{uri:item.imagem}}/> 
                    <Text style = {styles.txtprod}>{item.nome}</Text>
                    <Text style = {styles.txtprod}>R${item.valor}</Text>
                </View>
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