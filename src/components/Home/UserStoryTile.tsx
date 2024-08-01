// import { Animated, Image, ImageSourcePropType, Text, View } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import CircleUrlProfile from '../Feed/CircleUrlProfile';
// import { scale, verticalScale } from 'react-native-size-matters';

// import React, { useRef } from 'react';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationType } from '../../route/MainStack';
// import { StoryData, User } from '../../screens/Home/Story/getStory';
// import { ContentType } from '../../constants';
// import { STACK } from '../../route';
// interface Props {
//     seen: string;
//     userName: string;
//     userprofile?: ImageSourcePropType;
//     mainUser: boolean;
//     hideUserName?: boolean;
//     stringUrl?: StoryData[];
//     user?: string;
// }

// const UserStoryTile: React.FC<Props> = ({
//     seen,
//     userName,
//     mainUser,
//     hideUserName,
//     stringUrl,
//     user,
// }) => {
//     const navigation = useNavigation<StackNavigationType>();
//     const animatedValue = useRef(new Animated.Value(1)).current;
//     console.log('Profile pic pci', user.profilePic);

//     const handlePressIn = () => {
//         Animated.spring(animatedValue, {
//             toValue: 0.8,
//             useNativeDriver: true,
//         }).start();
//     };

//     const handlePressOut = () => {
//         Animated.spring(animatedValue, {
//             toValue: 1,
//             useNativeDriver: true,
//         }).start();
//     };
//     return (
//         <Animated.View
//             style={{
//                 transform: [{ scale: animatedValue }],
//                 marginBottom: verticalScale(20),
//             }}>
//             <TouchableOpacity
//                 className="flex items-center mr-2 "
//                 onPress={() => {
//                     // navigation.navigate('StoryViewingPage', {
//                     //     fb_id: user.fb_id,
//                     // });  commented to play dummy data
//                 }}
//                 onPressIn={handlePressIn}
//                 onPressOut={handlePressOut}>
//                 <View
//                     className="flex items-center justify-center p-1 "
//                     style={{
//                         width: scale(80),
//                         height: verticalScale(120),
//                         borderRadius: scale(14),
//                         position: 'relative',
//                     }}>
//                     {mainUser ? (
//                         <TouchableOpacity
//                             className="flex flex-col items-center justify-center "
//                             style={{
//                                 width: scale(80),
//                                 height: 86,
//                                 borderRadius: scale(14),
//                                 backgroundColor: 'rgba(255, 255, 255, 0.14)',
//                             }}
//                             onPress={() => {
//                                 navigation.navigate(STACK.CreateContent, {
//                                     type: ContentType.STORY,
//                                 });
//                             }}>
//                             <Image
//                                 style={{
//                                     width: scale(22),
//                                     height: verticalScale(22),
//                                     tintColor: 'white',
//                                     marginBottom: verticalScale(8),
//                                 }}
//                                 source={require('../../assets/instagram-post.png')}
//                             />

//                             <Text style={{ color: 'white', fontSize: 14 }}>
//                                 Add story
//                             </Text>
//                         </TouchableOpacity>
//                     ) : (
//                         <View className="">
//                             {stringUrl ? (
//                                 <View>
//                                     <CircleUrlProfile
//                                         url={user}
//                                         width={80}
//                                         height={86}
//                                     />
//                                     <Image
//                                         source={{ uri: user?.profilePic }}
//                                         resizeMode="contain"
//                                         style={{
//                                             position: 'absolute',
//                                             bottom: -15, // Adjust this value to position the icon correctly
//                                             left: '30%',
//                                             zIndex: 5,
//                                             width: scale(34), // Adjust the size of the icon
//                                             height: scale(34),
//                                             borderWidth: 1,
//                                             borderRadius: 100,
//                                             borderColor: 'white',
//                                         }}
//                                     />
//                                 </View>
//                             ) : (
//                                 <Image
//                                     source={require('../../assets/demoUser.png')}
//                                     resizeMode="contain"
//                                     className=" w-14 h-14"
//                                 />
//                                 //<Text>HHHHHH</Text>
//                             )}
//                         </View>
//                     )}

//                     {/* {seen && (
//                     // <LinearGradient
//                     //     colors={['#F7C900', '#EB853C']}
//                     //     start={{ x: 1, y: 1 }}
//                     //     end={{ x: 1, y: 0 }}
//                     //     className="absolute top-0 bottom-0 left-0 right-0 z-10 rounded-full "
//                     // />
//                 )} */}
//                     {mainUser && (
//                         <View className="absolute z-20 w-4 h-4 rounded-full bottom-1 right-1">
//                             {/* <LinearGradient
//                             colors={['#F7C900', '#EB853C']}
//                             start={{ x: 1, y: 1 }}
//                             end={{ x: 1, y: 0 }}
//                             className="flex items-center justify-center w-full h-full rounded-full ">
//                             <Image
//                                 source={require('../../assets/add.png')}
//                                 resizeMode="contain"
//                                 className="w-3 h-3 "
//                             />
//                         </LinearGradient> */}
//                         </View>
//                     )}
//                 </View>
//                 {/* {!hideUserName && (
//                 <Text className=" text-sm text-white mt-[2px] font-sans">
//                     {userName}
//                 </Text>
//             )} */}
//             </TouchableOpacity>
//         </Animated.View>
//     );
// };

