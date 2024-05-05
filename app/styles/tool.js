import { StyleSheet} from 'react-native';

const toolStyles = StyleSheet.create({
    item:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    square:{
        width:24,
        height:24,
        borderRadius:5,
        marginRight:15
    },
    itemText:{
        maxWidth:'80%'
    },
    circular:{
        width:30,
        height:30,
    },
    done:{
        textAlign:'center',
        justifyContent:'center',
        alignContent:'center',
        paddingTop:3,
    },
    logo:{
        width:24,
        height:24,
    }
})

export default toolStyles;