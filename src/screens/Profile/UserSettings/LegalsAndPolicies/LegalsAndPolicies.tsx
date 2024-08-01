import {
    Dimensions,
    ScrollView,
    FlatList,
    TouchableOpacity,
    View,
    Text,
    Image,
    Linking,
    StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './LegalsAndPolicies.style'; // Saparate Style //
import Header from './Header/Header';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import useThemeStyles from '../../../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../../config';


const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const LegalsAndPolicies: React.FC = () => {
    const navigation = useNavigation();

    const Data = [
        {
            id: 1,
            Title: 'About us',
            url: 'https://hithot.app/',
        },
        {
            id: 2,
            Title: 'Privacy policy',
            url: 'https://hithot.app/privacy-policy-2/',
        },
        {
            id: 3,
            Title: 'Terms and conditions',
            url: 'https://hithot.app/terms-and-conditions/',
        },
        {
            id: 4,
            Title: 'Terms of use',
            url: 'https://hithot.app/terms-of-use/',
        },
        {
            id: 5,
            Title: 'Disclaimer',
            url: 'https://hithot.app/disclaimer/',
        },
        {
            id: 6,
            Title: 'Referral policy',
            url: 'https://hithot.app/referral-policy/',
        },
        {
            id: 7,
            Title: 'Diamonds policy',
            url: 'https://hithot.app/diamond-policy/',
        },
        {
            id: 8,
            Title: 'Community guidelines',
            url: 'https://hithot.app/community-guidelines/',
        },
        {
            id: 9,
            Title: 'Refunds & exchange policy',
            url: 'https://hithot.app/return-policy/',
        },
    ];


    const openLink = async url => {
        try {
            if (await InAppBrowser.isAvailable()) {
                await InAppBrowser.open(url, {
                    // iOS Properties
                    dismissButtonStyle: 'cancel',
                    preferredBarTintColor: '#EB853C',
                    preferredControlTintColor: 'white',
                    readerMode: false,
                    animated: true,
                    modalPresentationStyle: 'fullScreen',
                    modalTransitionStyle: 'coverVertical',
                    modalEnabled: true,
                    enableBarCollapsing: false,
                    // Android Properties
                    showTitle: true,
                    toolbarColor: '#EB853C',
                    secondaryToolbarColor: 'black',
                    navigationBarColor: 'black',
                    navigationBarDividerColor: 'white',
                    enableUrlBarHiding: true,
                    enableDefaultShare: true,
                    forceCloseOnRedirection: false,

                });
            } else {
                Linking.openURL(url);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const RenderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => openLink(item.url)}>
                    <View style={[styles.DataContainer]}>
                        <View style={[styles.TitleContainer]}>
                            <Text style={[styles.Title,{color:Theme.TextColor.color}]}>{item.Title}</Text>
                        </View>
                        <View style={[styles.IconContainer]}>
                            <Image
                                source={require('../../../../assets/chevronright.png')}
                                resizeMode={'contain'}
                                style={[styles.Icon]}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
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
        <View
            style={[{ backgroundColor: Theme.ContainerColor.backgroundColor,flex:1}]}>
            <Header />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.ContentContainerStyle]}>
                <FlatList
                    data={Data}
                    renderItem={RenderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[
                        styles.FlatListContentContainerStyle,
                    ]}
                />
            </ScrollView>
        </View>
    );
};

export default LegalsAndPolicies;


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
