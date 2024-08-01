import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import { StackNavigationType } from '../../route/MainStack';
import useThemeStyles from '../../hooks/useThemeStyles';
import { ThemeContext } from '../../../src/theme/ThemeContext';

const Header = () => {
    const styles = useThemeStyles(styleCreator);
    const navigation = useNavigation<StackNavigationType>();
    const { isDark } = useContext(ThemeContext);

    const logoSource = !isDark 
        ? require('../../assets/hithotdarklogo.png') 
        : require('../../assets/hithotwhitelogo.png');

    const searchIcon = !isDark 
        ? require('../../assets/SearchIcDark.png') 
        : require('../../assets/SearchIc.png');

    const notificationIcon = !isDark 
        ? require('../../assets/notificationDark.png') 
        : require('../../assets/notification.png');

    const messageIcon = !isDark
        ? require('../../assets/messageIcDark.png') 
        : require('../../assets/messageIc.png');

    return (
        <View style={styles.headerContainer}>
            <Image
                source={logoSource}
                resizeMode="contain"
                style={styles.logo}
            />
            <View style={styles.iconContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Discover')}>
                    <Image
                        source={searchIcon}
                        resizeMode="contain"
                        style={[styles.icon, styles.iconMarginRight]}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('NotificationScreen')}>
                    <Image
                        source={notificationIcon}
                        resizeMode="contain"
                        style={[styles.icon, styles.iconMarginRight]}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ChatScreen')}>
                    <Image
                        source={messageIcon}
                        resizeMode="contain"
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styleCreator = colors => StyleSheet.create({
    headerContainer: {
        width: '100%',
        backgroundColor: colors.bgColor,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        width: 96,
        height: 48,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
    },
    iconMarginRight: {
        marginRight: 28,
    },
});

export default Header;
