import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    toolsWrapper:{
      paddingTop:60,
      paddingHorizontal:20
    },
    sectionTitle:{
      fontSize:24,
      fontWeight:'bold'
    },
    tools:{
      marginTop:30
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: 'black',
    },
    textStyle: {
      color: 'white',
      textAlign: 'left',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'left',
    },
  });

  export default styles;