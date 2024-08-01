import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import getStyles from './Indicators.style'; // Saparate Style //
import useThemeStyles from '../../../../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../../../config';

interface Props {
    step: number;
}

const Indicators: React.FC<Props> = ({ step }) => {
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
            <View style={[styles.IndicatorContainer]}>
                <View
                    style={[
                        styles.Indicator,
                        {
                            backgroundColor:
                                step === 0
                                    ? !isDark
                                        ? '#EB853C'
                                        : '#FFFFFF'
                                    : '#45494D',
                        },
                    ]}
                />
                <View
                    style={[
                        styles.Indicator,
                        {
                            backgroundColor:
                                step === 1
                                    ? !isDark
                                        ? '#EB853C'
                                        : '#FFFFFF'
                                    : '#45494D',
                        },
                    ]}
                />
                <View
                    style={[
                        styles.Indicator,
                        {
                            backgroundColor:
                                step === 2
                                    ? !isDark
                                        ? '#EB853C'
                                        : '#FFFFFF'
                                    : '#45494D',
                        },
                    ]}
                />
            </View>
        </>
    );
};

export default Indicators;

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
