import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Home from './screens/Home';
import Login from './screens/login'

export default function Botttom() {

  const Bottom = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Bottom.Navigator
      initialRouteName='Login'
      screenOptions={{
        tabBarActiveTintColor:'white',
        tabBarActiveBackgroundColor:'gray',
        tabBarInactiveBackgroundColor:'white'  ,
        tabBarInactiveTintColor:'black',
        headerStyle:{backgroundColor:'#fff'},
        headerTintColor:'black'
      }}  
      >
        <Bottom.Screen name='Login' component={Login}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name='home' size={30} color={'black'}/>
          ),
        }}  
        />
        <Bottom.Screen name='Home' component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name='login' size={30} color={'black'}/>
          ),
        }}  
        />

      </Bottom.Navigator>
    </NavigationContainer>
  );
}

