import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import getStyles from './SC.style';
import { useEffect, useState } from 'react';
import Share, { Options } from 'react-native-share';
import useThemeStyles from '../../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../config';

const SC: React.FC<{}> = ({}) => {
    const navigation = useNavigation();

    const [Code, SetCode] = useState('CIFOFO0443');

    const HandleCopy = () => {
        SetCode();
        console.log('Code Copied', Code);
    };

    const url = 'https://play.google.com/store/search?q=hithot&c=apps&hl=en';
    const message = Code;
    const title = 'HITHOT';

    const options: Options = {
        title,
        url,
        message,
    };

    const HandleShare = async () => {
        Share.open(options)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                err && console.log(err);
            });
    };

    const styles = getStyles();


    const Theme = useThemeStyles(styleCreator);
    console.log('theme', Theme);
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
            <View
                style={[
                    styles.Container,
                    { backgroundColor: Theme.ContainerColor.backgroundColor },
                ]}>
                <View
                    style={[
                        styles.SubContainer,
                        {
                            backgroundColor:
                                Theme.subcontainerColor.backgroundColor,
                            borderWidth:!isDark ?  0.5 : null,
                        },
                        // {
                        //     borderWidth: 0.5,
                        //     borderColor: Theme.BorderColor.borderColor,
                        //     backgroundColor:
                        //         Theme.ContainerColor.backgroundColor,
                        // },
                    ]}>
                    <View
                        style={[
                            styles.CodeContainer,
                            // {
                            //     backgroundColor:
                            //         Theme.ContainerColor.backgroundColor,
                            // },
                        ]}>
                        <Text
                            style={[
                                styles.Code,
                                { color: Theme.TextColor.color },
                            ]}>
                            {Code}
                        </Text>
                    </View>
                    <View
                        style={[
                            styles.CopyButtonContainer,
                            {
                                backgroundColor:
                                    Theme.subcontainerColor.backgroundColor,
                            },
                        ]}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={HandleCopy}>
                            <Image
                                source={require('../../../assets/copyIc.png')}
                                resizeMode={'contain'}
                                style={[
                                    styles.CopyIcon,
                                    {
                                        tintColor: Theme.IconColor.tintColor,
                                    },
                                ]}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.ShareButtonContainer]}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={HandleShare}>
                            <View style={[styles.ShareButtonSubContainer]}>
                                <View
                                    style={[styles.ShareButtonTitleContainer]}>
                                    <Text style={[styles.ShareButtonTitle]}>
                                        {'Share'}
                                    </Text>
                                </View>
                                <View style={[styles.ShareButtonIconContainer]}>
                                    <Image
                                        source={require('../../../assets/sendIc.png')}
                                        resizeMode={'contain'}
                                        style={[styles.ShareButtonIcon]}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

export default SC;


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
