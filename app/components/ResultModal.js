import { View,Text,Modal,Pressable,Image } from 'react-native'
import styles from '../styles/style';
import React from 'react'

export default function ResultModal({modalVisible, setModalVisible,title,result}) {
  const imageURL = require('../images/icons/calculator.png');
  return (
    <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
            style={styles.resultModalImage}
            source={imageURL}
            />
            <Text style={styles.resultModalTitle}>{title}</Text>
            <Text style={styles.resultModalResult}>{result}</Text>
            <Pressable
              style={[styles.resultModalCloseBtn]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>x</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  )
}