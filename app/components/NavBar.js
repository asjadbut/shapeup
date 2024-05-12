import { View, Text, Image } from 'react-native';
import styles from '../styles/style';
import { Link } from 'expo-router';

export default function NavBar({ navBarTitle }) {
    const backBtnIconURI = require('../images/icons/left-arrow.png');
    return (
        <View style={styles.navBar}>
            <Link href={"/"}>
                <View>
                    <View>
                        <Image
                            style={styles.navBarBackIcon}
                            source={backBtnIconURI}
                        />
                    </View>
                </View>
            </Link>
            <Text style={styles.navBarTitle}>{navBarTitle}</Text>
        </View>
    )
}