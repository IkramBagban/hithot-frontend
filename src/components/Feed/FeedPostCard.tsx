// import React, { useState, useRef, useEffect } from 'react';
// import {
//     View,
//     Image,
//     Text,
//     TouchableOpacity,
//     useWindowDimensions,
//     Animated,
//     Platform,
//     StyleSheet,
//     LayoutAnimation,
//     UIManager,
// } from 'react-native';

// import { RFValue } from 'react-native-responsive-fontsize';
// import { scale, verticalScale } from 'react-native-size-matters';
// import SwipeSection from './SwipeSection';
// import CircleUrlProfile from './CircleUrlProfile';
// import CircleProfile from './CircleProfile';
// import SwipeLowerSection from './SwipeLowerSection';
// import { VideoData } from '../Reels/ReelSection2';
// import { useNavigation } from '@react-navigation/native';
// import Orientation from 'react-native-orientation-locker';
// import axios from 'axios';
// import LottieView from 'lottie-react-native';
// import { Lotties } from '../../theme/Lotties';
// import { HapticFeedbackTypes } from 'react-native-haptic-feedback';
// import SoundUtils from '../../utils/soundUtils';
// import { followUsersStore } from '../../store/followUsersStore';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Enable LayoutAnimation for Android
// if (Platform.OS === 'android') {
//     if (UIManager.setLayoutAnimationEnabledExperimental) {
//         UIManager.setLayoutAnimationEnabledExperimental(true);
//     }
// }

// interface Props {
//     index: number;
//     data: VideoData;
//     item: any;
//     viewableItem: string;
// }

// export type followProps = {
//     fb_id: string;
//     followed_fb_id: string;
//     status: string;
// };

// const formatTimeAgo = (dateString: string) => {
//     const now = new Date();
//     const past = new Date(dateString);
//     const msPerMinute = 60 * 1000;
//     const msPerHour = msPerMinute * 60;
//     const msPerDay = msPerHour * 24;

//     const elapsed = now.getTime() - past.getTime();

//     if (elapsed < msPerMinute) {
//         return 'just now';
//     } else if (elapsed < msPerHour) {
//         const minutes = Math.round(elapsed / msPerMinute);
//         return `${minutes} ${minutes === 1 ? 'min' : 'mins'} ago`;
//     } else if (elapsed < msPerDay) {
//         const hours = Math.round(elapsed / msPerHour);
//         return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
//     } else {
//         const days = Math.round(elapsed / msPerDay);
//         return `${days} ${days === 1 ? 'day' : 'days'} ago`;
//     }
// };
// const FeedPostCard: React.FC<Props> = ({ viewableItem, data }) => {
//     const { width, height } = useWindowDimensions();
//     const [viewMore, setViewMore] = useState(false);
//     const animatedHeight = useRef(new Animated.Value(166)).current;
//     const [isFullscreen, setIsFullscreen] = useState(false);
//     const [orientation, setOrientation] = useState('PORTRAIT');
//     const [showLike, setShowLike] = useState(false);
//     const [showAnimation, setShowAnimation] = useState(false);
//     const likeAnimation = useRef(null);
//     const [followStatus, setFollowStatus] = useState(null);
//     const fb_id = '99898806172469';
//     const followed_fb_id = data.fb_id;
// <<<<<<< HEAD
//     const [isFollowing, setIsFollowing] = useState(String);
//     const [follweduser, setfolloweduser] = useState(String);
// =======
//     //const [isFollowing, setIsFollowing] = useState(String);
//     const [buttonWidth, setButtonWidth] = useState(scale(107));
//     const buttonScale = useRef(new Animated.Value(1)).current;
//     const [followed, setFollowed] = useState(false);
// >>>>>>> d9c31f6fbf79ac7a0a4cc7c024ae751373ec3cfd

//     const handleViewMore = () => {
//         Animated.timing(animatedHeight, {
//             toValue: viewMore ? 166 : 300,
//             duration: 300,
//             useNativeDriver: false,
//         }).start();
//         setViewMore(!viewMore);
//     };

//     useEffect(() => {
//         const handleOrientationChange = (orientation: string) => {
//             setOrientation(orientation);
//             if (
//                 orientation === 'LANDSCAPE-LEFT' ||
//                 orientation === 'LANDSCAPE-RIGHT'
//             ) {
//                 setIsFullscreen(true);
//             } else if (orientation === 'PORTRAIT') {
//                 setIsFullscreen(false);
//             }
//         };

//         Orientation.addOrientationListener(handleOrientationChange);

//         return () => {
//             Orientation.removeOrientationListener(handleOrientationChange);
//         };
//     }, []);
//     const navigation = useNavigation();

//     const toggleFullscreen = () => {
//         if (isFullscreen) {
//             Orientation.lockToPortrait();
//         } else {
//             Orientation.lockToLandscape();
//         }
//     };

