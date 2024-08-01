import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    AppRegistry,
    Image,
    Dimensions,
} from 'react-native';
import ReelSection2 from '../../components/Reels/ReelSection2';
import FeedPostCard from '../../components/Feed/FeedPostCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FollowCard from '../../components/Followcard/FollowCard';
import Shorts from '../../components/shorts/Shorts';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
interface livedata {
    data: any;
    id: number;
    username: string;
    name: string;
    image: any;
    userimage: any;
    views: any;
}

const ShortsAudio: React.FC<livedata> = ({
    data,
    username,
    name,
    image,
    userimage,
    views,
}) => {
    const allData = data;

    const navigation = useNavigation();

    return (
        <>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                    navigation.navigate('ShortsScreen', { data: allData })
                }>
                <View
                    style={{
                        width: WIDTH / 2.28,
                        paddingBottom: 14,
                        marginRight: 14,
                        // borderWidth: 1,
                        // borderColor: 'red',
                    }}>
                    <View
                        style={{
                            width: '100%',
                            borderRadius: 14,
                            overflow: 'hidden',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <View
                            style={{
                                width: '100%',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Video
                                muted
                                source={{ uri: image }}
                                resizeMode={'cover'}
                                posterResizeMode={'cover'}
                                style={{ width: '100%', height: HEIGHT / 3.18 }}
                            />
                        </View>
                        <View
                            style={{
                                width: '100%',
                                paddingVertical: 4,
                                paddingHorizontal: 4,
                                bottom: 0,
                                position: 'absolute',
                                alignItems: 'flex-start',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <View
                                style={{
                                    paddingVertical: 8,
                                    paddingHorizontal: 12,
                                    borderRadius: 1000,
                                    flexDirection: 'row',
                                    overflow: 'hidden',
                                    // borderWidth: 1,
                                    // borderColor: 'red',
                                }}>
                                <View
                                    style={{
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        // borderWidth: 1,
                                        // borderColor: 'red',
                                    }}>
                                    <Image
                                        source={require('../../assets/outlinePlay.png')}
                                        resizeMode={'contain'}
                                        style={{ width: 14, height: 14 }}
                                    />
                                </View>
                                <View
                                    style={{
                                        // width: '84%',
                                        paddingLeft: 8,
                                        justifyContent: 'center',
                                        // borderWidth: 1,
                                        // borderColor: 'red',
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            fontFamily: 'Figtree-SemiBold',
                                            color: '#FFFFFF',
                                        }}>{`${views}K`}</Text>
                                </View>
                                <View
                                    style={{
                                        width: WIDTH,
                                        height: HEIGHT,
                                        position: 'absolute',
                                        backgroundColor: '#000000',
                                        opacity: 0.7,
                                        zIndex: -1,
                                    }}
                                />
                            </View>
                        </View>
                    </View>

                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'column',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <View
                            style={{
                                width: '80%',
                                paddingTop: 6,
                                paddingBottom: 4,
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Text
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                style={{
                                    fontSize: 18,
                                    fontFamily: 'Figtree-Bold',
                                    color: '#FFFFFF',
                                }}>
                                {name}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <View
                                style={{
                                    width: '18%',
                                    // borderWidth: 1,
                                    // borderColor: 'red',
                                }}>
                                <View
                                    style={{
                                        width: 22,
                                        height: 22,
                                        borderRadius: 1000,
                                        overflow: 'hidden',
                                        // borderWidth: 1,
                                        // borderColor: 'red',
                                    }}>
                                    <Image
                                        source={{ uri: userimage }}
                                        resizeMode={'cover'}
                                        style={{ width: 22, height: 22 }}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    width: '82%',
                                    justifyContent: 'center',
                                    // borderWidth: 1,
                                    // borderColor: 'red',
                                }}>
                                <Text
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                    style={{
                                        fontSize: 14,
                                        fontFamily: 'Figtree-Regular',
                                        color: '#FFFFFF',
                                        opacity: 0.6,
                                    }}>
                                    {username}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
};

export default ShortsAudio;
