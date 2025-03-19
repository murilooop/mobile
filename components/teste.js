import {Text, View, StyleSheet, Image} from 'react-native';

export function Teste(){
    return(
        <View style={styles.teste}> 
            <Text>Titulo do Teste</Text>
            <View style={styles.imagesides}>
                <Image style={styles.img} source={{uri:'https://th.bing.com/th/id/OIP.ZFAQr6rKUSnulO_0xit0eQHaEK?rs=1&pid=ImgDetMain'}} />
                <Image style={styles.img} source={{uri:'https://th.bing.com/th/id/OIP.ZFAQr6rKUSnulO_0xit0eQHaEK?rs=1&pid=ImgDetMain'}} />
            </View>
            <View style={styles.othertext}>
                <Text>Outro Titulo do Teste</Text>
            </View>
            <View style={styles.imagesides}>
                <Image style={styles.img} source={{uri:'https://th.bing.com/th/id/OIP.ZFAQr6rKUSnulO_0xit0eQHaEK?rs=1&pid=ImgDetMain'}} />
                <Image style={styles.img} source={{uri:'https://th.bing.com/th/id/OIP.ZFAQr6rKUSnulO_0xit0eQHaEK?rs=1&pid=ImgDetMain'}} />
            </View>
            <View style={styles.credits}>
                <Text>Creditos por murilo</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    teste:{
        paddingTop:100,
        flex:1,
        backgroundColor:'white',
        justifyContent:'flex-start',
    },
    img:{
        width:100,
        height:100,
    },
    imagesides:{
        paddingTop:40,
        paddingBottom:100,
        flexDirection:'row',
        paddingLeft:40,
        gap:100,
    },
    othertext:{
        alignItems:'flex-end',
        paddingTop:45,
        paddingRight:40,
        paddingBottom:150,
    },
    credits:{
        alignItems:'center',
        justifyContent:'flex-end',
    }
});