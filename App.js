import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Signup from './src/pages/Auth/Signup';
import Login from './src/pages/Auth/Login';
import Splash from './src/Splash';
import Dashboard from './src/pages/Dashboard';
import Invoices from './src/pages/Invoices';
import Profile from './src/pages/Profile';
import OldInvoices from './src/pages/OldInvoices';
import Wallet from './src/pages/Wallet';

import {AuthContext} from './src/context/authContext.js';
import SendMail from './src/pages/Auth/SendMail';
import CodeConfirm from './src/pages/Auth/CodeConfirm';
import ResetPassword from './src/pages/Auth/ResetPassword';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(false);
  const [users,setUser] = React.useState([{
    firstname:'Super',
    lastname:'Admin',
    telNo:'+905524969891',
    email:'Admin',
    password:'demo',
    address:'Kosava Mah. Ünaldı sk. 14/11',
    tc:'99969092058'

  }])
  const [loginUsers,setLoginUser] = React.useState({})
  const authContext = React.useMemo(() => {
    return {
      signIn: (user) => {
        setIsLoading(true)
        
        setLoginUser(user)
        setTimeout(()=>{
          setIsLoading(false)
          setIsLoading(false);
          setUserToken(true);
        },2000)
    
      },
      signUp: (newuser) => {
        console.log(newuser)
        setUser(prev=>[...prev,newuser]);
        
        setIsLoading(true)
        setTimeout(()=>{
          setIsLoading(false)
          setIsLoading(false);
          setUserToken(false);
        },2000)
     
      },
      signOut: () => {
        setLoginUser({})
        setIsLoading(false);
        setUserToken(false);
      },
      users,
      loginUsers

    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
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
        ) : (
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
    </AuthContext.Provider>
  );
}

export default App;