//     const animateButtonPress = () => {
//         LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//         setButtonWidth(scale(90));
//         Animated.spring(buttonScale, {
//             toValue: 0.95,
//             useNativeDriver: true,
//         }).start();
//     };

//     const animateButtonRelease = () => {
//         LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//         setButtonWidth(scale(107));
//         Animated.spring(buttonScale, {
//             toValue: 1,
//             useNativeDriver: true,
//         }).start();
//     };

//     const handleLikePress = () => {
//         setShowLike(!showLike);
//         if (!showLike) {
//             setShowAnimation(true);
//             setTimeout(() => {
//                 likeAnimation?.current?.play();
//                 // Give haptik feedback and play a like sound
//                 SoundUtils.triggerHaptic(HapticFeedbackTypes.impactMedium);
//                 SoundUtils.playLikeSound();
//             }, 50);
//             setTimeout(() => {
//                 setShowAnimation(false);
//             }, 1000);
//         }
//     };

// <<<<<<< HEAD
//     const [followeduserstatus, setfollowuserstatus] = useState(String);

//     const handleFollowUnfollow = async () => {
//         const status = isFollowing ? '0' : '1';
//         console.log('home_foollow___', status);
//         setfollowuserstatus(status);
//         try {
//             const response = await followUsersStore(
//                 fb_id,
//                 followed_fb_id,
//                 status,
//             );

//             // console.log('status', status);
//             await AsyncStorage.setItem('followStatus', status);
//             setfolloweduser(status);
//             setFollowStatus(response.status);
//             setIsFollowing(!isFollowing);
//         } catch (error) {
//             setFollowStatus('Error updating follow status');
// =======
//     // const handleFollowUnfollow = async () => {
//     //     animateButtonPress();

//     //     const status = isFollowing ? '0' : '1';
//     //     console.log('home_foollow___', status);

//     //     try {
//     //         const response = await followUsersStore(
//     //             fb_id,
//     //             followed_fb_id,
//     //             status,
//     //         );
//     //         setFollowStatus(response.status);
//     //         setIsFollowing(!isFollowing);
//     //     } catch (error) {
//     //         setFollowStatus('Error updating follow status');
//     //     }
//     // };

//     const followFromFeed = async (props: followProps) => {
//         animateButtonPress();

//         const url = 'https://adminpanel.hithot.club/api/follow_users';
//         try {
//             const response = await axios.post(url, { ...props });
//             if (response.data) {
//                 setFollowed(true);
//             }
//             console.log('Response for following from feed:', response.data);
//         } catch (e) {
//             console.log('Error for following from feed is', e);
//         } finally {
//             animateButtonRelease();
// >>>>>>> d9c31f6fbf79ac7a0a4cc7c024ae751373ec3cfd
//         }
//     };

//     useEffect(() => {
//         const getFollowStatus = async () => {
//             try {
//                 const followstatus = await AsyncStorage.getItem('followStatus');
//                 if (followstatus !== null) {
//                     console.log('statusaync', followstatus);

//                     setfolloweduser(followstatus);
//                     // Handle the retrieved status
//                 }
//             } catch (error) {
//                 console.log('Error retrieving follow status', error);
//             }

//             return getFollowStatus;
//         };
//     }, [follweduser]);

//     // console.log('statusaync', follweduser);

//     const handlePress = () => {
//         const userData = data;
//         const selectedUser = data?.fb_id;
//         navigation.navigate('VisitProfile', {
//             user: selectedUser,
//             followeduserstatus: followeduserstatus,
//             userData: userData,
//         });
//     };

