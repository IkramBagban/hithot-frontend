import { StatusBar, Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import getStyles from './Header.style';
import useThemeStyles from '../../../../../hooks/useThemeStyles';

const Header: React.FC = () => {
    const navigation = useNavigation();

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
                                    source={require('../../../../../assets/leftArrow.png')}
                                    resizeMode="contain"
                                    style={[styles.LeftIcon,{tintColor:Theme.IconColor.tintColor}]}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.CenterContainer]}>
                        <Text style={[styles.HeaderText,{color:Theme.TextColor.color}]}>
                            {'Blocked users'}
                        </Text>
                    </View>
                    <View style={[styles.RightContainer]}>
                        {/* <TouchableOpacity
                            onPress={() => bottomSheetRef.current?.present()}
                            activeOpacity={0.8}>
                            <View style={[styles.RightIconContainer]}>
                                <Image
                                    source={require('../../../../assets/HamIc.png')}
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
