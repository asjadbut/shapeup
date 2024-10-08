import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  toolsWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  tools: {
    marginTop: 30
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
    borderRadius: 13,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'black',
  },
  buttonCalculate: {
    marginTop:30,
    backgroundColor: 'black',
    height:40,
    borderRadius: 13,
    padding: 10,
  },
  buttonCalculateText:{
    color:'white',
    fontWeight:'bold',
    textAlign:'center'
  },
  textStyle: {
    color: 'white',
    textAlign: 'left',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
  },
  navBar: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 80,
  },
  navBarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  navBarBackIcon: {
    width: 24,
    height: 24,
  },
  formPusher:{
    padding:20,
    
  },
  formContainer:{
    padding:20,
    borderWidth:1,
    borderRadius: 13,
    borderColor: 'gray',
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth:1,
    padding: 10,
    borderColor: 'gray',
  },
  dropdown: {
      paddingHorizontal: 8,
      backgroundColor: 'transparent',
  },
  placeholderStyle:{
    color:"#232323",
    fontSize:14
  },
  resultModalTitle: {
    marginBottom: 15,
    textAlign: 'center',
  },
  resultModalResult: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:25,
    fontWeight:'bold'
  },
  resultModalImage: {
    marginBottom: 15,
    height:50,
    width:50
  },
  resultModalCloseBtn:{
    borderRadius:8,
    padding: 5,
    paddingLeft:10,
    paddingRight:10,
    elevation: 2,
    backgroundColor: 'black',
    position:'absolute',
    right:8,
    top:8
  }

});

export default styles;