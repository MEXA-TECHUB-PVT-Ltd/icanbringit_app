import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../../consts/colors';
import Icon from '../../consts/Icons';

const ReportInnerBtn = ({
  style,
  onPress,
  buttonText,
  textStyle,
  icon_view,
  isDisabled = false,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, style]}
        disabled={isDisabled}>
       
          <Text style={[styles.defaultText, textStyle]}>{buttonText}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ReportInnerBtn;

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    width: '98%',
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
    borderColor: COLORS.black,
    borderWidth: 0.5,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent:'center'
  },
 
  defaultText: {
    color: COLORS.black,
    fontSize: 13,
  
  },

});
