import { StatusBar, Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import getStyles from './Header.style';
import useThemeStyles from '../../../../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../../../config';

interface HeaderProps {
    onToggleCreatorProfile: (isEnabled: boolean) => void;
}

const Header: React.FC = ({}) => {
    const navigation = useNavigation();

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
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View
                style={[
                    styles.HeaderContainer,
                    { backgroundColor: Theme.ContainerColor.backgroundColor },
                ]}>
                <View style={[styles.HeaderSubContainer]}>
                    <View style={[styles.LeftContainer]}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            activeOpacity={0.8}>
                            <View style={[styles.LeftIconContainer]}>
                                <Image
                                    source={require('../../../../../assets/leftArrow.png')}
                                    resizeMode="contain"
                                    style={[
                                        styles.LeftIcon,
                                        {
                                            tintColor:
                                                Theme.IconColor.tintColor,
                                        },
                                    ]}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.CenterContainer]}>
                        <Text
                            style={[
                                styles.HeaderText,
                                { color: Theme.TextColor.color },
                            ]}>
                            {'Legals and policies'}
                        </Text>
                    </View>
                    <View style={[styles.RightContainer]}>
                        {/* <TouchableOpacity activeOpacity={0.8}>
                            <View style={[styles.RightIconContainer]}>
                                <Image
                                    source={require('../../../../../assets/HamIc.png')}
                                    resizeMode="contain"
                                    style={[styles.RightIcon]}
                                />
                            </View>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </View>
        </>
    );
};

export default Header;

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