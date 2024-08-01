import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import getStyles from './HTEH.style'; // Separate Style
import LinearGradient from 'react-native-linear-gradient';
import useThemeStyles from '../../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../config';

interface Props {
    OnPress: () => void;
}

const HTEH: React.FC<Props> = ({ OnPress }) => {
    const PointsData = [
        {
            id: 1,
            Title: '1.',
            SubTitle:
                'Participate in HITHOT creator program\nand upload exclusive/fresh videos.',
        },
        {
            id: 2,
            Title: '2.',
            SubTitle:
                'Your content will be evaluated on the basis of shares, likes, engagement and virality.',
        },
    ];

    const PointsRenderItem = ({ item }) => {
        return (
            <>
                <View style={[styles.RowContainer]}>
                    <View style={[styles.TitleContainer]}>
                        <Text
                            style={[
                                styles.Title,
                                { color: Theme.TextColor.color },
                            ]}>
                            {item.Title}
                        </Text>
                    </View>
                    <View style={[styles.SubTitleContainer]}>
                        <Text
                            style={[
                                styles.SubTitle,
                                { color: Theme.TextColor.color },
                            ]}>
                            {item.SubTitle}
                        </Text>
                    </View>
                </View>
            </>
        );
    };

    const Data = [
        {
            id: 1,
            HeaderTitle: 'How to earn hits?',
        },
        {
            id: 2,
            HeaderTitle: 'How to earn hits?',
        },
    ];

    const RenderItem = ({ item }) => {
        return (
            <>
                <View
                    style={[
                        styles.DataContainer,
                        {
                            backgroundColor:
                                Theme.subcontainerColor.backgroundColor,
                            borderWidth: !isDark ? 0.5 : null,
                        },
                    ]}>
                    <View style={[styles.DataSubContainer]}>
                        <View style={[styles.HeaderContainer]}>
                            <Text style={[styles.HeaderTitle,{color:Theme.TextColor.color}]}>
                                {item.HeaderTitle}
                            </Text>
                        </View>
                        <FlatList
                            data={PointsData}
                            renderItem={PointsRenderItem}
                            showsVerticalScrollIndicator={false}
                            nestedScrollEnabled={true}
                            contentContainerStyle={[
                                styles.PointsContentContainerStyle,
                            ]}
                        />
                        <View style={[styles.ButtonContainer]}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={OnPress}>
                                <LinearGradient
                                    colors={['#F7C900', '#EB853C']}
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    style={[styles.ButtonSubContainer]}>
                                    <View style={[styles.ButtonTitleContainer]}>
                                        <Text style={[styles.ButtonTitle]}>
                                            {'Participate now'}
                                        </Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    };

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
            <View style={[styles.Container,{backgroundColor:Theme.ContainerColor.backgroundColor}]}>
                <FlatList
                    data={Data}
                    renderItem={RenderItem}
                    horizontal={true}
                    nestedScrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[styles.ContentContainerStyle]}
                />
            </View>
        </>
    );
};

export default HTEH;
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
