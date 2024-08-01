import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    Dimensions,
    Text,
    View,
    Image,
    Animated,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { verticalScale, scale } from 'react-native-size-matters';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { interpolate } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

interface StoryContent {
    content: string;
    type: string;
    duration: number; // duration in milliseconds
}

interface UserStories {
    userID: string;
    userName: string;
    stories: StoryContent[];
}

const usersStories: UserStories[] = [
    {
        userID: '1',
        userName: 'User 1',
        stories: [
            {
                content:
                    'https://plus.unsplash.com/premium_photo-1668349758167-3c8849212507?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwY29mZmVlfGVufDB8fDB8fHww',
                type: 'image',
                duration: 5000,
            },
            {
                content:
                    'https://images.unsplash.com/photo-1646200207222-73b839e28a03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGdhbmdhJTIwZ2hhdHxlbnwwfHwwfHx8MA%3D%3D',
                type: 'image',
                duration: 5000,
            },
        ],
    },
    {
        userID: '2',
        userName: 'User 2',
        stories: [
            {
                content:
                    'https://images.unsplash.com/photo-1597403491447-3ab08f8e44dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMGRyaW5rfGVufDB8fDB8fHww',
                type: 'image',
                duration: 5000,
            },
            {
                content:
                    'https://images.unsplash.com/photo-1646200207222-73b839e28a03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGdhbmdhJTIwZ2hhdHxlbnwwfHwwfHx8MA%3D%3D',
                type: 'image',
                duration: 5000,
            },
            {
                content:
                    'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww',
                type: 'image',
                duration: 5000,
            },
        ],
    },
    {
        userID: '3',
        userName: 'Anurag',
        stories: [
            {
                content:
                    'https://images.unsplash.com/photo-1597403491447-3ab08f8e44dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMGRyaW5rfGVufDB8fDB8fHww',
                type: 'image',
                duration: 5000,
            },
            {
                content:
                    'https://images.unsplash.com/photo-1646200207222-73b839e28a03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGdhbmdhJTIwZ2hhdHxlbnwwfHwwfHx8MA%3D%3D',
                type: 'image',
                duration: 5000,
            },
            {
                content:
                    'https://images.unsplash.com/photo-1646200207222-73b839e28a03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGdhbmdhJTIwZ2hhdHxlbnwwfHwwfHx8MA%3D%3D',
                type: 'image',
                duration: 5000,
            },
        ],
    },
];

