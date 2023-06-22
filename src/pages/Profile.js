import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {backgroundGray, templateBlue} from '../Constants';
import Icon from 'react-native-vector-icons/FontAwesome';

import {AuthContext} from '../context/AuthContext';

const Profile = () => {
  const {logout, userInfo} = React.useContext(AuthContext);
  const exit = ()=>{
    Alert.alert(
        'Uyarı!',
        'Çıkmak ister misiniz?',
        [
        {
            text: 'Evet',
            onPress:()=>{
              signOut()
            }
        },
        {
          text: 'Hayır',
          onPress:()=>{
             
          }
      }    
        ]
    )
}
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={templateBlue} />
      <View style={{flex: 0.3, backgroundColor: templateBlue}}>
        <View>
          <TouchableOpacity onPress={()=>{logout()}}>
            <Icon style={{textAlign: 'right'}} name="sign-out" onPress={exit} color={'white'} size={26} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 120 / 2,
              borderWidth: 3,
              borderColor: '#ffffff',
              position: 'absolute',
              zIndex: 2,
            }}
          />
        </View>
        <View style={{zIndex: -1, marginTop: 60}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>
            {userInfo?.firstname} {userInfo?.lastname}
          </Text>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <Icon name="mobile" size={30} color="#212121" />
              <View style={{justifyContent: 'center', marginLeft: 10}}>
                <Text style={{fontWeight: 'bold'}}>{userInfo?.phone_number}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <Icon name="envelope" size={20} color="#212121" />
              <View style={{justifyContent: 'center', marginLeft: 10}}>
                <Text style={{fontWeight: 'bold'}}>{userInfo?.email}</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
            // marginLeft: 20,
            // marginRight: 20,
          }}>
          <View
            style={{
              borderWidth: 0.5,
              borderStyle: 'dashed',
              borderColor: 'gray',
              width: 100,
              height: 50,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>45₺</Text>
            <Text style={{color: 'gray'}}>Su</Text>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderStyle: 'dashed',
              borderColor: 'gray',
              width: 100,
              height: 50,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>45₺</Text>
            <Text style={{color: 'gray'}}>Elektrik</Text>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderStyle: 'dashed',
              borderColor: 'gray',
              width: 100,
              height: 50,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>45₺</Text>
            <Text style={{color: 'gray'}}>Doğal Gaz</Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.4,
            borderStyle: 'dashed',
            flex: 0.8,
            margin: 16,
            borderRadius: 10,
            backgroundColor: backgroundGray,
          }}>
          <View
            style={{
              alignItems: 'flex-end',
              marginTop: 5,
              marginRight: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold', marginLeft: 15}}>
              Hesap Detayı
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: templateBlue,
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              {/* <Text style={{color: 'white', fontWeight: 'bold'}}>Düzenle</Text> */}
              <Icon name="edit" color={'white'} size={16} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              marginLeft: 15,
              marginRight: 10,
            }}>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: 'bold', color: 'gray'}}>Ad Soyad</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>{userInfo?.firstname} {userInfo?.lastname}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              marginLeft: 15,
              marginRight: 10,
            }}>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: 'bold', color: 'gray'}}>Adres</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                {userInfo.address}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              marginLeft: 15,
              marginRight: 10,
            }}>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: 'bold', color: 'gray'}}>
                TC Kimlik No
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
              {userInfo.tc}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              marginLeft: 15,
              marginRight: 10,
            }}>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: 'bold', color: 'gray'}}>
                Telefon Numarası
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                {userInfo.phone_number}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Profile;
