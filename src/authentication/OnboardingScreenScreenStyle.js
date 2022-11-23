import { StyleSheet } from "react-native"
import { colors } from "../appTheme";
const styles = StyleSheet.create({
    background:{
        backgroundColor:colors.background,
        flex:1
    },
    backBtn:{
        padding:10
    },
    logo:{
        alignSelf:'center',
        marginTop:40,
        marginBottom:50,
    },
    title:{
        alignSelf:'center',
        marginBottom:30,
        fontSize:20,
        fontWeight:'bold',
        color:colors.darkText,

    },
    input:{
        alignItems:'center',
        width:'90%',
        alignSelf:'center',
        marginBottom:15,
    },
    btn:{
       width:'90%' ,
       alignSelf:'center',
       alignItems:'center',
       marginTop:20,
       backgroundColor:colors.primary,
       padding:15,
       borderRadius:5
    },
    btnTxt:{
        color:colors.white,
        fontWeight:'bold'
    },
    altHolder:{
        flexDirection:'row',
        alignSelf:'center',
        margin:20

    },
    altTxt:{
        color:colors.lightText
    },
    altDash:{
        color:colors.darkText
    },
    cardHolder:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:30
    },
    card:{
        width:'28%',
        alignItems:'center',
        justifyContent:'center',
        elevation:5,
        backgroundColor:colors.background,
        height:50,
        borderRadius:5,
        margin:'1%'
    },
    already:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    alreadyTxt:{
        fontWeight:'400',
        color:colors.darkText,

    },
    alreadyBtn:{
        fontWeight:'bold',
        color:colors.primary,
        padding:5,
    }


})
export default styles;