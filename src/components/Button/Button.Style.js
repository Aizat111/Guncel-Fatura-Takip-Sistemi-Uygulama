import { StyleSheet } from "react-native"
import { templateBlue } from "../../Constants"
export default StyleSheet.create({
    button: {
        backgroundColor: templateBlue,
        borderRadius: 10,
        alignItems: 'center',
        width: Dimensions.get('window').width / 1.3,
        paddingVertical: 10,
        marginTop: 25
      },
      button_text: {color: 'white', fontSize: 15, fontWeight: 'bold'},
})