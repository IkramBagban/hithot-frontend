import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import getStyles from './Following.style'; // Saparete Style //
import SearchBar from './SearchBar/SearchBar';
import YourFavourites from './YourFavourites/YourFavourites';
import AYF from './AYF/AYF'; // Accounts you following Component //
import useThemeStyles from '../../../../../hooks/useThemeStyles';

interface HeaderProps {
    FB_ID: string;
    IsLoggedin: boolean;
}

const Following: React.FC<HeaderProps> = ({ FB_ID, IsLoggedin }) => {
    // All State's //

    const [searchQuery, setSearchQuery] = useState('');

    const styles = getStyles();

    const Theme = useThemeStyles(styleCreator);

    return (
        <>
            <View style={[styles.Container,{backgroundColor:Theme.ContainerColor.backgroundColor}]}>
                <SearchBar OnChangeText={setSearchQuery} />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[styles.ContentContainerStyle]}>
                    {IsLoggedin && (
                        <YourFavourites
                            FB_ID={FB_ID}
                            searchQuery={searchQuery}
                        />
                    )}
                    <AYF
                        IsLoggedin={IsLoggedin}
                        FB_ID={FB_ID}
                        searchQuery={searchQuery}
                    />
                    {/* Render Accounts you following Component */}
                </ScrollView>
            </View>
        </>
    );
};

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


export default Following;
