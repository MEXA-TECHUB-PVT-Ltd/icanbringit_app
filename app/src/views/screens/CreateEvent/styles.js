import { StyleSheet } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import COLORS from '../../../consts/colors';
const STYLES = StyleSheet.create({
    bg: {
        flex: 1,
    },
    mainv: {
        flex: 1,
        // backgroundColor: 'white'
    },
    mainView: {
        flex: 1,
    },
    txt: {
        color: 'black',
        fontSize: heightPercentageToDP(3.2),
        fontFamily: 'Montserrat-Bold',
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: '11%'
    },
    optionsView: {
        justifyContent: 'center',
        borderWidth: 1,
        alignSelf:'center',
        borderRadius: 15,
        borderColor: 'lightgray',
        width: 280,
        height: 40,
        marginTop: '5%',
        backgroundColor: 'white'
    },
    text: {
        color: '#000000',
        fontSize: 20,
        textAlign: 'center',
        fontSize: widthPercentageToDP(4),
        fontFamily: 'Montserrat-Regular',
    },
    btnl: {
        width: "100%",
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        alignSelf: 'center',
    },
    v1:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:'20%'
    },
    txt1: {
        color: '#000000',
        fontSize: 20,
        textAlign: 'center',
        fontSize: widthPercentageToDP(4.5),
        fontFamily: 'Montserrat-Bold',
    },
    txt2: {
        color: '#868686',
        fontSize: 20,
        textAlign: 'center',
        fontSize: widthPercentageToDP(4.5),
        fontFamily: 'Montserrat-Regular',
    },
    p: {
        borderRadius: 20,
        width: '100%',
        height: 5,
        marginTop:'5%'
    },
})

export default STYLES; 