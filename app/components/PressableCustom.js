import { Text, Pressable } from 'react-native'
import React from 'react'
import styles from '../styles/style';

export default function PressableCustom({ btnText }) {
    return (
        <Pressable
            style={styles.buttonCalculate}
            onPress={() => { }}>
            <Text style={styles.buttonCalculateText}>{btnText}</Text>
        </Pressable>
    )
}