import {View, TextInput, Button, StyleSheet, Text } from "react-native"
import { useState } from "react"

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "./controler";


export default function SignUp({navigation}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    

    const cadastroUser = () => {
        createUserWithEmailAndPassword(auth, email, senha).then((userCredential) => {
        console.log('cadastrado!', userCredential.user.email);
        navigation.navigate('Login');

  })
  .catch((error) => {
    console.log("ERRO", error.message);
  });
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>CADASTRO</Text>

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
            secureTextEntry = {true}
            />
            <Button
            color={'gray'}
            title="Cadastrar"
            onPress={cadastroUser}
            />
            <Button
            color={'gray'}
            title="Login"
            onPress={() => navigation.navigate('Login')}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:50,
        justifyContent: 'space-evenly',
        alignContent: 'center',
        padding: 40
    },
    title:{
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold'
    },
    input:{
        borderWidth: 1,
        borderRadius: '15px',
        padding:10,
        fontWeight: 'bold',
    }
})