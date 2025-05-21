import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ProviderCart } from './components/ProviderCart';

import Home from './screens/Home';
import Login from './screens/login';
import Feed from './screens/Feed';
import Contador from './screens/contador';
import Product from './screens/Product';
import Registro from './screens/SignUp';
import addProduct from './screens/addProduct';
import Carrinho from './screens/Cart'

function BottomTabs(){
  const Bottom = createBottomTabNavigator();

  return(
    <Bottom.Navigator
  
      screenOptions={{
        tabBarActiveTintColor:'white',
        tabBarActiveBackgroundColor:'gray',
        tabBarInactiveBackgroundColor:'white'  ,
        tabBarInactiveTintColor:'black',
        headerStyle:{backgroundColor:'#fff'},
        headerTintColor:'black'
      }}  
      >
        <Bottom.Screen name='Product' component={Product}
        options={{
          headerShown:false,
          tabBarIcon: () => (
            <AntDesign name="shoppingcart" size={24} color="black" />
          ),
        }}  
        />
        <Bottom.Screen  name='Home' component={Home}
        options={{
          headerShown:false,
          tabBarIcon: () => (
            <MaterialIcons name='login' size={30} color={'black'}/>
          ),
        }}  
        />
        <Bottom.Screen name='Feed' component={Feed}
        options={{
          headerShown:false,
          tabBarIcon: () => (
            <MaterialIcons name="feed" size={30} color={'black'} />
          ),
        }}  
        />
        <Bottom.Screen name='Counter' component={Contador}
        options={{
          headerShown:false,
          tabBarIcon: () => (
            <MaterialIcons name="countertops" size={30} color={'black'} />
          ),
        }}  
        />
        <Bottom.Screen name='addProduct' component={addProduct}
        options={{
          headerShown:false,
          tabBarIcon: () => (
            <MaterialIcons name="countertops" size={30} color={'black'} />
          ),
        }}  
        />
        <Bottom.Screen name='carrinho' component={Carrinho}
        options={{
          headerShown:false,
          tabBarIcon: () => (
            <MaterialIcons name="cart" size={30} color={'black'} />
          ),
        }}  
        />
      
      </Bottom.Navigator>
  )
}

export default function App() {

  const Stack = createStackNavigator();

  return (
    <ProviderCart>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name='Login' component={Login}/>
          <Stack.Screen options={{headerShown:false}} name='HomeTab' component={BottomTabs}/>
          <Stack.Screen options={{headerShown:false}} name='Cadastro' component={Registro}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ProviderCart>
  );
}

