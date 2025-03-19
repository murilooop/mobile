import {Text, View, StyleSheet, Image, TextInput} from 'react-native';
import Note20 from '../images/note20.png'
import Samsung22 from '../images/S22.png'
import Iphone14 from '../images/iphone14.png'
import Iphone from '../images/iphone.png'
import background4 from '../images/gray.jpg'
import { ImageBackground } from 'react-native-web';


export default function Home(){
    return(
        <ImageBackground style = {{flex: 1, width: '100%', height: '100%'}} source = {background4}>
            <View style = {styles.home}>
                <Text style = {styles.title}>Celulare</Text>
                <View style = {styles.samsung}>
                    <Text style = {styles.text1}>Samsung</Text>
                    <Text style = {styles.text2} >O Samsung Galaxy oferece excelente desempenho, design elegante e câmeras de alta qualidade.</Text>
                </View>
                <View style = {styles.image_sep}>
                    <Image style = {styles.images} source={Note20}/>
                    <Image style = {styles.images} source={Samsung22}/>
                </View>
                <View style = {styles.iphone}>
                    <Text style = {styles.text1}>Iphone</Text>
                    <Text style = {styles.text2} >O iPhone oferece desempenho aprimorado, câmeras superiores e novas funcionalidades.</Text>
                </View>
                <View style = {styles.image_sep}>
                    <Image style = {styles.images} source={Iphone14}/>
                    <Image style = {styles.images} source={Iphone}/>
                </View>
                <View style = {styles.credits}>
                    <Text style = {styles.text_credits}>© Direitos Reservados</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    home:{
        flex:1,
        padding: 50,
        paddingTop: 50,
        justifyContent: 'space-between',
    },
    samsung:{
        gap:10
    },
    text1:{
        fontWeight:'bold',
        fontSize: 30,
        color: 'black'
    },
    text2:{
        fontSize: 16,
        color: 'black',
        fontWeight:'bold',
    },
    images:{
        width:120,
        height: 120
    },
    image_sep:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    iphone:{
        gap:10
    },
    credits:{
        alignItems: 'center'
    },
    text_credits:{
        fontWeight:'bold',
        color: 'black',
    },
    title:{
        color: 'black',
        textAlign: 'center',
        fontSize:35,
        fontWeight: 'bold'
    }
});