import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import UserStoryTile from '../Home/UserStoryTile';
import { RFValue } from 'react-native-responsive-fontsize';
import { useProfileStore } from '../../store/UserProfileStore';
import { scale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Popup from './Popup';
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { followUsersStore } from '../../store/followUsersStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userStoryStore from '../../store/userStoryStore';
import { useAuthStore } from '../../store/AuthStore';
import useThemeStyles from '../../hooks/useThemeStyles';
import styles from './ProfileDetail.styles';

const ProfileDetail: React.FC<{
    FB_ID: string;
    refreshTrigger: any;
    onIsPrivateChange: (isPrivate: boolean) => void;
}> = ({ FB_ID, refreshTrigger, onIsPrivateChange }) => {
    console.log('ProfileDetail :- FB_ID', FB_ID);
    console.log('ProfileDetail :- followeduserstatus');

    const navigation = useNavigation();

    const [ShowPopup, HidePopup] = useState(false);
    // const [isFollowing, setIsFollowing] = useState();
    const [followStatus, setFollowStatus] = useState(null);

    const { userDetails } = useAuthStore();

    const fb_id = userDetails?.fb_id; // Adjust if necessary

    const [follweduser, setfolloweduser] = useState('');

    const getFollowStatus = async () => {
        try {
            const status = await AsyncStorage.getItem('followStatus');
            if (status !== null) {
                setfolloweduser(status);
                // Handle the retrieved status
                console.log('statusaync', status);
            }
        } catch (error) {
            console.log('Error retrieving follow status', error);
        }
    };

    const handleFollowUnfollow = async followedstatus => {
        console.log('followedstatus', followedstatus);

        const newFollowStatus = followedstatus === '1' ? '0' : '1';
        console.log('newFollowStatus', newFollowStatus);
        try {
            const response = await followUsersStore(
                fb_id,
                FB_ID,
                newFollowStatus,
            );
            setFollowStatus(response.status);
            await AsyncStorage.setItem('followStatus', newFollowStatus);
            setfolloweduser(newFollowStatus);
            // setIsFollowing(!isFollowing);
        } catch (error) {
            setFollowStatus('Error updating follow status');
        }
    };

    useEffect(() => {
        getFollowStatus();
    }, [follweduser]);

    const PopupManage = () => {
        if (ShowPopup) {
            HidePopup(false);
        } else {
            HidePopup(true);
        }
    };

    const LinkBottomRef = useRef<BottomSheetModal>(null);

    const LinkHandler = () => {
        LinkBottomRef.current?.present();
    };

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

    useEffect(() => {
        fetchStories(FB_ID);
    }, [FB_ID]);

    useEffect(() => {
        fetchUserProfileData(FB_ID);
    }, [fetchUserProfileData, FB_ID]);

    const handleNavigateToInfo = (index: number) => {
        if (profileData) {
            const INDEX = index === 0 ? 0 : 1;
            // console.log('screen', INDEX);

            navigation.navigate('Info', {
                index: INDEX,
                FB_ID: FB_ID,
                username: profileData.user_info.username,
                TotalFollowing: profileData.total_following,
                TotalFollowers: profileData.total_fans,
            });
        }
    };

    useEffect(() => {
        if (profileData) {
            const IsPrivate = profileData?.user_info?.isPrivate;
            onIsPrivateChange(IsPrivate);
        }
    }, [profileData]);

    useEffect(() => {
        if (refreshTrigger > 0) {
            fetchUserProfileData(FB_ID);
        }
    }, [refreshTrigger]);



     const Theme = useThemeStyles(styleCreator);

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
                                source={require('../../assets/blueLinkIc.png')}
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
                                source={require('../../assets/blueLinkIc.png')}
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
                                source={require('../../assets/blueLinkIc.png')}
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

    return (
        <>
            <View
                style={[
                    styles.container,
                    {
                        backgroundColor: Theme.ContainerColor.backgroundColor,
                    },
                ]}>
                <View
                    style={[styles.subcontainer]}
                    // style={{
                    //     width: '90%',
                    //     alignSelf: 'center',
                    // }}
                >
                    <View
                        style={[styles.storycontainer]}
                        // className="flex flex-row items-center"
                    >
                        {!profileData?.user_info?.profile_pic ? (
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
                                <View
                                    style={[styles.profilepiccontainer]}
                                    // style={{
                                    //     width: 82,
                                    //     marginBottom: 14,
                                    //     alignItems: 'center',
                                    //     // borderWidth: 1,
                                    //     // borderColor: 'red',
                                    // }}
                                >
                                    <LinearGradient
                                        colors={['#F7C900', '#EB853C']}
                                        start={{ x: 1, y: 1 }}
                                        end={{ x: 1, y: 0 }}
                                        // style={{
                                        //     width: 76, // Adjust the size of the icon
                                        //     height: 76,
                                        //     alignItems: 'center',
                                        //     justifyContent: 'center',
                                        //     borderRadius: 1000,
                                        // }}
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
                                            // style={{
                                            //     width:
                                            //         storyData.length === 1
                                            //             ? 76
                                            //             : 70, // Adjust the size of the icon
                                            //     height:
                                            //         storyData.length === 1
                                            //             ? 76
                                            //             : 70,
                                            //     borderRadius: 1000,
                                            //     borderWidth: 2,
                                            //     borderColor: '#21262B',
                                            // }}
                                        />
                                    </LinearGradient>
                                    {profileData?.user_info?.verified === 1 && (
                                        <Image
                                            source={require('../../assets/verifiedTick.png')}
                                            resizeMode="contain"
                                            style={[styles.profileverified]}
                                        />
                                    )}
                                </View>
                            </TouchableOpacity>
                            // <UserStoryTile
                            //     seen={true}
                            //     stringUrl={user.profile_pic}
                            //     hideUserName={true}
                            //     userName="Jhone Doe"
                            //     user={user}
                            // />
                        )}
                        <View
                            // className="flex-1 flex flex-row justify-between ml-6 py-4"
                            style={[styles.statsContainer]}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                disabled={
                                    profileData?.user_info?.isPrivate
                                        ? true
                                        : false
                                }
                                onPress={() => handleNavigateToInfo(0)}>
                                <View
                                    // className="py-2 px-3 flex items-center justify-center border-r border-r-white/10"
                                    style={[
                                        styles.startItem,
                                        {
                                            borderRightColor:
                                                Theme.ActionColor
                                                    .backgroundColor,
                                        },
                                    ]}>
                                    <Text
                                        className="text-base text-white font-boldB"
                                        style={{
                                            color: Theme.TextColor.color,
                                        }}>
                                        {profileData?.total_fans}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: RFValue(12),
                                            color: Theme.TextLightColor.color,
                                        }}

                                        // className="font-sans text-white/60"
                                    >
                                        Followers
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                disabled={
                                    profileData?.user_info?.isPrivate
                                        ? true
                                        : false
                                }
                                onPress={() => handleNavigateToInfo(1)}>
                                <View
                                    // className="py-2 px-3 flex items-center border-r border-r-white/10"
                                    style={[
                                        styles.startItem,
                                        {
                                            borderRightColor:
                                                Theme.ActionColor
                                                    .backgroundColor,
                                        },
                                    ]}>
                                    <Text
                                        className="text-base text-white font-boldB"
                                        style={{
                                            color: Theme.TextColor.color,
                                        }}>
                                        {profileData?.total_following}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: RFValue(12),
                                            color: Theme.TextLightColor.color,
                                        }}
                                        className="text-white/60 font-sans">
                                        Following
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}>
                                <View
                                    // className="py-2 px-3 flex items-center"
                                    style={[
                                        styles.startItem,
                                        {
                                            borderRightColor:
                                                Theme.ActionColor
                                                    .backgroundColor,
                                        },
                                    ]}>
                                    <Text
                                        className="text-base text-white font-boldB"
                                        style={{
                                            color: Theme.TextColor.color,
                                        }}>
                                        {profileData?.total_heart}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: RFValue(12),
                                            color: Theme.TextLightColor.color,
                                        }}
                                        className="font-sans text-white/60">
                                        Heart
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="flex items-start pt-2">
                        <View>
                            <Text
                                className="text-base font-boldB text-white"
                                style={{ color: Theme.TextColor.color }}>
                                {profileData?.user_info?.username}
                            </Text>
                            <View style={{ width: '80%' }}>
                                <Text
                                    className="text-sm font-mediumM text-white"
                                    style={{ color: Theme.TextColor.color }}>
                                    {profileData?.user_info?.bio}
                                </Text>
                            </View>
                        </View>
                        {/* )} */}
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={LinkHandler}>
                            <View className="flex flex-row items-center mt-1">
                                <Image
                                    source={require('../../assets/blueLinkIc.png')}
                                    resizeMode="contain"
                                    className="w-4 h-4"
                                />
                                <Text className="text-sm font-mediumM text-[#3897FF] ml-1">
                                    {profileData?.profile_links?.link1 === null
                                        ? 'HITHOT link'
                                        : profileData?.profile_links?.link1}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View className="flex flex-row items-center mt-2">
                        <TouchableOpacity
                            onPress={() => handleFollowUnfollow(follweduser)}
                            className="bg-[#4B545E] py-2 rounded-lg flex-1 "
                            style={{
                                backgroundColor:
                                    Theme.ActionColor.backgroundColor,
                            }}>
                            <Text
                                className="text-white text-sm font-mediumM text-center"
                                style={{ color: Theme.TextColor.color }}>
                                {follweduser === '1' ? 'Unfollow' : 'Follow'}
                                {/* {profileData?.user_info?.isFollowed === '0'
                                    ? 'Follow'
                                    : 'Unfollow'} */}
                            </Text>
                        </TouchableOpacity>
                        {profileData?.user_info?.isPrivate ? null : (
                            <TouchableOpacity
                                className="bg-[#4B545E] py-2 rounded-lg flex-1 ml-3 mr-3"
                                style={{
                                    backgroundColor:
                                        Theme.ActionColor.backgroundColor,
                                }}>
                                <Text
                                    className="text-white text-sm font-mediumM text-center"
                                    style={{ color: Theme.TextColor.color }}>
                                    Message
                                </Text>
                            </TouchableOpacity>
                        )}
                        {profileData?.user_info?.isPrivate ? null : (
                            <TouchableOpacity
                                onPress={() => PopupManage()}
                                className=" rounded-lg flex-1"
                                style={{
                                    backgroundColor:
                                        Theme.ActionColor.backgroundColor,
                                }}>
                                <LinearGradient
                                    colors={['#F7C900', '#EB853C']}
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                    className=" py-2 rounded-lg flex-1 flex-row item-center ">
                                    <Image
                                        source={require('../../assets/subscribewhite.png')}
                                        resizeMode="contain"
                                        className="w-4 h-4 mr-2"
                                    />
                                    <Text
                                        className="text-white text-sm font-mediumM text-center"
                                        style={{
                                            color: Theme.TextColor.color,
                                        }}>
                                        Subscribe
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
            <BottomSheetModal
                backdropComponent={props => (
                    <BottomSheetBackdrop
                        {...props}
                        disappearsOnIndex={-1}
                        appearsOnIndex={0}
                        onPress={() => LinkBottomRef.current?.close()}
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
            {ShowPopup && <Popup data={profileData?.user_info} />}
        </>
    );
};

export default ProfileDetail;


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
