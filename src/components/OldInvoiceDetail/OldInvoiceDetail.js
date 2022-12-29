import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './OldInvoiceDetail.Style';
import water_oldinvoices from './../../water_oldinvoices.json';
import electric_oldinvoices from './../../electric_old_invoices.json';

const OldInvoiceDetail = ({activeLink}) => {
  const [list, setList] = useState(water_oldinvoices);
  useEffect
    (() => {
      if (activeLink == 1) {
        setList(water_oldinvoices);
      } else if (activeLink == 2) {
        setList(electric_oldinvoices);
      }
    },
    [activeLink]);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={({item}) => (
          <View style={styles.item_container}>
            <Text>{item.subscriber_no}</Text>
            <Text>{item.invoice_no}</Text>
            <Text>{item.invoice_period}</Text>
            <Text>{item.amount_paid}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default OldInvoiceDetail;
