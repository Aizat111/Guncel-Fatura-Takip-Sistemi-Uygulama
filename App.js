import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login';
import {Text} from 'react-native';
import Dashboard from './src/pages/Dashboard';
import Invoices from './src/pages/Invoices';
import  Profile  from './src/pages/Profile';
import OldInvoices from './src/pages/OldInvoices';
import Wallet from './src/pages/Wallet'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { templateBlue } from './src/Constants';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Faturalar" component={Faturalar} />
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({route}) =>({
          tabBarIcon :({focused, size, colour}) => {
            let iconName;
            if (route.name === 'Anasayfa') {
              iconName =  'home' ;
              focused ? size=30 :size=20
            } else if (route.name === 'Faturalar') {
              iconName = 'list' ;
              focused ? size=30 :size=20
            }
            else if (route.name === 'Geçmiş Faturalar') {
              iconName = 'list' ;
              focused ? size=30 :size=20
            }
            else if (route.name === 'Hesabım') {
              iconName = 'user' ;
              focused ? size=30 :size=20
            }
            else if (route.name === 'Cüzdan') {
              iconName =  'credit-card-alt' ;
              focused ? size=30 :size=20
            }
            return <Icon name={iconName} size={size} colour={colour} />;
          },
          })}
          >
       
        <Tab.Screen name="Faturalar" component={Invoices} />
        <Tab.Screen name="Geçmiş Faturalar" component={OldInvoices} />
        <Tab.Screen name="Anasayfa" component={Dashboard} />
        <Tab.Screen name="Hesabım" component={Profile} />
        <Tab.Screen name="Cüzdan" component={Wallet} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
