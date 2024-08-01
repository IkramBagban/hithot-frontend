//without animation

import {
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    useWindowDimensions,
} from 'react-native';
import { FeedContentInterface } from '../../screens/Home/HomeScreen';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationType } from '../../screens/Home/HomeStack';
import { VideoData } from '../Reels/ReelSection2';
import React from 'react';
import ClipCard from './ClipCard';
import { MuteContext } from '../../../App';

interface Props {
    postId: string;
    data: VideoData;
    viewableFeedItem: string;
    viewableItem: string;
    isReel?: boolean;
    contentHeight: number;
    toggle: () => void;
}

const SwipeItem: React.FC<Props> = ({
    data,
    viewableItem,
    viewableFeedItem,
    postId,
    isReel,
    contentHeight,
    toggle,
}) => {
    const navigation = useNavigation<HomeStackNavigationType>();

    const [reelPaused, setReelPaused] = useState<boolean>(
        viewableFeedItem !== postId,
    );

    // console.log(
    //     'VVVIEEWWWWable feed item === postid',
    //     viewableFeedItem !== postId,
    // );

    const videoReady = useRef<boolean>(false);
    const videoRef = useRef<Video>(null);
    const lastPlayedTime = useRef<number>(0);
    const { width } = useWindowDimensions();
    //const [mutedd, setMuted] = useState(true);
    const muteContext = useContext(MuteContext);

    if (!muteContext) {
        throw new Error('FeedPostCard must be used within a MuteProvider');
    }

    const { globalMute, setGlobalMute } = muteContext;
    useEffect(() => {
        // console.log('viewableFeedItem:', viewableFeedItem);
        // console.log('postId:', postId);
        const shouldPlay = viewableFeedItem === postId;
        //const shouldPlay = true;
        setReelPaused(!shouldPlay);
        // console.log(shouldPlay);
        // console.log('Daaaata', data.vtype);

        if (data.type !== 'VIDEO') {
            // console.log('The IMAGE IS IS IS ', data);
        } else {
        }
        // console.log('Should Play', shouldPlay);

        if (shouldPlay) {
            // console.log('shoud');
            videoReady.current = true;
            // console.log('Anurag', (videoReady.current = true));

            // setIsVideoReady(true);
            // setReelPaused(false);
            videoRef.current?.seek(lastPlayedTime.current);
        } else {
            // setReelPaused(true)
            videoReady.current = false;
            // setIsVideoReady(false);
        }
    }, [viewableItem, viewableFeedItem]);

    const togglePlayback = data => {
        // console.log('hello');
        // setReelPaused(prevPaused => !prevPaused);
        setReelPaused(true);
        videoReady.current = false;
        navigation.navigate('HomeReelView', { data });
    };

    const onReelEnd = () => {
        lastPlayedTime.current = 0;
    };

    const onReadyForDisplay = () => {
        videoReady.current = true;
        // setIsVideoReady(true);
    };

    const onProgress = (progress: { currentTime: number }) => {
        if (viewableFeedItem === postId) {
            lastPlayedTime.current = progress.currentTime;
        }
    };

    // console.log('feed Item data', data);
    // console.log(isVideoReady, reelPaused);
    // console.log(data.type);
    const toggleSound = () => {
        //console.log('pslskl');

        setGlobalMute(!globalMute);
    };
    // if (data.vtype === 'Clip') console.log('Clip is', data.video);
    // if (videoReady.current === true) console.log('videoReady.current === true');

    return data.vtype === 'Clip' ? (
        <View style={{ position: 'relative' }}>
            <ClipCard
                videoUri={data.video}
                thumbnailUri={data.thum}
                _data={data}
            />
        </View>
    ) : data.vtype === 'Short' ? (
        videoReady.current === true ? (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    console.log('play');

                    togglePlayback(data);
                }}>
                {isReel ? (
                    <>
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
                            poster={data.thum}
                            posterResizeMode="cover"
                            resizeMode="cover"
                            muted={globalMute}
                            source={{ uri: data.video }}
                            style={{
                                width: width,
                                height: 1.5 * width,
                                //height: contentHeight,
                                borderRadius: 0,
                            }}
                            paused={reelPaused}
                            // paused={true}
                            playInBackground={false}
                            playWhenInactive={false}
                            ignoreSilentSwitch="obey"
                        />
                        <TouchableOpacity
                            onPress={toggleSound}
                            style={{
                                position: 'absolute',
                                bottom: 20,
                                right: 10,
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
                    </>
                ) : (
                    <>
                        {/* console.log("ISSSSSS NNNOOTT REEEEAL", {isReel}); */}
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
                            poster={data.thum}
                            posterResizeMode="cover"
                            resizeMode="cover"
                            source={{ uri: data.video }}
                            style={{
                                width: width,
                                height: 1.5 * width,
                                borderRadius: 0,
                            }}
                            paused={reelPaused}
                            // paused={true}
                            playInBackground={false}
                            playWhenInactive={false}
                            ignoreSilentSwitch="obey"
                            muted={globalMute}
                        />
                        <TouchableOpacity
                            onPress={toggleSound}
                            style={{
                                position: 'absolute',
                                bottom: 20,
                                right: 10,
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
                    </>
                )}
                {/*  <Video
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
                    poster={data.thum}
                    posterResizeMode="cover"
                    resizeMode="cover"
                    source={{ uri: data.url }}
                    style={{
                        width: width,
                        height: (isReel ? 12 / 9 : 4 / 5) * width,
                    }}
                    paused={reelPaused}
                    playInBackground={false}
                    playWhenInactive={false}
                    ignoreSilentSwitch="obey"
                /> */}
            </TouchableOpacity>
        ) : (
            <Image
                source={{ uri: data.thum }}
                resizeMode="cover"
                style={{
                    width: width,
                    height: 1.5 * width,
                    borderRadius: 0,
                }}
            />
        )
    ) : (
        <Image
            source={{ uri: data.thum }}
            resizeMode="cover"
            style={{
                width: width,
                height: 1.5 * width,
                borderRadius: 0,
            }}
        />
    );
};

export default memo(SwipeItem, (prevItem, nextItem) => {
    return (
        prevItem.postId === nextItem.postId &&
        prevItem.data.id === nextItem.data.id &&
        prevItem.viewableFeedItem === nextItem.viewableFeedItem &&
        prevItem.viewableItem === nextItem.viewableItem &&
        prevItem.isReel === nextItem.isReel
    );
});

// import {
//     Image,
//     Text,
//     TouchableWithoutFeedback,
//     View,
//     useWindowDimensions,
// } from 'react-native';
// import { FeedContentInterface } from '../../screens/Home/HomeScreen';
// import { memo, useEffect, useRef, useState } from 'react';
// import Video from 'react-native-video';
// // import {demoBuilding} from '../../constants/imgURL';
// // import LinearGradient from 'react-native-linear-gradient';
// // import {swipeItemInterface} from './data';

// interface Props {
//     postId: string;
//     data: FeedContentInterface;
//     viewableFeedItem: string;
//     viewableItem: string;
// }

// const SwipeItem: React.FC<Props> = ({
//     data,
//     viewableItem,
//     viewableFeedItem,
//     postId,
// }) => {
//     const [reelPaused, setReelPaused] = useState<boolean>(
//         viewableItem !== data.id || viewableFeedItem !== postId,
//     );
//     const videoReady = useRef<boolean>(false);
//     const videoRef = useRef<Video>(null);
//     const lastPlayedTime = useRef<number>(0);
//     const { width } = useWindowDimensions();

//     useEffect(() => {
//         if (viewableItem === data.id && viewableFeedItem === postId) {
//             setReelPaused(false);
//             videoRef.current?.seek(lastPlayedTime.current);
//         } else {
//             setReelPaused(true);
//             videoReady.current = false;
//         }
//     }, [viewableItem, viewableFeedItem]);

//     const togglePlayback = () => {
//         setReelPaused(prevPaused => !prevPaused);
//     };

//     const onReelEnd = () => {
//         lastPlayedTime.current = 0;
//     };

//     const onReadyForDisplay = () => {
//         videoReady.current = true;
//     };

//     const onProgress = (progress: { currentTime: number }) => {
//         if (viewableItem === data.id && viewableFeedItem === postId) {
//             lastPlayedTime.current = progress.currentTime;
//         }
//     };
//     const getItemLayout = (_: any, index: number) => ({
//         width: width,
//         length: (4 / 5) * width,
//         offset: (width) * index,
//         index,
//     });

//     return data.type === 'Video' ? (
//         <TouchableWithoutFeedback onPress={togglePlayback}>
//             <Video
//                 bufferConfig={{
//                     minBufferMs: 30000,
//                     maxBufferMs: 100000,
//                     bufferForPlaybackMs: 2500,
//                     bufferForPlaybackAfterRebufferMs: 5000,
//                 }}
//                 ref={videoRef}
//                 onEnd={onReelEnd}
//                 onProgress={onProgress}
//                 onReadyForDisplay={onReadyForDisplay}
//                 poster={data.thum}
//                 posterResizeMode="cover"
//                 resizeMode="cover"
//                 source={{ uri: data.url }}
//                 style={{
//                     width: width,
//                     height: (4 / 5) * width,
//                 }}
//                 paused={reelPaused}
//                 // paused={true}
//                 playInBackground={false}
//                 playWhenInactive={false}
//                 ignoreSilentSwitch="obey"
//             />
//         </TouchableWithoutFeedback>
//     ) : (
//         <Image
//             source={{ uri: data.url }}
//             resizeMode="cover"
//             className="w-full h-full "
//             style={{ width: width, height: (4 / 5) * width }}
//         />
//     );
// };

// export default memo(SwipeItem,(prevItem , nextItem) => {
//     return (
//         prevItem.postId === nextItem.postId &&
//         prevItem.data.id === nextItem.data.id &&
//         prevItem.viewableFeedItem === nextItem.viewableFeedItem &&
//         prevItem.viewableItem === nextItem.viewableItem
//     );
// });
