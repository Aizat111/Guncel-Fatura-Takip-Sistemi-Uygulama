import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Signup from '../pages/Auth/Signup';
import Login from '../pages/Auth/Login';
import Dashboard from '../pages/Dashboard';
import Invoices from '../pages/Invoices';
import Profile from '../pages/Profile';
import OldInvoices from '../pages/OldInvoices';
import Wallet from '../pages/Wallet';
import SendMail from '../pages/Auth/SendMail';
import CodeConfirm from '../pages/Auth/CodeConfirm';
import ResetPassword from '../pages/Auth/ResetPassword';
import { AuthContext } from '../context/AuthContext';

const AuthNav = () => {
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const {userToken} = useContext(AuthContext);


  return (
   
    <NavigationContainer>
    {userToken !==null ? (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, colour}) => {
            let iconName;
            if (route.name === 'Anasayfa') {
              iconName = 'home';
              focused ? (size = 30) : (size = 20);
            } else if (route.name === 'Faturalar') {
              iconName = 'list';
              focused ? (size = 30) : (size = 20);
            } else if (route.name === 'Geçmiş Faturalar') {
              iconName = 'list';
              focused ? (size = 30) : (size = 20);
            } else if (route.name === 'Hesabım') {
              iconName = 'user';
              focused ? (size = 30) : (size = 20);
            } else if (route.name === 'Cüzdan') {
              iconName = 'credit-card-alt';
              focused ? (size = 30) : (size = 20);
            }
            return <Icon name={iconName} size={size} colour={colour} />;
          },
        })}>
        <Tab.Screen name="Faturalar" component={Invoices} />
        <Tab.Screen name="Geçmiş Faturalar" component={OldInvoices} />
        <Tab.Screen name="Anasayfa" component={Dashboard} />
        <Tab.Screen name="Hesabım" component={Profile} />
        <Tab.Screen name="Cüzdan" component={Wallet} />
      </Tab.Navigator>
    ) :
     (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SendMail" component={SendMail} />
        <Stack.Screen name="CodeConfirm" component={CodeConfirm} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Anasayfa" component={Dashboard} />
      </Stack.Navigator>
    )}
  </NavigationContainer>
  )
}

export default AuthNav