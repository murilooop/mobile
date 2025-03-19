import {Text, View, StyleSheet, Image} from 'react-native';

export function Teste(){
    return(
        <View style={styles.teste}> 
            <Text>Oi pessoal profile!</Text>
            <Text>bla bla bla!</Text>
            <Image style={styles.img} source={{uri:'https://media1.tenor.com/m/H0Klu0MEzX4AAAAC/pog-fish-pogging.gif'}}/>
        </View>
    )
}

export function Profile(){
    return(
        <View style={styles.profile}> 
            <Text>Oi pessoal profile!</Text>
            <Text>bla bla bla!</Text>
            <Image style={styles.img} source={{uri:'https://media1.tenor.com/m/H0Klu0MEzX4AAAAC/pog-fish-pogging.gif'}}/>
        </View>
    )
}

export function Favorites(){
    return(
        <View style={styles.favoritos}> 
            <Text>Favoritos</Text>
            <Text>Favoritos dos favoritos</Text>
            <Image style={styles.img} source={require('../assets/save.gif')} />
        </View>
    )
}

export default function Gallery(){
    return(
        <View style={styles.container}>
        <Text>Gallery</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'red',
    },
    profile:{
        flex: 2,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    favoritos:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'purple',
        
    },
    img:{
        width: 200,
        height: 200,
    }
});




