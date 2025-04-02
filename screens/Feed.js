import{View,Text,Button,Image, ScrollView} from 'react-native';
import { StyleSheet } from 'react-native';
import cell1 from '../images/cell1.jpg';
import cell2 from '../images/cell2.jpg';

export default function Feed(){
    return(
        <ScrollView style={styles.feed}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Celulares</Text>
            </View>
            <View style = {styles.line1}>
                    <View style = {styles.col}>
                        <Image style={styles.img} source={cell1}/>
                        <Text style = {styles.foneTitle}>Celular: Samsung </Text>
                        <Text style = {styles.priceTitle}>Preço: R$1200,00</Text>
                    </View>
                    <View style = {styles.col}>
                        <Image style={styles.img} source={cell2}/>
                        <Text style = {styles.foneTitle}>Celular: Samsung </Text>
                        <Text style = {styles.priceTitle}>Preço: R$1200,00</Text>
                    </View>     
            </View>
            <View style = {styles.line1}>
                    <View style = {styles.col}>
                        <Image style={styles.img} source={cell1}/>
                        <Text style = {styles.foneTitle}>Celular: Samsung </Text>
                        <Text style = {styles.priceTitle}>Preço: R$1200,00</Text>
                    </View>
                    <View style = {styles.col}>
                        <Image style={styles.img} source={cell2}/>
                        <Text style = {styles.foneTitle}>Celular: Samsung </Text>
                        <Text style = {styles.priceTitle}>Preço: R$1200,00</Text>
                    </View>     
            </View>
            <View style = {styles.line1}>
                    <View style = {styles.col}>
                        <Image style={styles.img} source={cell1}/>
                        <Text style = {styles.foneTitle}>Celular: Samsung </Text>
                        <Text style = {styles.priceTitle}>Preço: R$1200,00</Text>
                    </View>
                    <View style = {styles.col}>
                        <Image style={styles.img} source={cell2}/>
                        <Text style = {styles.foneTitle}>Celular: Samsung </Text>
                        <Text style = {styles.priceTitle}>Preço: R$1200,00</Text>
                    </View>     
            </View>
            <View style = {styles.line1}>
                    <View style = {styles.col}>
                        <Image style={styles.img} source={cell1}/>
                        <Text style = {styles.foneTitle}>Celular: Samsung </Text>
                        <Text style = {styles.priceTitle}>Preço: R$1200,00</Text>
                    </View>
                    <View style = {styles.col}>
                        <Image style={styles.img} source={cell2}/>
                        <Text style = {styles.foneTitle}>Celular: Samsung </Text>
                        <Text style = {styles.priceTitle}>Preço: R$1200,00</Text>
                    </View>     
            </View>

            <View>
                <Button style = {styles.buttonB} title='Saiba Mais'/>
            </View>
                
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    feed:{
        flex:1,
        padding: 50,
        paddingTop: 50,
        backgroundColor:'#4CABA6',
    },
    col:{
        flexDirection: 'column',
    },
    line1:{
        flexDirection: 'row',
        justifyContent:'center',  
        gap:'50px',
        marginBottom:'50px',
    },
    img:{
        width:'130px',
        height:'130px',
        borderRadius:'20%',
        border:'2px solid black',
    },
    title:{
        fontSize:'30px',
        fontWeight:'bold',
        textAlign:'center',
    },
    foneTitle:{
        fontWeight:'bold',
        fontSize:'16px'
    },
    priceTitle:{
        fontWeight:'bold',
        fontSize:'16px' 
    },
    titleView:{
        marginBottom:'30px',
    }
});