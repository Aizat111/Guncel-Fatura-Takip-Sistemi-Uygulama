import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './InvoiceDetail.Style';

import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import api from '../../pages/Services/auth';
import {getUserInfo} from '../../utils/AsyncStorage';

const InvoiceDetail = ({activeLink}) => {
  const [list, setList] = useState();
  const [user, setUser] = useState();
  const [isPayed, setIspayed] = useState(false)
  const userInfo = async () => {
    let user = await getUserInfo();
    setUser(user);
  };
  let sub = '';
  useEffect(() => {
    userInfo();
    if (activeLink == 'ELEKTRİK') {
      sub = user?.subscription[0]?.subscription_no;
    } else if (activeLink == 'SU') {
      sub = user?.subscription[1]?.subscription_no;
    } else if (activeLink == 'GAZ') {
      sub = user?.subscription[2]?.subscription_no;
    }
    getData();
  }, [activeLink, isPayed]);

  const getData = async () => {
    try {
      const instance = await api();
      instance
        .get(
          `/bill-payment-list?status=0&subscriberNo=${sub}&product=${activeLink}`,
        )
        .then(res => {
          setList(res.data[0]);
        });
    } catch (error) {
      console.log('Hata:', error);
    }
  };

  const payBill = async () => {
    try {
      const instance = await api();
      instance
        .patch(
          `/bill-payment-list/${list.id}`,
        )
        .then(res => {
         setIspayed(true)
        });
    } catch (error) {
      console.log('Hata:', error);
    }
  };

  return (
    <GestureHandlerRootView>
      <NativeViewGestureHandler>
        <SafeAreaView style={styles.container}>
          {list == null ? (
            <View style={{margin: 20, marginLeft: 85}}>
              <Text style={{color: 'gray'}}>Fatura Bulunmamaktadır</Text>
            </View>
          ) : (
            <>
              <View style={styles.header_container}>
                <Text style={styles.header_text}>Fatura Detayı</Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={styles.pay_button} onPress={()=>payBill()}>
                    <Text style={styles.pay_button_text}>Öde</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView style={styles.inner_container}>
                <View>
                  <View style={styles.item_container}>
                    <View style={styles.columns}>
                      <Text style={styles.attribute_text}>Abone No</Text>
                    </View>
                    <View style={styles.columns}>
                      <Text>{list?.subscriberNo}</Text>
                    </View>
                  </View>
                  <View style={styles.item_container}>
                    <View style={styles.columns}>
                      <Text style={styles.attribute_text}>Dönem</Text>
                    </View>
                    <View style={styles.columns}>
                      <Text>{list?.billIssueDate}</Text>
                    </View>
                  </View>
                  <View style={styles.item_container}>
                    <View style={styles.columns}>
                      <Text style={styles.attribute_text}>Adres</Text>
                    </View>
                    <View style={styles.columns}>
                      <Text>{list?.provisionCode}</Text>
                    </View>
                  </View>
                  <View style={styles.item_container}>
                    <View style={styles.columns}>
                      <Text style={styles.attribute_text}>Fatura No</Text>
                    </View>
                    <View style={styles.columns}>
                      <Text>{list?.billNo}</Text>
                    </View>
                  </View>
                  <View style={styles.item_container}>
                    <View style={styles.columns}>
                      <Text style={styles.attribute_text}>
                        Son Ödeme Tarihi
                      </Text>
                    </View>
                    <View style={styles.columns}>
                      <Text>{list?.billDueDate}</Text>
                    </View>
                  </View>
                  <View style={styles.item_container}>
                    <View style={styles.columns}>
                      <Text style={styles.attribute_text}>Abone Türü</Text>
                    </View>
                    <View style={styles.columns}>
                      <Text>{list?.channelCode}</Text>
                    </View>
                  </View>
                  <View style={styles.item_container}>
                    <View style={styles.columns}>
                      <Text style={styles.attribute_text}>
                        İlk Okuma Tarihi
                      </Text>
                    </View>
                    <View style={styles.columns}>
                      <Text>{list?.agentCode}</Text>
                    </View>
                  </View>
                  <View style={styles.item_container}>
                    <View style={styles.columns}>
                      <Text style={styles.attribute_text}>
                        Son Okuma Tarihi
                      </Text>
                    </View>
                    <View style={styles.columns}>
                      <Text>{list?.institution}</Text>
                    </View>
                  </View>
                  <View style={{marginTop: 30}}>
                    <View style={styles.item_container}>
                      <View style={styles.columns}>
                        <Text style={styles.total_attribute_text}>
                          Ödenecek Tutar
                        </Text>
                      </View>
                      <View style={styles.columns}>
                        <Text style={styles.total_value_text}>
                          {list.billAmount}
                          {list.currency}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </>
          )}
        </SafeAreaView>
      </NativeViewGestureHandler>
    </GestureHandlerRootView>
  );
};

export default InvoiceDetail;
