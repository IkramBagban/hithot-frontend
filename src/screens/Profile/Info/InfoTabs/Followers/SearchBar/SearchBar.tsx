import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import getStyles from './SearchBar.style'; // Saparate Style //
import useThemeStyles from '../../../../../../hooks/useThemeStyles';

// Send Props //

interface Props {
    OnChangeText: any;
}

const SearchBar: React.FC<Props> = ({ OnChangeText }) => {
    const styles = getStyles();
    const Theme = useThemeStyles(styleCreator);

    return (
        <>
            <View style={[styles.Container]}>
                <View style={styles.IconAndInputContainer}>
                    <View style={[styles.IconContainer]}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../../../../../assets/SearchIc.png')}
                                resizeMode="contain"
                                style={[
                                    styles.Icon,
                                    { tintColor: Theme.IconColor.tintColor },
                                ]}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={[
                            styles.InputContainer,
                            {
                                backgroundColor:
                                    Theme.ActionColor.backgroundColor,
                            },
                        ]}>
                        <TextInput
                            placeholder={'Search'}
                            placeholderTextColor={Theme.TextColor.color}
                            style={styles.TextInput}
                            onChangeText={OnChangeText}
                        />
                    </View>
                </View>
            </View>
        </>
    );
};

export default SearchBar;

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
