import {
    View,
    FlatList,
    useWindowDimensions,
    Text,
    StyleSheet,
} from 'react-native';
import { useProfileStore } from '../../../../../store/UserProfileStore';
import { useEffect } from 'react';
import MyProfileSubscribeTile from './MyProfileSubscribeTile';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';
import TabsStore from '../../../../../store/TabsStore';
import useThemeStyles from '../../../../../hooks/useThemeStyles';

const MyProfileSubscribeSection: React.FC<{
    // FB_ID: string;
    // refreshTrigger: any;
    // dataLoaded: boolean;
}> = (
    {
        // FB_ID,
        // refreshTrigger,
        // dataLoaded,
    },
) => {
    // console.log('dataLoaded_hh', dataLoaded);

    const { height, width } = useWindowDimensions();

    const videos = TabsStore(
        state => state?.videos?.data3?.msg[0]?.user_videos,
    );
    console.log('videos', videos);

    const Theme = useThemeStyles(styleCreator);

    // const { fetchUserSubscribed, subscribedLoading, userSubscribed } =
    //     useProfileStore(state => ({
    //         userSubscribed: state.userSubscribed,
    //         subscribedLoading: state.subscribedLoading,
    //         fetchUserSubscribed: state.fetchUserSubscribed,
    //     }));

    // useEffect(() => {
    //     if (!dataLoaded) {
    //         fetchUserSubscribed(FB_ID);
    //     }
    // }, [fetchUserSubscribed, FB_ID, dataLoaded]);

    // useEffect(() => {
    //     if (refreshTrigger > 0) {
    //         fetchUserSubscribed(FB_ID);
    //     }
    // }, [refreshTrigger]);

    const renderItem: React.FC<{ item: any }> = ({ item }) => {
        return (
            <>
                <MyProfileSubscribeTile data={item} />
            </>
        );
    };

    return (
        <View
            style={{ flex: 1, backgroundColor: Theme.bgColor.backgroundColor }}>
            {/* {subscribedLoading ? (
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
                                    {'User does not have any subscribe data'}
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

export default MyProfileSubscribeSection;
