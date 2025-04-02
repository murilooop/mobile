import{View,Text,Button,Image, ScrollView} from 'react-native';
import { StyleSheet } from 'react-native';

export default function Contador(){
    return(
        <View style={styles.container}>
            <Text style = {styles.title}>Contador</Text>
            <Text></Text>
            <Button title='+'/>
            <Button title='-'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: '50px',
    },
    title:{
        marginBottom:30,
        marginTop:10,
        fontSize:'30px',
        fontWeight:'bold',
        textAlign:'center',
    },
});