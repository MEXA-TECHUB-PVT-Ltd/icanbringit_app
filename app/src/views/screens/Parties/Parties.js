import { FlatList, StyleSheet, Image, TouchableOpacity, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Header from '../../../components/Header/Header'
import CustomText from '../../../components/Text'
import Images from '../../../consts/Images'
import COLORS from '../../../consts/colors'

const Parties = ({navigation}) => {
    const PartiesData = [
        {
          id: 1,
          image: Images.PartiesBg1,
          title: 'Candyland Carnival',
          time: 'Sun, Oct 29 - 5:00 pm',
          online: 'online',
          privte: 'private',
        },
        {
          id: 2,
          image: Images.PartiesBg1,
          title: 'Candyland Carnival',
          time: 'Sun, Oct 29 - 5:00 pm',
          online: 'online',
          privte: 'private',
        },
        {
          id: 3,
          image: Images.PartiesBg1,
          title: 'Candyland Carnival',
          time: 'Sun, Oct 29 - 5:00 pm',
          online: 'online',
          privte: 'private',
        },
        {
            id: 3,
            image: Images.PartiesBg1,
            title: 'Candyland Carnival',
            time: 'Sun, Oct 29 - 5:00 pm',
            online: 'online',
            privte: 'private',
          },
          {
            id: 3,
            image: Images.PartiesBg1,
            title: 'Candyland Carnival',
            time: 'Sun, Oct 29 - 5:00 pm',
            online: 'online',
            privte: 'private',
          },
          {
            id: 3,
            image: Images.PartiesBg1,
            title: 'Candyland Carnival',
            time: 'Sun, Oct 29 - 5:00 pm',
            online: 'online',
            privte: 'private',
          },
          {
            id: 3,
            image: Images.PartiesBg1,
            title: 'Candyland Carnival',
            time: 'Sun, Oct 29 - 5:00 pm',
            online: 'online',
            privte: 'private',
          },
          {
            id: 3,
            image: Images.PartiesBg1,
            title: 'Candyland Carnival',
            time: 'Sun, Oct 29 - 5:00 pm',
            online: 'online',
            privte: 'private',
          },
      ];
  return (
    <SafeAreaView style={{flex:1}}>

    <View style={{flex:1}}>
        <StatusBar translucent={true}/>
            <Header title={'Parties'} />
            <View style={{marginHorizontal:10}}>
          <FlatList
           showsVerticalScrollIndicator={false}
            numColumns={2}
            data={PartiesData}
            style={{ marginTop: 10, paddingBottom: 100 }}
            // horizontal
            renderItem={({item}) => {
              return (
                <View style={styles.flatlist_container2}>
                  <TouchableOpacity onPress={()=> navigation.navigate('ViewEvent')}>

                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={styles.imageView}
                  />
                  <CustomText text={item.title} style={styles.titleView} />
                  <CustomText text={item.time} style={styles.timeView} />
                  <View style={{flexDirection: 'row', marginTop: 5}}>
                    <TouchableOpacity style={styles.cardBtn}>
                      <CustomText text={item.online} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.cardBtn, {backgroundColor: '#FF6B01'}]}>
                      <CustomText text={item.privte} style={styles.textView} />
                    </TouchableOpacity>
                  </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
    </View>
    </SafeAreaView>
  )
}

export default Parties

const styles = StyleSheet.create({
    flatlist_container2: {
        height: 250,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 1,
        borderColor: COLORS.black,
        // borderWidth: 0.1,
        elevation:0.9,
        width: 150,
      },
      titleView: {
        color: COLORS.secondary,
        fontSize: 18,
        marginHorizontal: 10,
        fontWeight: 'bold',
      },
      imageView: {
        width: 140,
        resizeMode:'contain'
      },
      timeView: {
        marginHorizontal: 10,
        fontSize:13
      },
      cardBtn: {
        backgroundColor: COLORS.blue,
        padding: 8,
        marginHorizontal: 10,
        borderRadius: 20,
        // width: '40%',
        alignItems: 'center',
      },
      textView: {
        color: COLORS.white,
      },
})