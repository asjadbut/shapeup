import { View, TextInput } from 'react-native'
import styles from '../styles/shapeup';
import React from 'react'

export default function Input({placeholder,keyboardType}) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        cursorColor={'#000000'}
      />
    </View>
  )
}