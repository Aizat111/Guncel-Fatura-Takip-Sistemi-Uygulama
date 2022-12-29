import {template} from '@babel/core';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-navigation';
import InvoiceDetail from '../components/InvoiceDetail/InvoiceDetail';
import {backgroundGray, templateBlue} from '../Constants';

const Faturalar = props => {
  const [activeLink, setActiveLink] = useState(1);
  return (
    <SafeAreaView style={{paddingTop: 50, backgroundColor: 'white', flex: 1}}>
      <View style={styles.header_container}>
        <TouchableOpacity
          style={{
            borderWidth: 0,
            borderBottomWidth: 2,
            borderBottomColor: activeLink == 1 ? templateBlue : 'white',
            width: 110,
            height: 25,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={() => setActiveLink(1)}>
          <Text
            style={{
              color: activeLink == 1 ? templateBlue : 'black',
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
            borderBottomColor: activeLink == 2 ? templateBlue : 'white',
            width: 110,
            height: 25,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={() => setActiveLink(2)}>
          <Text
            style={{
              color: activeLink == 2 ? templateBlue : 'black',
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
            borderBottomColor: activeLink == 3 ? templateBlue : 'white',
            width: 110,
            height: 25,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={() => setActiveLink(3)}>
          <Text
            style={{
              color: activeLink == 3 ? templateBlue : 'black',
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
    </SafeAreaView>
  );
};
export default Faturalar;

const styles = StyleSheet.create({
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  nav_link_buttons: {},
});
