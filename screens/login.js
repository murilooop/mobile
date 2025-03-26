import {Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';
import background4 from '../images/white background.jpg'
import { ImageBackground } from 'react-native-web';


export default function Login({navigation}){
    return(
        <ImageBackground style = {{flex: 1, width: '100%', height: '100%'}} source = {background4}>
            <View style = {styles.loginpage}>
                <View style = {styles.gapview}><Text style = {styles.title}>Login</Text>
            </View>
                <View style = {styles.inputs}>
                    <TextInput style = {styles.input} placeholder='Login'/>
                    <TextInput style = {styles.input} placeholder='Password'/>
                </View>
                <Button title ="Entrar" onPress={() => navigation.navigate('Home')}/>
                <View style = {styles.credits}>
                    <Text style={styles.textcredits}>Clique aqui para Suporte</Text>
                </View>
            </View>         
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    loginpage:{
        flex: 1,
        padding:50,
        justifyContent: 'space-between',
        paddingTop: 120
    },
    title:{
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold'
    },
    gapview:{
        gap:80
    },
    credits:{
        alignItems: 'center'
    },
    textcredits:{
        fontWeight:'bold',
        color:'blue',
        cursor:'pointer',
    },
    inputs:{
        gap:50,
    },  
    input:{
        borderWidth: 1,
        borderRadius: '15px',
        padding:10,
        fontWeight: 'bold',
    }


})
