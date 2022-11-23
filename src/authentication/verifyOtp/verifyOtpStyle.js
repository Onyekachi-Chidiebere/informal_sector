import { StyleSheet } from "react-native"
import { colors } from "../../appTheme";

const styles = StyleSheet.create({
    background:{
        backgroundColor:colors.background,
        flex:1
    },
    backBtn:{
        padding:10
    },
    phone:{
        justifyContent:'center',
        alignItems:'center',
        margin:40,
    },
    title:{
        fontWeight:'700',
        fontSize:32,
        alignSelf:'center',
        marginBottom:10,
        color:colors.darkText,
    },
    info:{
        alignSelf:'center',
        color:colors.lightText,
        marginBottom:20,
    },
    input:{
        borderWidth:1,
        borderColor:colors.lightText,
        borderRadius:4,
    },
    focusedInput:{
        borderColor:colors.primary
    },
    inputHolder:{
        alignItems:'center',
        justifyContent:'center',
        marginVertical:20,
    },
    btn:{
        alignSelf:'center',
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.primary,
        padding:15,
        borderRadius:4,
        marginBottom:20
    },
    btnTxt:{
        color:colors.white,
        fontWeight:'bold'
    },
    resendBtn:{
        color:colors.primary,
        fontWeight:'400',
        borderBottomWidth:1,
        borderBottomColor:colors.primary,
        alignSelf:'center'
    }
});

export default styles;