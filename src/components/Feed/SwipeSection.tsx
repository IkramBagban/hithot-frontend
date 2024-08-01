import {
    FlatList,
    View,
    Animated,
    Image,
    useWindowDimensions,
    TouchableOpacity,
    Text,
    ViewToken,
} from 'react-native';
import SwipeItem from './SwipeItem';
import { useRef, useState } from 'react';
import SwipeIndicator from './SwipeIndicator';
import {
    FeedContentInterface,
    FeedDataInterface,
} from '../../screens/Home/HomeScreen';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
import SwipeLowerSection from './SwipeLowerSection';
import { VideoData } from '../Reels/ReelSection2';
import React from 'react';

interface Props {
    viewableFeedItem: string;
    feedPostData: VideoData;
    heightcontent: number;
    toggle: () => void;
}

const keyExtractorFunction = (item: VideoData) => item.id;

const SwipeSection: React.FC<Props> = ({
    viewableFeedItem,
    feedPostData,
    heightcontent,
    toggle,
}) => {
    // const [currentIndex, setCurrentIndex] = useState<string>(
    //     feedPostData.id,
    // );
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width } = useWindowDimensions();

    // const onViewRef = useRef(
    //     (viewableItems: {
    //         viewableItems: ViewToken[];
    //         changed: ViewToken[];
    //     }) => {
    //         if (viewableItems?.viewableItems?.length > 0) {
    //             setCurrentIndex(
    //                 viewableItems.viewableItems[0]?.item.id ||
    //                     feedPostData.id,
    //             );
    //         }
    //     },
    // );

    const getItemLayout = (_: any, index: number) => ({
        width: width,
        length: (12 / 9) * width,
        offset: width * index,
        index,
    });
    // console.log('SWipe section postid', feedPostData.id);
    // console.log('Swipe section viewable feed', viewableFeedItem);

    return (
        <View
            className="relative"
            style={{ marginBottom: verticalScale(10), marginTop: 0 }}>
            <FlatList
                data={[feedPostData]}
                renderItem={({ item }) => (
                    <SwipeItem
                        postId={feedPostData.id}
                        viewableFeedItem={viewableFeedItem}
                        data={item}
                        viewableItem={viewableFeedItem}
                        isReel={feedPostData.vtype === 'Short'}
                        contentHeight={heightcontent}
                        toggle={toggle}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                keyExtractor={keyExtractorFunction}
                bounces={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false },
                )}
                // onViewableItemsChanged={onViewRef.current}
                maxToRenderPerBatch={3}
                windowSize={2}
                initialNumToRender={3}
                getItemLayout={getItemLayout}
                viewabilityConfig={{ itemVisiblePercentThreshold: 30 }}
            />
            {/* Post Lower Section */}
            <View>
                {/* <SwipeLowerSection
                    postId={feedPostData.id}
                    commentCount={feedPostData.count.video_comment_count}
                    likeCount={feedPostData.count.like_count}
                /> */}
                {/* <View className=" flex flex-row">
                    <View className="flex flex-row items-center mr-4">
                        <TouchableOpacity className="mr-1">
                            <Image
                                source={require('../../assets/Like.png')}
                                resizeMode="contain"
                                style={{
                                    width: scale(20),
                                    height: verticalScale(20),
                                }}
                            />
                        </TouchableOpacity>
                        <Text
                            style={{ fontSize: RFValue(12) }}
                            className="text-white">
                            20k
                        </Text>
                    </View>
                    <View className="flex flex-row items-center mr-4 ">
                        <TouchableOpacity className="mr-1">
                            <Image
                                source={require('../../assets/Comment.png')}
                                resizeMode="contain"
                                style={{
                                    width: scale(20),
                                    height: verticalScale(20),
                                }}
                            />
                        </TouchableOpacity>
                        <Text
                            style={{ fontSize: RFValue(12) }}
                            className="text-white">
                            2.5k
                        </Text>
                    </View>
                    <View className="flex flex-row items-center ">
                        <TouchableOpacity className="mr-1">
                            <Image
                                source={require('../../assets/Share.png')}
                                resizeMode="contain"
                                style={{
                                    width: scale(20),
                                    height: verticalScale(20),
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View> */}
                {/* {feedPostData.content.length !== 1 && ( */}
                {/* <SwipeIndicator data={[feedPostData]} scrollX={scrollX} /> */}
                {/* // )} */}
            </View>
        </View>
    );
};

