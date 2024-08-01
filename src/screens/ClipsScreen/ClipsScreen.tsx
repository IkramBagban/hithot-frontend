import {
    Dimensions,
    Image,
    StatusBar,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    useWindowDimensions,
} from 'react-native';
import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
import CircleUrlProfile from '../../components/Feed/CircleUrlProfile';
import Video from 'react-native-video';
import { useState } from 'react';
import LikeSection from '../../components/Feed/SwipeLowerComp/LikeSection';
import CommentSection from '../../components/Feed/SwipeLowerComp/CommentSection';
import { useRoute } from '@react-navigation/native';

// interface Props {
//     data: VideoData;
// }

const ClipsScreen: React.FC = () => {
    const route = useRoute();

    const data = route.params;

    // console.log('adaddadadadaad=vbd-----c-0-----', data);

    const { top } = useSafeAreaInsets();
    const { height } = useWindowDimensions();

    const WIDTH = Dimensions.get('screen').width;
    const HEIGHT = Dimensions.get('screen').height;

    const [reelPaused, setReelPaused] = useState<boolean>();

    const togglePlayback = () => {
        setReelPaused(prevPaused => !prevPaused);
    };

    return (
        <BottomSheetModalProvider>
            <SafeAreaView edges={['left', 'right']} className="flex-1 ">
                <StatusBar translucent backgroundColor={'transparent'} />
                <View
                    style={{
                        width: WIDTH,
                        height: HEIGHT,
                        backgroundColor: '#21262B',
                    }}>
                    <TouchableWithoutFeedback
                        onPress={togglePlayback}
                        style={{
                            position: 'relative',
                            // height: height + top - bottomTabHeight,
                            width: WIDTH,
                            height: HEIGHT,
                        }}
                        className="w-full bg-black relative">
                        <View
                            style={{ width: WIDTH, height: HEIGHT }}
                            className="w-full">
                            <Video
                                bufferConfig={{
                                    minBufferMs: 30000,
                                    maxBufferMs: 100000,
                                    bufferForPlaybackMs: 2500,
                                    bufferForPlaybackAfterRebufferMs: 5000,
                                }}
                                // ref={videoRef}
                                // onEnd={onReelEnd}
                                // onProgress={onProgress}
                                // onReadyForDisplay={onReadyForDisplay}
                                // poster={data.thum}
                                posterResizeMode="cover"
                                resizeMode="cover"
                                // source={require('../../assets/demovideo.mp4')}
                                source={{ uri: data.data.video }}
                                style={{
                                    position: 'absolute',
                                    width: WIDTH,
                                    height: HEIGHT,
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    zIndex: 0,
                                }}
                                paused={reelPaused}
                                // // paused={true}
                                // playInBackground={false}
                                // playWhenInactive={false}
                                // ignoreSilentSwitch="obey"
                            />

                            <View
                                style={{
                                    width: WIDTH,
                                    height: HEIGHT,
                                    // height: height + top - bottomTabHeight,
                                }}
                                className="w-full z-20 flex justify-end">
                                {/* Lower section */}
                                <View className="flex flex-row px-4 pb-4">
                                    {/* post details */}
                                    <View className="flex-1 flex items-start justify-end">
                                        <View className="flex flex-row items-center justify-between py-3">
                                            <View className=" flex flex-row items-center">
                                                {data?.data?.user_info
                                                    ?.profile_pic !== 'null' &&
                                                data?.data?.user_info
                                                    ?.profile_pic ? (
                                                    <CircleUrlProfile
                                                        url={
                                                            data?.data
                                                                ?.user_info
                                                                ?.profile_pic
                                                        }
                                                        width={46}
                                                        height={46}
                                                    />
                                                ) : (
                                                    <View className=" rounded-full overflow-hidden mr-2">
                                                        <Image
                                                            source={require('../../assets/demoUser.png')}
                                                            resizeMode="contain"
                                                            style={{
                                                                width: scale(
                                                                    46,
                                                                ),
                                                                height: verticalScale(
                                                                    46,
                                                                ),
                                                            }}
                                                        />
                                                    </View>
                                                )}
                                                <View className=" mr-2 flex items-start">
                                                    <Text
                                                        style={{
                                                            fontSize:
                                                                RFValue(14),
                                                        }}
                                                        className=" text-white font-bold mb-1">
                                                        {data?.data?.user_info
                                                            ?.username ||
                                                            'Hithot user'}
                                                    </Text>
                                                    <TouchableOpacity className=" px-4 py-1 border border-white rounded-lg">
                                                        <Text
                                                            style={{
                                                                fontSize:
                                                                    RFValue(14),
                                                            }}
                                                            className=" text-white text-center">
                                                            Follow
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>

                                        <Text
                                            style={{
                                                fontSize: RFValue(14),
                                            }}
                                            className=" text-white text-left">
                                            {data.data.description}
                                            {/* {'data.description'} */}
                                        </Text>
                                        {/* <Text
                                style={{
                                    fontSize: RFValue(12),
                                }}
                                className=" text-white text-center">
                                # maldives # enjoying # chilling
                              </Text> */}
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
                                                style={{
                                                    fontSize: RFValue(12),
                                                }}
                                                className=" text-white text-center">
                                                Audio by Anne Marrie..
                                            </Text>
                                        </View>
                                    </View>

                                    {/* options section */}
                                    <View className="w-[10%] ">
                                        <View className="flex items-center mb-6">
                                            <LikeSection
                                                videoId={data.data.id}
                                                likeCount={
                                                    data.data.count.like_count
                                                }
                                                col={true}
                                            />
                                        </View>
                                        <View className="flex items-center mb-6">
                                            <CommentSection
                                                postId={data.data.id}
                                                commentCount={
                                                    data.data.count
                                                        .video_comment_count
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
                                            <TouchableOpacity className="w-full">
                                                <Image
                                                    source={require('../../assets/Share.png')}
                                                    resizeMode="contain"
                                                    className="w-[100%] h-6"
                                                />
                                            </TouchableOpacity>
                                        </View>

                                        <TouchableOpacity className="w-full mb-8">
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
                    {/* <ReelSection /> */}
                </View>
            </SafeAreaView>
        </BottomSheetModalProvider>
    );
};

export default ClipsScreen;
