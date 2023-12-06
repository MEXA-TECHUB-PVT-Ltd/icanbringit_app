import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import InputField from '../../../components/InputFiled';
import Custom_Button from '../../../components/button/Custom_Button';
import CustomSnackbar from '../../../components/CustomSnackbar/CustomSnackbar';
const DescribeIssue = ({navigation}) => {
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const dismissSnackbar = () => {
       setSnackbarVisible(true);
     };
     
    const handleUpdatePassword = async () => {
   
       setSnackbarVisible(true);
       setTimeout(() => {
         setSnackbarVisible(false);
        navigation.navigate('ChatList')

       }, 3000);
     };
  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <Header
        title={'Please describe the issue'}
        txtStyle={{fontSize: 20, marginTop: 10}}
      />
      <View style={{marginHorizontal:20}}>
        <InputField placeholder={'Describe Reason'} style={{height:100}}  multiline={true}/>
      </View>
      <View style={{alignItems:'center',marginTop:'60%'}}>
      <Custom_Button title={'Submit'} customClick={()=> {handleUpdatePassword()
    }}/>
      </View>
    <CustomSnackbar
      message={'Success'}
      messageDescription={'User reported successfully'}
      onDismiss={dismissSnackbar} 
      visible={snackbarVisible}
    />
    </SafeAreaView>
  );
};

export default DescribeIssue;

const styles = StyleSheet.create({});
