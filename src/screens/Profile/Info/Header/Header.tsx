import { Text, View, Image, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import getStyles from './Header.style';
import { useNavigation } from '@react-navigation/native';
import useThemeStyles from '../../../../hooks/useThemeStyles';

const Header: React.FC<{ UserName: string }> = ({ UserName }) => {
    const navigation = useNavigation();

    // console.log('Usernmae', UserName);

    const styles = getStyles();
    const Theme = useThemeStyles(styleCreator);
    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={[styles.HeaderContainer,{backgroundColor:Theme.ContainerColor.backgroundColor}]}>
                <View style={[styles.HeaderSubContainer]}>
                    <View style={[styles.LeftContainer]}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            activeOpacity={0.8}>
                            <View style={[styles.LeftIconContainer]}>
                                <Image
                                    source={require('../../../../assets/leftArrow.png')}
                                    resizeMode="contain"
                                    style={[styles.LeftIcon,{tintColor:Theme.IconColor.tintColor}]}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.CenterContainer]}>
                        <Text style={[styles.HeaderText,{color:Theme.TextColor.color}]}>{UserName}</Text>
                    </View>
                    <View style={[styles.RightContainer]}>
                        {/* <TouchableOpacity activeOpacity={0.8}>
                            <View style={[styles.ImageContainer]}>
                                <Image
                                    source={require('../../../assets/demoProfile2.png')}
                                    resizeMode="cover"
                                    style={[styles.Image]}
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
