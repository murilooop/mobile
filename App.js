import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Login from './screens/login'

export default function Botttom() {

  const Bottom = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Bottom.Navigator
      initialRouteName='Login'
      screenOptions={{
        tabBarActiveTintColor:'black',
        tabBarActiveBackgroundColor:'#fff',
        tabBarInactiveBackgroundColor:'#000'  ,
        tabBarInactiveTintColor:'white',
        headerStyle:{backgroundColor:'#fff'},
        headerTintColor:'black'
      }}  
      >
        <Bottom.Screen name='Login' component={Login}/>
        <Bottom.Screen name='Home' component={Home}/>

      </Bottom.Navigator>
    </NavigationContainer>
  );
}

