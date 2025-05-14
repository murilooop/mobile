import {Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';
import background4 from '../images/white background.jpg'
import { ImageBackground } from 'react-native-web';
import { useState } from "react"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './controler';

export default function Login({navigation}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const VerificaUser = () => {
        signInWithEmailAndPassword(auth,email,senha).then(userCredential => {
            console.log('usuario logado', userCredential.user.email)
            navigation.navigate('HomeTab');
        })
        .catch((error) => {
            console.log('erro em logar', error.message);
        })
    } 

    return(
        <ImageBackground style = {{flex: 1, width: '100%', height: '100%'}} source = {background4}>
            <View style = {styles.loginpage}>
                <View style = {styles.gapview}><Text style = {styles.title}>Login</Text>
            </View>
                <View style = {styles.inputs}>
                    <TextInput
                                style = {styles.input}
                                placeholder="Email"
                                value={email}
                                onChangeText={setEmail}
                                />
                                <TextInput
                                style = {styles.input}
                                placeholder="Senha"
                                value={senha}
                                onChangeText={setSenha}
                                />
                </View>
                <Button title ="Entrar" onPress={VerificaUser} />
                <Button title ="Cadastrar-se" onPress={() => navigation.navigate('Cadastro')}/>
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
