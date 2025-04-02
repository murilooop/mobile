import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Login from './screens/login';
import Feed from './screens/Feed';
import Contador from './screens/contador';

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
      </Bottom.Navigator>
  )
}

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='Login' component={Login}/>
        <Stack.Screen options={{headerShown:false}} name='HomeTab' component={BottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

