import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import getStyles from './ECSH.style';
import LinearGradient from 'react-native-linear-gradient';
import useThemeStyles from '../../../hooks/useThemeStyles';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../config';

const ECSH: React.FC<{}> = ({}) => {
    const navigation = useNavigation();

    const Data = [
        {
            id: 1,
            Steps: '01',
            Title: 'Get rs. 10 on your first referral.',
        },
        {
            id: 2,
            Steps: '02',
            Title: 'Get extra 5 coins with rs. 10 on your second referral.',
        },
        {
            id: 3,
            Steps: '03',
            Title: 'You and your friends will receive a 5% discount, up to rs. 50, on your next purchase.',
        },
    ];

    const RenderItem = ({ item }) => {
        return (
            <>
                <View style={[styles.DataContainer]}>
                    <View style={[styles.StepsContainer]}>
                        <LinearGradient
                            colors={['#F7C900', '#EB853C']}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            style={[styles.StepsRadiusContainer]}>
                            <Text style={[styles.StepsTitle]}>
                                {item.Steps}
                            </Text>
                        </LinearGradient>
                    </View>
                    <View style={[styles.TitleContainer]}>
                        <Text
                            style={[
                                styles.Title,
                                { color: Theme.TextColor.color },
                            ]}>
                            {item.Title}
                        </Text>
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
                            {'Earn cashback see how?'}
                        </Text>
                    </View>
                    <FlatList
                        data={Data}
                        renderItem={RenderItem}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={[styles.ContentContainerStyle]}
                        ItemSeparatorComponent={() => (
                            <View style={[styles.SeparatorContainer]}>
                                <View style={[styles.SeparatorLineContainer]}>
                                    <LinearGradient
                                        colors={['#F7C900', '#EB853C']}
                                        start={{ x: 1, y: 1 }}
                                        end={{ x: 1, y: 0 }}
                                        style={[styles.SeparatorLine]}
                                    />
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </>
    );
};

export default ECSH;


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
