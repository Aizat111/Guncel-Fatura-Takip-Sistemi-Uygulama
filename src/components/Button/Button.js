import React from "react";
import { TouchableOpacity, Text} from "react-native";
export default Button = ({text,Press}) =>{
    return(
        <TouchableOpacity style={styles.button} onPress={Press}>
        <Text style={styles.button_text}>{text}</Text>
      </TouchableOpacity>
    )
}