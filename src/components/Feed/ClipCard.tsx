//first

import React, { useState, useRef, useEffect, useContext } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    Text,
    StatusBar,
    Modal,
    Platform,
} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import { VideoData } from '../Reels/ReelSection2';
import { scale, verticalScale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';
import CircleProfile from './CircleProfile';
import CircleUrlProfile from './CircleUrlProfile';
import { followProps } from './FeedPostCard';
import axios from 'axios';
import SwipeLowerSection from './SwipeLowerSection';
import { MuteContext } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import useVideoPlayingStore from '../../store/VideoPlayingStore';

const { width, height } = Dimensions.get('window');

interface VideoCardProps {
    videoUri: string;
    thumbnailUri: string;
    _data: VideoData;
}

const ClipCard: React.FC<VideoCardProps> = ({
    videoUri,
    thumbnailUri,
    _data,
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPlayingLandS, setIsPlayingLandS] = useState(false);
    const muteContext = useContext(MuteContext);
    if (!muteContext) {
        throw new Error('FeedPostCard must be used within a MuteProvider');
    }
    const { globalMute, setGlobalMute } = muteContext;
    const navigation = useNavigation();

    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoRef = useRef<Video>(null);
    const [followed, setFollowed] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };
    const togglePlayPauseLand = () => {
        console.log('full screen toggle');
        setIsPlayingLandS(!isPlaying);
    };

    const enterFullscreen = () => {
        Orientation.lockToLandscape();
        setIsFullscreen(true);
        navigation.navigate('PlayClipFullScreen', {
            url: videoUri,
            data: _data,
        });
    };

    const exitFullscreen = () => {
        Orientation.lockToPortrait();

        setIsFullscreen(false);
    };
    const toggleSound = () => {
        setGlobalMute(!globalMute);
    };

    const onProgress = (data: { currentTime: number }) => {
        setCurrentTime(data.currentTime);
    };

    const onLoad = (data: { duration: number }) => {
        setDuration(data.duration);
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };
    const followFromFeed = async (props: followProps) => {
        const url = 'https://adminpanel.hithot.club/api/follow_users';
        try {
            const response = await axios.post(url, { ...props });
            if (response.data) {
                setFollowed(true);
            }
            console.log('Response for following from feed:', response.data);
        } catch (e) {
            console.log('Error for following from feed is', e);
        }
    };
    return (
        <View style={styles.container}>
            <StatusBar hidden={isFullscreen} />
            {isPlaying ? (
                <Video
                    ref={videoRef}
                    source={{ uri: videoUri }}
                    style={styles.portraitVideo}
                    paused={!isPlaying}
                    onProgress={onProgress}
                    onLoad={onLoad}
                    resizeMode="contain"
                    muted={globalMute}
                />
            ) : (
                <View>
                    <Image
                        source={{ uri: _data?.thum }}
                        style={styles.portraitVideo}
                    />
                </View>
            )}
            <View style={styles.overlay}>
                <TouchableOpacity
                    style={styles.playPauseButton}
                    onPress={togglePlayPause}>
                    <Image
                        source={
                            isPlaying
                                ? require('../../assets/pause.png')
                                : require('../../assets/play.png')
                        }
                        style={styles.playPauseIcon}
                    />
                </TouchableOpacity>
                <View style={styles.progressBarBackground}>
                    <Image
                        source={{ uri: thumbnailUri }}
                        style={styles.thumbnail}
                        blurRadius={10}
                    />
                </View>
                <View style={styles.progressBarContainer}>
                    <Text style={styles.timerText}>
                        {formatTime(currentTime)}
                    </Text>
                    <View style={styles.progressBar}>
                        <View
                            style={[
                                styles.progress,
                                {
                                    width: `${(currentTime / duration) * 100}%`,
                                },
                            ]}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            console.log(videoUri, 'url');
                            setIsPlaying(false);
                            enterFullscreen();
                        }}
                        style={{ zIndex: 10 }}>
                        <Image
                            source={require('../../assets/fullScreen.png')}
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: 'white',
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={toggleSound}
                        style={{
                            position: 'absolute',
                            bottom: 50,
                            right: -10,
                            zIndex: 10,
                            width: 35,
                            height: 35,
                            backgroundColor: 'rgba(255, 255, 255, 0.12)',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 100,
                        }}>
                        <Image
                            source={
                                globalMute
                                    ? require('../../assets/mute.png')
                                    : require('../../assets/volume.png')
                            }
                            style={{
                                width: 15,
                                height: 15,
                                tintColor: 'white',
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {/* {isFullscreen && (
                <Modal
                    animationType="slide"
                    visible={isFullscreen}
                    supportedOrientations={['landscape']}
                    onRequestClose={exitFullscreen}>
                    <View style={styles.fullscreenContainer}>
                        <View
                            style={{
                                width: width,
                                height: 75,
                                position: 'absolute',
                                top: 0,
                                zIndex: 1,
                                marginBottom: 0,
                                backgroundColor: '#57238C',

                                padding: 0,
                            }}>
                            <Image
                                source={{ uri: _data.thum }}
                                style={{ width: width, height: 75 }}
                                blurRadius={10}
                            />
                            <View
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                    position: 'absolute',
                                    width: width,
                                    justifyContent: 'center',

                                    height: 75,
                                }}>
                                <View
                                    style={{
                                        width: width * 0.9,
                                        justifyContent: 'space-between',
                                        // position: 'absolute',
                                        //top: 70,
                                        // left: 10,
                                    }}>
                                    <View
                                        style={{
                                            width: width * 0.9,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                        }}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                width: width * 0.51,
                                            }}>
                                            <View
                                                style={{
                                                    borderRadius: 20,
                                                    overflow: 'hidden',
                                                    marginRight: 10,
                                                }}>
                                                {_data.user_info
                                                    ?.profile_pic === 'null' ? (
                                                    <CircleProfile
                                                        url={require('../../assets/demoUser.png')}
                                                        width={40}
                                                        height={40}
                                                    />
                                                ) : (
                                                    <CircleUrlProfile
                                                        url={
                                                            _data.user_info
                                                                ?.profile_pic ||
                                                            ''
                                                        }
                                                        width={40}
                                                        height={40}
                                                    />
                                                )}
                                            </View>
                                            <View
                                                style={{
                                                    width: scale(153),
                                                    marginRight: 10,
                                                }}>
                                                <Text
                                                    style={{
                                                        fontSize: RFValue(12),
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                    }}
                                                    numberOfLines={1}>
                                                    {_data.user_info
                                                        ?.username ||
                                                        'Hithot_user'}
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: RFValue(10),
                                                        color: 'rgba(255, 255, 255, 0.6)',
                                                    }}>
                                                    1hrs ago
                                                </Text>
                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                width: width * 0.45,
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                //height: 120,
                                            }}>
                                            <SwipeLowerSection
                                                commentCount={
                                                    _data.count
                                                        .video_comment_count
                                                }
                                                postId={Number(_data.id)}
                                                likeCount={
                                                    _data.count.like_count
                                                }
                                                fb_id={
                                                    _data.fb_id
                                                        ? _data.fb_id.toString()
                                                        : ''
                                                }
                                            />
                                            <TouchableOpacity
                                                style={{
                                                    width: scale(107),
                                                    height: verticalScale(41),
                                                    borderRadius: 100,
                                                    backgroundColor:
                                                        'rgba(255, 255, 255, 0.2)',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                                onPress={() => {
                                                    followFromFeed({
                                                        fb_id: '108939508596614871982',
                                                        followed_fb_id:
                                                            _data.fb_id!!,
                                                        status: '1',
                                                    });
                                                }}>
                                                {followed ? (
                                                    <Text
                                                        style={{
                                                            fontSize:
                                                                RFValue(10),
                                                            color: 'white',
                                                        }}>
                                                        Following
                                                    </Text>
                                                ) : (
                                                    <Text
                                                        style={{
                                                            fontSize:
                                                                RFValue(10),
                                                            color: 'white',
                                                        }}>
                                                        Follow
                                                    </Text>
                                                )}
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={{
                                                    width: scale(41),
                                                    height: verticalScale(41),
                                                    borderRadius: 100,
                                                    backgroundColor:
                                                        'rgba(255, 255, 255, 0.2)',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                <Image
                                                    source={require('../../assets/navThreeDot.png')}
                                                    resizeMode="contain"
                                                    style={{
                                                        width: scale(20),
                                                        height: verticalScale(
                                                            20,
                                                        ),
                                                    }}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Video
                            ref={videoRef}
                            source={{ uri: videoUri }}
                            style={styles.fullscreenVideo}
                            paused={!isPlayingLandS}
                            onProgress={onProgress}
                            onLoad={onLoad}
                            resizeMode="cover"
                        />
                        <TouchableOpacity
                            style={{ position: 'absolute', top: '50%' }}
                            onPress={togglePlayPauseLand}>
                            <Image
                                source={
                                    isPlayingLandS
                                        ? require('../../assets/pause.png')
                                        : require('../../assets/play.png')
                                }
                                style={styles.playPauseIcon}
                            />
                        </TouchableOpacity>
                        <View style={{}}>
                            <TouchableOpacity
                                onPress={exitFullscreen}
                                style={{
                                    position: 'absolute',
                                    //top: 20,
                                    bottom: 20,
                                    right: 20,
                                }}>
                                <Image
                                    source={require('../../assets/screen.png')}
                                    style={{
                                        width: 24,
                                        height: 24,
                                        tintColor: 'white',
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )} */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width,
        height: width * 0.9,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    playPauseButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -16 }, { translateY: -16 }],
        zIndex: 10,
    },
    playPauseIcon: {
        width: 32,
        height: 32,
        tintColor: 'white',
        zIndex: 10,
    },
    progressBarBackground: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
        zIndex: -1,
    },
    thumbnail: {
        width: '100%',
        height: '100%',
    },
    progressBarContainer: {
        position: 'absolute',
        bottom: 5,
        left: 15,
        right: 15,
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    timerText: {
        color: 'white',
    },
    progressBar: {
        flex: 1,
        height: 4,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 2,
        marginHorizontal: 7,
    },
    progress: {
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 2,
    },
    portraitVideo: {
        width: 400,
        height: 300,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullscreenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: height,
    },
    fullscreenVideo: {
        width: '100%',
        height: '100%',
    },
});

export default ClipCard;
