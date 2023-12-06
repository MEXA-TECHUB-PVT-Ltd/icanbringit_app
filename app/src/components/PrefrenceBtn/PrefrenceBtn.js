import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from "../../consts/colors";

const InnerButton = ({
  style,
  onPress,
  buttonText,
  textStyle,
  icon_view,
  isDisabled = false,
  Lefticon,
  name,
  type,
  color,
  size
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, style]}
        disabled={isDisabled}
      >
        <View style={[styles.row, icon_view]}>
          <Text style={[styles.defaultText, textStyle]}>{buttonText}</Text>
        </View>
         
      </TouchableOpacity>
    </>
  );
};

export default InnerButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: "center",
    width: "98%",
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
    borderColor: COLORS.black,
    borderWidth: 0.5,
    flexDirection: "row",
    paddingHorizontal:10,
    justifyContent: "space-between",

  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  defaultText: {
    color: COLORS.black,
    fontSize: 16,
    alignSelf:'center'
  },
  icon: {
    width: "12%",
    paddingRight: 30,
  },
});