//     return (
//         <View
//             style={{
//                 backgroundColor: 'rgba(255, 255, 255, 0.1)',
//             }}>
//             <>
//                 <View
//                     style={{
//                         width: width,
//                         height: 80,
//                         position: 'relative',
//                         zIndex: 1,
//                         marginBottom: 0,
//                         backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                         padding: 0,
//                     }}>
//                     <Image
//                         source={{ uri: data.thum }}
//                         style={{ width: width, height: 80 }}
//                         blurRadius={10}
//                     />
//                     <View
//                         style={{
//                             backgroundColor: 'rgba(0, 0, 0, 0.4)',
//                             position: 'absolute',
//                             width: width,
//                             height: 80,
//                         }}
//                     />
//                     <TouchableOpacity
//                         activeOpacity={0.8}
//                         onPress={handlePress}
//                         style={{
//                             width: width * 0.9,
//                             justifyContent: 'space-between',
//                             position: 'absolute',
//                             top: 18,
//                             left: 10,
//                         }}>
//                         <View
//                             style={{
//                                 width: width * 0.9,
//                                 flexDirection: 'row',
//                                 justifyContent: 'space-between',
//                             }}>
//                             <View
//                                 style={{
//                                     flexDirection: 'row',
//                                     width: width * 0.51,
//                                 }}>
//                                 <View
//                                     style={{
//                                         borderRadius: 20,
//                                         overflow: 'hidden',
//                                         marginRight: 10,
//                                     }}>
// <<<<<<< HEAD
//                                     <View
//                                         style={{
//                                             flexDirection: 'row',
//                                             width: width * 0.51,
//                                         }}>
//                                         <View
//                                             style={{
//                                                 borderRadius: 20,
//                                                 overflow: 'hidden',
//                                                 marginRight: 10,
//                                             }}>
//                                             {data.user_info?.profile_pic ===
//                                             'null' ? (
//                                                 <CircleProfile
//                                                     url={require('../../assets/demoUser.png')}
//                                                     width={40}
//                                                     height={40}
//                                                 />
//                                             ) : (
//                                                 <CircleUrlProfile
//                                                     url={
//                                                         data.user_info
//                                                             ?.profile_pic || ''
//                                                     }
//                                                     width={40}
//                                                     height={40}
//                                                 />
//                                             )}
//                                         </View>
//                                         <View
//                                             style={{
//                                                 width: scale(153),
//                                                 marginRight: 10,
//                                             }}>
//                                             <Text
//                                                 style={{
//                                                     fontSize: RFValue(12),
//                                                     color: 'white',
//                                                     fontWeight: 'bold',
//                                                 }}
//                                                 numberOfLines={1}>
//                                                 {data.user_info?.username ||
//                                                     'Hithot_user'}
//                                             </Text>
//                                             <Text
//                                                 style={{
//                                                     fontSize: RFValue(10),
//                                                     color: 'rgba(255, 255, 255, 0.6)',
//                                                 }}>
//                                                 1hrs ago
//                                             </Text>
//                                         </View>
//                                     </View>
//                                     <View
//                                         style={{
//                                             flexDirection: 'row',
//                                             width: width * 0.45,
//                                             justifyContent: 'space-between',
//                                         }}>
//                                         <TouchableOpacity
//                                             onPress={handleFollowUnfollow}
//                                             style={{
//                                                 width: scale(107),
//                                                 height: verticalScale(41),
//                                                 borderRadius: 100,
//                                                 backgroundColor:
//                                                     'rgba(255, 255, 255, 0.2)',
//                                                 justifyContent: 'center',
//                                                 alignItems: 'center',
//                                             }}
//                                             // onPress={() => {
//                                             //     followFromFeed({
//                                             //         fb_id: data.fb_id,
//                                             //         followed_fb_id: data.fb_id,
//                                             //         status: '1',
//                                             //         setFollowed:
//                                             //             setFollowed(true),
//                                             //     });
//                                             // }}
//                                         >
//                                             <Text
//                                                 style={{
//                                                     fontSize: RFValue(10),
//                                                     color: 'white',
//                                                 }}>
//                                                 {follweduser === '1'
//                                                     ? 'Unfollow'
//                                                     : 'Follow'}
//                                             </Text>
//                                         </TouchableOpacity>
//                                         <TouchableOpacity
//                                             style={{
//                                                 width: scale(41),
//                                                 height: verticalScale(41),
//                                                 borderRadius: 100,
//                                                 backgroundColor:
//                                                     'rgba(255, 255, 255, 0.2)',
//                                                 justifyContent: 'center',
//                                                 alignItems: 'center',
//                                             }}>
//                                             <Image
//                                                 source={require('../../assets/navThreeDot.png')}
//                                                 resizeMode="contain"
//                                                 style={{
//                                                     width: scale(20),
//                                                     height: verticalScale(20),
//                                                 }}
//                                             />
//                                         </TouchableOpacity>
//                                     </View>
// =======
//                                     {data.user_info?.profile_pic === 'null' ? (
//                                         <CircleProfile
//                                             url={require('../../assets/demoUser.png')}
//                                             width={40}
//                                             height={40}
//                                         />
//                                     ) : (
//                                         <CircleUrlProfile
//                                             url={
//                                                 data.user_info?.profile_pic ||
//                                                 ''
//                                             }
//                                             width={40}
//                                             height={40}
//                                         />
//                                     )}
// >>>>>>> d9c31f6fbf79ac7a0a4cc7c024ae751373ec3cfd
//                                 </View>
//                                 <View
//                                     style={{
//                                         width: scale(153),
//                                         marginRight: 10,
//                                         justifyContent: 'center',
//                                     }}>
//                                     <Text
//                                         style={{
//                                             fontSize: RFValue(12),
//                                             color: 'white',
//                                             fontWeight: 'bold',
//                                         }}
//                                         numberOfLines={1}>
//                                         {data.user_info?.username ||
//                                             'Hithot_user'}
//                                     </Text>
//                                     {/* <Text
//                                         style={{
//                                             fontSize: RFValue(10),
//                                             color: 'rgba(255, 255, 255, 0.6)',
//                                         }}>
//                                         1hrs ago
//                                     </Text> */}
//                                 </View>
//                             </View>
//                             <View
//                                 style={{
//                                     flexDirection: 'row',
//                                     width: width * 0.45,
//                                     justifyContent: 'space-between',
//                                 }}>
//                                 <Animated.View
//                                     style={{
//                                         transform: [{ scale: buttonScale }],
//                                         width: buttonWidth,
//                                     }}>
//                                     <TouchableOpacity
//                                         style={{
//                                             height: verticalScale(41),
//                                             borderRadius: 100,
//                                             backgroundColor:
//                                                 'rgba(255, 255, 255, 0.2)',
//                                             justifyContent: 'center',
//                                             alignItems: 'center',
//                                         }}
//                                         onPress={() =>
//                                             followFromFeed({
//                                                 fb_id: '108939508596614871982',
//                                                 followed_fb_id: data.fb_id!!,
//                                                 status: '1',
//                                             })
//                                         }>
//                                         <Text
//                                             style={{
//                                                 fontSize: RFValue(10),
//                                                 color: 'white',
//                                             }}>
//                                             {followed ? 'Following' : 'Follow'}
//                                         </Text>
//                                     </TouchableOpacity>
//                                 </Animated.View>
//                                 <TouchableOpacity
//                                     style={{
//                                         width: scale(41),
//                                         height: verticalScale(41),
//                                         borderRadius: 100,
//                                         backgroundColor:
//                                             'rgba(255, 255, 255, 0.2)',
//                                         justifyContent: 'center',
//                                         alignItems: 'center',
//                                     }}>
//                                     <Image
//                                         source={require('../../assets/navThreeDot.png')}
//                                         resizeMode="contain"
//                                         style={{
//                                             width: scale(20),
//                                             height: verticalScale(20),
//                                         }}
//                                     />
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </TouchableOpacity>
//                 </View>
//                 <SwipeSection
//                     feedPostData={data}
//                     viewableFeedItem={viewableItem}
//                     heightcontent={1.5 * width}
//                     toggle={toggleFullscreen}
//                 />
//                 <View style={{ height: 150 }} />
//                 <Animated.View
//                     style={{
//                         width: width,
//                         position: 'absolute',
//                         bottom: 0,
//                         left: 0,
//                         height: animatedHeight,
//                         backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                     }}>
//                     <Image
//                         source={{ uri: data.thum }}
//                         style={{
//                             width: width,
//                             height: '100%',
//                         }}
//                         blurRadius={50}
//                     />
//                     <View
//                         style={{
//                             backgroundColor: 'rgba(0, 0, 0, 0.4)',
//                             position: 'absolute',
//                             width: width,
//                             height: '100%',
//                         }}
//                     />
//                 </Animated.View>
//                 <View
//                     style={{
//                         position: 'absolute',
//                         bottom: 8,
//                         width: width,
//                         paddingHorizontal: 20,
//                         paddingVertical: 10,
//                         zIndex: 10,
//                     }}>
//                     <SwipeLowerSection
//                         commentCount={data.count.video_comment_count}
//                         postId={Number(data.id)}
//                         likeCount={data.count.like_count}
//                         fb_id={data.fb_id ? data.fb_id.toString() : ''}
//                         onLikePress={handleLikePress}
//                     />
//                     <Text
//                         numberOfLines={viewMore ? undefined : 1}
//                         style={{ color: 'white' }}>
//                         <Text
//                             style={{
//                                 fontSize: RFValue(14),
//                                 fontWeight: 'bold',
//                             }}>
//                             {data.user_info?.username || 'Hithot_user'}
//                         </Text>
//                         <Text style={{ fontSize: RFValue(14) }}>
//                             {' ' + data.description}
//                         </Text>
//                     </Text>
//                     <TouchableOpacity onPress={handleViewMore}>
//                         <Text
//                             style={{
//                                 fontWeight: '300',
//                                 fontSize: RFValue(14),
//                                 color: 'rgba(255, 255, 255, 0.6)',
//                                 borderBottomWidth: 1,
//                                 borderBottomColor: 'rgba(255, 255, 255, 0.6)',
//                                 marginTop: 5,
//                                 width: viewMore ? 100 : 50,
//                             }}>
//                             {viewMore ? 'Hide details>' : 'more>'}
//                         </Text>
//                         <Text
//                             style={{
//                                 fontSize: RFValue(14),
//                                 color: 'white',
//                             }}>
//                             {data.count.video_comment_count === 0
//                                 ? 'No comments'
//                                 : data.count.video_comment_count === 1
//                                 ? 'View 1 comment'
//                                 : `View all ${data.count.video_comment_count} comments`}{' '}
//                         </Text>
//                         <Text
//                             style={{
//                                 fontSize: RFValue(14),
//                                 fontWeight: '300',
//                                 color: 'rgba(255, 255, 255, 0.6)',
//                             }}>
//                             {formatTimeAgo(data.created)}
//                         </Text>
//                     </TouchableOpacity>
//                 </View>

