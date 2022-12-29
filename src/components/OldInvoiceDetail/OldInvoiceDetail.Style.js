import { StyleSheet } from "react-native";
import { lineGray } from "../../Constants";

export default StyleSheet.create({
    container:{
        flex:1,
        width:330,
        marginLeft:10
    },
    item_container: {
        justifyContent: "space-between",
        alignItems:"center",
        flexDirection: 'row',
        height: 30,
        borderBottomColor:lineGray,
        borderBottomWidth: 0.5
    }
})