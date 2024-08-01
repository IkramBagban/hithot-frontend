import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './Footer.style'; // Separate Style
import useThemeStyles from '../../../../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../../../config';
import Popup from '../Popup/Popup';

interface Props {
    // OnPress: () => void;
}

const Footer: React.FC<Props> = (
    {
        // OnPress
    },
) => {
    const styles = getStyles();

      const [ShowPopup, HidePopup] = useState(false);

        const Theme = useThemeStyles(styleCreator);
        console.log('theme', Theme);
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


          const PopupManage = () => {
              if (ShowPopup) {
                  HidePopup(false);
              } else {
                  HidePopup(true);
              }
          };

    return (
        <View style={[styles.FooterContainer]}>
            <TouchableOpacity activeOpacity={0.8} onPress={PopupManage}>
                <LinearGradient
                    colors={['#F7C900', '#EB853C']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.FooterSubContainer}>
                    <View style={styles.FooterTitleContainer}>
                        <Text style={styles.FooterTitle}>
                            {'Buy Subscription'}
                        </Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
            {ShowPopup && <Popup />}
        </View>
    );
};

export default Footer;

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