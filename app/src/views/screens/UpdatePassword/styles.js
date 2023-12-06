import { StyleSheet } from 'react-native'
import COLORS from '../../../consts/colors';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    bigview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '5%',
        marginVertical: '5%'
    },
    divider: {
        backgroundColor: '#4B4B4B4D',
        // color: '#707070',
        height: 1,
        width: '30%',
        alignSelf: 'center',
    },
    txt: {
        color: '#3FA9F5',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: heightPercentageToDP(1.8),
        marginTop:'4%',
        alignSelf:'flex-end'
    },
    txt1: {
        color: COLORS.grey,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: heightPercentageToDP(1.8)
    },
    v2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '4%',
        alignSelf: 'center'
    },
    img: {
        width: 50, height: 50
    },
    txt2: {
        color: '#676767',
        fontFamily: 'Montserrat-Medium',
        fontSize: heightPercentageToDP(1.8)
    },
    txt3: {
        color: COLORS.primary,
        fontFamily: 'Montserrat-Bold',
        fontSize: heightPercentageToDP(1.8)
    },
    errors: {
        fontSize: 11,
        fontWeight: "bold",
        color: "red",
        marginTop: 5,
      },
})

export default styles; 