//                 {/* Top section */}
//                 {showAnimation && (
//                     <LottieView
//                         ref={likeAnimation}
//                         style={styles.likeLottie}
//                         source={Lotties.like}
//                         loop={false}
//                         autoPlay={false}
//                     />
//                 )}
//             </>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     likeLottie: {
//         height: 180,
//         width: 180,
//         position: 'absolute',
//         top: '30%',
//         alignSelf: 'center',
//     },
// });
// export default FeedPostCard;

import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    Animated,
    Platform,
    StyleSheet,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
import SwipeSection from './SwipeSection';
import CircleUrlProfile from './CircleUrlProfile';
import CircleProfile from './CircleProfile';
import SwipeLowerSection from './SwipeLowerSection';
import { VideoData } from '../Reels/ReelSection2';
import { useNavigation } from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import Video from 'react-native-video';
import axios, { Axios } from 'axios';
import LottieView from 'lottie-react-native';
import { Lotties } from '../../theme/Lotties';
import { HapticFeedbackTypes } from 'react-native-haptic-feedback';
import SoundUtils from '../../utils/soundUtils';
import BottomSheet from '@gorhom/bottom-sheet';

import { followUsersStore } from '../../store/followUsersStore';
import { generateUniqueNumbers } from '../../utils/utilFunc';
import FeedAds from './FeedAds';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useVideoStore from '../../store/VideoStore';
import ReelMoreOptions from '../Reels/ReelMoreOptions';
import { Colors } from '../../theme/Colors';
import searchByHashtagImage from '../../screens/Home/SearchByHashtag/searchByHashtagImage';
import searchByHashtagShort from '../../screens/Home/SearchByHashtag/searchByHashtagShort';
import useThemeStyles from '../../hooks/useThemeStyles';
import { useAuthStore } from '../../store/AuthStore';
import useVideoPlayingStore from '../../store/VideoPlayingStore';
import bgUrl from '../../assets/static_images/AdBg.png';