export default SwipeSection;

// import {
//     FlatList,
//     View,
//     Animated,
//     Image,
//     useWindowDimensions,
//     TouchableOpacity,
//     Text,
//     ViewToken,
// } from 'react-native';
// import SwipeItem from './SwipeItem';

// import { useRef, useState } from 'react';
// import SwipeIndicator from './SwipeIndicator';
// import {
//     FeedContentInterface,
//     FeedDataInterface,
// } from '../../screens/Home/HomeScreen';
// import { RFValue } from 'react-native-responsive-fontsize';
// import { scale, verticalScale } from 'react-native-size-matters';

// interface Props {
//     viewableFeedItem: string;
//     feedPostData: FeedDataInterface;
// }

// const keyExtractorFunction = (item: FeedContentInterface) => item.id;

// const SwipeSection: React.FC<Props> = ({ viewableFeedItem , feedPostData }) => {
//     const [currentIndex, setCurrentIndex] = useState<string>(feedPostData.content[0].id);
//     const scrollX = useRef(new Animated.Value(0)).current;
//     const { width } = useWindowDimensions();

//     const onViewRef = useRef(
//         (viewableItems: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
//             if (viewableItems?.viewableItems?.length > 0)
//                 setCurrentIndex(viewableItems.viewableItems[0]?.item.id || feedPostData.content[0].id);
//         },
//     );

//     const getItemLayout = (_: any, index: number) => ({
//         width: width,
//         length: (4 / 5) * width,
//         offset: (width) * index,
//         index,
//     });
//     return (
//         <View>
//             <FlatList
//                 data={feedPostData.content}
//                 renderItem={({ item }) => (
//                     <SwipeItem
//                     postId={feedPostData.id}
//                         viewableFeedItem={viewableFeedItem}
//                         data={item}
//                         viewableItem={currentIndex}
//                     />
//                 )}
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 pagingEnabled
//                 keyExtractor={keyExtractorFunction}
//                 bounces={false}
//                 onScroll={Animated.event(
//                     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//                     { useNativeDriver: false },
//                 )}
//                 onViewableItemsChanged={onViewRef.current}
//                 maxToRenderPerBatch={3}
//                 windowSize={2}
//                 initialNumToRender={3}
//                 getItemLayout={getItemLayout}
//                 viewabilityConfig={{ itemVisiblePercentThreshold: 30 }}
//             />
//             {/* post lower section */}
//             <View className=" flex flex-row items-center justify-between p-3">
//                 <View className=" flex flex-row">
//                     <View className="flex flex-row items-center mr-4">
//                         <TouchableOpacity className="mr-1">
//                             <Image
//                                 source={require('../../assets/Like.png')}
//                                 resizeMode="contain"
//                                 style={{
//                                     width: scale(20),
//                                     height: verticalScale(20),
//                                 }}
//                             />
//                         </TouchableOpacity>
//                         <Text
//                             style={{ fontSize: RFValue(12) }}
//                             className="text-white">
//                             20k
//                         </Text>
//                     </View>
//                     <View className="flex flex-row items-center mr-4 ">
//                         <TouchableOpacity className="mr-1">
//                             <Image
//                                 source={require('../../assets/Comment.png')}
//                                 resizeMode="contain"
//                                 // className="w-[100%] h-6"
//                                 style={{
//                                     width: scale(20),
//                                     height: verticalScale(20),
//                                 }}
//                             />
//                         </TouchableOpacity>
//                         <Text
//                             style={{ fontSize: RFValue(12) }}
//                             className="text-white">
//                             2.5k
//                         </Text>
//                     </View>
//                     <View className="flex flex-row items-center ">
//                         <TouchableOpacity className="mr-1">
//                             <Image
//                                 source={require('../../assets/Share.png')}
//                                 resizeMode="contain"
//                                 // className="w-[100%] h-6"
//                                 style={{
//                                     width: scale(20),
//                                     height: verticalScale(20),
//                                 }}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 <SwipeIndicator data={feedPostData.content} scrollX={scrollX} />
//             </View>
//         </View>
//     );
// };

// export default SwipeSection;
