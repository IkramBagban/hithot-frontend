import {
    FlatList,
    View,
    useWindowDimensions,
    ViewToken,
    Text,
} from 'react-native';
// import ReelTile from './ReelTile';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useRef, useState } from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { ReelDataInterface } from './ReelSection';
import ReelTile2 from './ReelTile2';
import useVideoStore from '../../store/VideoStore';
import { RFValue } from 'react-native-responsive-fontsize';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../theme/Colors';
import { StyleSheet } from 'react-native';
import useThemeStyles from '../../hooks/useThemeStyles';

export interface UserInfo {
    fb_id: string;
    first_name: string;
    last_name: string;
    profile_pic: string;
    username: string;
    verified: number;
    bio: string;
    gender: string;
    category: string;
    marked: number;
    acceptdiamonds: number;
    created?: string;
}

interface Count {
    like_count: number;
    video_comment_count: number;
    view: number;
}

interface AudioPath {
    mp3: string;
    acc: string;
}

interface Sound {
    id: string;
    audio_path: AudioPath;
    sound_name: string;
    description: string;
    thum: string;
    section: string;
    created: string;
}

export interface VideoData {
    tag: string;
    id: string;
    // fb_id: string;
    // user_info: UserInfo;
    count: Count;
    followStatus: boolean;
    liked: number;
    video: string;
    thum: string;
    gif: string;
    category: string;
    description: string;
    type: string;
    marked: number;
    sound: Sound;
    created: string;
    fb_id?: string;
    user_info?: UserInfo;
    vtype?: string;
}

const ReelData: ReelDataInterface[] = [
    {
        id: '2166979',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702463197501_5ca83a62-b37b-44e1-bebc-9df8e803b898.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1702463197501_5ca83a62-b37b-44e1-bebc-9df8e803b898.jpg',
    },
    {
        id: '2166959',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702008992077_bc1cce13-c424-43db-bffb-1527f79d7a7d.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1702008992077_bc1cce13-c424-43db-bffb-1527f79d7a7d.jpg',
    },
    {
        id: '2166970',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1701865739683_3bf53a44-233c-4499-af0b-3643450c0dc8.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1701865739683_3bf53a44-233c-4499-af0b-3643450c0dc8.jpg',
    },
    {
        id: '21669791',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1701937254871_96489a3e-097c-4142-9e06-79a0da547152.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1701937254871_96489a3e-097c-4142-9e06-79a0da547152.jpg',
    },
    {
        id: '21669592',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702008992077_bc1cce13-c424-43db-bffb-1527f79d7a7d.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/May2024/thum/1714634131232_8d885e59-cace-4307-9f1a-9a7ad8501d8b.jpg',
    },
    // ....
    {
        id: '21669791ww',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702463197501_5ca83a62-b37b-44e1-bebc-9df8e803b898.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1702463197501_5ca83a62-b37b-44e1-bebc-9df8e803b898.jpg',
    },
    {
        id: '21669592e',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702008992077_bc1cce13-c424-43db-bffb-1527f79d7a7d.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1702008992077_bc1cce13-c424-43db-bffb-1527f79d7a7d.jpg',
    },
    {
        id: '21669703',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1701865739683_3bf53a44-233c-4499-af0b-3643450c0dc8.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1701865739683_3bf53a44-233c-4499-af0b-3643450c0dc8.jpg',
    },
    {
        id: '216697914',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1701937254871_96489a3e-097c-4142-9e06-79a0da547152.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1701937254871_96489a3e-097c-4142-9e06-79a0da547152.jpg',
    },
    {
        id: '216695923',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702008992077_bc1cce13-c424-43db-bffb-1527f79d7a7d.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/May2024/thum/1714634131232_8d885e59-cace-4307-9f1a-9a7ad8501d8b.jpg',
    },
    {
        id: '216697922',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702463197501_5ca83a62-b37b-44e1-bebc-9df8e803b898.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1702463197501_5ca83a62-b37b-44e1-bebc-9df8e803b898.jpg',
    },
    {
        id: '21669598a',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702008992077_bc1cce13-c424-43db-bffb-1527f79d7a7d.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1702008992077_bc1cce13-c424-43db-bffb-1527f79d7a7d.jpg',
    },
    {
        id: '21669700s',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1701865739683_3bf53a44-233c-4499-af0b-3643450c0dc8.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1701865739683_3bf53a44-233c-4499-af0b-3643450c0dc8.jpg',
    },
    {
        id: '216697918a',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1701937254871_96489a3e-097c-4142-9e06-79a0da547152.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1701937254871_96489a3e-097c-4142-9e06-79a0da547152.jpg',
    },
    {
        id: '2166959288a',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702008992077_bc1cce13-c424-43db-bffb-1527f79d7a7d.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/May2024/thum/1714634131232_8d885e59-cace-4307-9f1a-9a7ad8501d8b.jpg',
    },
    {
        id: '2166979a',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702463197501_5ca83a62-b37b-44e1-bebc-9df8e803b898.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1702463197501_5ca83a62-b37b-44e1-bebc-9df8e803b898.jpg',
    },
    {
        id: '2166959dd',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702008992077_bc1cce13-c424-43db-bffb-1527f79d7a7d.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1702008992077_bc1cce13-c424-43db-bffb-1527f79d7a7d.jpg',
    },
    {
        id: '2166970d',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1701865739683_3bf53a44-233c-4499-af0b-3643450c0dc8.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1701865739683_3bf53a44-233c-4499-af0b-3643450c0dc8.jpg',
    },
    {
        id: '21669791d',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1701937254871_96489a3e-097c-4142-9e06-79a0da547152.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1701937254871_96489a3e-097c-4142-9e06-79a0da547152.jpg',
    },
    {
        id: '21669592d',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702008992077_bc1cce13-c424-43db-bffb-1527f79d7a7d.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/May2024/thum/1714634131232_8d885e59-cace-4307-9f1a-9a7ad8501d8b.jpg',
    },
];

