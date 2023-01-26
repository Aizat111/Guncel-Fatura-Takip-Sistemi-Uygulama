import React from "react";
import { Animated, FlatList } from "react-native";
import WalletCard from "./WalletCard";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);



const WalletFlatList = ({cards,cardlist}) => {
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });
  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      bounces={false}
      data={cards}
      renderItem={({ index, item }) => (
        <WalletCard {...{ index, y, item,cardlist,cards }} />
      )}
      keyExtractor={(item) => item.index}
      {...{ onScroll }}
    />
  );
};

export default WalletFlatList;