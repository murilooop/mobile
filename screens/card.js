import { View, Image, ScrollView, Text, StyleSheet } from "react-native";

export default function Card({imagem, nome, valor}){
    return(
        <View style = {styles.card}>
            <Image style = {styles.image} source={imagem}/>
            <View>
            <Text style = {styles.txtprod}>{nome}</Text>
            <Text style = {styles.txtprod}>R${valor}</Text>
            </View>
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
        width:'100px',
        height: '100px',
    }
});