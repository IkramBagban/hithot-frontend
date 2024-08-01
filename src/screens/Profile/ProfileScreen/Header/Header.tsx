import {
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    ImageSourcePropType,
    Switch,
    StyleSheet,
} from 'react-native';
import { useContext, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    BottomSheetModalProvider,
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetScrollView,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { RFValue } from 'react-native-responsive-fontsize';
import getStyles from './Header.style';
import SheetTile from '../../../../components/Profile/Sheet/SheetTile';
import {
    RootStackParamList,
    StackNavigationType,
} from '../../../../route/MainStack';
import { Gifs } from '../../../../theme/Gifs';
import { ThemeContext } from '../../../../theme/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../../config';
import useThemeStyles from '../../../../hooks/useThemeStyles';

interface HeaderProps {
    userDetails: any;
    onToggleCreatorProfile: (isEnabled: boolean) => void;
}

interface SettingOption {
    icon: ImageSourcePropType;
    title: string;
    sideText?: string;
    link?: keyof RootStackParamList;
}

const profileOptions: SettingOption[] = [
    {
        icon: Gifs.aboutUsGif,
        title: 'Tutorial',
        link: 'SuggestionTutorial',
    },
    {
        icon: Gifs.giftGif,
        title: 'Referral',
        sideText: '0 Referral',
        link: 'ReferScreen',
    },
    {
        icon: Gifs.verifiedGif,
        title: 'Request verification',
        link: 'RequestVerification',
    },
    {
        icon: Gifs.legalPolicyGif,
        title: 'Legals and policies',
        link: 'LegalsAndPolicies',
    },
    {
        icon: Gifs.walletGif,
        title: 'My wallet',
        sideText: '0 HITS',
        link: 'WalletScreen',
    },
    // {
    //     icon: Gifs.babyGif,
    //     title: 'Child mode',
    //     sideText: 'Off',
    //     link: 'ChildMode',
    // },
    {
        icon: Gifs.blockedGif,
        title: 'Blocked users',
        link: 'BlockedUser',
    },
    {
        icon: Gifs.activityGif,
        title: 'Your activity',
        link: 'YourActivity',
    },
    {
        icon: Gifs.crownGif,
        title: 'HITHOT subscription',
        link: 'SettingsSubscription',
    },
    {
        icon: Gifs.privacyGif,
        title: 'Account privacy',
        // link: 'Help',
    },
    {
        icon: Gifs.helpGif,
        title: 'Help',
        link: 'Help',
    },
    {
        icon: Gifs.aboutUsGif,
        title: 'About us',
        // link: 'Help',
    },
    {
        icon: Gifs.privacyGif,
        title: 'Language',
        // link: 'Help',
    },
    {
        icon: Gifs.logoutGif,
        title: 'Logout',
        // link: 'Help',
    },
];

const Header: React.FC<HeaderProps> = ({
    onToggleCreatorProfile,
    userDetails,
}) => {
    const bottomSheetRef = useRef<BottomSheetModal>(null);

    const [isEnabled, setIsEnabled] = useState(false);
    const { isDark, toggleTheme } = useContext(ThemeContext);
    const [isDarkMode, setIsDarkMode] = useState(isDark);

    const changeTheme = async () => {
        toggleTheme();
        await AsyncStorage.setItem(
            StorageKey.$THEME,
            !isDarkMode ? 'dark' : 'light',
        );
        setIsDarkMode(!isDarkMode);
    };
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        onToggleCreatorProfile(!isEnabled);
    };

    const navigation = useNavigation();

    const Theme = useThemeStyles(styleCreator);

    const styles = getStyles();

    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={[styles.HeaderContainer]}>
                <View style={[styles.HeaderSubContainer]}>
                    <View style={[styles.LeftContainer]}>
                        {/* <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            activeOpacity={0.8}>
                            <View style={[styles.LeftIconContainer]}>
                                <Image
                                    source={require('../../../../assets/leftArrow.png')}
                                    resizeMode="contain"
                                    style={[styles.LeftIcon]}
                                />
                            </View>
                        </TouchableOpacity> */}
                    </View>
                    <View style={[styles.CenterContainer]}>
                        <Text
                            style={[
                                styles.HeaderText,
                                { color: Theme.TextColor.color },
                            ]}>
                            {'Profile'}
                        </Text>
                    </View>
                    <View style={[styles.RightContainer]}>
                        <TouchableOpacity
                            onPress={() => bottomSheetRef.current?.present()}
                            activeOpacity={0.8}>
                            <View style={[styles.RightIconContainer]}>
                                <Image
                                    source={require('../../../../assets/HamIc.png')}
                                    resizeMode="contain"
                                    style={[
                                        styles.RightIcon,
                                        {
                                            tintColor:
                                                Theme.IconColor.tintColor,
                                        },
                                    ]}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <BottomSheetModal
                backdropComponent={props => (
                    <BottomSheetBackdrop
                        {...props}
                        disappearsOnIndex={-1}
                        appearsOnIndex={0}
                        onPress={() => bottomSheetRef.current?.close()}
                        opacity={0.6}
                    />
                )}
                keyboardBehavior="interactive"
                ref={bottomSheetRef}
                snapPoints={['90%']}
                handleIndicatorStyle={[
                    styles.handleIndicatorStyle,
                    {
                        backgroundColor: Theme.IconColor.tintColor,
                    },
                ]}
                backgroundStyle={[
                    styles.backgroundStyle,
                    {
                        backgroundColor: Theme.bgColor.backgroundColor,
                    },
                ]}
                // stackBehavior=''
                handleStyle={[
                    styles.handleStyle,
                    {
                        backgroundColor: Theme.bgColor.backgroundColor,
                    },
                ]}>
                <View style={[styles.BSHeaderContainer]}>
                    <Text
                        style={[
                            styles.BSHeaderTitle,
                            {
                                color: Theme.TextColor.color,
                            },
                        ]}>
                        User setting
                    </Text>
                    <TouchableOpacity>
                        {/* <Text
                            style={{ fontSize: RFValue(16) }}
                            className=" text-[#EB853C] font-sans">
                            Add account
                        </Text> */}
                    </TouchableOpacity>
                </View>
                <BottomSheetScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[styles.BSSContentContainerStyle]}>
                    <View
                        style={[
                            styles.ActionContainer,
                            {
                                backgroundColor:
                                    Theme.bgLightColor.backgroundColor,
                            },
                        ]}>
                        <View style={[styles.ActionSubContainer]}>
                            <Text
                                style={[
                                    styles.ActionTitle,
                                    {
                                        color: Theme.TextColor.color,
                                    },
                                ]}>
                                {isDarkMode ? '🌙 Dark' : '🌞 Light'}
                            </Text>
                            <Switch
                                trackColor={{
                                    false: '#f4f3f4',
                                    true: '#F7C900',
                                }}
                                thumbColor={isDarkMode ? '#f4f3f4' : '#F7C900'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={changeTheme}
                                value={isDarkMode}
                            />
                        </View>
                    </View>
                    <View
                        style={[
                            styles.ActionContainer,
                            {
                                backgroundColor:
                                    Theme.bgLightColor.backgroundColor,
                            },
                        ]}>
                        <View style={[styles.ActionSubContainer]}>
                            <Text
                                style={[
                                    styles.ActionTitle,
                                    {
                                        color: Theme.TextColor.color,
                                    },
                                ]}>
                                {'Creator profile'}
                            </Text>
                            <Switch
                                trackColor={{
                                    false: '#f4f3f4',
                                    true: '#F7C900',
                                }}
                                thumbColor={isEnabled ? '#f4f3f4' : '#F7C900'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                    {profileOptions.map(item => (
                        <SheetTile
                            userDetails={userDetails}
                            icon={item.icon}
                            title={item.title}
                            sideText={item.sideText}
                            path={item.link}
                        />
                    ))}
                </BottomSheetScrollView>
            </BottomSheetModal>
        </>
    );
};

const styleCreator = colors =>
    StyleSheet.create({
        bgColor: {
            backgroundColor: colors.bgColor,
        },
        bgLightColor: {
            backgroundColor: colors.bgLightColor,
        },
        TextColor: {
            color: colors.textColor,
        },
        TextLightColor: {
            color: colors.textLightColor,
        },
        IconColor: {
            tintColor: colors.iconColor,
        },
    });

export default Header;
