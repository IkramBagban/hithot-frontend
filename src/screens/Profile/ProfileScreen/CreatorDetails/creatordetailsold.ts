import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    FlatList,
    StyleSheet,
} from 'react-native';
import UserStoryTile from '../../../../components/Home/UserStoryTile';
import { RFValue } from 'react-native-responsive-fontsize';
import { useProfileStore } from '../../../../store/UserProfileStore';
import { scale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CircleProfile from '../../../../components/Feed/CircleProfile';
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetScrollView,
    BottomSheetTextInput,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import WalletStore from '../../../../store/WalletStore';
import userStoryStore from '../../../../store/userStoryStore';
import Share, { Options } from 'react-native-share';
import useThemeStyles from '../../../../hooks/useThemeStyles';
import styles from './CreatorDetails.style';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const url = 'https://play.google.com/store/search?q=hithot&c=apps&hl=en';
const message = 'How can we help you ??';
const title = 'HITHOT';

const options: Options = {
    title,
    url,
    message,
};

const BadgeData = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
];

interface HeaderProps {
    IsLoggedin: boolean;
    IsCreatorShow: (isEnabled: boolean) => void;
    refreshTrigger: any;
    FB_ID: string;
}

const CreatorDetails: React.FC<HeaderProps> = ({
    IsLoggedin,
    IsCreatorShow,
    refreshTrigger,
    FB_ID,
}) => {
    const LinkRenderItem = ({ item }) => {
        return (
            <>
                <View
                    style={{
                        width: '90%',
                        marginBottom: 14,
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // borderWidth: 1,
                        // borderColor: 'red',
                    }}>
                    <View
                        style={{
                            width: '14%',
                            justifyContent: 'center',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <View
                            style={{
                                // width: 40,
                                height: 40,
                                // borderRadius: 100,
                                // alignItems: 'center',
                                justifyContent: 'center',
                                // borderWidth: 1,
                                // borderColor: item.borderColor,
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Image
                                source={require('../../../../assets/blueLinkIc.png')}
                                resizeMode={'contain'}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            width: '84%',
                            alignSelf: 'center',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <View
                            style={{
                                width: '100%',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Figtree-Bold',
                                    color: '#FFFFFF',
                                }}>
                                {item?.link1 === null
                                    ? 'HITHOT link'
                                    : item?.link1}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: '100%',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontFamily: 'Figtree-Regular',
                                    color: '#FFFFFF',
                                    opacity: 0.6,
                                }}>
                                {item?.link1 === null
                                    ? 'HITHOT link'
                                    : item?.link1}
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        width: '90%',
                        marginBottom: 14,
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // borderWidth: 1,
                        // borderColor: 'red',
                    }}>
                    <View
                        style={{
                            width: '14%',
                            justifyContent: 'center',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <View
                            style={{
                                // width: 40,
                                height: 40,
                                // borderRadius: 100,
                                // alignItems: 'center',
                                justifyContent: 'center',
                                // borderWidth: 1,
                                // borderColor: item.borderColor,
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Image
                                source={require('../../../../assets/blueLinkIc.png')}
                                resizeMode={'contain'}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            width: '84%',
                            alignSelf: 'center',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <View
                            style={{
                                width: '100%',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Figtree-Bold',
                                    color: '#FFFFFF',
                                }}>
                                {item?.link2 === null
                                    ? 'HITHOT link'
                                    : item?.link2}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: '100%',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontFamily: 'Figtree-Regular',
                                    color: '#FFFFFF',
                                    opacity: 0.6,
                                }}>
                                {item?.link2 === null
                                    ? 'HITHOT link'
                                    : item?.link2}
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        width: '90%',
                        marginBottom: 14,
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // borderWidth: 1,
                        // borderColor: 'red',
                    }}>
                    <View
                        style={{
                            width: '14%',
                            justifyContent: 'center',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <View
                            style={{
                                // width: 40,
                                height: 40,
                                // borderRadius: 100,
                                // alignItems: 'center',
                                justifyContent: 'center',
                                // borderWidth: 1,
                                // borderColor: item.borderColor,
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Image
                                source={require('../../../../assets/blueLinkIc.png')}
                                resizeMode={'contain'}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            width: '84%',
                            alignSelf: 'center',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <View
                            style={{
                                width: '100%',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Figtree-Bold',
                                    color: '#FFFFFF',
                                }}>
                                {item?.link3 === null
                                    ? 'HITHOT link'
                                    : item?.link3}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: '100%',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontFamily: 'Figtree-Regular',
                                    color: '#FFFFFF',
                                    opacity: 0.6,
                                }}>
                                {item?.link3 === null
                                    ? 'HITHOT link'
                                    : item?.link3}
                            </Text>
                        </View>
                    </View>
                </View>
            </>
        );
    };

    const navigation = useNavigation();

    const { fetchUserProfileData, profileData, profileLoading } =
        useProfileStore(state => ({
            fetchUserProfileData: state.fetchUserProfileData,
            profileLoading: state.loading,
            profileData: state.profileData,
        }));

    const { fetchStories, storyData, loading } = userStoryStore(state => ({
        fetchStories: state.fetchStories,
        loading: state.loading,
        storyData: state.storyData,
    }));

    console.log('story', storyData.length);

    console.log(
        'profileData?.user_info?.profile_pic',
        profileData?.user_info?.profile_pic,
    );

    const { fetchWallet, walletData, walletLoading } = WalletStore(state => ({
        fetchWallet: state.fetchWallet,
        walletLoading: state.walletLoading,
        walletData: state.walletData,
    }));

    useEffect(() => {
        fetchUserProfileData(FB_ID);
    }, [FB_ID]);

    useEffect(() => {
        fetchStories(FB_ID);
    }, [FB_ID]);

    useEffect(() => {
        fetchWallet(FB_ID);
    }, [FB_ID]);

    useEffect(() => {
        if (refreshTrigger > 0) {
            fetchUserProfileData(FB_ID);
        }
    }, [refreshTrigger]);

    const handleNavigateToInfo = (index: number) => {
        if (profileData) {
            const INDEX = index === 0 ? 0 : 1;
            navigation.navigate('Info', {
                index: INDEX,
                FB_ID: FB_ID,
                username: profileData?.user_info?.username,
                TotalFollowing: profileData?.total_following,
                TotalFollowers: profileData?.total_fans,
                IsLoggedin: IsLoggedin,
            });
        }
    };

    const shareBottomRef = useRef<BottomSheetModal>(null);
    const LinkBottomRef = useRef<BottomSheetModal>(null);

    const OnShare = async () => {
        Share.open(options)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                err && console.log(err);
            });
    };

    const [shareText, setShareText] = useState<string>('');

    const shareHandler = () => {
        shareBottomRef.current?.present();
    };

    const LinkHandler = () => {
        LinkBottomRef.current?.present();
    };

    const Theme = useThemeStyles(styleCreator);

    return (
        <>
            <View
                style={[
                    styles.container,
                    { backgroundColor: Theme.ActionColor.backgroundColor },
                ]}>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={[styles.subcontainer]}>
                        <View style={[styles.imagecontainer]}>
                            <Image
                                source={require('../../../../assets/walletbalance.png')}
                                resizeMode={'contain'}
                                style={[
                                    styles.image,
                                    { tintColor: Theme.IconColor.tintColor },
                                ]}
                            />
                        </View>
                        <View style={[styles.walletcontainer]}>
                            <Text
                                style={[
                                    styles.wallettxt,
                                    { color: Theme.TextColor.color },
                                ]}>
                                Wallet balance
                            </Text>
                        </View>
                        <View style={[styles.walletcontainer2]}>
                            <Text
                                style={[
                                    styles.wallettxt2,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {walletData?.balance}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    width: '90%',
                    alignSelf: 'center',
                    // borderWidth: 1,
                    // borderColor: 'red',
                }}>
                <View
                    // className=" w-90 flex flex-row items-center"
                    style={[styles.storycontainer]}>
                    {profileLoading ? (
                        <View
                            style={{
                                width: scale(56),
                                height: verticalScale(56),
                            }}
                            className="bg-gray-500 animate-pulse rounded-full"
                        />
                    ) : (
                        <TouchableOpacity
                            disabled={storyData.length === 1 ? true : false}
                            activeOpacity={0.8}
                            onPress={() => {
                                navigation.navigate('StoryViewingPage', {
                                    fb_id: profileData?.fb_id,
                                    storyData: storyData,
                                });
                            }}>
                            <View style={[styles.profilepiccontainer]}>
                                <LinearGradient
                                    colors={['#F7C900', '#EB853C']}
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    style={[styles.profilesubcontainer]}>
                                    <Image
                                        source={{
                                            uri: profileData?.user_info
                                                ?.profile_pic,
                                        }}
                                        resizeMode="cover"
                                        style={[
                                            styles.profileimage,
                                            {
                                                width:
                                                    storyData.length === 1
                                                        ? 76
                                                        : 70, // Adjust the size of the icon
                                                height:
                                                    storyData.length === 1
                                                        ? 76
                                                        : 70,
                                            },
                                        ]}
                                    />
                                </LinearGradient>
                                {profileData?.user_info?.verified === 1 && (
                                    <Image
                                        source={require('../../../../assets/verifiedTick.png')}
                                        resizeMode="contain"
                                        style={[styles.profileverified]}
                                    />
                                )}
                            </View>
                        </TouchableOpacity>
                    )}
                    {/* <UserStoryTile
                        user={profileData}
                        seen={true}
                        stringUrl={profileData?.user_info.profile_pic}
                        hideUserName={true}
                        userName="Jhone Doe"
                    /> */}
                    <View
                        // className="flex-1 flex flex-row justify-between ml-6 py-4"
                        style={[styles.statsContainer]}>
                        <TouchableOpacity
                            disabled={
                                profileData?.total_fans === 0 ? true : false
                            }
                            onPress={() => handleNavigateToInfo(0)}
                            activeOpacity={0.8}>
                            <View
                                // className="py-2 px-3 flex items-center justify-center"
                                style={[
                                    styles.startItem,
                                    {
                                        borderRightColor:
                                            Theme.ActionColor.backgroundColor,
                                    },
                                ]}>
                                <Text
                                    className="text-base font-boldB"
                                    style={{
                                        color: Theme.TextColor.color,
                                        // fontWeight: 'bold',
                                        // fontSize: 16,
                                        // fontFamily: 'font-sans',
                                    }}>
                                    {profileLoading
                                        ? 0
                                        : profileData?.total_fans}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: RFValue(12),
                                        color: Theme.TextLightColor.color,
                                        fontFamily: 'font-sans',
                                    }}
                                    // className="font-sans"
                                >
                                    Followers
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            disabled={
                                profileData?.total_following === 0
                                    ? true
                                    : false
                            }
                            onPress={() => handleNavigateToInfo(1)}
                            activeOpacity={0.8}>
                            <View
                                // className="py-2 px-3 flex items-center"
                                style={[
                                    styles.startItem,
                                    {
                                        borderRightColor:
                                            Theme.ActionColor.backgroundColor,
                                    },
                                ]}>
                                <Text
                                    className="text-base font-boldB"
                                    style={{ color: Theme.TextColor.color }}>
                                    {profileLoading
                                        ? 0
                                        : profileData?.total_following}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: RFValue(12),
                                        color: Theme.TextLightColor.color,
                                    }}
                                    className=" font-sans">
                                    Following
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            disabled={
                                profileData?.total_heart === 0 ? true : false
                            }
                            activeOpacity={0.8}>
                            <View
                                // className="py-2 px-3 flex items-center"
                                style={[
                                    styles.startItem,
                                    {
                                        borderRightColor:
                                            Theme.ActionColor.backgroundColor,
                                    },
                                ]}>
                                <Text
                                    className="text-base font-boldB"
                                    style={{ color: Theme.TextColor.color }}>
                                    {profileLoading
                                        ? 0
                                        : profileData?.total_heart}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: RFValue(12),
                                        color: Theme.TextLightColor.color,
                                    }}
                                    className="font-sans">
                                    Heart
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        marginBottom: 8,
                        // display: 'flex', // Assuming flexbox is not set on a parent element
                        // flexDirection: 'row', // Default value, arranges items horizontally
                        // alignItems: 'flex-start',
                    }}
                    className="flex items-start"
                >
                    {profileLoading ? (
                        <View>
                            <View
                                style={{
                                    width: scale(56),
                                    height: verticalScale(10),
                                }}
                                className="bg-gray-500 mb-2"
                            />
                            <View
                                style={{
                                    width: scale(64),
                                    height: verticalScale(10),
                                }}
                                className="bg-gray-500"
                            />
                        </View>
                    ) : (
                        <View>
                            <Text
                                className="text-base font-boldB"
                                style={{ color: Theme.TextColor.color }}>
                                {profileData?.user_info?.username}
                            </Text>
                            <View style={{ width: '80%' }}>
                                <Text
                                    className="text-sm font-mediumM"
                                    style={{ color: Theme.TextColor.color }}>
                                    {profileData?.user_info?.bio}
                                </Text>
                            </View>
                        </View>
                    )}
                    <TouchableOpacity activeOpacity={0.8} onPress={LinkHandler}>
                        <View
                            style={{
                                width: '100%',
                                marginTop: 4,
                                alignItems: 'center',
                                flexDirection: 'row',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Image
                                source={require('../../../../assets/blueLinkIc.png')}
                                resizeMode="contain"
                                className="w-4 h-4"
                            />
                            <Text className="text-sm font-mediumM text-[#3897FF] ml-1">
                                links
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {IsCreatorShow && (
                    <View
                        style={{
                            width: '100%',
                            marginBottom: 6,
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('CreatorDashboard')
                            }
                            activeOpacity={0.8}>
                            <View
                                style={{
                                    paddingVertical: 10,
                                    paddingHorizontal: 14,
                                    borderRadius: 8,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    backgroundColor:
                                        Theme.ActionColor.backgroundColor,
                                }}>
                                <View
                                    style={{
                                        width: '56%',
                                        flexDirection: 'column',
                                        // borderWidth: 1,
                                        // borderColor: 'red',
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontFamily: 'Figtree-Regular',
                                            color: Theme.TextLightColor.color,
                                        }}>
                                        Accounts reached
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontFamily: 'Figtree-Bold',
                                            color: Theme.TextColor.color,

                                            // opacity: 0.6,
                                        }}>
                                        500+
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: '36%',
                                        alignItems: 'flex-end',
                                        justifyContent: 'center',
                                        // borderWidth: 1,
                                        // borderColor: 'red',
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontFamily: 'Figtree-Regular',
                                            color: Theme.TextColor.color,
                                        }}>
                                        See Dashboard
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: '6%',
                                        alignItems: 'flex-end',
                                        justifyContent: 'center',
                                        // borderWidth: 1,
                                        // borderColor: 'red',
                                    }}>
                                    <Image
                                        source={require('../../../../assets/chevronright.png')}
                                        resizeMode={'contain'}
                                        style={{ width: 14, height: 14 }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                <View
                    style={{
                        width: '100%',
                        marginTop: 6,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() =>
                            navigation.navigate('EditProfile', {
                                user: profileData?.user_info,
                            })
                        }>
                        <View
                            style={{
                                width: scale(150),
                                paddingVertical: 10,
                                borderRadius: 8,
                                backgroundColor:
                                    Theme.ActionColor.backgroundColor,
                            }}>
                            <Text
                                className="text-sm font-mediumM text-center"
                                style={{ color: Theme.TextColor.color }}>
                                Edit Profile
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={shareHandler}>
                        <View
                            style={{
                                width: scale(150),
                                paddingVertical: 10,
                                borderRadius: 8,
                                backgroundColor:
                                    Theme.ActionColor.backgroundColor,
                            }}>
                            <Text
                                className="text-sm font-mediumM text-center"
                                style={{ color: Theme.TextColor.color }}>
                                Share Profile
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {IsCreatorShow && (
                <View
                    style={{
                        width: '100%',
                        // borderWidth: 1,
                        // borderColor: 'red',
                    }}>
                    <View
                        style={{
                            width: '90%',
                            marginTop: 14,
                            alignSelf: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <Text
                            style={{
                                fontSize: 18,
                                fontFamily: 'Figtree-Bold',
                                color: Theme.TextColor.color,
                            }}>
                            Badges earned
                        </Text>
                        <Text
                            style={{
                                fontSize: 16,
                                fontFamily: 'Figtree-Regular',
                                color: '#EB853C',
                            }}>
                            View all
                        </Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            marginTop: 14,
                            paddingLeft: WIDTH / 18,
                        }}>
                        {BadgeData.map((_, index) => (
                            <View
                                style={{
                                    width: WIDTH / 3.8,
                                    marginRight: 14,
                                    // borderWidth: 1,
                                    // borderColor: 'red',
                                }}>
                                <View
                                    style={{
                                        width: '100%',
                                        height: 100,
                                        alignItems: 'center',
                                        // borderWidth: 1,
                                        // borderColor: 'red',
                                    }}>
                                    <Image
                                        source={require('../../../../assets/BadgeBG.png')}
                                        resizeMode={'contain'}
                                        style={{
                                            width: 88,
                                            height: 88,
                                            alignSelf: 'center',
                                        }}
                                    />
                                    <View
                                        style={{
                                            width: '60%',
                                            marginTop: 34,
                                            position: 'absolute',
                                            alignSelf: 'center',
                                            alignItems: 'center',
                                            // borderWidth: 1,
                                            // borderColor: 'red',
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                fontFamily: 'Figtree-Bold',
                                                color: '#FFFFFF',
                                            }}>
                                            3000K
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            bottom: 0,
                                            position: 'absolute',
                                            alignSelf: 'center',
                                            // borderWidth: 1,
                                            // borderColor: 'red',
                                        }}>
                                        <View
                                            style={{
                                                width: 28,
                                                height: 28,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 1000,
                                                backgroundColor: '#FFFFFF',
                                            }}>
                                            <Image
                                                source={require('../../../../assets/BadgeBG.png')}
                                                resizeMode={'contain'}
                                                style={{
                                                    width: 18,
                                                    height: 18,
                                                }}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: '100%',
                                        marginTop: 6,
                                        alignItems: 'center',
                                        // borderWidth: 1,
                                        // borderColor: 'red',
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontFamily: 'Figtree-Regular',
                                            color: Theme.TextColor.color,
                                        }}>
                                        Plays
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            )}
            <BottomSheetModal
                backdropComponent={props => (
                    <BottomSheetBackdrop
                        {...props}
                        disappearsOnIndex={-1}
                        appearsOnIndex={0}
                        onPress={() => shareBottomRef.current?.close()}
                        opacity={0.2}
                    />
                )}
                keyboardBehavior="interactive"
                ref={shareBottomRef}
                snapPoints={['56%']}
                handleIndicatorStyle={{
                    height: 4,
                    backgroundColor: '#FFFFFF4D',
                }}
                footerComponent={() => {
                    return (
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            className="flex flex-row px-6 bg-white/5 mt-4"
                            horizontal={true}>
                            <View className=" flex items-center justify-center my-4 mr-4">
                                <View
                                    style={{
                                        width: scale(56),
                                        height: verticalScale(56),
                                    }}
                                    className=" bg-white/5 rounded-full flex items-center justify-center">
                                    <Image
                                        source={require('../../../../assets/whitePlus.png')}
                                        style={{
                                            width: scale(26),
                                            height: verticalScale(26),
                                        }}
                                    />
                                </View>
                                <Text
                                    style={{ fontSize: RFValue(16) }}
                                    className=" font-mediumM text-white mt-2">
                                    Add story
                                </Text>
                            </View>
                            <View className=" flex items-center justify-center my-4 mr-4">
                                <View
                                    style={{
                                        width: scale(56),
                                        height: verticalScale(56),
                                    }}
                                    className=" bg-white/5 rounded-full flex items-center justify-center">
                                    <Image
                                        source={require('../../../../assets/whitePlus.png')}
                                        style={{
                                            width: scale(26),
                                            height: verticalScale(26),
                                        }}
                                    />
                                </View>
                                <Text
                                    style={{ fontSize: RFValue(16) }}
                                    className=" font-mediumM text-white mt-2">
                                    Download
                                </Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={OnShare}>
                                <View className=" flex items-center justify-center my-4 mr-4">
                                    <View
                                        style={{
                                            width: scale(56),
                                            height: verticalScale(56),
                                        }}
                                        className=" bg-white/5 rounded-full flex items-center justify-center">
                                        <Image
                                            source={require('../../../../assets/whitePlus.png')}
                                            style={{
                                                width: scale(26),
                                                height: verticalScale(26),
                                            }}
                                        />
                                    </View>
                                    <Text
                                        style={{ fontSize: RFValue(16) }}
                                        className=" font-mediumM text-white mt-2">
                                        Share
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View className=" flex items-center justify-center my-4 mr-4">
                                <View
                                    style={{
                                        width: scale(56),
                                        height: verticalScale(56),
                                    }}
                                    className=" bg-white/5 rounded-full flex items-center justify-center">
                                    <Image
                                        source={require('../../../../assets/whitePlus.png')}
                                        style={{
                                            width: scale(26),
                                            height: verticalScale(26),
                                        }}
                                    />
                                </View>
                                <Text
                                    style={{ fontSize: RFValue(16) }}
                                    className=" font-mediumM text-white mt-2">
                                    Copy link
                                </Text>
                            </View>
                            <View className=" flex items-center justify-center my-4 mr-4">
                                <View
                                    style={{
                                        width: scale(56),
                                        height: verticalScale(56),
                                    }}
                                    className=" bg-white/5 rounded-full flex items-center justify-center">
                                    <Image
                                        source={require('../../../../assets/whitePlus.png')}
                                        style={{
                                            width: scale(26),
                                            height: verticalScale(26),
                                        }}
                                    />
                                </View>
                                <Text
                                    style={{ fontSize: RFValue(16) }}
                                    className=" font-mediumM text-white mt-2">
                                    SMS
                                </Text>
                            </View>

                            {/* place holder */}
                            <View
                                style={{
                                    width: scale(26),
                                    height: verticalScale(26),
                                }}></View>
                        </ScrollView>
                    );
                }}
                backgroundStyle={{ backgroundColor: '#21262B' }}
                // stackBehavior=''
                handleStyle={{
                    backgroundColor: '#21262B',
                    borderTopRightRadius: 14,
                    borderTopLeftRadius: 14,
                    height: 24,
                    borderColor: 'transparent',
                }}>
                <BottomSheetView className=" flex-1   relative">
                    <View className=" px-6 bg-[#21262B]">
                        <Text
                            style={{ fontSize: RFValue(18) }}
                            className=" font-boldB text-white">
                            Share to your loved ones!
                        </Text>
                        <View className=" rounded-xl bg-white/25 flex flex-row items-center px-3 my-4">
                            <Image
                                source={require('../../../../assets/Search.png')}
                                resizeMode="contain"
                                style={{
                                    width: scale(20),
                                    height: verticalScale(20),
                                }}
                                className=" mr-2"
                            />
                            <BottomSheetTextInput
                                value={shareText}
                                maxLength={10}
                                onChangeText={text => setShareText(text)}
                                style={{ width: '100%', fontSize: scale(14) }}
                                onBlur={() => {
                                    // console.log('onBlur function is called');
                                    shareBottomRef.current?.snapToIndex(0);
                                }}
                                className=" font-sans text-white"
                                placeholder="Search"
                                placeholderTextColor={'#FFFFFF'}
                            />
                        </View>
                        <Text
                            style={{ fontSize: RFValue(18) }}
                            className=" font-boldB text-white">
                            Your favourites
                        </Text>
                    </View>

                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        className=" my-2 flex flex-row pl-6 bg-[#21262B]"
                        horizontal={true}>
                        <CircleProfile
                            url={require('../../../../assets/demoProfile.png')}
                            width={56}
                            height={56}
                        />
                        <CircleProfile
                            url={require('../../../../assets/demoProfile.png')}
                            width={56}
                            height={56}
                        />
                        <CircleProfile
                            url={require('../../../../assets/demoProfile.png')}
                            width={56}
                            height={56}
                        />
                    </ScrollView>

                    {/* <ScrollView
                        showsHorizontalScrollIndicator={false}
                        className="flex flex-row pl-6 bg-white/5 mt-4"
                        horizontal={true}>
                        <View className=" flex items-center justify-center my-4">
                            <View
                                style={{
                                    width: scale(48),
                                    height: verticalScale(48),
                                }}
                                className=" bg-white/5 rounded-full flex items-center justify-center">
                                <Image
                                    source={require('../../assets/whitePlus.png')}
                                    style={{
                                        width: scale(24),
                                        height: verticalScale(24),
                                    }}
                                />
                            </View>
                            <Text
                                style={{ fontSize: RFValue(16) }}
                                className=" font-mediumM text-white">
                                Add story
                            </Text>
                        </View>
                    </ScrollView> */}
                </BottomSheetView>
            </BottomSheetModal>
            <BottomSheetModal
                backdropComponent={props => (
                    <BottomSheetBackdrop
                        {...props}
                        disappearsOnIndex={-1}
                        appearsOnIndex={0}
                        onPress={() => LinkBottomRef?.current?.close()}
                        opacity={0.8}
                    />
                )}
                keyboardBehavior="interactive"
                ref={LinkBottomRef}
                snapPoints={['40%']}
                handleIndicatorStyle={{
                    height: 4,
                    backgroundColor: Theme.ActionColor.backgroundColor,
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
                <BottomSheetView>
                    <View
                        style={{
                            width: '90%',
                            marginBottom: 14,
                            alignSelf: 'center',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <Text
                            style={{
                                fontSize: 18,
                                fontFamily: 'Figtree-Bold',
                                color: Theme.TextColor.color,
                            }}>
                            Links
                        </Text>
                    </View>
                    <FlatList
                        data={[profileData?.profile_links]}
                        renderItem={LinkRenderItem}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                    />
                </BottomSheetView>
            </BottomSheetModal>
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

export default CreatorDetails;
