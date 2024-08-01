// import {
//     View,
//     FlatList,
//     useWindowDimensions,
//     Text,
//     StyleSheet,
// } from 'react-native';
// import { useProfileStore } from '../../../../../store/UserProfileStore';
// import { useEffect } from 'react';
// import MyProfileVideoTile from './MyProfileVideoTile';
// import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
// import LinearGradient from 'react-native-linear-gradient';
// import { useRoute } from '@react-navigation/native';
// import TabsStore from '../../../../../store/TabsStore';
// import useThemeStyles from '../../../../../hooks/useThemeStyles';

// const MyProfileAllSection: React.FC<{
//     // FB_ID: string;
//     // refreshTrigger: any;
//     // dataLoaded: boolean;
// }> = (
//     {
//         // FB_ID,
//         // refreshTrigger,
//         // dataLoaded
//     },
// ) => {
//     // console.log('dataLoaded_hh', dataLoaded);

//     const { height, width } = useWindowDimensions();
//     // const { fetchUserShorts, shortsLoading, userShorts } = useProfileStore(
//     //     state => ({
//     //         userShorts: state.userShorts,
//     //         shortsLoading: state.shortsLoading,
//     //         fetchUserShorts: state.fetchUserShortsVideo,
//     //     }),
//     // );

//     // useEffect(() => {
//     //     if (!dataLoaded) {
//     //         fetchUserShorts(FB_ID);
//     //     }
//     // }, [fetchUserShorts, FB_ID, dataLoaded]);

//     // useEffect(() => {
//     //     if (refreshTrigger > 0) {
//     //         fetchUserShorts(FB_ID);
//     //     }
//     // }, [refreshTrigger]);

//     const videos = TabsStore(
//         state => state?.videos?.data1?.msg[0]?.user_videos,
//     );
//     console.log('videos', videos?.length);

//     const Theme = useThemeStyles(styleCreator);

//     const renderItem: React.FC<{ item: any }> = ({ item }) => {
//         return (
//             <>
//                 <MyProfileVideoTile videos={videos} data={item} />
//             </>
//         );
//     };

//     return (
//         <View
//             style={{ flex: 1, backgroundColor: Theme.bgColor.backgroundColor }}>
//             {/* {shortsLoading ? (
//                 <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//                     <ShimmerPlaceholder
//                         shimmerStyle={{
//                             width: width / 3,
//                             height: (5 / 4) * (width / 3),
//                         }}
//                         LinearGradient={LinearGradient}
//                         shimmerColors={['#171717', '#464646', '#2f2f2f']}>
//                         <View
//                             style={{
//                                 width: width / 3,
//                                 height: (5 / 4) * (width / 3),
//                             }}
//                             className=" border border-white"
//                         />
//                     </ShimmerPlaceholder>
//                     <ShimmerPlaceholder
//                         shimmerStyle={{
//                             width: width / 3,
//                             height: (5 / 4) * (width / 3),
//                         }}
//                         LinearGradient={LinearGradient}
//                         shimmerColors={['#171717', '#464646', '#2f2f2f']}>
//                         <View
//                             style={{
//                                 width: width / 3,
//                                 height: (5 / 4) * (width / 3),
//                             }}
//                             className=" border border-white"
//                         />
//                     </ShimmerPlaceholder>
//                     <ShimmerPlaceholder
//                         shimmerStyle={{
//                             width: width / 3,
//                             height: (5 / 4) * (width / 3),
//                         }}
//                         LinearGradient={LinearGradient}
//                         shimmerColors={['#171717', '#464646', '#2f2f2f']}>
//                         <View
//                             style={{
//                                 width: width / 3,
//                                 height: (5 / 4) * (width / 3),
//                             }}
//                             className=" border border-white"
//                         />
//                     </ShimmerPlaceholder>
//                     <ShimmerPlaceholder
//                         shimmerStyle={{
//                             width: width / 3,
//                             height: (5 / 4) * (width / 3),
//                         }}
//                         LinearGradient={LinearGradient}
//                         shimmerColors={['#171717', '#464646', '#2f2f2f']}>
//                         <View
//                             style={{
//                                 width: width / 3,
//                                 height: (5 / 4) * (width / 3),
//                             }}
//                             className=" border border-white"
//                         />
//                     </ShimmerPlaceholder>
//                     <ShimmerPlaceholder
//                         shimmerStyle={{
//                             width: width / 3,
//                             height: (5 / 4) * (width / 3),
//                         }}
//                         LinearGradient={LinearGradient}
//                         shimmerColors={['#171717', '#464646', '#2f2f2f']}>
//                         <View
//                             style={{
//                                 width: width / 3,
//                                 height: (5 / 4) * (width / 3),
//                             }}
//                             className=" border border-white"
//                         />
//                     </ShimmerPlaceholder>
//                     <ShimmerPlaceholder
//                         shimmerStyle={{
//                             width: width / 3,
//                             height: (5 / 4) * (width / 3),
//                         }}
//                         LinearGradient={LinearGradient}
//                         shimmerColors={['#171717', '#464646', '#2f2f2f']}>
//                         <View
//                             style={{
//                                 width: width / 3,
//                                 height: (5 / 4) * (width / 3),
//                             }}
//                             className=" border border-white"
//                         />
//                     </ShimmerPlaceholder>
//                 </View>
//             ) : ( */}
//             <FlatList
//                 data={videos}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.fb_id}
//                 initialNumToRender={6}
//                 windowSize={6}
//                 maxToRenderPerBatch={6}
//                 contentContainerStyle={{
//                     flexWrap: videos?.length === 0 ? null : 'wrap',
//                     flexDirection: videos?.length === 0 ? null : 'row',
//                 }}
//                 ListEmptyComponent={() => (
//                     <>
//                         {videos?.length === 0 && (
//                             <View
//                                 style={{
//                                     height: height / 2.28,
//                                     alignItems: 'center',
//                                     justifyContent: 'center',
//                                 }}>
//                                 <Text
//                                     style={{
//                                         fontSize: 20,
//                                         fontFamily: 'Figtree-Regular',
//                                         color: Theme.TextLightColor.color,
//                                     }}>
//                                     {'User does not have any data'}
//                                 </Text>
//                             </View>
//                         )}
//                     </>
//                 )}
//             />
//             {/* )} */}
//         </View>
//     );
// };

