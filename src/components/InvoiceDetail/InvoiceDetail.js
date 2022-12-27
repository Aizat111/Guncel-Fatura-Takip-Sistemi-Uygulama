import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './InvoiceDetail.Style';
import invoice from './../../invoice.json';
const InvoiceDetail = props => {
  const [list, setList] = useState(invoice);
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
      <View style={styles.inner_container}>
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={({item}) => (
            <View>
              {item.id == '15' ? (
                <View style={{marginTop:30}}>
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
      </View>
    </SafeAreaView>
  );
};

export default InvoiceDetail;
