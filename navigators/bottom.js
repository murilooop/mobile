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
        tabBarActiveTintColor:'#FF0000',
        tabBarActiveBackgroundColor:'#997722',
        tabBarInactiveBackgroundColor:'#220000'  ,
        tabBarInactiveTintColor:'#000',
      }}  
      >
        <Bottom.Screen name='Login' component={Login}/>
        <Bottom.Screen name='Home' component={Home}/>

      </Bottom.Navigator>
    </NavigationContainer>
  );
}

