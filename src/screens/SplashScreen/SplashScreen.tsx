import { Image, StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import { useAuthStore } from '../../store/AuthStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../config';
import { useNavigation } from '@react-navigation/native';
import { Images } from '../../theme/Images';
import { Colors } from '../../theme/Colors';
import useThemeStyles from '../../hooks/useThemeStyles';

const SplashScreen = () => {
    const { setUserDetail } = useAuthStore();
    const navigation = useNavigation();

    const styles = useThemeStyles(useGlobalStyle);
    useEffect(() => {
        const fetchKeys = async () => {
            const fbId = await AsyncStorage.getItem(StorageKey.$FBID);
            const userDetails = await AsyncStorage.getItem(
                StorageKey.$USERDATA,
            );
            const userObj = JSON.parse(userDetails);
            console.log('Onboard Keys --> ', fbId, userDetails);
            setUserDetail(userObj);
            if (userObj && userObj.hasOwnProperty('fb_id')) {
                navigation.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'RootScreen',
                        },
                    ],
                });
            } else {
                navigation.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'Onboard',
                        },
                    ],
                });
            }
        };
        setTimeout(() => {
            fetchKeys();
        }, 500);
    }, []);
    return (
        <View style={styles.container}>
            <Image source={Images.appLogo} style={styles.appLogo} />
        </View>
    );
};

export default SplashScreen;

const useGlobalStyle = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.bgColor,
            justifyContent: 'center',
            alignItems: 'center',
        },
        appLogo: {
            height: 240,
            width: 240,
            resizeMode: 'contain',
        },
    });
