//This whole page was commented to run dummy story

import React, { useState, useRef, useEffect } from 'react';
import {
    Dimensions,
    Text,
    View,
    Image,
    Animated,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StatusBar,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { verticalScale, scale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import getStory, { User } from './getStory';
import { dummyStories } from './DummyData';
import Video from 'react-native-video';
import RNFS from 'react-native-fs';

const { width, height } = Dimensions.get('window');

interface StoryviewingProps {
    route: {
        params: {
            fb_id: string;
            storyData: any;
        };
    };
}

function Storyviewing(props: any) {
    const { fb_id } = props?.route.params;
    function Storyviewing({ route }: StoryviewingProps) {
        const { fb_id, storyData } = route.params;

        console.log('storyData___________________', storyData);

        const navigation = useNavigation();
        const [usersStories, setUsersStories] = useState<User[]>([]);
        const [currentUserIndex, setCurrentUserIndex] = useState(0);
        const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
        const progressOfStory = useRef(new Animated.Value(0)).current;
        const [isLoading, setIsLoading] = useState(true);
        const [progress, setProgress] = useState(0);
        const [isPaused, setIsPaused] = useState(false);
        const [isTouching, setIsTouching] = useState(false);

        // const { fetchUserProfileData, profileData, profileLoading } =
        //     useProfileStore(state => ({
        //         fetchUserProfileData: state.fetchUserProfileData,
        //         profileLoading: state.loading,
        //         profileData: state.profileData,
        //     }));

        // useEffect(() => {
        //     fetchUserProfileData(FB_ID);
        // }, [FB_ID]);

        useEffect(() => {
            setIsLoading(true);
            setUsersStories(dummyStories);
            prefetchStories(dummyStories);
        }, []);

        useEffect(() => {
            if (!isPaused && !isTouching) {
                start();
            } else {
                progressOfStory.stopAnimation();
            }
            return () => {
                progressOfStory.stopAnimation();
            };
        }, [currentStoryIndex, currentUserIndex, isPaused, isTouching]);

        const prefetchStories = async (stories: User[]) => {
            // Prefetch logic remains the same
        };

        const start = () => {
            progressOfStory.setValue(0);
            if (
                usersStories.length > 0 &&
                usersStories[currentUserIndex].StoryData.length > 0
            ) {
                Animated.timing(progressOfStory, {
                    toValue: 1,
                    duration: 5000,
                    useNativeDriver: false,
                }).start(({ finished }) => {
                    if (finished && !isPaused && !isTouching) {
                        next();
                    }
                });
            }
        };

        const next = () => {
            setIsLoading(true);
            const currentStories = usersStories[currentUserIndex].StoryData;
            if (currentStoryIndex < currentStories.length - 1) {
                setCurrentStoryIndex(prevIndex => prevIndex + 1);
            } else if (currentUserIndex < usersStories.length - 1) {
                setCurrentUserIndex(prevIndex => prevIndex + 1);
                setCurrentStoryIndex(0);
            } else {
                close();
            }
            setProgress(0);
        };

        const previous = () => {
            setIsLoading(true);
            if (currentStoryIndex > 0) {
                setCurrentStoryIndex(prevIndex => prevIndex - 1);
            } else if (currentUserIndex > 0) {
                setCurrentUserIndex(prevIndex => prevIndex - 1);
                setCurrentStoryIndex(
                    usersStories[currentUserIndex - 1].StoryData.length - 1,
                );
            } else {
                close();
            }
            setProgress(0);
        };

        const close = () => {
            progressOfStory.setValue(0);
            navigation.goBack();
        };

        const currentStory =
            usersStories[currentUserIndex]?.StoryData[currentStoryIndex];

        return (
            <SafeAreaProvider>
                <SafeAreaView
                    style={{ flex: 1, backgroundColor: 'black' }}
                    edges={['top']}>
                    <StatusBar barStyle="light-content" />

                    <View style={StyleSheet.absoluteFill}>
                        {currentStory && currentStory.post.endsWith('.mp4') ? (
                            <Video
                                source={{ uri: currentStory.post }}
                                style={{ width: width, height: height * 1.2 }}
                                resizeMode="cover"
                                paused={isPaused || isTouching}
                                onEnd={next}
                                onProgress={data => {
                                    if (!isPaused && !isTouching) {
                                        setProgress(
                                            data.currentTime /
                                                data.seekableDuration,
                                        );
                                        progressOfStory.setValue(
                                            data.currentTime /
                                                data.seekableDuration,
                                        );
                                    }
                                }}
                                onLoad={() => {
                                    setIsLoading(false);
                                    progressOfStory.setValue(0);
                                    start();
                                }}
                            />
                        ) : (
                            <Image
                                source={{ uri: currentStory?.post }}
                                style={{
                                    width: width,
                                    height: height * 1.2,
                                    resizeMode: 'cover',
                                }}
                                onLoad={() => {
                                    setIsLoading(false);
                                    progressOfStory.setValue(0);
                                    start();
                                }}
                            />
                        )}
                    </View>

                    {/* Progress bars */}
                    <View
                        style={{
                            flexDirection: 'row',
                            position: 'absolute',
                            top: 10,
                            left: 10,
                            right: 10,
                        }}>
                        {usersStories[currentUserIndex]?.StoryData.map(
                            (_, index) => (
                                <View
                                    key={index}
                                    style={{
                                        flex: 1,
                                        height: 2,
                                        backgroundColor:
                                            'rgba(255, 255, 255, 0.3)',
                                        marginHorizontal: 2,
                                    }}>
                                    <Animated.View
                                        style={{
                                            width:
                                                currentStoryIndex === index
                                                    ? progressOfStory.interpolate(
                                                          {
                                                              inputRange: [
                                                                  0, 1,
                                                              ],
                                                              outputRange: [
                                                                  '0%',
                                                                  '100%',
                                                              ],
                                                          },
                                                      )
                                                    : index < currentStoryIndex
                                                    ? '100%'
                                                    : '0%',
                                            height: '100%',
                                            backgroundColor: 'white',
                                        }}
                                    />
                                </View>
                            ),
                        )}
                    </View>

                    {/* User info and close button */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            position: 'absolute',
                            top: 20,
                            left: 10,
                            right: 10,
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Image
                                source={{
                                    uri: usersStories[currentUserIndex]
                                        ?.profilePic,
                                }}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 20,
                                }}
                            />
                            <Text style={{ color: 'white', marginLeft: 10 }}>
                                {usersStories[currentUserIndex]?.userName}
                            </Text>
                        </View>
                        <TouchableOpacity onPress={close}>
                            <Text style={{ color: 'white', fontSize: 20 }}>
                                ✕
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Touch areas for navigation and pause */}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={previous}
                            activeOpacity={1}
                        />
                        <TouchableWithoutFeedback
                            onPressIn={() => {
                                setIsTouching(true);
                                setIsPaused(true);
                            }}
                            onPressOut={() => {
                                setIsTouching(false);
                                setIsPaused(false);
                            }}>
                            <View style={{ flex: 1 }} />
                        </TouchableWithoutFeedback>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={next}
                            activeOpacity={1}
                        />
                    </View>

                    {/* Loading indicator */}
                    {isLoading && (
                        <View
                            style={[
                                StyleSheet.absoluteFill,
                                {
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                },
                            ]}>
                            <ActivityIndicator size="large" color="#ffffff" />
                        </View>
                    )}
                </SafeAreaView>
            </SafeAreaProvider>
        );
    }
}

export default Storyviewing;