interface Props {
    index: number;
    data: VideoData;
    item: any;
    viewableItem: string;
}

type followProps = {
    fb_id: string;
    followed_fb_id: string;
    status: string;
};
const FeedPostCard: React.FC<Props> = ({ item, viewableItem, data, index }) => {
    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();
    const [viewMore, setViewMore] = useState(false);
    const animatedHeight = useRef(new Animated.Value(166)).current;
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [orientation, setOrientation] = useState('PORTRAIT');
    const [showLike, setShowLike] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
    const likeAnimation = useRef(null);
    const [followStatus, setFollowStatus] = useState(null);
    const { userDetails } = useAuthStore();
    const fb_id = userDetails?.fb_id;
    const followed_fb_id = data.fb_id;
    const [isFollowing, setIsFollowing] = useState(String);
    const [adsIndexes, setAdsIndexes] = useState(generateUniqueNumbers());
    console.log(adsIndexes, adsIndexes?.includes(index), 'ads indexs');
    const { toggleMoreOptions } = useVideoStore();
    const [showMoreOptions, setShowMoreOptions] = useState(false);
    // console.log(adsIndexes, adsIndexes?.includes(index), 'ads indexs');

    //console.log('item', adsIndexes);
    const [follweduser, setfolloweduser] = useState(String);
    const { orientationMode, handleComment, handlePost } =
        useVideoPlayingStore();

    const handleViewMore = () => {
        console.log('Data descriptyion', data.description.split(' '));
        Animated.timing(animatedHeight, {
            toValue: viewMore ? 166 : 300,
            duration: 300,
            useNativeDriver: false,
        }).start();
        setViewMore(!viewMore);
    };
    useEffect(() => {
        const handleOrientationChange = (orientation: string) => {
            setOrientation(orientation);
            if (
                orientation === 'LANDSCAPE-LEFT' ||
                orientation === 'LANDSCAPE-RIGHT'
            ) {
                setIsFullscreen(true);
                if (Platform.OS === 'android') {
                    // changeNavigationBarColor('black', true, true);
                }
            } else if (orientation === 'PORTRAIT') {
                setIsFullscreen(false);
                if (Platform.OS === 'android') {
                    //changeNavigationBarColor('white', true, true);
                }
            }
        };

        Orientation.addOrientationListener(handleOrientationChange);

        return () => {
            Orientation.removeOrientationListener(handleOrientationChange);
        };
    }, []);

    const toggleFullscreen = () => {
        if (isFullscreen) {
            Orientation.lockToPortrait();
        } else {
            Orientation.lockToLandscape();
        }
    };
    const formatTimeAgo = (dateString: string) => {
        const now = new Date();
        const past = new Date(dateString);
        const msPerMinute = 60 * 1000;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;

        const elapsed = now.getTime() - past.getTime();

        if (elapsed < msPerMinute) {
            return 'just now';
        } else if (elapsed < msPerHour) {
            const minutes = Math.round(elapsed / msPerMinute);
            return `${minutes} ${minutes === 1 ? 'min' : 'mins'} ago`;
        } else if (elapsed < msPerDay) {
            const hours = Math.round(elapsed / msPerHour);
            return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        } else {
            const days = Math.round(elapsed / msPerDay);
            return `${days} ${days === 1 ? 'day' : 'days'} ago`;
        }
    };

    const handleLikePress = () => {
        setShowLike(!showLike);
        if (showLike) {
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

    const [followeduserstatus, setfollowuserstatus] = useState(String);

    const handleFollowUnfollow = async () => {
        const status = isFollowing ? '0' : '1';
        console.log('home_foollow___', status);
        setfollowuserstatus(status);
        try {
            const response = await followUsersStore(
                fb_id,
                followed_fb_id,
                status,
            );

            // console.log('status', status);
            await AsyncStorage.setItem('followStatus', status);
            setfolloweduser(status);
            setFollowStatus(response.status);
            setIsFollowing(!isFollowing);
        } catch (error) {
            setFollowStatus('Error updating follow status');
        }
    };
    const bottomSheetRef = useRef<BottomSheet>(null);

    useEffect(() => {
        const getFollowStatus = async () => {
            try {
                const followstatus = await AsyncStorage.getItem('followStatus');
                if (followstatus !== null) {
                    console.log('statusaync', followstatus);

                    setfolloweduser(followstatus);
                    // Handle the retrieved status
                }
            } catch (error) {
                console.log('Error retrieving follow status', error);
            }

            return getFollowStatus;
        };
    }, [follweduser]);

    // console.log('statusaync', follweduser);

    const handlePress = () => {
        const userData = data;
        const selectedUser = data?.fb_id;
        navigation.navigate('VisitProfile', {
            user: selectedUser,
            followeduserstatus: followeduserstatus,
            userData: userData,
        });
    };
    // useEffect(() => {
    //     console.log('Data descriptyion', data.description.split(''));
    // });
    const styles = useThemeStyles(styleCreator);
    //console.log(data?.thum, data.user_info?.profile_pic, 'user');

    return (
        <View
            style={{
                //paddingBottom: 30,
                //paddingTop: 30,
                backgroundColor: 'white',
                // paddingBottom: 20,
            }}>
            {
                orientationMode === 'PORTRAIT' && (
                    <>
                        {adsIndexes?.includes(index) && <FeedAds />}
                        <View
                            style={[styles.mainContainer, { width: width }]}
                        />
                        <View
                            style={{
                                width: width * 0.9,
                                justifyContent: 'space-between',
                                // position: 'absolute',
                                // top: 18,
                                // left: 10,
                            }}>
                            <Image
                                source={{ uri: data.thum }}
                                style={{ width: width, height: 80 }}
                                blurRadius={10}
                            />
                            <View
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                    position: 'absolute',
                                    width: width,
                                    height: 80,
                                }}
                            />
                            <View
                                style={{
                                    width: width * 0.9,
                                    justifyContent: 'space-between',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                }}>
                                <Image
                                    source={{ uri: data.thum }}
                                    style={{ width: width, height: 80 }}
                                    blurRadius={10}
                                />
                                {/* <View
                                    style={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                        position: 'absolute',
                                        width: width,
                                        height: 80,
                                    }}
                                /> */}
                                <View
                                    style={{
                                        width: width,
                                        position: 'absolute',
                                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                        top: 0,
                                        left: 0,
                                        height: '100%',
                                        justifyContent: 'center',
                                    }}>
                                    <View>
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
                                                    {data.user_info
                                                        ?.profile_pic ===
                                                    'null' ? (
                                                        <CircleProfile
                                                            onPress={
                                                                handlePress
                                                            }
                                                            url={require('../../assets/demoUser.png')}
                                                            width={40}
                                                            height={40}
                                                        />
                                                    ) : (
                                                        <CircleUrlProfile
                                                            onPress={
                                                                handlePress
                                                            }
                                                            url={
                                                                data.user_info
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
                                                            fontSize:
                                                                RFValue(12),
                                                            color: 'white',
                                                            fontWeight: 'bold',
                                                        }}
                                                        numberOfLines={1}>
                                                        {data.user_info
                                                            ?.username ||
                                                            'Hithot_user'}
                                                    </Text>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            navigation.navigate(
                                                                'ReelsAudio',
                                                                {
                                                                    songDetails:
                                                                        data?.sound,
                                                                },
                                                            );
                                                        }}>
                                                        <Text
                                                            style={{
                                                                fontSize:
                                                                    RFValue(10),
                                                                color: 'rgba(255, 255, 255, 0.6)',
                                                                marginTop:
                                                                    RFValue(5),
                                                            }}>
                                                            {
                                                                data?.sound
                                                                    ?.sound_name
                                                            }
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    width: width * 0.45,
                                                    justifyContent:
                                                        'space-between',
                                                }}>
                                                <TouchableOpacity
                                                    onPress={
                                                        handleFollowUnfollow
                                                    }
                                                    style={{
                                                        width: scale(107),
                                                        height: verticalScale(
                                                            41,
                                                        ),
                                                        borderRadius: 100,
                                                        backgroundColor:
                                                            'rgba(255, 255, 255, 0.2)',
                                                        justifyContent:
                                                            'center',
                                                        alignItems: 'center',
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
                                                            fontSize:
                                                                RFValue(10),
                                                            color: 'white',
                                                        }}>
                                                        {follweduser === '1'
                                                            ? 'Unfollow'
                                                            : 'Follow'}
                                                    </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    onPress={() => {
                                                        console.log(
                                                            'thee dots clicked',
                                                        );
                                                    }}
                                                    style={{
                                                        width: scale(41),
                                                        height: verticalScale(
                                                            41,
                                                        ),
                                                        borderRadius: 100,
                                                        backgroundColor:
                                                            'rgba(255, 255, 255, 0.2)',
                                                        justifyContent:
                                                            'center',
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
                        </View>
                        <SwipeSection
                            feedPostData={data}
                            viewableFeedItem={viewableItem}
                            heightcontent={1.5 * width}
                            toggle={toggleFullscreen}
                        />
                        <View style={{ height: 150 }} />
                        {/* Bottom section */}
                        <Animated.View
                            style={{
                                width: width,
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                height: animatedHeight,
                                backgroundColor: '#57238C',
                            }}>
                            <Image
                                source={{ uri: data.thum }}
                                style={{
                                    width: width,
                                    height: '100%',
                                }}
                                blurRadius={50}
                            />
                            <View
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                    position: 'absolute',
                                    width: width,
                                    height: '100%',
                                }}
                            />
                        </Animated.View>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                width: width,
                                paddingHorizontal: 20,
                                paddingTop: 20,
                                paddingBottom: 7,
                                // backgroundColor: '#57238C',
                                //paddingTop: 10,

                                zIndex: 6,
                            }}>
                            <SwipeLowerSection
                                commentCount={data.count.video_comment_count}
                                postId={Number(data.id)}
                                likeCount={data.count.like_count}
                                fb_id={data.fb_id ? data.fb_id.toString() : ''}
                                onLikePress={handleLikePress}
                            />
                            <Text
                                numberOfLines={viewMore ? undefined : 1}
                                style={{ color: 'white' }}>
                                <Text
                                    style={{
                                        fontSize: RFValue(14),
                                        fontWeight: 'bold',
                                    }}>
                                    {data.user_info?.username || 'Hithot_user'}
                                </Text>

                                <Text
                                    style={{
                                        fontSize: RFValue(14),
                                        color: 'white',
                                    }}>
                                    {' '}
                                    {data.description
                                        .split(' ')
                                        .map((word, index) => {
                                            if (word.startsWith('#')) {
                                                return (
                                                    <TouchableOpacity
                                                        key={index}
                                                        onPress={() => {
                                                            data.vtype ===
                                                            'Clip'
                                                                ? searchByHashtagImage(
                                                                      {
                                                                          fb_id: '0',
                                                                          token: '',
                                                                          tag: word,
                                                                          pageNo: '1',
                                                                      },
                                                                  )
                                                                : data.vtype ===
                                                                  'Short'
                                                                ? searchByHashtagShort(
                                                                      {
                                                                          fb_id: '0',
                                                                          token: '',
                                                                          tag: word,
                                                                          pageNo: '1',
                                                                      },
                                                                  )
                                                                : searchByHashtagImage(
                                                                      {
                                                                          fb_id: '0',
                                                                          token: '',
                                                                          tag: word,
                                                                          pageNo: '1',
                                                                      },
                                                                  );
                                                        }}>
                                                        <Text
                                                            style={{
                                                                color: '#55B7EC',
                                                            }}>
                                                            {word}{' '}
                                                        </Text>
                                                    </TouchableOpacity>
                                                );
                                            } else {
                                                return (
                                                    <Text key={index}>
                                                        {word}{' '}
                                                    </Text>
                                                );
                                            }
                                        })}
                                </Text>
                            </Text>
                            <TouchableOpacity onPress={handleViewMore}>
                                <Text
                                    style={{
                                        fontWeight: '300',
                                        fontSize: RFValue(14),
                                        color: 'rgba(255, 255, 255, 0.6)',
                                        borderBottomWidth: 1,
                                        borderBottomColor:
                                            'rgba(255, 255, 255, 0.6)',
                                        marginTop: 5,
                                        width: viewMore ? 100 : 50,
                                    }}>
                                    {viewMore ? 'Hide details>' : 'more>'}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: RFValue(14),
                                        color: 'white',
                                    }}>
                                    {data.count.video_comment_count === 0
                                        ? 'No comments'
                                        : data.count.video_comment_count === 1
                                        ? 'View 1 comment'
                                        : `View all ${data.count.video_comment_count} comments`}{' '}
                                </Text>

                                <Text
                                    numberOfLines={viewMore ? undefined : 1}
                                    style={{ color: 'white' }}>
                                    <TouchableOpacity onPress={handlePress}>
                                        <Text
                                            style={{
                                                fontSize: RFValue(14),
                                                fontWeight: 'bold',
                                                color: 'white',
                                            }}>
                                            {data.user_info?.username ||
                                                'Hithot_user'}
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: RFValue(14) }}>
                                        {' ' + data.description}
                                    </Text>
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleViewMore}>
                                <Text
                                    style={{
                                        fontWeight: '300',
                                        fontSize: RFValue(14),
                                        color: 'rgba(255, 255, 255, 0.6)',
                                        borderBottomWidth: 1,
                                        borderBottomColor:
                                            'rgba(255, 255, 255, 0.6)',
                                        marginTop: 5,
                                        width: viewMore ? 100 : 50,
                                    }}>
                                    {viewMore ? 'Hide details>' : 'more>'}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: RFValue(14),
                                        color: 'white',
                                    }}>
                                    {data.count.video_comment_count === 0
                                        ? 'No comments'
                                        : data.count.video_comment_count === 1
                                        ? 'View 1 comment'
                                        : `View all ${data.count.video_comment_count} comments`}{' '}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: RFValue(14),
                                        fontWeight: '300',
                                        color: 'rgba(255, 255, 255, 0.6)',
                                    }}>
                                    {formatTimeAgo(data.created)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )
                // : (
                //     <View
                //         style={{
                //             width: height,
                //             height: width,
                //             justifyContent: 'center',
                //         }}>
                //         <Video
                //             source={{ uri: data.video }}
                //             style={{ flex: 1, width: 200, height: 200 }}
                //             resizeMode="contain"
                //         />
                //         <TouchableOpacity onPress={toggleFullscreen}>
                //             <Text>Toggle </Text>
                //         </TouchableOpacity>
                //     </View>
                // )
            }
            {/* Top section */}
            {showAnimation && (
                <LottieView
                    ref={likeAnimation}
                    style={styles.likeLottie}
                    source={Lotties.like}
                    loop={false}
                    autoPlay={false}
                />
            )}
            {showMoreOptions && <ReelMoreOptions />}
        </View>
    );
};

