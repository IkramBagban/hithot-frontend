import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import getStyles from './AU.style'; // Saparate Style //
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
} from 'react-native-chart-kit';
import useThemeStyles from '../../../../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../../../config';

// Accounts reached this month

const AU: React.FC = () => {
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
            <View style={[styles.Container]}>
                <View
                    style={[
                        styles.SubContainer,
                        {
                            backgroundColor:
                                Theme.subcontainerColor.backgroundColor,
                            borderWidth: !isDark ? 0.5 : null,
                        },
                    ]}>
                    <View style={[styles.DetailsContainer]}>
                        <View style={[styles.ActionTitleContainer]}>
                            <Text
                                style={[
                                    styles.ActionTitle,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {'Avg usage'}
                            </Text>
                        </View>
                        <View style={[styles.RowContainer]}>
                            <View style={[styles.TitleContainer]}>
                                <Text
                                    style={[
                                        styles.Title,
                                        { color: Theme.TextColor.color },
                                    ]}>
                                    {'3.2hrs'}
                                </Text>
                            </View>
                            <View style={[styles.SubTitleContainer]}>
                                <Text style={[styles.SubTitle]}>
                                    {'+25 min'}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.ButtonContainer]}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View
                                style={[
                                    styles.ButtonSubContainer,
                                    {
                                        backgroundColor:
                                            Theme.ActionColor.backgroundColor,
                                    },
                                ]}>
                                <Text style={[styles.ButtonTitle]}>
                                    {'Set use limit'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

export default AU;

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
