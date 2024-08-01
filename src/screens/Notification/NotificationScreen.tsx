import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import {
    ScrollView,
    StatusBar,
    Text,
    View,
    Image,
    TouchableOpacity,
    RefreshControl,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import CenterHeader from '../../components/Headers/CustomHeader';
import NotificationFilterComp from '../../components/Notification/NotificationFilterComp';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import React, { useState } from 'react';
import { useHomeFeed } from '../../store/homeFeedStore';
import { Colors } from '../../theme/Colors';
import { Images } from '../../theme/Images';

const NotificationScreen = () => {
    const { top } = useSafeAreaInsets();
    const { appNotifications, getAllNotifications, notificationLoader,loadMoreNotifications } =
        useHomeFeed();
    // console.log('App Notifications --> ',appNotifications)
    const [page,setPage] = useState(1)
    const [pullRefresh,setPullRefresh] = useState(false)
console.log('appNotifications --> ',appNotifications.length)
    const handlePullToRefresh = () => {
        setPullRefresh(true)
        getAllNotifications({
            fb_id: '108079010412844413016',
            record_per_page: '10',
            page: '1',
        }).then(()=>setPullRefresh(false));
    };
    const loadMoreNoties = () => {
        if (!notificationLoader) {
            setPage(page + 1);
            loadMoreNotifications({
                fb_id: '108079010412844413016',
                record_per_page: '10',
                page: (page + 1).toString(),
            });
        }
    };
    return (
        <BottomSheetModalProvider>
            <SafeAreaView
                style={{ paddingTop: top }}
                edges={['left', 'right']}
                className=" flex-1 bg-[#21262B]">
                <StatusBar backgroundColor="#21262B" />
                <CenterHeader
                    title="Notification"
                    RightComp={NotificationFilterComp}
                />
                <FlatList
                    data={appNotifications}
                    style={{ paddingHorizontal: 15, marginTop: 25 }}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    // backgroundColor: Colors.primaryColor,
                                    // backgroundColor: 'grey',
                                    marginBottom: 10,
                                    padding: 5,
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        source={
                                            item?.fb_id_details?.profile_pic !==
                                            'null'
                                                ? {
                                                      uri: item?.fb_id_details
                                                          ?.profile_pic,
                                                  }
                                                : Images.musicAlbumIcon
                                        }
                                        style={{
                                            height: 32,
                                            width: 32,
                                            borderRadius: 20,
                                            borderWidth: 1,
                                            borderColor: Colors.primaryWhite,
                                        }}
                                    />
                                    <View
                                        style={{
                                            marginLeft: 15,
                                            width: '65%',
                                        }}>
                                        <Text
                                            numberOfLines={2}
                                            style={{
                                                fontSize: 16,
                                                fontFamily: 'Figtree-Medium',
                                                color: Colors.primaryWhite,
                                            }}>
                                            {item?.title ?? 'title'}
                                        </Text>
                                        <Text
                                            numberOfLines={4}
                                            style={{
                                                fontSize: 14,
                                                fontFamily: 'Figtree-Regular',
                                                color: Colors.dullWhite,
                                                marginTop: 5,
                                            }}>
                                            {item?.message ?? 'subtitle'}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                    refreshing={pullRefresh}
                    onRefresh={handlePullToRefresh}
                    onEndReachedThreshold={0.5}
                    onEndReached={loadMoreNoties}
                    ListFooterComponent={() =>
                        notificationLoader ? (
                            <View
                                style={{
                                    height: 50,
                                    width: '100%',
                                    justifyContent: 'center',
                                }}>
                                <ActivityIndicator
                                    size={'small'}
                                    color={Colors.primaryYellow}
                                />
                            </View>
                        ) : null
                    }
                />
            </SafeAreaView>
        </BottomSheetModalProvider>
    );
};

export default NotificationScreen;

// <ScrollView className=" flex-1 px-6">
//                     {/* Today notification */}
//                     <View className="border-b border-b-white/10 pb-6 my-6">
//                         <Text
//                             style={{ fontSize: RFValue(18) }}
//                             className=" text-white font-boldB mb-4">
//                             Today
//                         </Text>
//                         <View className=" flex flex-row items-center justify-between mb-4">
//                             {/* profile view */}
//                             <View className=" flex flex-row items-center">
//                                 <View
//                                     style={{
//                                         width: scale(32),
//                                         height: verticalScale(32),
//                                     }}
//                                     className=" rounded-full overflow-hidden mr-2">
//                                     <Image
//                                         source={require('../../assets/demoProfile.png')}
//                                         resizeMode="cover"
//                                         style={{
//                                             width: scale(32),
//                                             height: verticalScale(32),
//                                         }}
//                                     />
//                                 </View>
//                                 <View>
//                                     <Text
//                                         style={{ fontSize: RFValue(14) }}
//                                         className=" font-boldB text-white">
//                                         Ryhn_azz_.
//                                     </Text>
//                                     <Text
//                                         style={{ fontSize: RFValue(14) }}
//                                         className=" font-sans text-white">
//                                         Started following you
//                                     </Text>
//                                     <Text
//                                         style={{ fontSize: RFValue(14) }}
//                                         className=" font-sans text-white/60">
//                                         6 hrs ago
//                                     </Text>
//                                 </View>
//                             </View>

//                             {/*  */}
//                             <TouchableOpacity className=" rounded-lg ">
//                                 <LinearGradient
//                                     colors={['#F7C900', '#EB853C']}
//                                     start={{ x: 1, y: 1 }}
//                                     end={{ x: 1, y: 0 }}
//                                     className=" px-3 rounded-lg">
//                                     <Text
//                                         style={{ fontSize: RFValue(14) }}
//                                         className=" p-2 font-mediumM text-white text-center">
//                                         Connect
//                                     </Text>
//                                 </LinearGradient>
//                             </TouchableOpacity>
//                         </View>

//                         {/* ------------------- */}
//                         <View className=" flex flex-row">
//                             <View
//                                 style={{ width: scale(32 * 2) }}
//                                 className=" flex flex-row relative mr-2">
//                                 <View
//                                     style={{
//                                         width: scale(32),
//                                         height: verticalScale(32),
//                                     }}
//                                     className=" rounded-full overflow-hidden absolute left-0 z-10">
//                                     <Image
//                                         source={require('../../assets/demoProfile.png')}
//                                         resizeMode="cover"
//                                         style={{
//                                             width: scale(32),
//                                             height: verticalScale(32),
//                                         }}
//                                     />
//                                 </View>
//                                 <View
//                                     style={{
//                                         width: scale(32),
//                                         height: verticalScale(32),
//                                     }}
//                                     className=" rounded-full overflow-hidden absolute left-4 z-20">
//                                     <Image
//                                         source={require('../../assets/demoProfile2.png')}
//                                         resizeMode="cover"
//                                         style={{
//                                             width: scale(32),
//                                             height: verticalScale(32),
//                                         }}
//                                     />
//                                 </View>
//                                 <View
//                                     style={{
//                                         width: scale(32),
//                                         height: verticalScale(32),
//                                     }}
//                                     className=" rounded-full overflow-hidden absolute left-8 z-30">
//                                     <Image
//                                         source={require('../../assets/demoProfile.png')}
//                                         resizeMode="cover"
//                                         style={{
//                                             width: scale(32),
//                                             height: verticalScale(32),
//                                         }}
//                                     />
//                                 </View>
//                             </View>
//                             <View className=" flex items-start flex-1">
//                                 <Text
//                                     style={{ fontSize: RFValue(14) }}
//                                     className=" font-boldB text-white">
//                                     Ryhn_azz_.turminah0, and rizz liked your
//                                     post
//                                 </Text>
//                                 <Text className=" font-sans text-white/60">
//                                     57+ liked 6 hrs ago
//                                 </Text>
//                             </View>
//                             <Image
//                                 source={require('../../assets/demoPost.png')}
//                                 resizeMode="cover"
//                                 style={{
//                                     width: scale(36),
//                                     height: verticalScale(36),
//                                 }}
//                             />
//                         </View>
//                     </View>

//                     <View className=" pb-6 ">
//                         <Text
//                             style={{ fontSize: RFValue(18) }}
//                             className=" text-white font-boldB mb-4">
//                             This week
//                         </Text>
//                         <View className=" flex flex-row items-center justify-between mb-4">
//                             {/* profile view */}
//                             <View className=" flex flex-row items-center">
//                                 <View
//                                     style={{
//                                         width: scale(32),
//                                         height: verticalScale(32),
//                                     }}
//                                     className=" rounded-full overflow-hidden mr-2">
//                                     <Image
//                                         source={require('../../assets/demoProfile.png')}
//                                         resizeMode="cover"
//                                         style={{
//                                             width: scale(32),
//                                             height: verticalScale(32),
//                                         }}
//                                     />
//                                 </View>
//                                 <View>
//                                     <Text
//                                         style={{ fontSize: RFValue(14) }}
//                                         className=" font-boldB text-white">
//                                         Ryhn_azz_.
//                                     </Text>
//                                     <Text
//                                         style={{ fontSize: RFValue(14) }}
//                                         className=" font-sans text-white">
//                                         Started following you
//                                     </Text>
//                                     <Text
//                                         style={{ fontSize: RFValue(14) }}
//                                         className=" font-sans text-white/60">
//                                         Yesterday
//                                     </Text>
//                                 </View>
//                             </View>

//                             {/*  */}
//                             <TouchableOpacity className=" rounded-lg ">
//                                 <LinearGradient
//                                     colors={['#F7C900', '#EB853C']}
//                                     start={{ x: 1, y: 1 }}
//                                     end={{ x: 1, y: 0 }}
//                                     className=" px-3 rounded-lg">
//                                     <Text
//                                         style={{ fontSize: RFValue(14) }}
//                                         className=" p-2 font-mediumM text-white text-center">
//                                         Follow back
//                                     </Text>
//                                 </LinearGradient>
//                             </TouchableOpacity>
//                         </View>
//                         <View className=" flex flex-row items-center justify-between mb-4">
//                             {/* profile view */}
//                             <View className=" flex flex-row items-center">
//                                 <View
//                                     style={{
//                                         width: scale(32),
//                                         height: verticalScale(32),
//                                     }}
//                                     className=" rounded-full overflow-hidden mr-2">
//                                     <Image
//                                         source={require('../../assets/demoProfile.png')}
//                                         resizeMode="cover"
//                                         style={{
//                                             width: scale(32),
//                                             height: verticalScale(32),
//                                         }}
//                                     />
//                                 </View>
//                                 <View>
//                                     <Text
//                                         style={{ fontSize: RFValue(14) }}
//                                         className=" font-boldB text-white">
//                                         Ryhn_azz_.
//                                     </Text>
//                                     <Text
//                                         style={{ fontSize: RFValue(14) }}
//                                         className=" font-sans text-white">
//                                         Started following you
//                                     </Text>
//                                     <Text
//                                         style={{ fontSize: RFValue(14) }}
//                                         className=" font-sans text-white/60">
//                                         1w ago
//                                     </Text>
//                                 </View>
//                             </View>

//                             {/*  */}
//                             <TouchableOpacity className=" bg-white/30 rounded-lg px-3 ">
//                                 <Text
//                                     style={{ fontSize: RFValue(14) }}
//                                     className=" p-2 font-mediumM text-white text-center">
//                                     Following
//                                 </Text>
//                             </TouchableOpacity>
//                         </View>
//                         <View className=" flex flex-row items-center justify-between mb-4">
//                             {/* profile view */}
//                             <View className=" flex flex-row items-center">
//                                 <View
//                                     style={{
//                                         width: scale(32),
//                                         height: verticalScale(32),
//                                     }}
//                                     className=" rounded-full overflow-hidden mr-2">
//                                     <Image
//                                         source={require('../../assets/demoProfile.png')}
//                                         resizeMode="cover"
//                                         style={{
//                                             width: scale(32),
//                                             height: verticalScale(32),
//                                         }}
//                                     />
//                                 </View>
//                                 <View>
//                                     <Text
//                                         style={{ fontSize: RFValue(14) }}
//                                         className=" font-boldB text-white">
//                                         Ryhn_azz_.
//                                     </Text>
//                                     <Text
//                                         style={{ fontSize: RFValue(14) }}
//                                         className=" font-sans text-white">
//                                         Started following you
//                                     </Text>
//                                     <Text
//                                         style={{ fontSize: RFValue(14) }}
//                                         className=" font-sans text-white/60">
//                                         1w ago
//                                     </Text>
//                                 </View>
//                             </View>

//                             {/*  */}
//                             <TouchableOpacity className=" rounded-lg ">
//                                 <LinearGradient
//                                     colors={['#F7C900', '#EB853C']}
//                                     start={{ x: 1, y: 1 }}
//                                     end={{ x: 1, y: 0 }}
//                                     className=" px-3 rounded-lg">
//                                     <Text
//                                         style={{ fontSize: RFValue(14) }}
//                                         className=" p-2 font-mediumM text-white text-center">
//                                         Follow back
//                                     </Text>
//                                 </LinearGradient>
//                             </TouchableOpacity>
//                         </View>

//                         <View className=" flex flex-row mb-4">
//                             <View
//                                 style={{ width: scale(32 * 2) }}
//                                 className=" flex flex-row relative mr-2">
//                                 <View
//                                     style={{
//                                         width: scale(32),
//                                         height: verticalScale(32),
//                                     }}
//                                     className=" rounded-full overflow-hidden absolute left-0 z-10">
//                                     <Image
//                                         source={require('../../assets/demoProfile.png')}
//                                         resizeMode="cover"
//                                         style={{
//                                             width: scale(32),
//                                             height: verticalScale(32),
//                                         }}
//                                     />
//                                 </View>
//                                 <View
//                                     style={{
//                                         width: scale(32),
//                                         height: verticalScale(32),
//                                     }}
//                                     className=" rounded-full overflow-hidden absolute left-4 z-20">
//                                     <Image
//                                         source={require('../../assets/demoProfile2.png')}
//                                         resizeMode="cover"
//                                         style={{
//                                             width: scale(32),
//                                             height: verticalScale(32),
//                                         }}
//                                     />
//                                 </View>
//                                 <View
//                                     style={{
//                                         width: scale(32),
//                                         height: verticalScale(32),
//                                     }}
//                                     className=" rounded-full overflow-hidden absolute left-8 z-30">
//                                     <Image
//                                         source={require('../../assets/demoProfile.png')}
//                                         resizeMode="cover"
//                                         style={{
//                                             width: scale(32),
//                                             height: verticalScale(32),
//                                         }}
//                                     />
//                                 </View>
//                             </View>
//                             <View className=" flex items-start flex-1">
//                                 <Text
//                                     style={{ fontSize: RFValue(14) }}
//                                     className=" font-boldB text-white">
//                                     Ryhn_azz_.turminah0, and rizz liked your
//                                     post
//                                 </Text>
//                                 <Text className=" font-sans text-white/60">
//                                     57+ liked 6 hrs ago
//                                 </Text>
//                             </View>
//                             <Image
//                                 source={require('../../assets/demoPost.png')}
//                                 resizeMode="cover"
//                                 style={{
//                                     width: scale(36),
//                                     height: verticalScale(36),
//                                 }}
//                             />
//                         </View>

//                         <View className=" flex flex-row mb-4">
//                             <View
//                                 style={{ width: scale(32 * 2) }}
//                                 className=" flex flex-row relative mr-2">
//                                 <View
//                                     style={{
//                                         width: scale(32),
//                                         height: verticalScale(32),
//                                     }}
//                                     className=" rounded-full overflow-hidden absolute left-0 z-10">
//                                     <Image
//                                         source={require('../../assets/demoProfile.png')}
//                                         resizeMode="cover"
//                                         style={{
//                                             width: scale(32),
//                                             height: verticalScale(32),
//                                         }}
//                                     />
//                                 </View>
//                                 <View
//                                     style={{
//                                         width: scale(32),
//                                         height: verticalScale(32),
//                                     }}
//                                     className=" rounded-full overflow-hidden absolute left-4 z-20">
//                                     <Image
//                                         source={require('../../assets/demoProfile2.png')}
//                                         resizeMode="cover"
//                                         style={{
//                                             width: scale(32),
//                                             height: verticalScale(32),
//                                         }}
//                                     />
//                                 </View>
//                                 <View
//                                     style={{
//                                         width: scale(32),
//                                         height: verticalScale(32),
//                                     }}
//                                     className=" rounded-full overflow-hidden absolute left-8 z-30">
//                                     <Image
//                                         source={require('../../assets/demoProfile.png')}
//                                         resizeMode="cover"
//                                         style={{
//                                             width: scale(32),
//                                             height: verticalScale(32),
//                                         }}
//                                     />
//                                 </View>
//                             </View>
//                             <View className=" flex items-start flex-1">
//                                 <Text
//                                     style={{ fontSize: RFValue(14) }}
//                                     className=" font-boldB text-white">
//                                     Ryhn_azz_.turminah0, and rizz liked your
//                                     post
//                                 </Text>
//                                 <Text className=" font-sans text-white/60">
//                                     57+ liked 6 hrs ago
//                                 </Text>
//                             </View>
//                             <Image
//                                 source={require('../../assets/demoPost.png')}
//                                 resizeMode="cover"
//                                 style={{
//                                     width: scale(36),
//                                     height: verticalScale(36),
//                                 }}
//                             />
//                         </View>
//                     </View>
//                 </ScrollView>