const ReelSkeleton = ({ height, paddingBottom }) => {
    const styles = useThemeStyles(styleCreator);
    return (
        <View style={[styles.container, { height, paddingBottom }]}>
            <View style={styles.footer}>
                <ShimmerPlaceholder
                    LinearGradient={LinearGradient}
                    style={styles.profilePicturePlaceholder}
                />
                <View style={styles.textPlaceholderContainer}>
                    <ShimmerPlaceholder
                        LinearGradient={LinearGradient}
                        style={styles.usernamePlaceholder}
                    />
                    <ShimmerPlaceholder
                        LinearGradient={LinearGradient}
                        style={styles.captionPlaceholder}
                    />
                    {/* <ShimmerPlaceholder
                        LinearGradient={LinearGradient}
                        style={styles.musicTitlePlaceholder}
                    /> */}
                </View>
                <View style={styles.engagementButtonsContainer}>
                    <ShimmerPlaceholder
                        LinearGradient={LinearGradient}
                        style={styles.engagementButtonPlaceholder}
                    />
                    <ShimmerPlaceholder
                        LinearGradient={LinearGradient}
                        style={styles.engagementButtonPlaceholder}
                    />
                    <ShimmerPlaceholder
                        LinearGradient={LinearGradient}
                        style={styles.engagementButtonPlaceholder}
                    />
                    <ShimmerPlaceholder
                        LinearGradient={LinearGradient}
                        style={styles.musicButtonPlaceHolder}
                    />
                </View>
            </View>
        </View>
    );
};

