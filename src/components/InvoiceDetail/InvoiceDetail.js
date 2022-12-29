import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './InvoiceDetail.Style';
import water_invoice from './../../water_invoice.json';
import electric_invoice from './../../electric_invoice.json'
const InvoiceDetail = ({activeLink}) => {
const [list, setList] = useState(water_invoice);
useEffect(()=>{
if(activeLink==1){
  setList(water_invoice)
}
else if(activeLink==2) {
  setList(electric_invoice)
}
},[activeLink])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>Fatura Detayı</Text>
        <View style={{flexDirection: 'row'}}>
          {/* <TouchableOpacity>
                    <Text>
                        Ödenecek Tutar
                    </Text>
                </TouchableOpacity> */}
          <TouchableOpacity style={styles.pay_button}>
            <Text style={styles.pay_button_text}>Öde</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.inner_container}>
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={({item}) => (
            <View>
              {item.id == list.length-1 ? (
                <View style={{marginTop: 30}}>
                  <View style={styles.item_container}>
                    <View style={styles.columns}>
                      <Text style={styles.total_attribute_text}>
                        {item.attribute}
                      </Text>
                    </View>
                    <View style={styles.columns}>
                      <Text style={styles.total_value_text}>{item.value}</Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View style={styles.item_container}>
                  <View style={styles.columns}>
                    <Text style={styles.attribute_text}>{item.attribute}</Text>
                  </View>
                  <View style={styles.columns}>
                    <Text>{item.value}</Text>
                  </View>
                </View>
              )}
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default InvoiceDetail;
