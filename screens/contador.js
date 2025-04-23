import{View,Text,Button,Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';
import { useState } from 'react';


export default function Contador(){

    const [contador, setContador] = useState(0)
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    function Aumentar(){
        setContador(contador+1)
    }
    
    function Diminuir(){
        if(contador > 0)
            setContador(contador-1)
    }

    return(
        <View style={styles.container}>
            <Text style = {styles.title}>Contador</Text>
            <Text style = {styles.cont}>Contador: {contador}
            </Text> 
            {/* <View style = {styles.but}>
                <View style = {styles.butView}>
                    <Button title='+' onPress={Aumentar} />
                </View>
                <View style = {styles.butView}>
                    <Button title='-' onPress={Diminuir}/>
                </View>
            </View> */}
            
            <View style = {styles.row}>
                <TouchableOpacity style={styles.botao} onPress={Aumentar}>
                    <Text style = {styles.textBut}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={Diminuir}>
                    <Text style = {styles.textBut}>-</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TextInput
                placeholder = 'nome'
                palceholderTextColor={'#000'}
                style = {styles.input}
                value = {nome}
                onChangeText = {setNome}
                />

                <TextInput
                placeholder = 'email'
                palceholderTextColor={'#000'}
                style = {styles.input}
                value = {email}
                onChangeText = {setEmail}
                />
            </View>
            <Text>Oi {nome}, seu email é {email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: '50px',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        marginBottom:30,
        marginTop:10,
        fontSize:'30px',
        fontWeight:'bold',
        textAlign:'center',
    },
    cont:{
        fontWeight:'bold',
        fontSize:20,
        marginBottom:10,
    },
    /* butView:{
        justifyContent:'center',
        alignItems:'center',
        width:'300px',
        marginTop: 10,
        width:130,
    },
    but:{
        flexDirection:'row',
        width:300,
        justifyContent:'space-between'
    }, */
    row:{
        width:'40%',
        height:'30%',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    botao:{
        backgroundColor:'blue',
        justifyContent:'center',
        width:'60%',
        height:'20%',
        borderRadius:'10%',
    },
    textBut:{
        textAlign:'center',
        color:'white',
        fontSize:'30px',
    },
    input:{
        borderWidth: 1,
        borderRadius: '15px',
        padding:10,
        fontWeight: 'bold',
    }

});