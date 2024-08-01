import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import getStyles from './RC.style';
import LinearGradient from 'react-native-linear-gradient';
import { useEffect, useState } from 'react';
import { referStore } from '../../../store/referStore';
import Toast, { BaseToast } from 'react-native-toast-message';
import { useAuthStore } from '../../../store/AuthStore';
import useThemeStyles from '../../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../config';

const RC: React.FC<{}> = ({}) => {
    const navigation = useNavigation();

    const [referral_code, set_referral_code] = useState(String);

    const toastConfig = {
        success: (internalState: any) => (
            <BaseToast
                {...internalState}
                style={[styles.BaseToastStyle]}
                contentContainerStyle={[styles.BaseToastContentContainerStyle]}
                text2Style={[styles.BaseToasttext2Style]}
            />
        ),
    };

    const showToast = response => {
        Toast.show({
            type: 'success',
            // text1: 'Hello',
            text2: response[0]?.response,
        });
    };

    const { userDetails } = useAuthStore();

    const handleSubmit = async () => {
        const referData: ReferData = {
            fb_id: userDetails?.fb_id,
            referral_code: referral_code,
            // Add other fields as necessary
        };

        try {
            console.log('referData', referData);

            const response = await referStore(referData);
            showToast(response);
            // navigation.navigate('Profile');
        } catch (error) {
            console.log('Failed Log', error);
        }
    };

    const styles = getStyles();

    const Theme = useThemeStyles(styleCreator);

    const [isDark, setIsDark] = useState('');

    useEffect(() => {
        const savedTheme = async () => {
            const theme = await AsyncStorage.getItem(StorageKey.$THEME);
            console.log('theme', theme);

            if (theme) {
                setIsDark(theme === 'dark');
            }
        };
        savedTheme();
    }, []);


    return (
        <>
            <View
                style={[
                    styles.Container,
                    { backgroundColor: Theme.ContainerColor.backgroundColor },
                ]}>
                <View
                    style={[
                        styles.SubContainer,
                        {
                            backgroundColor:
                                Theme.subcontainerColor.backgroundColor,
                            borderWidth: !isDark ? 0.5 : null,
                        },
                    ]}>
                    <View style={[styles.HeaderContainer]}>
                        <Text
                            style={[
                                styles.HeaderTitle,
                                { color: Theme.TextColor.color },
                            ]}>
                            {
                                'Have a redeem code. Enter\ncode to win awesome rewards'
                            }
                        </Text>
                    </View>
                    <View
                        style={[
                            styles.InputAndButtonContainer,
                            {
                                backgroundColor: !isDark
                                    ? null
                                    : '#575B5E',
                                borderWidth: !isDark ? 0.5 : null,
                            },
                        ]}>
                        <View style={[styles.InputContainer]}>
                            <TextInput
                                keyboardType={'numeric'}
                                placeholder={'Enter redeem code'}
                                placeholderTextColor={Theme.TextColor.color}
                                value={referral_code}
                                onChangeText={set_referral_code}
                                style={[styles.TextInput]}
                            />
                        </View>
                        <View style={[styles.ButtonContainer]}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={handleSubmit}>
                                <LinearGradient
                                    colors={['#F7C900', '#EB853C']}
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    style={[styles.ButtonSubContainer]}>
                                    <Text style={[styles.ButtonTitle]}>
                                        {'Done'}
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <Toast
                position="top"
                ref={ref => Toast.setRef(ref)}
                config={toastConfig}
            />
        </>
    );
};

export default RC;

const styleCreator = colors =>
    StyleSheet.create({
        TextColor: {
            color: colors.textColor,
        },
        ActionColor: {
            backgroundColor: colors.bgLightColor,
        },
        TextLightColor: {
            color: colors.textLightColor,
        },
        IconColor: {
            tintColor: colors.iconColor,
        },
        ContainerColor: {
            backgroundColor: colors.bgColor,
        },
        BorderColor: {
            borderColor: colors.activeBorderColor,
        },
        subcontainerColor: {
            backgroundColor: colors.subContainerColor,
        },
    });
