import React, {useState} from 'react';
import { Text, View, Modal, Pressable} from "react-native";
import Tool from './components/Tool';
import MessageModal from './components/MessageModal';
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
      <MessageModal modalVisible={modalVisible} setModalVisible={setModalVisible} modalText={modalText}/>
    </View>
  );
}
