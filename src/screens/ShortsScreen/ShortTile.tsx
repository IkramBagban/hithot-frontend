import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    useWindowDimensions,
} from 'react-native';
import Video from 'react-native-video';
import { useRef, useEffect, useState, memo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
import { VideoData } from '../../components/Reels/ReelSection2';
import CircleUrlProfile from '../../components/Feed/CircleUrlProfile';
import LikeSection from '../../components/Feed/SwipeLowerComp/LikeSection';
import CommentSection from '../../components/Feed/SwipeLowerComp/CommentSection';
import React from 'react';
import { useContentStore } from '../../store/contentStore';
import useVideoStore from '../../store/VideoStore';
import { Colors } from '../../theme/Colors';
import { Images } from '../../theme/Images';
import LottieView from 'lottie-react-native';
import { Lotties } from '../../theme/Lotties';
import RotatingImage from '../../components/Reels/RotatingImage';
import Slider from '@react-native-community/slider';
import SoundUtils, { playLikeSound } from '../../utils/soundUtils';
import { HapticFeedbackTypes } from 'react-native-haptic-feedback';
import { useAuthStore } from '../../store/AuthStore';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export interface ReelDataInterface {
    id: string;
    video: string;
    thum?: string;
}

interface Props {
    index: number;
    data: VideoData;
    scrollHandler: (index: number) => void;
    viewableItem: string;
    isSameViewableItem: boolean;
}

const ExpandableText = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <View style={styles.container}>
            {isExpanded ? (
                <ScrollView
                    style={[
                        styles.expandedContainer,
                        text.length > 150 && { maxHeight: 160 },
                    ]}>
                    <Text style={styles.text}>{text}</Text>
                </ScrollView>
            ) : (
                <Text numberOfLines={2} style={styles.text}>
                    {text}
                </Text>
            )}
            {text.length > 90 && (
                <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                    <Text style={styles.readMore}>
                        {isExpanded ? 'Read less' : 'Read more'}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const ShortTile: React.FC<Props> = ({
    data,
    index,
    scrollHandler,
    viewableItem,
    isSameViewableItem,
}) => {
    const {userDetails} =useAuthStore()
    const navigation = useNavigation()
    const [reelPaused, setReelPaused] = useState<boolean>(
        // viewableItem !== data.id,
        !isSameViewableItem,
    );
    const [playedCount, setPlayedCount] = useState(0);
    const videoReady = useRef<boolean>(false);
    const videoRef = useRef<Video>(null);
    const lastPlayedTime = useRef<number>(0);
    const likeAnimation = useRef(null);
    const { top } = useSafeAreaInsets();
    const { height, width } = useWindowDimensions();
    const bottomTabHeight = useBottomTabBarHeight();
    const { toggleSendStorySheet } = useContentStore();
    const { toggleMoreOptions } = useVideoStore();
    const [showLike, setShowLike] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
    const [videoDuration, setVideoDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [followed, setFollowed] = useState(false);


    useEffect(() => {
        if (isSameViewableItem) {
            setReelPaused(false);
            videoRef.current?.seek(lastPlayedTime.current);
        } else {
            setReelPaused(true);
            videoReady.current = false;
        }
    }, [isSameViewableItem]);



    useEffect(() => {
        setPlayedCount(0);
    }, [viewableItem, index]);



    const togglePlayback = () => {
        setReelPaused(prevPaused => !prevPaused);
    };

    const onReelEnd = () => {
        lastPlayedTime.current = 0;
        scrollHandler(index + 1);
    };

    const onReadyForDisplay = () => {
        videoReady.current = true;
    };

    const handleVideoEnd = () => {
        if (playedCount === 2) {
            // Video has been played thrice (0-based count)
            setPlayedCount(0); // Reset play count
            scrollHandler(index + 1);
        } else {
            setPlayedCount(playedCount + 1); // Increment play count
            videoRef?.current.seek(0); // Restart the video
        }
    };


    const onProgress = (progress: { currentTime: number }) => {
        setCurrentTime(progress.currentTime);
        lastPlayedTime.current = 0;
        if (progress.currentTime >= progress.seekableDuration - 1) {
            // Manually trigger end of video
            handleVideoEnd();
        }
        if (isSameViewableItem) {
            lastPlayedTime.current = progress.currentTime;
        }
    };



    const handleLikePress = () => {
        setShowLike(!showLike);
        if (!showLike) {
            setShowAnimation(true);
            setTimeout(() => {
                likeAnimation?.current?.play();
                // Give haptik feedback and play a like sound
                SoundUtils.triggerHaptic(HapticFeedbackTypes.impactMedium);
                SoundUtils.playLikeSound();
            }, 50);
            setTimeout(() => {
                setShowAnimation(false);
            }, 1000);
        }
    };


    const handleLoad = meta => {
        setVideoDuration(meta.duration);
    };

    const handleSeek = value => {
        videoRef?.current.seek(value);
        setReelPaused(false);
    };


    const onSlideStart = () => {
        setReelPaused(true);
    };


    return (
        <TouchableWithoutFeedback
            onPress={togglePlayback}
            style={{
                position: 'relative',
                height: height + top - bottomTabHeight,
            }}
            className="w-full bg-black relative">
            <View
                style={{ height: height + top - bottomTabHeight }}
                className="w-full">
                <Video
                    bufferConfig={{
                        minBufferMs: 30000,
                        maxBufferMs: 100000,
                        bufferForPlaybackMs: 2500,
                        bufferForPlaybackAfterRebufferMs: 5000,
                    }}
                    ref={videoRef}
                    onEnd={onReelEnd}
                    onProgress={onProgress}
                    onReadyForDisplay={onReadyForDisplay}
                    onLoad={handleLoad}
                    poster={data.thum}
                    posterResizeMode="cover"
                    resizeMode="cover"
                    source={{ uri: data.video }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: height + top - bottomTabHeight,
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 0,
                    }}
                    paused={reelPaused}
                    // paused={true}
                    playInBackground={false}
                    playWhenInactive={false}
                    ignoreSilentSwitch="obey"
                />

                <View
                    style={{ height: height + top - bottomTabHeight }}
                    className="w-full z-20 flex justify-end">
                    {/* Lower section */}
                    <View className="flex flex-row px-4 pb-2">
                        {/* post details */}
                        <View className="flex-1 flex items-start justify-end">
                            <View className="flex flex-row items-center justify-between py-3">
                                <View className=" flex flex-row items-center">
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate(
                                                'VisitProfile',
                                                {
                                                    user: data?.user_info
                                                        ?.fb_id,
                                                },
                                            );
                                        }}>
                                    <Image
                                        source={
                                            data.user_info?.profile_pic !==
                                                'null' &&
                                            data.user_info?.profile_pic
                                                ? {
                                                      uri: data.user_info
                                                          ?.profile_pic,
                                                  }
                                                : require('../../assets/demoUser.png')
                                        }
                                        style={{
                                            height: 55,
                                            width: 55,
                                            resizeMode: 'cover',
                                            borderRadius: 40,
                                        }}
                                    />
                                    </TouchableOpacity>

                                    <View style={{ marginLeft: 10 }}>
                                        <TouchableOpacity
                                        // onPress={() => {
                                        //     navigation.navigate(
                                        //         'VisitProfile',
                                        //         {
                                        //             user: data?.user_info
                                        //                 ?.fb_id,
                                        //         },
                                        //     );
                                        // }}
                                        >
                                        <Text
                                            style={{
                                                fontSize: RFValue(14),
                                                fontFamily: 'Figtree-Bold',
                                                color: Colors.primaryWhite,
                                            }}>
                                            {data.user_info?.username ||
                                                'Hithot user'}
                                        </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{
                                                padding: 4,
                                                borderWidth: 1,
                                                width: 80,
                                                borderColor:
                                                    Colors.primaryWhite,
                                                borderRadius: 5,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginTop: 10,
                                            }}
                                            onPress={async () => {
                                                const url =
                                                    'https://adminpanel.hithot.club/api/follow_users';
                                                try {
                                                    const response =
                                                        await axios.post(url, {
                                                            fb_id: userDetails?.fb_id,
                                                            followed_fb_id:
                                                                data?.user_info
                                                                    ?.fb_id,
                                                            status: '1',
                                                        });
                                                    if (response.data) {
                                                        setFollowed(true);
                                                    }
                                                    console.log(
                                                        'Response for following from feed:',
                                                        response.data,
                                                    );
                                                } catch (e) {
                                                    console.log(
                                                        'Error for following from feed is',
                                                        e,
                                                    );
                                                }
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    fontFamily:
                                                        'Figtree-Medium',
                                                    color: Colors.primaryWhite,
                                                }}>
                                                {followed
                                                    ? `Following`
                                                    : `Follow`}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <ExpandableText text={data.description} />
                            <View className=" bg-black/25 flex flex-row items-center py-1 px-2 rounded-lg my-1">
                                <Image
                                    source={require('../../assets/musicIc.png')}
                                    resizeMode="contain"
                                    style={{
                                        width: scale(10),
                                        height: verticalScale(10),
                                    }}
                                    className="mr-1"
                                />
                                <Text
                                    className=" text-white text-center"
                                    style={{
                                        fontSize: RFValue(12),
                                        fontFamily: 'Figtree-Regular',
                                    }}
                                    numberOfLines={1}>
                                    {`${data?.sound?.sound_name}`}
                                </Text>
                            </View>
                        </View>

                        {/* options section */}
                        <View className="w-[10%] ">
                            <View className="flex items-center mb-6">
                                <LikeSection
                                    videoId={data.id}
                                    likeCount={data.count.like_count}
                                    col={true}
                                    onLikePress={handleLikePress}
                                />
                            </View>
                            <View className="flex items-center mb-6">
                                <CommentSection
                                    postId={data.id}
                                    commentCount={
                                        data.count.video_comment_count
                                    }
                                    col={true}
                                />
                            </View>
                            {/* <View className="flex items-center mb-6">
                                <TouchableOpacity className="w-full">
                                    <Image
                                        source={require('../../assets/Like.png')}
                                        resizeMode="contain"
                                        className="w-[100%] h-6"
                                    />
                                </TouchableOpacity>
                                <Text
                                    style={{ fontSize: RFValue(12) }}
                                    className="text-white mt-1">
                                    {data.count.like_count}
                                </Text>
                            </View>
                            <View className="flex items-center mb-6">
                                <TouchableOpacity className="w-full">
                                    <Image
                                        source={require('../../assets/Comment.png')}
                                        resizeMode="contain"
                                        className="w-[100%] h-6"
                                    />
                                </TouchableOpacity>
                                <Text
                                    style={{ fontSize: RFValue(12) }}
                                    className="text-white mt-1">
                                    {data.count.video_comment_count}
                                </Text>
                            </View> */}
                            <View className="flex items-center mb-6">
                                <TouchableOpacity
                                    onPress={toggleSendStorySheet}
                                    className="w-full">
                                    <Image
                                        source={require('../../assets/Share.png')}
                                        resizeMode="contain"
                                        className="w-[100%] h-6"
                                    />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                onPress={toggleMoreOptions}
                                style={{
                                    alignItems: 'center',
                                    marginBottom: 10,
                                }}>
                                <Image
                                    source={Images.threeDotsIcon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: 'white',
                                        height: 22,
                                        width: 22,
                                        resizeMode: 'contain',
                                    }}
                                />
                            </TouchableOpacity>
                            <RotatingImage isAudioPause={reelPaused} />
                        </View>
                    </View>
                    <View style={styles.sliderContainer}>
                        <Slider
                            style={{ width: width, height: 10 }}
                            minimumValue={0}
                            maximumValue={videoDuration}
                            value={currentTime}
                            onSlidingComplete={handleSeek}
                            onSlidingStart={onSlideStart}
                            minimumTrackTintColor={Colors.primaryWhite}
                            maximumTrackTintColor={Colors.primaryBlack}
                            thumbTintColor={Colors.transparent}
                        />
                    </View>
                </View>

                {showAnimation && (
                    <LottieView
                        ref={likeAnimation}
                        style={styles.likeLottie}
                        source={Lotties.like}
                        loop={false}
                        autoPlay={false}
                    />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    expandedContainer: {
        maxHeight: 100,
    },
    text: {
        fontSize: 14,
        lineHeight: 24,
        color: 'white',
        fontFamily: 'Figtree-Regular',
    },
    readMore: {
        color: 'rgba(255,255,255,0.8)',
        fontFamily: 'Figtree-Regular',
        marginTop: 3,
    },
    likeLottie: {
        height: 200,
        width: 200,
        position: 'absolute',
        top: Dimensions.get('screen').height / 2 - 120,
        alignSelf: 'center',
    },
    sliderContainer: {
        width: '100%',
        height: 12,
        marginTop: 5,
    },
});
export default memo(ShortTile, (prevProps, nextProps) => {
    return (
        prevProps.index === nextProps.index &&
        // prevProps.viewableItem === nextProps.viewableItem &&
        prevProps.isSameViewableItem === nextProps.isSameViewableItem &&
        prevProps.data.id === nextProps.data.id &&
        prevProps.data.video === nextProps.data.video
    );
});
