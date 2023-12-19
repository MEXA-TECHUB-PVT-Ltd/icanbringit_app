import React from 'react'
import {View} from 'react-native'

import Header from '../../components/Header/Header'
import ReportInnerBtn from '../../components/ReportInnerBtn/ReportInnerBtn'

const Report = ({navigation}) => {
  return (
    <View>
      <Header
        title={'Tell us the reason why are you reporting Zahra?'}
        txtStyle={{fontSize: 20, marginTop: 10}}
      />
      <View style={{marginHorizontal: 20}}>
        <ReportInnerBtn buttonText={'Block for no reason'} />
        <ReportInnerBtn buttonText={'Scam'} onPress={() => navigation.navigate('DescribeIssue')} />
        <ReportInnerBtn buttonText={'Bad Behavior'} />
        <ReportInnerBtn buttonText={'Fake Profile'} />
      </View>
    </View>
  )
}

export default Report
