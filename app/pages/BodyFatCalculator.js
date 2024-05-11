import { View, Text, Image } from 'react-native';
import styles from '../styles/shapeup';
import TopBar from '../components/TopBar';
import Input from '../components/Input';

export default function BodyFatCalculator() {
  return (
    <View style={styles.container}>
      <TopBar topBarTitle={"      Body Fat Calculator"} />
      <View style={styles.formContainer}>
        <Input placeholder={"Select Your Gender"} keyboardType={"numeric"} />
        <Input placeholder={"Enter your waist (inches)"} keyboardType={"numeric"} />
        <Input placeholder={"Enter your neck (inches)"} keyboardType={"numeric"} />
        <Input placeholder={"Enter your height (inches)"} keyboardType={"numeric"} />
      </View>
    </View>
  )
}