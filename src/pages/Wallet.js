import * as React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  View,
} from 'react-native';
import CreditCard from 'react-native-credit-card-form-ui';
import WalletFlatList from '../components/Wallet/WalletFlatList';
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';


const Wallet = () => {
  const creditCardRef = React.useRef();
  const [addCard, setAddCard] = React.useState(false);
  const [cards, setCards] = React.useState([
    {
      brand: 'mastercard',
      cvv: '344',
      expiration: '12/2032',
      holder: 'MYKTYBEK OMURBEKOV',
      number: '2332 3123 4231 2333',
    },
    {
      brand: 'mastercard',
      cvv: '344',
      expiration: '12/2032',
      holder: 'MYKTYBEK OMURBEKOV',
      number: '2332 3123 4231 2333',
    },
    {
      brand: 'mastercard',
      cvv: '344',
      expiration: '12/2032',
      holder: 'MYKTYBEK OMURBEKOV',
      number: '2332 3123 4231 2333',
    },
    {
      brand: 'mastercard',
      cvv: '344',
      expiration: '12/2032',
      holder: 'MYKTYBEK OMURBEKOV',
      number: '2332 3123 4231 2333',
    },
    {
      brand: 'mastercard',
      cvv: '344',
      expiration: '12/2032',
      holder: 'MYKTYBEK OMURBEKOV',
      number: '2332 3123 4231 2333',
    },
  ]);
  const handleSubmit = React.useCallback(() => {
    if (creditCardRef.current) {
      const {error, data} = creditCardRef.current.submit();
      console.log('ERROR: ', error);
      console.log('CARD DATA: ', data);
      setCards(prev => [...prev, data]);
      setAddCard(false);
    }
  }, []);

  return (
    <>
        <GestureHandlerRootView>
    <NativeViewGestureHandler>
      {addCard ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={20}
          style={styles.container}>
          <CreditCard
            placeholders= {{
                number:'0000 0000 0000 0000',
                holder: 'Aizat Esenbekova',
                expiration: 'AA/YYYY',
                cvv:'123'
            }}
            labels={{
              holder: 'AD SOYAD',
              expiration: 'Son Kullanım Tarihi',
              cvv: 'CVV',
            }}
            ref={creditCardRef}
          />
          <Button title="Ekle" onPress={handleSubmit} />
          <Button title="İptal" onPress={() => setAddCard(false)} />
        </KeyboardAvoidingView>
      ) : (
        <>
          <View style={styles.container}>
            <WalletFlatList cards={cards} cardlist={setCards}/>
            <Button title="Yeni Kart Ekle" onPress={() => setAddCard(true)} />
          </View>
          {/*  */}
        </>
      )}
      </NativeViewGestureHandler>
      </GestureHandlerRootView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default Wallet;
