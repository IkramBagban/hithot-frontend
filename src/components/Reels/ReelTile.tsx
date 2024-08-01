import {
    Image,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    useWindowDimensions,
} from 'react-native';
import { ReelDataInterface } from './ReelSection';
import Video from 'react-native-video';
import { useRef, useState, memo, useEffect } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';

interface Props {
    index: number;
    data: ReelDataInterface;
    scrollHandler: (index: number) => void;
    // isVisible: boolean;
    viewableItem: string;
}

const ReelTile: React.FC<Props> = ({
    data,
    index,
    scrollHandler,
    // isVisible,
    viewableItem,
}) => {
    const [reelPaused, setReelPaused] = useState<boolean>(
        viewableItem !== data.id,
    );
    const [ready, setReady] = useState<boolean>(false);
    // const reelPaused = useRef<boolean>(viewableItem !== data.id)

    const videoRef = useRef<Video>(null);
    const { top } = useSafeAreaInsets();
    const { height } = useWindowDimensions();
    useEffect(() => {
        // console.log('from the id', data.id)

        if (viewableItem == data.id) {
            // reelPaused.current = false

            setReelPaused(false);
        } else {
            // reelPaused.current = true
            setReelPaused(true);
        }

        return () => {
            // console.log('cleanup');
        };
    }, [viewableItem]);

    // console.log(viewableItem, "hoho" , Number(data.id))
    // useEffect(() => {
    //     if(isVisible) {
    //         setReelPaused(false);
    //     }else {
    //         setReelPaused(true)
    //     }

    // },[isVisible])
    const onReelEnd = () => {
        scrollHandler(index + 1);
    };
    const bottomTabHeight = useBottomTabBarHeight();
    // console.log("card rendered", index, reelPaused)

    return (
        <TouchableWithoutFeedback
            onPress={() => setReelPaused(prev => !prev)}
            style={{
                position: 'relative',
                height: height + top - bottomTabHeight,
            }}
            className=" w-full bg-black relative">
            <View
                style={{ height: height + top - bottomTabHeight }}
                className=" w-full">
                {/* {!ready &&
                    <View className=" absolute top-0 left-0 bottom-0 right-0 z-30 bg-red-500" /> } */}
                {/* // <Image
                //     className=" absolute top-0 left-0 bottom-0 right-0 z-30"
                //     source={{ uri: data.thum }}
                // /> } */}
                <Video
                    hideShutterView={true}
                    // onPlaybackResume={() => setReady(true)}
                    // onReadyForDisplay={() => setReady(true)}
                    // onVideoLoadStart={() => console.log('video start', data.id)}
                    // onLoadStart={() => console.log("load start", data.id)}
                    //  fullscreen={true}
                    playInBackground={false}
                    playWhenInactive={false}
                    bufferConfig={{
                        minBufferMs: 15000,
                        maxBufferMs: 50000,
                        bufferForPlaybackMs: 2500,
                        bufferForPlaybackAfterRebufferMs: 5000,
                    }}
                    ref={videoRef}
                    onEnd={onReelEnd}
                    poster={data.thum}
                    posterResizeMode="cover"
                    resizeMode="cover"
                    // onReadyForDisplay={() => setIsVideoReady(true)}
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
                    // paused={reelPaused}
                    // paused={!isVisible || reelPaused}
                />

                <View
                    style={{ height: height + top - bottomTabHeight }}
                    className=" w-full z-20 flex justify-end">
                    {/* lower section */}

                    <View className=" flex flex-row px-4 pb-4">
                        <View className="flex-1"></View>
                        <View className=" w-[10%] border">
                            <View className="flex items-center mb-6">
                                <TouchableOpacity className="w-full">
                                    <Image
                                        source={require('../../assets/Like.png')}
                                        resizeMode="contain"
                                        className="w-[100%] h-6"
                                    />
                                </TouchableOpacity>
                                <Text
                                    style={{ fontSize: RFValue(12) }}
                                    className=" text-white mt-1">
                                    20k
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
                                    className=" text-white mt-1">
                                    2.5k
                                </Text>
                            </View>
                            <View className="flex items-center mb-6">
                                <TouchableOpacity className="w-full">
                                    <Image
                                        source={require('../../assets/Share.png')}
                                        resizeMode="contain"
                                        className="w-[100%] h-6"
                                    />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity className="w-full mb-8 ">
                                <Image
                                    source={require('../../assets/navThreeDot.png')}
                                    resizeMode="contain"
                                    className="w-[100%] h-6"
                                />
                            </TouchableOpacity>

                            <Image
                                source={require('../../assets/muCircle.png')}
                                resizeMode="contain"
                                className="w-[100%] h-10 animate-pulse"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};
// export default ReelTile

export default memo(ReelTile, (prevProps, nextProps) => {
    return (
        prevProps.index === nextProps.index &&
        prevProps.viewableItem === nextProps.viewableItem &&
        prevProps.data.id === nextProps.data.id &&
        prevProps.data.video === nextProps.data.video
    );
});
