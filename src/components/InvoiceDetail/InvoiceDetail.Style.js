import {StyleSheet} from 'react-native';
import {backgroundGray, templateBlue} from '../../Constants';

export default StyleSheet.create({
  container: {
    backgroundColor: backgroundGray,
    borderRadius: 10,
    height: 600,
    width: 370,
    borderWidth: 0.5,
    borderStyle: 'dashed',
    borderColor: 'gray',
  },
  header_text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  header_container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth:0,
    // borderStyle:'dashed',
    // borderColor: 'gray',
    // borderBottomWidth:0.5,
    padding: 10,
  },
  pay_button: {
    backgroundColor: templateBlue,
    width: 60,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  pay_button_text: {
    color: 'white',
    fontWeight: 'bold',
  },
  inner_container: {
    marginTop: 10,
    padding: 10,
    marginBottom:30,
  },
  item_container: {
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    paddingBottom:10,
  },
  columns: {
    flex: 1,
  },
  attribute_text: {
    fontWeight: 'bold',
  },
  total_attribute_text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  total_value_text: {
    fontSize: 18,
  },
});