function StoryAdvertisement() {
    const navigation = useNavigation();
    const [currentUserIndex, setCurrentUserIndex] = useState(0);
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const progressOfStory = useRef(new Animated.Value(0)).current;
    const transition = useRef(new Animated.Value(0)).current;
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        start();
        return () => {
            progressOfStory.stopAnimation();
        };
    }, [currentStoryIndex, currentUserIndex]);

    const start = () => {
        Animated.timing(progressOfStory, {
            toValue: 1,
            duration:
                usersStories[currentUserIndex].stories[currentStoryIndex]
                    .duration,
            useNativeDriver: false,
        }).start(({ finished }) => {
            if (finished) {
                next();
            }
        });
    };

    const next = () => {
        const currentStories = usersStories[currentUserIndex].stories;
        if (currentStoryIndex < currentStories.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1);
        } else if (currentUserIndex < usersStories.length - 1) {
            transitionToNextUser();
        } else {
            close();
        }
    };

    const previous = () => {
        if (currentStoryIndex > 0) {
            setCurrentStoryIndex(currentStoryIndex - 1);
        } else if (currentUserIndex > 0) {
            transitionToPreviousUser();
        } else {
            close();
        }
    };

    const transitionToNextUser = () => {
        setAnimating(true);
        Animated.timing(transition, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
        }).start(() => {
            setCurrentUserIndex(index => index + 1);
            setCurrentStoryIndex(0);
            transition.setValue(0);
            setAnimating(false);
        });
    };

    const transitionToPreviousUser = () => {
        setAnimating(true);
        Animated.timing(transition, {
            toValue: -1,
            duration: 600,
            useNativeDriver: true,
        }).start(() => {
            setCurrentUserIndex(index => index - 1);
            setCurrentStoryIndex(
                usersStories[currentUserIndex - 1].stories.length - 1,
            );
            transition.setValue(0);
            setAnimating(false);
        });
    };

    const close = () => {
        progressOfStory.setValue(0);
        navigation.goBack();
    };

    const currentStory =
        usersStories[currentUserIndex].stories[currentStoryIndex];

    const rotateY = transition.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['-90deg', '0deg', '90deg'],
    });

    const animatedStyle = {
        transform: [{ perspective: 1000 }, { rotateY }],
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Animated.View style={[StyleSheet.absoluteFill, animatedStyle]}>
                <Image
                    source={{ uri: currentStory.content }}
                    style={{
                        width: width,
                        height: height * 1.2,
                        resizeMode: 'cover',
                    }}
                    onLoadEnd={() => {
                        progressOfStory.setValue(0);
                        start();
                    }}
                />
            </Animated.View>
            <View
                style={{
                    width: width,
                    position: 'absolute',
                    top: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                {usersStories[currentUserIndex].stories.map((story, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                flex: 1,
                                height: 4,
                                backgroundColor: '#ffffff40',
                                marginLeft: 5,
                                flexDirection: 'row',
                                zIndex: 5,
                            }}>
                            <Animated.View
                                style={{
                                    flex:
                                        currentStoryIndex === index
                                            ? progressOfStory
                                            : index < currentStoryIndex
                                            ? 1
                                            : 0,
                                    height: 4,
                                    backgroundColor: '#ffffff80',
                                    zIndex: 5,
                                }}></Animated.View>
                        </View>
                    );
                })}
            </View>

            <View
                style={{
                    width: width,
                    height: verticalScale(50),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    position: 'absolute',
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: width,
                        height: verticalScale(40),
                        paddingHorizontal: 15,
                        marginTop: 14,
                        zIndex: 5,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',

                            height: 50,
                        }}>
                        <Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
                            }}
                            style={{
                                width: scale(40),
                                height: verticalScale(40),
                                borderRadius: scale(30),
                                marginTop: verticalScale(24),
                            }}
                        />
                        <Text
                            style={{
                                paddingTop: 10,
                                paddingLeft: 10,
                                fontSize: 16,
                                fontWeight: '700',
                                color: 'white',
                            }}>
                            {usersStories[currentUserIndex].userName}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={close}>
                        <Image
                            style={{
                                tintColor: 'rgba(255, 255, 255, 0.6)',
                                width: 24,
                                height: 24,
                            }}
                            source={require('../../../../assets/more.png')}
                        />
                    </TouchableOpacity>
                </View>
                <LinearGradient
                    colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0)']}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: height * 0.2,
                        zIndex: 1,
                    }}
                />
            </View>

            <View
                style={{
                    position: 'absolute',
                    bottom: verticalScale(10),
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: width,
                    alignItems: 'center',
                    marginBottom: verticalScale(20),
                    zIndex: 5,
                }}>
                {/* bottom */}
                <ScrollView>
                    <TouchableOpacity
                        style={{
                            zIndex: 10,
                            overflow: 'hidden',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <LinearGradient
                            colors={['#F7C900', '#EB853C']}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            style={{
                                width: scale(327),
                                height: verticalScale(54),
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: scale(8),
                            }}>
                            <Text style={{ color: 'white' }}>Shop now</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <PanGestureHandler
                onGestureEvent={Animated.event(
                    [{ nativeEvent: { translationX: transition } }],
                    { useNativeDriver: false },
                )}
                onHandlerStateChange={({ nativeEvent }) => {
                    if (nativeEvent.state === State.END) {
                        if (nativeEvent.translationX < -50) {
                            next();
                        } else if (nativeEvent.translationX > 50) {
                            previous();
                        }
                    }
                }}>
                <Animated.View
                    style={{
                        width: width,
                        height: height,
                        position: 'absolute',
                        top: 0,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                        style={{
                            width: width / 2,
                            height: '100%',
                        }}
                        onPress={previous}>
                        <Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: width / 2,
                            height: '100%',
                        }}
                        onPress={next}>
                        <Text style={{}}></Text>
                    </TouchableOpacity>
                </Animated.View>
            </PanGestureHandler>
            <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: height * 0.2,
                    zIndex: 1,
                }}
            />
        </SafeAreaView>
    );
}

export default StoryAdvertisement;
