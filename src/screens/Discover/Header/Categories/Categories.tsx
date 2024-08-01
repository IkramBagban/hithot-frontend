import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import getStyles from './Categories.style'; // Saparate Style //
import useThemeStyles from '../../../../hooks/useThemeStyles';

// Send Props //

interface Props {
    ID: number;
    URL: any;
    TITLE: any;
    OnPress: () => void;
    Active: number;
}

const Categories: React.FC<Props> = ({ ID, URL, TITLE, OnPress, Active }) => {
    const styles = getStyles();
    const containerStyles = useThemeStyles(styleCreator);

    return (
        <>
            {/* <View style={[styles.Container]}> */}
            <TouchableOpacity activeOpacity={0.8} onPress={OnPress}>
                <View
                    style={[
                        styles.IconAndTitleContainer,
                        {
                            backgroundColor: Active ? containerStyles.boxStyle.active.backgroundColor : containerStyles.boxStyle.inactive.backgroundColor,
                            borderColor: Active ? containerStyles.boxStyle.active.borderColor : containerStyles.boxStyle.inactive.borderColor,
                        },
                    ]}>
                    {ID === 1 ? null : (
                        <View style={[styles.IconContainer]}>
                            <Image
                                source={URL}
                                resizeMode="contain"
                                style={[styles.Icon]}
                            />
                        </View>
                    )}
                    <View
                        style={[
                            styles.TitleContainer,
                            { paddingLeft: ID === 1 ? null : 10 },
                        ]}>
                        <Text style={[containerStyles.Title]}>{TITLE}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            {/* </View> */}
        </>
    );
};

const styleCreator = colors =>
    StyleSheet.create({
        boxStyle: {
            active:{
                backgroundColor: colors.activeContainerColor,
                borderColor: colors.activeBorderColor,
            },
            inactive:{
                backgroundColor: colors.inActiveContainerColor,
                borderColor: colors.inactiveBorderColor,
            },
        },
        Title:{
            fontSize: 14,
            fontFamily: 'Figtree-Medium',
            color: colors.textColor,
        }
    });

export default Categories;
