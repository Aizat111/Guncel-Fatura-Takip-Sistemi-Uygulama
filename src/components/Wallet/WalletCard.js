import React from "react";
import {Alert, Animated, Dimensions, StyleSheet, View,Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CreditCardItem from "./Card";

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
const CARD_WIDTH = width * 0.8;
const DEFAULT_CARD_HEIGHT = CARD_WIDTH * ratio;
const MARGIN = 5;
const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + MARGIN * 2;
const { height:wHeight } = Dimensions.get("window");
const height = wHeight - 64;
const styles = StyleSheet.create({
  card: {
    marginVertical: MARGIN,
    alignSelf: "center",
  },
});



const WalletCard = ({ item, y, index,cardlist,cards }) => {
  const position = Animated.subtract(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 0.00001 + index * CARD_HEIGHT],
        outputRange: [0, -index * CARD_HEIGHT],
        extrapolateRight: "clamp",
      })
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_HEIGHT / 4],
      extrapolate: "clamp",
    })
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: "clamp",
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });

  const removeCard = (number)=>{
      Alert.alert(
          'Uyarı!',
          'Seçilmiş olduğunuz cardı silmek ister misiniz?',
          [
          {
              text: 'Evet',
              onPress:()=>{
                  cardlist(cards.filter((item)=>item.number!==number))
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
    <Animated.View
      style={[styles.card, { opacity, transform: [{ translateY }, { scale }] }]}
      key={index}
    >
        <View>
        
        <TouchableOpacity onPress={()=>removeCard(item?.number)}>
       <CreditCardItem name={item?.holder} date={item?.expiration} suffix={item?.number.slice(15)} />
       </TouchableOpacity>
       </View>
    </Animated.View>
  );
};

export default WalletCard;