// export default UserStoryTile;

import { Animated, Image, ImageSourcePropType, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CircleUrlProfile from '../Feed/CircleUrlProfile';
import { scale, verticalScale } from 'react-native-size-matters';

import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from '../../route/MainStack';
import { StoryData, User } from '../../screens/Home/Story/getStory';
import { ContentType } from '../../constants';
import { STACK } from '../../route';
interface Props {
    seen: string;
    userName: string;
    userprofile?: ImageSourcePropType;
    mainUser: boolean;
    hideUserName?: boolean;
    //stringUrl?: StoryData[]; done for dummy data
    stringUrl: string; //done for dummy data
    user: User;
}

const UserStoryTile: React.FC<Props> = ({
    seen,
    userName,
    mainUser,
    hideUserName,
    stringUrl,
    user,
}) => {
    const navigation = useNavigation<StackNavigationType>();
    const animatedValue = useRef(new Animated.Value(1)).current;
    // console.log('Profile pic pci', user.profilePic);

    const handlePressIn = () => {
        Animated.spring(animatedValue, {
            toValue: 0.8,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(animatedValue, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };
    return (
        <Animated.View
            style={{
                transform: [{ scale: animatedValue }],
                marginBottom: verticalScale(18),
            }}>
            <TouchableOpacity
                className="flex items-center mr-3 "
                onPress={() => {
                    // console.log('story');
                    navigation.navigate('StoryView', {
                        fb_id: user.fb_id,
                    });
                    //commented to play dummy data
                }}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}>
                <View
                    className="flex items-center justify-center p-1 "
                    style={{
                        width: scale(80),
                        height: verticalScale(100),
                        borderRadius: scale(14),
                        position: 'relative',
                    }}>
                    {mainUser ? (
                        <TouchableOpacity
                            className="flex flex-col items-center justify-center "
                            style={{
                                width: scale(80),
                                height: 86,
                                borderRadius: scale(14),
                                backgroundColor: 'rgba(255, 255, 255, 0.14)',
                            }}
                            onPress={() => {
                                navigation.navigate(STACK.CreateContent, {
                                    type: ContentType.STORY,
                                });
                            }}>
                            <Image
                                style={{
                                    width: scale(22),
                                    height: verticalScale(22),
                                    tintColor: 'white',
                                    marginBottom: verticalScale(8),
                                }}
                                source={require('../../assets/instagram-post.png')}
                            />

                            <Text style={{ color: 'white', fontSize: 14 }}>
                                Add story
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        <View className="">
                            {stringUrl ? (
                                <View>
                                    <CircleUrlProfile
                                        url={user.profilePic}
                                        width={80}
                                        height={86}
                                    />
                                    <Image
                                        //source={{ uri: user.profilePic }} done for dummy story
                                        source={require('../../assets/demoUser.png')}
                                        resizeMode="contain"
                                        style={{
                                            position: 'absolute',
                                            bottom: -15, // Adjust this value to position the icon correctly
                                            left: '35%',
                                            zIndex: 5,
                                            width: scale(25), // Adjust the size of the icon
                                            height: scale(25),
                                            borderWidth: 1,
                                            borderRadius: 100,
                                            borderColor: 'white',
                                        }}
                                    />
                                </View>
                            ) : (
                                <Image
                                    source={require('../../assets/demoUser.png')}
                                    resizeMode="contain"
                                    className=" w-14 h-14"
                                />
                                //<Text>HHHHHH</Text>
                            )}
                        </View>
                    )}

                    {/* {seen && (
                    // <LinearGradient
                    //     colors={['#F7C900', '#EB853C']}
                    //     start={{ x: 1, y: 1 }}
                    //     end={{ x: 1, y: 0 }}
                    //     className="absolute top-0 bottom-0 left-0 right-0 z-10 rounded-full "
                    // />
                )} */}
                    {mainUser && (
                        <View className="absolute z-20 w-4 h-4 rounded-full bottom-1 right-1">
                            {/* <LinearGradient
                            colors={['#F7C900', '#EB853C']}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            className="flex items-center justify-center w-full h-full rounded-full ">
                            <Image
                                source={require('../../assets/add.png')}
                                resizeMode="contain"
                                className="w-3 h-3 "
                            />
                        </LinearGradient> */}
                        </View>
                    )}
                </View>
                {/* {!hideUserName && (
                <Text className=" text-sm text-white mt-[2px] font-sans">
                    {userName}
                </Text>
            )} */}
            </TouchableOpacity>
        </Animated.View>
    );
};

export default UserStoryTile;
