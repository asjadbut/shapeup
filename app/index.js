import React, {useState} from 'react';
import { Text, View, Modal, Pressable} from "react-native";
import Tool from './components/Tool';
import styles from './styles/style';
import { toolsData } from "./data/toolsData";

export default function Page() {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.toolsWrapper}>
        <Text style={styles.sectionTitle}>
          ShapeUp
        </Text>
        <View style={styles.tools}>
          {toolsData.map((tool,index) => {
            return (<Tool key={index} name={tool.name} logoUrl={tool.logoUrl} description={tool.description} pageLink = {tool.pageLink} setModalVisible={setModalVisible} setModalText={setModalText} />)
          })}
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalText}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
