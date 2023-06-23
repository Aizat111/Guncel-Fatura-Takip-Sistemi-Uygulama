import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {lineGray} from '../Constants';

import OldInvoiceDetail from '../components/OldInvoiceDetail/OldInvoiceDetail';
import {templateBlue} from '../Constants';
const OldInvoices = () => {
  const [activeLink, setActiveLink] = useState('SU');
  return (
    <View style={styles.container}>
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
            borderBottomColor:
              activeLink == 'ELEKTRİK' ? templateBlue : 'white',
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
              color: activeLink == 'ELEKTRİK' ? templateBlue : 'black',
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
              color: activeLink == 'GAZ' ? templateBlue : 'black',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Doğalgaz
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inner_header_container}>
        <Text style={styles.header_text}>ABONE NO</Text>
        <Text style={styles.header_text}>FATURA NO</Text>
        <Text style={styles.header_text}>FATURA DÖNEMİ</Text>
        <Text style={styles.header_text}>ÖDENEN TUTAR</Text>
      </View>
      <OldInvoiceDetail activeLink={activeLink} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 20,
  },
  inner_header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    height: 25,
    borderBottomColor: lineGray,
    borderBottomWidth: 0.5,
  },
  header_text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default OldInvoices;
