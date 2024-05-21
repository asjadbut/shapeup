import { View, Pressable, Text } from 'react-native';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Input from '../components/Input';
import DropDownCustom from '../components/DropDownCustom';
import ResultModal from '../components/ResultModal';
import styles from '../styles/style';

export default function BodyFatCalculator() {
  const options = [
    { label: 'Male', value: 1 },
    { label: 'Female', value: 2 }
  ]

  const [modalVisible, setModalVisible] = useState(false);

  const [genderInput, setGenderInput] = useState(1);
  const [waistInput, setWaistInput] = useState(0);
  const [neckInput, setNeckInput] = useState(0);
  const [hipInput, setHipInput] = useState(0);
  const [heightInput, setHeightInput] = useState(0);

  const [fatPercentage, setFatPercentage] = useState(0);

  const calculateBodyFat = () => {
    let [waist, hip, neck, height] = [Number(waistInput), Number(hipInput), Number(neckInput), Number(heightInput)];
    genderInput == 1 ? setFatPercentage(calculateBodyFatForMan(waist, neck, height).toFixed(2)) : setFatPercentage(calculateBodyFatForWoman(waist, hip, neck, height).toFixed(2));
    setModalVisible(true);
  }

  const calculateBodyFatForMan = (waist, neck, height) => {
    return ((86.010 * (Math.log10(waist - neck))) - (70.041 * (Math.log10(height))) + 36.76);
  }

  const calculateBodyFatForWoman = (waist, hip, neck, height) => {
    return ((163.205 * Math.log10(waist + hip - neck)) - (97.684 * Math.log10(height)) - 78.387);
  }

  return (
    <View style={[styles.container, styles.formPusher]}>
      <NavBar navBarTitle={"    Body Fat Calculator"} />
      <View style={styles.formContainer}>
        <DropDownCustom placeholder={"Select your gender"} options={options} value={genderInput} setGenderInput={setGenderInput} />
        <Input placeholder={"Enter waist size (inches)"} keyboardType={"numeric"} onChangeText={setWaistInput} />
        <Input placeholder={"Enter neck size (inches)"} keyboardType={"numeric"} onChangeText={setNeckInput} />
        {genderInput == 1 ? null : <Input placeholder={"Enter hip size (inches)"} keyboardType={"numeric"} onChangeText={setHipInput} />}
        <Input placeholder={"Enter height (inches)"} keyboardType={"numeric"} onChangeText={setHeightInput} />
        <Pressable
          style={styles.buttonCalculate}
          onPress={() => { calculateBodyFat() }}>
          <Text style={styles.buttonCalculateText}>CALCULATE</Text>
        </Pressable>
      </View>
      <ResultModal modalVisible={modalVisible} setModalVisible={setModalVisible} title={`Your body fat percentage`} result={`${fatPercentage}%`} />
    </View>
  )
}