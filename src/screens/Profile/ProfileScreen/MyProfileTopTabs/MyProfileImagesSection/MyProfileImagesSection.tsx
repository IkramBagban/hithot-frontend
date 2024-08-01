import {
    View,
    FlatList,
    useWindowDimensions,
    Text,
    StyleSheet,
} from 'react-native';
import { useProfileStore } from '../../../../../store/UserProfileStore';
import { useEffect, useState } from 'react';
import MyProfileImageTile from './MyProfileImageTile';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';
import TabsStore from '../../../../../store/TabsStore';
import useThemeStyles from '../../../../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyProfileImagesSection: React.FC<{
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

    const [isLoading, setIsLoading] = useState(true); // State to track loading state
    const [videos, setVideos] = useState<any[]>([]); // State to hold videos data

    // Function to fetch and set videos data from AsyncStorage
    const fetchAndSetVideos = async () => {
        try {
            const storedData = await AsyncStorage.getItem('userVideos');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                // Assuming parsedData is structured like { data1: {}, data2: {}, data3: {}, data4: {} }
                setVideos(parsedData.data1.msg[0].user_videos); // Extract and set user_videos array
                setIsLoading(false); // Set loading state to false
            } else {
                const videos = TabsStore(
        state => state?.videos?.data2?.msg[0]?.user_videos,
    );
     setVideos(videos);
                console.log('No data found in AsyncStorage'); // Handle case where no data is found
            }
        } catch (error) {
            console.error('Error fetching data from AsyncStorage:', error);
        }
    };

    useEffect(() => {
        fetchAndSetVideos(); // Load videos from AsyncStorage on component mount
    }, []);

    // const videos = TabsStore(
    //     state => state?.videos?.data2?.msg[0]?.user_videos,
    // );
    // console.log('videos', videos);

    const Theme = useThemeStyles(styleCreator);

    // const { fetchUserPosts, postsLoading, userPosts } = useProfileStore(
    //     state => ({
    //         userPosts: state.userPosts,
    //         postsLoading: state.postsLoading,
    //         fetchUserPosts: state.fetchUserPostsImage,
    //     }),
    // );

    // useEffect(() => {
    //     if (!dataLoaded) {
    //         fetchUserPosts(FB_ID);
    //     }
    // }, [fetchUserPosts, FB_ID, dataLoaded]);

    // useEffect(() => {
    //     if (refreshTrigger > 0) {
    //         fetchUserPosts(FB_ID);
    //     }
    // }, [refreshTrigger]);

    const renderItem: React.FC<{ item: any }> = ({ item }) => {
        return (
            <>
                <MyProfileImageTile data={item} />
            </>
        );
    };

    return (
        <View
            style={{ flex: 1, backgroundColor: Theme.bgColor.backgroundColor }}>
            {/* {postsLoading ? (
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
           {videos && <FlatList
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
                                    {'User does not have any images'}
                                </Text>
                            </View>
                        )}
                    </>
                )}
            />}
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

export default MyProfileImagesSection;
