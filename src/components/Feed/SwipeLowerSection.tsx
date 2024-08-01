import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetScrollView,
    BottomSheetTextInput,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useRef, useState } from 'react';
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
import CommentTile from './CommentTile';
import CircleProfile from './CircleProfile';
import { ScrollView } from 'react-native-gesture-handler';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import CommentSection from './SwipeLowerComp/CommentSection';
import LikeSection from './SwipeLowerComp/LikeSection';
import React from 'react';
import { useContentStore } from '../../store/contentStore';

interface Props {
    commentCount: number;
    likeCount: number;
    postId: number;
    fb_id: string; // new added
    onLikePress?: () => void;
    isLiked?:boolean
}

const SwipeLowerSection: React.FC<Props> = ({
    commentCount,
    likeCount,
    postId,
    fb_id,
    onLikePress,
    isLiked
}) => {
    // const commentBottomRef = useRef<BottomSheetModal>(null);
    const shareBottomRef = useRef<BottomSheetModal>(null);

    const [shareText, setShareText] = useState<string>('');

    const { toggleSendStorySheet } = useContentStore();

    const shareHandler = () => {
        toggleSendStorySheet();
        // shareBottomRef.current?.present();
    };
    // const commentHandler = () => {
    //     commentBottomRef.current?.present();
    // };

    const { width, height } = useWindowDimensions();

    return (
        <View
            className="z-5 flex flex-row "
            style={{
                width: scale(width / 2.8),
                justifyContent: 'space-between',
                marginBottom: 14,
            }}>
            <View className="flex-1 mr-4">
                <LikeSection
                    videoId={postId.toString()}
                    likeCount={likeCount}
                    onLikePress={onLikePress}
                    isLiked={isLiked}
                />
            </View>

            <View className=" mr-4 flex-1 min-w-[16px]">
                <CommentSection
                    postId={postId}
                    commentCount={commentCount}
                    fb_id={fb_id}
                />
            </View>

            <View className="flex flex-row items-center flex-1">
                <TouchableOpacity onPress={shareHandler} className="">
                    <Image
                        source={require('../../assets/Share.png')}
                        resizeMode="cover"
                        style={{
                            width: scale(24),
                            height: verticalScale(24),
                        }}
                    />
                </TouchableOpacity>
            </View>

            {/* share bottom sheet */}

            <BottomSheetModal
                backdropComponent={props => (
                    <BottomSheetBackdrop
                        {...props}
                        disappearsOnIndex={-1}
                        appearsOnIndex={0}
                        onPress={() => shareBottomRef.current?.close()}
                        opacity={0.2}
                    />
                )}
                keyboardBehavior="interactive"
                ref={shareBottomRef}
                snapPoints={['56%']}
                handleIndicatorStyle={{
                    height: 4,
                    backgroundColor: '#FFFFFF4D',
                }}
                footerComponent={() => {
                    return (
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            className="flex flex-row px-6 mt-4 bg-white/5"
                            horizontal={true}>
                            <View className="flex items-center justify-center my-4 mr-4 ">
                                <View
                                    style={{
                                        width: scale(56),
                                        height: verticalScale(56),
                                    }}
                                    className="flex items-center justify-center rounded-full bg-white/5">
                                    <Image
                                        source={require('../../assets/whitePlus.png')}
                                        style={{
                                            width: scale(26),
                                            height: verticalScale(26),
                                        }}
                                    />
                                </View>
                                <Text
                                    style={{ fontSize: RFValue(16) }}
                                    className="mt-2 text-white font-mediumM">
                                    Add story
                                </Text>
                            </View>
                            <View className="flex items-center justify-center my-4 mr-4 ">
                                <View
                                    style={{
                                        width: scale(56),
                                        height: verticalScale(56),
                                    }}
                                    className="flex items-center justify-center rounded-full bg-white/5">
                                    <Image
                                        source={require('../../assets/whitePlus.png')}
                                        style={{
                                            width: scale(26),
                                            height: verticalScale(26),
                                        }}
                                    />
                                </View>
                                <Text
                                    style={{ fontSize: RFValue(16) }}
                                    className="mt-2 text-white font-mediumM">
                                    Download
                                </Text>
                            </View>
                            <View className="flex items-center justify-center my-4 mr-4 ">
                                <View
                                    style={{
                                        width: scale(56),
                                        height: verticalScale(56),
                                    }}
                                    className="flex items-center justify-center rounded-full bg-white/5">
                                    <Image
                                        source={require('../../assets/whitePlus.png')}
                                        style={{
                                            width: scale(26),
                                            height: verticalScale(26),
                                        }}
                                    />
                                </View>
                                <Text
                                    style={{ fontSize: RFValue(16) }}
                                    className="mt-2 text-white font-mediumM">
                                    Share
                                </Text>
                            </View>
                            <View className="flex items-center justify-center my-4 mr-4 ">
                                <View
                                    style={{
                                        width: scale(56),
                                        height: verticalScale(56),
                                    }}
                                    className="flex items-center justify-center rounded-full bg-white/5">
                                    <Image
                                        source={require('../../assets/whitePlus.png')}
                                        style={{
                                            width: scale(26),
                                            height: verticalScale(26),
                                        }}
                                    />
                                </View>
                                <Text
                                    style={{ fontSize: RFValue(16) }}
                                    className="mt-2 text-white font-mediumM">
                                    Copy link
                                </Text>
                            </View>
                            <View className="flex items-center justify-center my-4 mr-4 ">
                                <View
                                    style={{
                                        width: scale(56),
                                        height: verticalScale(56),
                                    }}
                                    className="flex items-center justify-center rounded-full bg-white/5">
                                    <Image
                                        source={require('../../assets/whitePlus.png')}
                                        style={{
                                            width: scale(26),
                                            height: verticalScale(26),
                                        }}
                                    />
                                </View>
                                <Text
                                    style={{ fontSize: RFValue(16) }}
                                    className="mt-2 text-white font-mediumM">
                                    SMS
                                </Text>
                            </View>

                            {/* place holder */}
                            <View
                                style={{
                                    width: scale(26),
                                    height: verticalScale(26),
                                }}></View>
                        </ScrollView>
                    );
                }}
                backgroundStyle={{ backgroundColor: '#21262B' }}
                // stackBehavior=''
                handleStyle={{
                    backgroundColor: '#21262B',
                    borderTopRightRadius: 14,
                    borderTopLeftRadius: 14,
                    height: 24,
                    borderColor: 'transparent',
                }}>
                <BottomSheetView className="relative flex-1 ">
                    <View className=" px-6 bg-[#21262B]">
                        <Text
                            style={{ fontSize: RFValue(18) }}
                            className="text-white font-boldB">
                            Share to your loved ones!
                        </Text>
                        <View className="flex flex-row items-center px-3 my-4 rounded-xl bg-white/25">
                            <Image
                                source={require('../../assets/Search.png')}
                                resizeMode="contain"
                                style={{
                                    width: scale(20),
                                    height: verticalScale(20),
                                }}
                                className="mr-2 "
                            />
                            <BottomSheetTextInput
                                value={shareText}
                                maxLength={10}
                                onChangeText={text => setShareText(text)}
                                style={{ width: '100%', fontSize: scale(14) }}
                                onBlur={() => {
                                    // console.log('onBlur function is called');
                                    shareBottomRef.current?.snapToIndex(0);
                                }}
                                className="font-sans text-white "
                                placeholder="Search"
                                placeholderTextColor={'#FFFFFF'}
                            />
                        </View>
                        <Text
                            style={{ fontSize: RFValue(18) }}
                            className="text-white font-boldB">
                            Your favourites
                        </Text>
                    </View>

                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        className=" my-2 flex flex-row pl-6 bg-[#21262B]"
                        horizontal={true}>
                        <CircleProfile
                            url={require('../../assets/demoProfile.png')}
                            width={56}
                            height={56}
                        />
                        <CircleProfile
                            url={require('../../assets/demoProfile.png')}
                            width={56}
                            height={56}
                        />
                        <CircleProfile
                            url={require('../../assets/demoProfile.png')}
                            width={56}
                            height={56}
                        />
                    </ScrollView>

                    {/* <ScrollView
                        showsHorizontalScrollIndicator={false}
                        className="flex flex-row pl-6 mt-4 bg-white/5"
                        horizontal={true}>
                        <View className="flex items-center justify-center my-4 ">
                            <View
                                style={{
                                    width: scale(48),
                                    height: verticalScale(48),
                                }}
                                className="flex items-center justify-center rounded-full bg-white/5">
                                <Image
                                    source={require('../../assets/whitePlus.png')}
                                    style={{
                                        width: scale(24),
                                        height: verticalScale(24),
                                    }}
                                />
                            </View>
                            <Text
                                style={{ fontSize: RFValue(16) }}
                                className="text-white font-mediumM">
                                Add story
                            </Text>
                        </View>
                    </ScrollView> */}
                </BottomSheetView>
            </BottomSheetModal>
        </View>
    );
};

export default SwipeLowerSection;
