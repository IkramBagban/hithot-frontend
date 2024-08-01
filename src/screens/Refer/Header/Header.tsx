import { StatusBar, Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import getStyles from './Header.style';
import useThemeStyles from '../../../hooks/useThemeStyles';

const Header: React.FC = () => {
    const navigation = useNavigation();

    const styles = getStyles();

        const Theme = useThemeStyles(styleCreator);

    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View
                style={[
                    styles.HeaderContainer,
                    {
                        // borderWidth: 1,
                        // borderColor: 'red',
                        backgroundColor: Theme.ContainerColor.backgroundColor,
                    },
                ]}>
                <View style={[styles.HeaderSubContainer]}>
                    <View style={[styles.LeftContainer]}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            activeOpacity={0.8}>
                            <View 
                            style={[styles.LeftIconContainer]}
                            >
                                <Image
                                    source={require('../../../assets/leftArrow.png')}
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
                            {'Refer & earn'}
                        </Text>
                    </View>
                    <View style={[styles.RightContainer]}>
                        <TouchableOpacity
                            disabled={true}
                            // onPress={() => bottomSheetRef.current?.present()}
                            activeOpacity={0.8}>
                            <View
                                style={[
                                    styles.RowContainer,
                                    {
                                        backgroundColor:
                                            Theme.ActionColor.backgroundColor,
                                    },
                                ]}>
                                <View style={[styles.IconContainer]}>
                                    <Image
                                        source={require('../../../assets/diamond.png')}
                                        resizeMode="contain"
                                        style={[
                                            styles.Icon,
                                            {
                                                tintColor:
                                                    Theme.IconColor.tintColor,
                                            },
                                        ]}
                                    />
                                </View>
                                <View
                                    style={[
                                        styles.ActionTitleContainer,
                                        {
                                            backgroundColor:
                                                Theme.ActionColor
                                                    .backgroundColor,
                                        },
                                    ]}>
                                    <Text
                                        style={[
                                            styles.ActionTitle,
                                            { color: Theme.TextColor.color },
                                        ]}>
                                        {'24'}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
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
            backgroundColor: colors.bgColor
        },
    });