interface ReelProps {
    activeReel?: object;
}
const ReelSection2 = ({ activeReel }: ReelProps) => {
    const [currentIndex, setCurrentIndex] = useState<string>('');
    const { height, width } = useWindowDimensions();
    const { top } = useSafeAreaInsets();
    const flatListRef = useRef<FlatList>(null);
    const bottomTabHeight = useBottomTabBarHeight();
    //console.log('reelds');

    const fetchVideos = useVideoStore(state => state.fetchVideos);
    const loadingReels = useVideoStore(state => state.isLoading);
    const loadMoreVideos = useVideoStore(state => state.loadMoreVideos);
    const videos = useVideoStore(state => state.videos);
    const isLoading = useVideoStore(state => state.isLoading);
    const isNextLoading = useVideoStore(state => state.isNextLoading);
    const [reels, setReels] = useState([]);
    const [reelPage, setReelPage] = useState(2);

    useEffect(() => {
        if (videos.length > 0) {
            setCurrentIndex(videos[0]?.id);
        }
    }, []);
    useEffect(() => {
        if (activeReel) {
            const element = activeReel;
            if (element) {
                const index = videos.findIndex(item => item.id === element.id);
                if (index === -1) {
                    // Element not in array, add it
                    setReels([element, ...videos]);
                } else {
                    // If exits, make that reel top
                    const reelsWithoutElement = videos?.filter(
                        ele => ele.id !== element.id,
                    );
                    setReels([element, ...reelsWithoutElement]);
                }
            }
        } else {
            // This will handle a repetative data after pagination
            const combinedData = [...reels, ...videos];
            const uniqueData = combinedData.filter(
                (item, index, self) =>
                    index === self.findIndex(t => t.id === item.id),
            );
            setReels(uniqueData);
        }
    }, [activeReel, videos]);
    const scrollToIndex = (index: number) => {
        if (index <= ReelData.length - 1)
            flatListRef.current?.scrollToIndex({ index, animated: true });
    };

    const onViewRef = useRef(
        (viewableItems: {
            viewableItems: ViewToken[];
            changed: ViewToken[];
        }) => {
            if (viewableItems?.viewableItems?.length > 0)
                setCurrentIndex(
                    viewableItems.viewableItems[0]?.item.id || ReelData[0].id,
                );
        },
    );

    const getItemLayout = (_: any, index: number) => ({
        length: height + top - bottomTabHeight,
        offset: (height + top - bottomTabHeight) * index,
        index,
    });

    const handleEndReached = () => {
        console.log('handleEndReached called -->', isNextLoading);
        if (!isNextLoading) {
            loadMoreVideos(reelPage.toString());
            setReelPage(reelPage + 1);
        }
    };

    return (
        <View
            style={{ height: height + top - bottomTabHeight }}
            className="w-full bg-black">
            {/* {isLoading ? (
                <View
                    style={{ height: height + top - bottomTabHeight }}
                    className="flex items-center justify-center w-full">
                    <Text
                        style={{ fontSize: RFValue(16) }}
                        className="font-sans text-white ">
                        Loading videos...
                    </Text>
                </View>
            ) : ( */}
            <FlatList
                removeClippedSubviews={false}
                ref={flatListRef}
                data={reels}
                renderItem={({ item, index }) => (
                    <ReelTile2
                        index={index}
                        data={item}
                        scrollHandler={scrollToIndex}
                        viewableItem={currentIndex}
                        isSameViewableItem={currentIndex === item.id}
                    />
                )}
                keyExtractor={item => item.id}
                pagingEnabled={true}
                onViewableItemsChanged={onViewRef.current}
                maxToRenderPerBatch={5}
                windowSize={7}
                initialNumToRender={5}
                getItemLayout={getItemLayout}
                showsVerticalScrollIndicator={false}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
                refreshing={loadingReels}
                onRefresh={fetchVideos}
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() =>
                    isNextLoading ? (
                        <ReelSkeleton
                            height={height}
                            paddingBottom={bottomTabHeight}
                        />
                    ) : null
                }
            />
            {/* )} */}
        </View>
    );
};

const styleCreator = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: Colors.smokeWhite,
        },
        footer: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            paddingHorizontal: 18,
        },
        profilePicturePlaceholder: {
            width: 55,
            height: 55,
            borderRadius: 30,
            marginRight: 10,
        },
        textPlaceholderContainer: {
            flex: 1,
        },
        usernamePlaceholder: {
            width: '50%',
            height: 20,
            marginBottom: 5,
        },
        captionPlaceholder: {
            width: '80%',
            height: 20,
            marginBottom: 5,
        },
        musicTitlePlaceholder: {
            width: '60%',
            height: 20,
            marginTop: 10,
        },
        engagementButtonsContainer: {
            alignItems: 'center',
        },
        engagementButtonPlaceholder: {
            width: 30,
            height: 30,
            marginBottom: 15,
        },
        musicButtonPlaceHolder: {
            height: 45,
            width: 45,
            borderRadius: 30,
            marginTop: 20,
        },
    });
export default ReelSection2;
