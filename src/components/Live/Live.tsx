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
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

interface livedata {
    id: number;
    username: string;
    name: string;
    image: any;
    userimage: any;
    views: any;
}

const LiveIcon = () => {
    return (
        <View className="flex justify-center align-middle ">
            <Text className="bg-red-400 text-white p-1 rounded-full ">
                Live
            </Text>
        </View>
    );
};

const ViewIcon = () => {
    return <View></View>;
};

const LiveCard: React.FC<livedata> = ({
    username,
    name,
    image,
    userimage,
    views,
}) => {
    return (
        <View
            style={{
                width: WIDTH / 2.28,
                paddingBottom: 14,
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
                    <Image
                        source={{ uri: image }}
                        resizeMode={'cover'}
                        style={{ width: '100%', height: HEIGHT / 3.18 }}
                    />
                </View>
                <View
                    style={{
                        width: '100%',
                        paddingVertical: 8,
                        paddingHorizontal: 10,
                        top: 0,
                        position: 'absolute',
                        alignItems: 'flex-end',
                        // borderWidth: 1,
                        // borderColor: 'red',
                    }}>
                    <View
                        style={{
                            paddingVertical: 4,
                            paddingHorizontal: 8,
                            borderRadius: 1000,
                            overflow: 'hidden',
                            backgroundColor: '#FF3D3A',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <Text
                            style={{
                                fontSize: 14,
                                fontFamily: 'Figtree-SemiBold',
                                color: '#FFFFFF',
                            }}>{`Live`}</Text>
                    </View>
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
                                source={require('../../assets/eye.png')}
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
                        width: '100%',
                        paddingTop: 6,
                        paddingBottom: 4,
                        // borderWidth: 1,
                        // borderColor: 'red',
                    }}>
                    <Text
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
                            style={{
                                fontSize: 14,
                                fontFamily: 'Figtree-Regular',
                                color: '#FFFFFF',
                                opacity: 0.3,
                            }}>
                            {username}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default LiveCard;
