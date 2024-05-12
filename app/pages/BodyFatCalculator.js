import { View } from 'react-native';
import TopBar from '../components/TopBar';
import Input from '../components/Input';
import DropDownCustom from '../components/DropDownCustom';
import PressableCustom from '../components/PressableCustom';
import styles from '../styles/style';

export default function BodyFatCalculator() {
  const options = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' }
  ]
  return (
    <View style={[styles.container, styles.formPusher]}>
      <TopBar topBarTitle={"    Body Fat Calculator"} />
      <View style={styles.formContainer}>
        <DropDownCustom placeholder={"Select your gender"} options={options} />
        <Input placeholder={"Enter your waist (inches)"} keyboardType={"numeric"} />
        <Input placeholder={"Enter your neck (inches)"} keyboardType={"numeric"} />
        <Input placeholder={"Enter your height (inches)"} keyboardType={"numeric"} />
        <PressableCustom btnText={"CALCULATE"}/>
      </View>
    </View>
  )
}