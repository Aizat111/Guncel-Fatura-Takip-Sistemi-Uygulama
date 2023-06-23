import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import InvoiceDetail from '../components/InvoiceDetail/InvoiceDetail';
import {templateBlue} from '../Constants';
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
const Faturalar = props => {
  const [activeLink, setActiveLink] = useState('SU');
  return (
    <GestureHandlerRootView  style={styles.header_container}>
    <NativeViewGestureHandler >
    <View style={{ backgroundColor: 'white', flex: 1}}>
      <View style={styles.header_container}>
        <TouchableOpacity
          style={{
            borderWidth: 0,
            borderBottomWidth: 2,
            borderBottomColor: activeLink == 'SU' ? templateBlue : 'white',
            width: 110,
            height: 25,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={() => setActiveLink('SU')}>
          <Text
            style={{
              color: activeLink == 'SU' ? templateBlue : 'black',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Su
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 0,
            borderBottomWidth: 2,
            borderBottomColor: activeLink == 'ELEKTRİK' ? templateBlue : 'white',
            width: 110,
            height: 25,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={() => setActiveLink('ELEKTRİK')}>
          <Text
            style={{
              color: activeLink == 'ELEKTRİK'  ? templateBlue : 'black',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Elektrik
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 0,
            borderBottomWidth: 2,
            borderBottomColor: activeLink == 'GAZ' ? templateBlue : 'white',
            width: 110,
            height: 25,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={() => setActiveLink('GAZ')}>
          <Text
            style={{
              color: activeLink == 'GAZ'  ? templateBlue : 'black',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Doğalgaz
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <InvoiceDetail activeLink={activeLink}/>
      </View>
    </View>
    </NativeViewGestureHandler>
    </GestureHandlerRootView>
  );
};
export default Faturalar;

const styles = StyleSheet.create({
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop:20
  },
  nav_link_buttons: {},
});
