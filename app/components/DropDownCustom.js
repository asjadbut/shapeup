import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import styles from '../styles/style';

export default function DropDownCustom({options,placeholder,value,setGenderInput}) {
  return (
    <Dropdown 
        style={[styles.input,styles.dropdown]}
        data={options}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        placeholderStyle={styles.placeholderStyle}
        value={value}
        onChange={item => {
          setGenderInput(item.value);
        }}
        />
  )
}