// const styleCreator = colors =>
//     StyleSheet.create({
//         bgColor: {
//             backgroundColor: colors.bgColor,
//         },
//         TextLightColor: {
//             color: colors.textLightColor,
//         },
//     });

// export default MyProfileAllSection;


import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    useWindowDimensions,
} from 'react-native';
import TabsStore from '../../../../../store/TabsStore'; // Adjust path as per your project structure
import MyProfileVideoTile from './MyProfileVideoTile'; // Assuming this component renders individual video tiles
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import useThemeStyles from '../../../../../hooks/useThemeStyles'; // Assuming this hook provides theme styles

const MyProfileAllSection: React.FC = () => {
    const { height, width } = useWindowDimensions();
    const Theme = useThemeStyles(styleCreator);
    const videos = TabsStore(state => state?.videos?.data1?.msg[0]?.user_videos); // Access videos from Zustand store

    const renderItem: React.FC<{ item: any }> = ({ item }) => {
        return <MyProfileVideoTile data={item} />;
    };

    return (
        <View
            style={{ flex: 1, backgroundColor: Theme.bgColor.backgroundColor }}>
            {videos ? (
                <FlatList
                    data={videos}
                    renderItem={renderItem}
                    keyExtractor={item => item.fb_id}
                    initialNumToRender={6}
                    windowSize={6}
                    maxToRenderPerBatch={6}
                    contentContainerStyle={{
                        flexWrap: videos.length === 0 ? null : 'wrap',
                        flexDirection: videos.length === 0 ? null : 'row',
                    }}
                    ListEmptyComponent={() => (
                        <View
                            style={{
                                height: height / 2.28,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontFamily: 'Figtree-Regular',
                                    color: Theme.TextLightColor.color,
                                }}>
                                {'User does not have any data'}
                            </Text>
                        </View>
                    )}
                />
            ) : (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {[...Array(6)].map((_, index) => (
                        <ShimmerPlaceholder
                            key={index}
                            shimmerStyle={{
                                width: width / 3,
                                height: (5 / 4) * (width / 3),
                            }}
                            LinearGradient={LinearGradient}
                            shimmerColors={['#171717', '#464646', '#2f2f2f']}>
                            <View
                                style={{
                                    width: width / 3,
                                    height: (5 / 4) * (width / 3),
                                    borderColor: 'white',
                                    borderWidth: 1,
                                }}
                            />
                        </ShimmerPlaceholder>
                    ))}
                </View>
            )}
        </View>
    );
};

const styleCreator = (colors: any) =>
    StyleSheet.create({
        bgColor: {
            backgroundColor: colors.bgColor,
        },
        TextLightColor: {
            color: colors.textLightColor,
        },
    });

export default MyProfileAllSection;
