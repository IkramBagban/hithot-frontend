import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    Image,
    useWindowDimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import useVideoPlayingStore from '../../store/VideoPlayingStore';
import Orientation from 'react-native-orientation-locker';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import CircleProfile from '../../components/Feed/CircleProfile';
import { scale, verticalScale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';
import LikeSection from '../../components/Feed/SwipeLowerComp/LikeSection';
import CommentSection from '../../components/Feed/SwipeLowerComp/CommentSection';
import CircleUrlProfile from '../../components/Feed/CircleUrlProfile';

const PlayFullScreenClip: React.FC = props => {
    const url = props?.route?.params?.url;
    const _data = props?.route?.params?.data;
    const {
        orientationMode,
        changeMode,
        isOpenComment,
        postData,
        handleComment,
        handlePost,
    } = useVideoPlayingStore();
    const [data, setdata] = useState({});
    const navigation = useNavigation();
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const { width, height } = useWindowDimensions();
    // console.log(_data, 'this is post data');

    const onLoad = (data: { duration: number }) => {
        setDuration(data.duration);
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const onProgress = (data: { currentTime: number }) => {
        setCurrentTime(data.currentTime);
    };

    useEffect(() => {
        Orientation.lockToLandscape();
        changeMode('LANDSCAPE');
        //setIsPlaying(true);
        return () => {
            // Unlock orientation on unmount
            Orientation.unlockAllOrientations();
        };
    }, []);

    return (
        <>
            {orientationMode === 'LANDSCAPE' && (
                <View style={styles.screen}>
                    <StatusBar hidden={true} />
                    {isPlaying ? (
                        <Video
                            // ref={videoRef}
                            source={{ uri: url }}
                            style={{ height: '100%', width: '100%' }}
                            paused={!isPlaying}
                            onProgress={onProgress}
                            onLoad={onLoad}
                            resizeMode="cover"
                            // muted={globalMute}
                            muted={false}
                        />
                    ) : (
                        <View>
                            <Image
                                style={{ height: '100%', width: '100%' }}
                                source={{ uri: _data?.thum }}
                            />
                        </View>
                    )}
                    <View
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 40,
                            top: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 20,
                        }}>
                        <TouchableOpacity
                            //style={styles.playPauseButton}
                            onPress={() => setIsPlaying(!isPlaying)}>
                            <Image
                                source={
                                    isPlaying
                                        ? require('../../assets/pause.png')
                                        : require('../../assets/play.png')
                                }
                                style={styles.playPauseIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            backgroundColor: 'rgba(255, 255, 255, 0.12)',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                        }}>
                        <View style={styles.container}>
                            <View style={styles.topSection}>
                                <View
                                    style={{
                                        height: '100%',
                                        flexDirection: 'row',
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            width: '50%',
                                            alignItems: 'center',
                                            height: '100%',
                                            paddingHorizontal: 10,
                                            //  backgroundColor: 'red',
                                        }}>
                                        <View
                                            style={{
                                                borderRadius: 20,
                                                overflow: 'hidden',
                                                marginRight: 10,
                                            }}>
                                            {!_data.user_info?.profile_pic ? (
                                                <CircleProfile
                                                    url={require('../../assets/demoUser.png')}
                                                    width={40}
                                                    height={40}
                                                />
                                            ) : (
                                                <CircleUrlProfile
                                                    url={
                                                        _data?.user_info
                                                            ?.profile_pic || ''
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
                                                {_data.user_info?.username ||
                                                    'Hithot_user'}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: RFValue(10),
                                                    color: 'rgba(255, 255, 255, 0.6)',
                                                }}>
                                                3hrs ago
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            // backgroundColor: 'green',
                                            height: '100%',
                                            width: '50%',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            paddingHorizontal: 10,
                                        }}>
                                        <View
                                            style={{
                                                height: '100%',
                                                // backgroundColor: 'orange',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                width: '40%',
                                                justifyContent: 'space-between',
                                            }}>
                                            <LikeSection
                                                videoId={'9897778676'}
                                                likeCount={533}
                                                // onLikePress={() => {}}
                                            />
                                            <TouchableOpacity
                                                onPress={() => {
                                                    handleComment(true);
                                                    handlePost(_data);
                                                    setIsPlaying(false);
                                                    Orientation.lockToPortrait();
                                                    changeMode('PORTRAIT');
                                                    navigation.navigate(
                                                        'MainHome',
                                                    );
                                                }}>
                                                <Image
                                                    source={require('../../assets/Comment.png')}
                                                    resizeMode="cover"
                                                    style={{
                                                        width: scale(24),
                                                        height: verticalScale(
                                                            24,
                                                        ),
                                                    }}
                                                />
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={() => {}}
                                                className="">
                                                <Image
                                                    source={require('../../assets/Share.png')}
                                                    resizeMode="cover"
                                                    style={{
                                                        width: scale(24),
                                                        height: verticalScale(
                                                            24,
                                                        ),
                                                    }}
                                                />
                                            </TouchableOpacity>
                                        </View>

                                        <TouchableOpacity
                                            //onPress={handleFollowUnfollow}
                                            style={{
                                                width: scale(107),
                                                borderRadius: 15,
                                                borderWidth: 1,
                                                borderColor:
                                                    'rgba(255, 255, 255, 0.2)',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                paddingVertical: 10,
                                            }}
                                            // onPress={() => {
                                            //     followFromFeed({
                                            //         fb_id: data.fb_id,
                                            //         followed_fb_id: data.fb_id,
                                            //         status: '1',
                                            //         setFollowed:
                                            //             setFollowed(true),
                                            //     });
                                            // }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: RFValue(10),
                                                    color: 'white',
                                                }}>
                                                Follow
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.bottomSection}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <Text style={styles.timerText}>
                                        {formatTime(currentTime)}
                                    </Text>
                                    <View style={styles.progressBar}>
                                        <View
                                            style={[
                                                styles.progress,
                                                {
                                                    width: `${
                                                        (currentTime /
                                                            duration) *
                                                        100
                                                    }%`,
                                                },
                                            ]}
                                        />
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setIsPlaying(false);
                                            Orientation.lockToPortrait();
                                            changeMode('PORTRAIT');
                                            navigation.navigate('MainHome');
                                        }}
                                        style={{ zIndex: 10 }}>
                                        <Image
                                            source={require('../../assets/screen.png')}
                                            style={{
                                                width: 24,
                                                height: 24,
                                                tintColor: 'white',
                                            }}
                                        />
                                    </TouchableOpacity>
                                    {/* <TouchableOpacity
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
                    </TouchableOpacity> */}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        height: '100%',
        width: '100%',
        position: 'relative',
    },
    topSection: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        left: 0,
        right: 0,
        top: 0,
        height: '15%',
    },
    bottomSection: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        left: 0,
        right: 0,
        bottom: 0,
        height: '15%',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    progress: {
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 2,
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
    playPauseIcon: {
        width: 32,
        height: 32,
        tintColor: 'white',
        zIndex: 10,
    },
});
export default PlayFullScreenClip;
