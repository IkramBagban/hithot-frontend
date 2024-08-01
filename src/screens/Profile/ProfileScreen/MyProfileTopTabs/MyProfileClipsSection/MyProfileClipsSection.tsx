import {
    View,
    FlatList,
    useWindowDimensions,
    Text,
    StyleSheet,
} from 'react-native';
import { useProfileStore } from '../../../../../store/UserProfileStore';
import { useEffect } from 'react';
import MyProfileClipTile from './MyProfileClipTile';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';
import TabsStore from '../../../../../store/TabsStore';
import useThemeStyles from '../../../../../hooks/useThemeStyles';

const MyProfileClipsSection: React.FC<{
    // FB_ID: string;
    // refreshTrigger: any;
    // dataLoaded: boolean;
}> = (
    {
        // FB_ID,
        // refreshTrigger,
        // dataLoaded
    },
) => {
    // console.log('dataLoaded_hh', dataLoaded);

    const { height, width } = useWindowDimensions();

    const videos = TabsStore(
        state => state?.videos?.data4?.msg[0]?.user_videos,
    );
    console.log('videos', videos);

    const Theme = useThemeStyles(styleCreator);

    // const { fetchUserClips, clipsLoading, userClips } = useProfileStore(
    //     state => ({
    //         userClips: state.userClips,
    //         clipsLoading: state.clipsLoading,
    //         fetchUserClips: state.fetchUserClipsVideo,
    //     }),
    // );

    // useEffect(() => {
    //     if (!dataLoaded) {
    //         fetchUserClips(FB_ID);
    //     }
    // }, [fetchUserClips, FB_ID, dataLoaded, userClips]);

    // useEffect(() => {
    //     if (refreshTrigger > 0) {
    //         fetchUserClips(FB_ID);
    //     }
    // }, [refreshTrigger]);

    const renderItem: React.FC<{ item: any }> = ({ item }) => {
        return (
            <>
                <MyProfileClipTile data={item} />
            </>
        );
    };

    return (
        <View
            style={{ flex: 1, backgroundColor: Theme.bgColor.backgroundColor }}>
            {/* {clipsLoading ? (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <ShimmerPlaceholder
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
                            }}
                            className=" border border-white"
                        />
                    </ShimmerPlaceholder>
                    <ShimmerPlaceholder
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
                            }}
                            className=" border border-white"
                        />
                    </ShimmerPlaceholder>
                    <ShimmerPlaceholder
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
                            }}
                            className=" border border-white"
                        />
                    </ShimmerPlaceholder>
                    <ShimmerPlaceholder
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
                            }}
                            className=" border border-white"
                        />
                    </ShimmerPlaceholder>
                    <ShimmerPlaceholder
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
                            }}
                            className=" border border-white"
                        />
                    </ShimmerPlaceholder>
                    <ShimmerPlaceholder
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
                            }}
                            className=" border border-white"
                        />
                    </ShimmerPlaceholder>
                </View>
            ) : ( */}
            <FlatList
                data={videos}
                renderItem={renderItem}
                keyExtractor={item => item.fb_id}
                initialNumToRender={6}
                windowSize={6}
                maxToRenderPerBatch={6}
                contentContainerStyle={{
                    flexWrap: videos?.length === 0 ? null : 'wrap',
                    flexDirection: videos?.length === 0 ? null : 'row',
                }}
                ListEmptyComponent={() => (
                    <>
                        {videos?.length === 0 && (
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
                                    {'User does not have any clips'}
                                </Text>
                            </View>
                        )}
                    </>
                )}
            />
            {/* )} */}
        </View>
    );
};

const styleCreator = colors =>
    StyleSheet.create({
        bgColor: {
            backgroundColor: colors.bgColor,
        },
        TextLightColor: {
            color: colors.textLightColor,
        },
    });

export default MyProfileClipsSection;
