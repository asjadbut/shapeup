import { View, Text, Image } from 'react-native';
import styles from '../styles/shapeup';
import { Link } from 'expo-router';

export default function TopBar({ topBarTitle }) {
    const backBtnIconURI = require('../images/icons/left-arrow.png');
    return (
        <View style={styles.topBar}>
            <Link href={"/"}>
                <View>
                    <View>
                        <Image
                            style={styles.topBarBackIcon}
                            source={backBtnIconURI}
                        />
                    </View>
                </View>
            </Link>
            <Text style={styles.topBarTitle}>{topBarTitle}</Text>
        </View>
    )
}