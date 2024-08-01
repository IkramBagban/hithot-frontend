import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import getStyles from './ActionDetails.style'; // Separate Style
import LinearGradient from 'react-native-linear-gradient';
import useThemeStyles from '../../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../config';

interface Props {
    // OnPress: () => void;
}

const ActionDetails: React.FC<Props> = (
    {
        // OnPress
    },
) => {
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
                <View style={[styles.ImageContainer]}>
                    <View
                        style={[
                            styles.ImageRadiusContainer,
                            {
                                backgroundColor:
                                    Theme.ActionColor.backgroundColor,
                            },
                        ]}>
                        <Image
                            source={require('../../../assets/hithotFire.png')}
                            resizeMode={'contain'}
                            style={[styles.LogoImage]}
                        />
                    </View>
                </View>
                <View style={[styles.BalanceContainer]}>
                    <View style={[styles.BalanceTitleContainer]}>
                        <Text
                            style={[
                                styles.BalanceTitle,
                                { color: Theme.TextColor.color },
                            ]}>
                            {'HITS'}
                        </Text>
                    </View>
                    <View style={[styles.BalanceSubTitleContainer]}>
                        <Text
                            style={[
                                styles.BalanceSubTitle,
                                { color: Theme.TextColor.color },
                            ]}>{`Your balance: ${0}`}</Text>
                    </View>
                </View>
                <View style={[styles.ActionButtonsContainer]}>
                    <View style={[styles.ActionButtonContainer]}>
                        <View style={[styles.ABTitleContainer]}>
                            <Text
                                style={[
                                    styles.ABTitle,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {'0'}
                            </Text>
                        </View>
                        <View style={[styles.ABSubTitleContainer]}>
                            <Text
                                style={[
                                    styles.ABSubTitle,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {'Diamonds\nEarned'}
                            </Text>
                        </View>
                        <View style={[styles.ABActionTitleContainer]}>
                            <Text style={[styles.ABActionTitle]}>
                                {'See details'}
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.Saprator]} />
                    <View style={[styles.ActionButtonContainer]}>
                        <View style={[styles.ABTitleContainer]}>
                            <Text
                                style={[
                                    styles.ABTitle,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {'0'}
                            </Text>
                        </View>
                        <View style={[styles.ABSubTitleContainer]}>
                            <Text
                                style={[
                                    styles.ABSubTitle,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {'Diamonds\nExchanged'}
                            </Text>
                        </View>
                        <View style={[styles.ABActionTitleContainer]}>
                            <Text style={[styles.ABActionTitle]}>
                                {'See details'}
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.Saprator]} />
                    <View style={[styles.ActionButtonContainer]}>
                        <View style={[styles.ABTitleContainer]}>
                            <Text
                                style={[
                                    styles.ABTitle,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {'0'}
                            </Text>
                        </View>
                        <View style={[styles.ABSubTitleContainer]}>
                            <Text
                                style={[
                                    styles.ABSubTitle,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {'Redeemed\nCash'}
                            </Text>
                        </View>
                        <View style={[styles.ABActionTitleContainer]}>
                            <Text style={[styles.ABActionTitle]}>
                                {'See details'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

export default ActionDetails;
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
