import { useNavigation } from '@react-navigation/native';
import {
    View,
    Image,
    Text,
    ImageSourcePropType,
    TouchableOpacity,
    StyleSheet,
    Linking,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
import {
    RootStackParamList,
    StackNavigationType,
} from '../../../route/MainStack';
import React from 'react';
import { useAuthStore } from '../../../store/AuthStore';
import useThemeStyles from '../../../hooks/useThemeStyles';
import getStyles from './SheetTile.style';
import InAppBrowser from 'react-native-inappbrowser-reborn';

interface Props {
    userDetails: any;
    icon: ImageSourcePropType;
    title: string;
    sideText?: string;
    path?: keyof RootStackParamList;
}

const SheetTile: React.FC<Props> = ({
    sideText,
    title,
    icon,
    path,
    userDetails,
}) => {
    const navigation = useNavigation<StackNavigationType>();
    const { logoutApp } = useAuthStore();
    const Theme = useThemeStyles(styleCreator);

    const styles = getStyles();

    console.log('title',title);
    

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


    return (
        <TouchableOpacity
            onPress={async () => {
                if (title === 'Logout') {
                    logoutApp();
                    navigation.reset({
                        index: 0,
                        routes: [
                            {
                                name: 'Onboard',
                            },
                        ],
                    });
                    return;
                }
                if (path)
                    navigation.navigate(path, { userDetails: userDetails });
                else if (title === 'About us') {
                    openLink('https://hithot.app/');
                }
                else if (title === 'Language'){
                    navigation.navigate('LanguagesScreen');
                }
            }
        }
            // className=" w-full mb-4 flex flex-row justify-between items-center"
            style={[styles.Container]}>
            <View style={[styles.IconContainer]}>
                <Image
                    source={icon}
                    resizeMode="contain"
                    style={[styles.Icon]}
                />
            </View>
            <View
                style={[
                    styles.TitleContainer,
                    { width: sideText ? '62%' : '84%' },
                ]}>
                <Text
                    style={[
                        styles.Title,
                        {
                            color: Theme.TextColor.color,
                        },
                    ]}>
                    {title}
                </Text>
            </View>
            {sideText && (
                <View style={[styles.SideTitleContainer]}>
                    <Text
                        style={[
                            styles.SideTitle,
                            {
                                color: Theme.TextLightColor.color,
                            },
                        ]}>
                        {sideText}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

const styleCreator = colors =>
    StyleSheet.create({
        TextColor: {
            color: colors.textColor,
        },
        TextLightColor: {
            color: colors.textLightColor,
        },
    });

export default SheetTile;
