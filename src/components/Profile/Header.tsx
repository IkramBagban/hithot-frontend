import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetScrollView,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    ImageSourcePropType,
    Platform,
    StatusBar,
    StyleSheet,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import SheetTile from './Sheet/SheetTile';
import { RootStackParamList, StackNavigationType } from '../../route/MainStack';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import useThemeStyles from '../../hooks/useThemeStyles';

interface SettingOption {
    icon: ImageSourcePropType;
    title: string;
    sideText?: string;
    link?: keyof RootStackParamList;
}

const profileOptions: SettingOption[] = [
    {
        icon: require('../../assets/reffral.png'),
        title: 'Referral',
        sideText: '0 Referral',
        link: 'ReferScreen',
    },
    {
        icon: require('../../assets/reffral.png'),
        title: 'Request verification',
    },
    {
        icon: require('../../assets/reffral.png'),
        title: 'Legals and policies',
    },
    {
        icon: require('../../assets/reffral.png'),
        title: 'My wallet',
        sideText: '0 HITS',
        link: 'WalletScreen',
    },
    {
        icon: require('../../assets/reffral.png'),
        title: 'Child mode',
        sideText: 'Off',
        link: 'ChildMode',
    },
    {
        icon: require('../../assets/reffral.png'),
        title: 'Blocked users',
        link: 'BlockedUser',
    },
    {
        icon: require('../../assets/reffral.png'),
        title: 'Help',
        link: 'Help',
    },
];

const Header = () => {
    const navigation = useNavigation();

    const bottomSheetRef = useRef<BottomSheetModal>(null);


    const Theme = useThemeStyles(styleCreator);

    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View
                style={{
                    width: '100%',
                    paddingTop: Platform.OS === 'ios' ? 60 : 40,
                    paddingBottom: 20,
                    backgroundColor: Theme.ContainerColor.backgroundColor,
                    // borderWidth: 1,
                    // borderColor: 'red',
                }}>
                <View
                    style={{
                        width: '90%',
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // borderWidth: 1,
                        // borderColor: 'red',
                    }}>
                    <View
                        style={{
                            width: '14%',
                            alignItems: 'flex-start',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            activeOpacity={0.8}>
                            <View
                                style={{
                                    width: 32,
                                    height: 32,
                                    justifyContent: 'center',
                                    // borderWidth: 1,
                                    // borderColor: 'red',
                                }}>
                                <Image
                                    source={require('../../assets/leftArrow.png')}
                                    resizeMode="contain"
                                    style={{
                                        width: 16,
                                        height: 16,
                                        tintColor: Theme.IconColor.tintColor,
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            width: '70%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontFamily: 'Figtree-Regular',
                                color: Theme.TextColor.color,
                            }}>
                            {'Profile'}
                        </Text>
                    </View>
                    <View
                        style={{
                            width: '14%',
                            alignItems: 'flex-end',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        {/* <TouchableOpacity
                            onPress={() => bottomSheetRef.current?.present()}
                            activeOpacity={0.8}>
                            <View
                                style={{
                                    width: 32,
                                    height: 32,
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                    // borderWidth: 1,
                                    // borderColor: 'red',
                                }}>
                                <Image
                                    source={require('../../../../assets/HamIc.png')}
                                    resizeMode="contain"
                                    style={{
                                        width: 18,
                                        height: 18,
                                    }}
                                />
                            </View>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </View>

            {/* profile bottom sheet */}

            <BottomSheetModal
                backdropComponent={props => (
                    <BottomSheetBackdrop
                        {...props}
                        disappearsOnIndex={-1}
                        appearsOnIndex={0}
                        onPress={() => bottomSheetRef.current?.close()}
                        opacity={0.2}
                    />
                )}
                keyboardBehavior="interactive"
                ref={bottomSheetRef}
                snapPoints={['90%']}
                handleIndicatorStyle={{
                    height: 4,
                    backgroundColor: '#FFFFFF4D',
                }}
                backgroundStyle={{
                    backgroundColor: Theme.ContainerColor.backgroundColor,
                }}
                // stackBehavior=''
                handleStyle={{
                    backgroundColor: Theme.ContainerColor.backgroundColor,
                    borderTopRightRadius: 14,
                    borderTopLeftRadius: 14,
                    height: 24,
                    borderColor: 'transparent',
                }}>
                <BottomSheetScrollView
                    contentContainerStyle={{
                        backgroundColor: Theme.ContainerColor.backgroundColor,
                        paddingHorizontal: 24,
                    }}
                    className=" px-6 bg-[#21262B]">
                    <View className=" w-full flex flex-row justify-between items-center mb-4">
                        <Text
                            style={{
                                fontSize: RFValue(20),
                                color: Theme.TextColor.color,
                            }}
                            className=" text-white font-boldB">
                            User setting
                        </Text>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    fontSize: RFValue(16),
                                    color: Theme.TextColor.color,
                                }}
                                className=" text-[#EB853C] font-sans">
                                Add account
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {profileOptions.map(item => (
                        <SheetTile
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

export default Header;

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