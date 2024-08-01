import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import getStyles from './FAQ.style';
import LinearGradient from 'react-native-linear-gradient';
import useThemeStyles from '../../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../config';

const FAQ: React.FC<{}> = ({}) => {
    const navigation = useNavigation();

    const [ShowData, HideData] = useState(null);

    const DataManage = id => {
        if (ShowData === id) {
            HideData(null);
        } else {
            HideData(id);
        }
    };

    const Data = [
        {
            id: 1,
            Title: 'What is a referral?',
            SubTitle:
                'Go to rewards section from the homescreen and click on the type of rewards and then claim your reward to make it yours.',
        },
        {
            id: 2,
            Title: 'How many people can i refer?',
            SubTitle:
                'Go to rewards section from the homescreen and click on the type of rewards and then claim your reward to make it yours.',
        },
        {
            id: 3,
            Title: 'How to share your referral code?',
            SubTitle:
                'Go to rewards section from the homescreen and click on the type of rewards and then claim your reward to make it yours.',
        },
        {
            id: 4,
            Title: 'Is there any validity to my referral reward',
            SubTitle:
                'Go to rewards section from the homescreen and click on the type of rewards and then claim your reward to make it yours.',
        },
        {
            id: 5,
            Title: 'What happens if i miss my referral code at the signup process',
            SubTitle:
                'Go to rewards section from the homescreen and click on the type of rewards and then claim your reward to make it yours.',
        },
        {
            id: 6,
            Title: 'Is there any limit to refer?',
            SubTitle:
                'Go to rewards section from the homescreen and click on the type of rewards and then claim your reward to make it yours.',
        },
        {
            id: 7,
            Title: 'What happens if i miss my referral code at the signup process',
            SubTitle:
                'Go to rewards section from the homescreen and click on the type of rewards and then claim your reward to make it yours.',
        },
    ];

    const RenderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => DataManage(item.id)}>
                    <View style={[styles.DataContainer]}>
                        <View style={[styles.TitleContainer]}>
                            <Text
                                style={[
                                    styles.Title,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {item.Title}
                            </Text>
                        </View>
                        <View style={[styles.IconContainer]}>
                            <Image
                                source={
                                    ShowData === item.id
                                        ? require('../../../assets/minus.png')
                                        : require('../../../assets/plus.png')
                                }
                                resizeMode={'contain'}
                                style={[styles.Icon,{tintColor:Theme.IconColor.tintColor}]}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                {ShowData === item.id && (
                    <View style={[styles.SubTitleContainer]}>
                        <Text
                            style={[
                                styles.SubTitle,
                                { color: Theme.TextColor.color },
                            ]}>
                            {item.SubTitle}
                        </Text>
                    </View>
                )}
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
            <View style={[styles.Container]}>
                <View
                    style={[
                        styles.SubContainer,
                        {
                            backgroundColor:
                                Theme.subcontainerColor.backgroundColor,
                            borderWidth: !isDark ? 0.5 : null,
                        },
                    ]}>
                    <View style={[styles.HeaderContainer]}>
                        <Text
                            style={[
                                styles.HeaderTitle,
                                { color: Theme.TextColor.color },
                            ]}>
                            {'FAQ'}
                        </Text>
                    </View>
                    <FlatList
                        data={Data}
                        renderItem={RenderItem}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={[styles.ContentContainerStyle]}
                        ItemSeparatorComponent={() => (
                            <View style={[styles.SeparatorContainer]} />
                        )}
                    />
                </View>
            </View>
        </>
    );
};

export default FAQ;

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
