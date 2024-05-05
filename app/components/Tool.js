import { Image, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import toolStyles from '../styles/tool';
import { Link } from 'expo-router';

export default function Tool({ name, logoUrl, description, pageLink, setModalVisible, setModalText }) {
  return (
    <View style={toolStyles.item}>
      <Link href={pageLink}>
        <View style={toolStyles.itemLeft}>
          <View style={toolStyles.square}>
            <Image
              style={toolStyles.logo}
              source={logoUrl}
            />
          </View>
          <Text style={toolStyles.itemText}>{name}</Text>

        </View>
      </Link>
      <TouchableOpacity onPress={() => {
        setModalText(description);
        setModalVisible(true);
      }}>
        <View style={toolStyles.circular}>
          <Text style={toolStyles.done}>?</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}