const styleCreator = colors =>
    StyleSheet.create({
        likeLottie: {
            height: 180,
            width: 180,
            position: 'absolute',
            top: '30%',
            alignSelf: 'center',
        },
        mainContainer: {
            backgroundColor: colors.feedBgColor,
            position: 'absolute',
            height: 80,
        },
        usernameText: {
            fontSize: RFValue(12),
            color: colors.textColor,
            fontWeight: 'bold',
        },
        uploadTimeText: {
            fontSize: RFValue(10),
            color: colors.lightTextColor,
        },
        followContainer: {
            borderRadius: 100,
            backgroundColor: colors.topButtonColor,
            justifyContent: 'center',
            alignItems: 'center',
        },
        followText: {
            fontSize: RFValue(10),
            color: colors.textColor,
        },
        threeDot: {
            width: scale(41),
            height: verticalScale(41),
            borderRadius: 100,
            backgroundColor: colors.topButtonColor,
            justifyContent: 'center',
            alignItems: 'center',
        },
        feedBottomContainer: {
            backgroundColor: colors.feedBgColor,
            position: 'absolute',
            height: '100%',
        },
        captionText: {
            color: colors.textColor,
        },
        moreText: {
            fontWeight: '300',
            fontSize: RFValue(14),
            color: colors.lightTextColor,
            borderBottomWidth: 1,
            borderBottomColor: colors.lightTextColor,
            marginTop: 5,
        },
        viewAllComments: {
            fontSize: RFValue(14),
            color: colors.textColor,
        },
        timeAgoText: {
            fontSize: RFValue(14),
            fontWeight: '300',
            color: colors.lightTextColor,
        },
    });
export default FeedPostCard;
