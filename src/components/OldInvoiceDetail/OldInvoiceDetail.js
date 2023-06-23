import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './OldInvoiceDetail.Style';
import {getUserInfo} from "../../utils/AsyncStorage"
import api from '../../pages/Services/auth';
import moment from 'moment'
const OldInvoiceDetail = ({activeLink}) => {
  const [list, setList] = useState();
  const[user, setUser] = useState() ;
  const userInfo = async() =>{
   let user  = await getUserInfo();
   setUser(user)
  }
   let sub = ""
   useEffect( () => {
    userInfo();
     if(activeLink =='ELEKTRİK') {
       sub = user?.subscription[0]?.subscription_no
     }
     else if(activeLink =='SU') {
       sub = user?.subscription[1]?.subscription_no
     }
     else if(activeLink == 'GAZ') {
       sub = user?.subscription[2]?.subscription_no
     }
     getData();
 
   }, [activeLink]);
 
   const getData = async () => {
     console.log(sub, activeLink)
     try {
       const instance = await api();
       instance
         .get(
           `/bill-payment-list?status=1&subscriberNo=${sub}&product=${activeLink}`,
         )
         .then(res => {
           setList(res.data);
         });
     } catch (error) {
       console.log('Hata:', error);
     }
   };
 

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={({item}) => (
          <View style={styles.item_container}>
            <Text style={{fontSize: 12}}>{item.subscriberNo}</Text>
            <Text style={{fontSize: 12}}>{item.billNo}</Text>
            <Text style={{fontSize: 12}}>{moment(item.billIssueDate).format('YYYY-MM')}</Text>
            <Text style={{fontSize: 12}}>{item.billAmount}{item.currency}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default OldInvoiceDetail;
