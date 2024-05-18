import { View, Pressable, Text } from 'react-native';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Input from '../components/Input';
import DropDownCustom from '../components/DropDownCustom';
import styles from '../styles/style';

export default function BodyFatCalculator() {
  const options = [
    { label: 'Male', value: 1 },
    { label: 'Female', value: 2 }
  ]
  const [genderInput, setGenderInput] = useState(1);
  const [waistInput, setWaistInput] = useState(0);
  const [neckInput, setNeckInput] = useState(0);
  const [hipInput, setHipInput] = useState(0);
  const [heightInput, setHeightInput] = useState(0);

  const calculateBodyFat = () => {
    let result = Number(waistInput) + Number(neckInput) + Number(heightInput);
    console.log(genderInput);
    console.log(result);

  }

  return (
    <View style={[styles.container, styles.formPusher]}>
      <NavBar navBarTitle={"    Body Fat Calculator"} />
      <View style={styles.formContainer}>
        <DropDownCustom placeholder={"Select your gender"} options={options} value={genderInput} setGenderInput={setGenderInput} />
        <Input placeholder={"Enter waist size (inches)"} keyboardType={"numeric"} onChangeText={setWaistInput} />
        <Input placeholder={"Enter neck size (inches)"} keyboardType={"numeric"} onChangeText={setNeckInput} />
        <Input placeholder={"Enter hip size (inches)"} keyboardType={"numeric"} onChangeText={setHipInput} />
        <Input placeholder={"Enter height (inches)"} keyboardType={"numeric"} onChangeText={setHeightInput} />
        <Pressable
          style={styles.buttonCalculate}
          onPress={() => { calculateBodyFat() }}>
          <Text style={styles.buttonCalculateText}>CALCULATE</Text>
        </Pressable>
      </View>
    </View>
  )
}