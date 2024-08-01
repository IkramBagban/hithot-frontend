import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import getStyles from './YourActivity.style'; // Saparate Style //
import Header from './Header/Header';
import AU from './AU/AU';
import DUT from './DUT/DUT';
import UD from './UD/UD';
import useThemeStyles from '../../../../hooks/useThemeStyles';

const YourActivity: React.FC = () => {
    const styles = getStyles();

     const Theme = useThemeStyles(styleCreator);

    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={[styles.Container,{backgroundColor:Theme.ContainerColor.backgroundColor}]}>
                <Header />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[styles.ContentContainerStyle]}>
                    <AU />
                    <DUT />
                    <UD />
                </ScrollView>
            </View>
        </>
    );
};

export default YourActivity;

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

