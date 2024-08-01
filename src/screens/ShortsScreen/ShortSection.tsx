import React, { useEffect, useRef, useState } from 'react';
import {
    FlatList,
    View,
    useWindowDimensions,
    ViewToken,
    Text,
    StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../theme/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import useVideoStore from '../../store/VideoStore';
import useThemeStyles from '../../hooks/useThemeStyles';
import { ReelDataInterface } from '../../components/Reels/ReelSection';
import ShortTile from './ShortTile';

const initialReelData: ReelDataInterface[] = [
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
    // Add more initial reel data here
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
    activeReel: any;
    videosData: any;
}

const ShortSection = ({ activeReel, videosData }: ReelProps) => {
    console.log('activeReel', activeReel);

    const [currentIndex, setCurrentIndex] = useState<string>('');
    const { height } = useWindowDimensions();
    const { top } = useSafeAreaInsets();
    const flatListRef = useRef<FlatList>(null);
    const bottomTabHeight = useBottomTabBarHeight();

    const fetchVideos = useVideoStore(state => state.fetchVideos);
    const loadingReels = useVideoStore(state => state.isLoading);
    const loadMoreVideos = useVideoStore(state => state.loadMoreVideos);
    const videos = useVideoStore(state => state.videos);
    const isNextLoading = useVideoStore(state => state.isNextLoading);
    const [reelPage, setReelPage] = useState(2);
    const [combinedReels, setCombinedReels] = useState([...videosData]);

    useEffect(() => {
        if (videosData.length > 0) {
            setCombinedReels(prev => [...prev, ...videosData]);
        }
    }, [videosData]);

    useEffect(() => {
        if (combinedReels.length > 0) {
            setCurrentIndex(combinedReels[0]?.id);
        }
    }, [combinedReels]);

    useEffect(() => {
        if (activeReel) {
            const index = videosData.findIndex(item => item.id === activeReel?.id);
            if (index === -1) {
                setCombinedReels([activeReel, ...videosData]);
            } else {
                const reelsWithoutElement = videosData.filter(
                    item => item.id !== activeReel?.id,
                );
                setCombinedReels([activeReel, ...reelsWithoutElement]);
            }
        }
    }, [activeReel]);

    const scrollToIndex = (index: number) => {
        if (index <= videosData.length - 1)
            flatListRef.current?.scrollToIndex({ index, animated: true });
    };

    const onViewRef = useRef(
        (viewableItems: {
            viewableItems: ViewToken[];
            changed: ViewToken[];
        }) => {
            console.log('--- ALL  VIEWABLES ---', viewableItems.viewableItems)
            const footerItem = viewableItems.viewableItems.find(
                item => item.key === 'footer',
            );
            if (!viewableItems.viewableItems.length) {
                setCurrentIndex(
                    'randomFooterIdxx12'
                );
            }
            if (viewableItems?.viewableItems?.length > 0)
                setCurrentIndex(
                    viewableItems.viewableItems[0]?.item.id || videosData[0].id,
                );
        },
    );

    const getItemLayout = (_: any, index: number) => ({
        length: height + top - bottomTabHeight,
        offset: (height + top - bottomTabHeight) * index,
        index,
    });

    const handleEndReached = () => {
        if (!isNextLoading) {
            loadMoreVideos(reelPage.toString());
            setReelPage(reelPage + 1);
        }
    };

    return (
        <View
            style={{ height: height + top - bottomTabHeight }}
            className="w-full bg-black">
            <FlatList
                removeClippedSubviews={false}
                ref={flatListRef}
                data={combinedReels}
                renderItem={({ item, index }) => (
                    <ShortTile
                        index={index}
                        totalVideos={combinedReels.length}
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
                windowSize={14}
                initialNumToRender={10}
                getItemLayout={getItemLayout}
                showsVerticalScrollIndicator={false}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
                // refreshing={loadingReels}
                // onRefresh={fetchVideos}
                // onEndReached={handleEndReached}
                // onEndReachedThreshold={0.5}
                ListFooterComponent={() =>
                    combinedReels.length > 0 ? (
                        <ReelSkeleton
                            height={height}
                            paddingBottom={bottomTabHeight}
                        />
                    ) : null
                }
            />
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
export default ShortSection;
