import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import getStyles from './Followers.style'; // Saparate Style //
import SearchBar from './SearchBar/SearchBar';
import YourFavourites from './YourFavourites/YourFavourites';
import AF from './AF/AF'; /* All Followers Component */
import useThemeStyles from '../../../../../hooks/useThemeStyles';

interface HeaderProps {
    FB_ID: string;
    IsLoggedin: boolean;
}

const Followers: React.FC<HeaderProps> = ({ FB_ID, IsLoggedin }) => {
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
                    {/* Render All Followers Component */}
                    <AF
                        IsLoggedin={IsLoggedin}
                        FB_ID={FB_ID}
                        searchQuery={searchQuery}
                    />
                </ScrollView>
            </View>
        </>
    );
};

export default Followers;

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
