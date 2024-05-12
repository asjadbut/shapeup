import { View, TextInput } from 'react-native'
import styles from '../styles/style';
import React from 'react'

export default function Input({placeholder,keyboardType}) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={'#232323'}
        cursorColor={'#000000'}
      />
    </View>
  )
}