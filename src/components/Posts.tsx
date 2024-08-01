import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

interface Postdata {
    fb_id: string;
    data: any;
    image: any;
    username: string;
    time: string;
    views: any;
    comment: any;
    profile_pic: any;
    follower: string;
}

const FollowButton = () => {
    return (
        <View>
            <TouchableOpacity className=" bg-[#4B545E] p-2 px-5 border-1 border-white rounded-lg ">
                <Text className=" text-white  text-center">Follow</Text>
            </TouchableOpacity>
        </View>
    );
};

const Posts: React.FC<Postdata> = ({
    fb_id,
    data,
    image,
    username,
    time,
    views,
    comment,
    follower,
    profile_pic,
}) => {
    const allData = data;

    const navigation = useNavigation();

    const handlePress = () => {
        const selectedUser = data;
        navigation.navigate('VisitProfile', { user: selectedUser });
    };

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
            <View
                style={{
                    width: WIDTH / 1.18,
                    marginRight: 14,
                    // borderWidth: 1,
                    // borderColor: 'red',
                }}>
                <View
                    style={{
                        width: '100%',
                        marginBottom: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // borderWidth: 1,
                        // borderColor: 'red',
                    }}>
                    <View
                        style={{
                            width: '14%',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <View
                            style={{
                                width: 38,
                                height: 38,
                                borderRadius: 1000,
                                overflow: 'hidden',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Image
                                source={{ uri: image }}
                                resizeMode={'cover'}
                                style={{ width: 38, height: 38 }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            width: '56%',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <View
                            style={{
                                width: '80%',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Text
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Figtree-Bold',
                                    color: '#FFFFFF',
                                }}>
                                {username}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: '60%',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Text
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                                style={{
                                    fontSize: 14,
                                    fontFamily: 'Figtree-Regular',
                                    color: '#FFFFFF',
                                    opacity: 0.6,
                                }}>
                                {time}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: '28%',
                            justifyContent: 'center',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View
                                style={{
                                    alignItems: 'flex-end',
                                    // borderWidth: 1,
                                    // borderColor: 'red',
                                }}>
                                <View
                                    style={{
                                        width: '96%',
                                        paddingVertical: 6,
                                        borderRadius: 6,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderWidth: 1.28,
                                        borderColor: '#4D5155',
                                        // borderWidth: 1,
                                        // borderColor: 'red',
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontFamily: 'Figtree-Medium',
                                            color: '#FFFFFF',
                                        }}>
                                        Follow
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View
                    style={{
                        width: '100%',
                        // borderWidth: 1,
                        // borderColor: 'red'
                    }}>
                    <Image
                        source={{ uri: image }}
                        resizeMode={'cover'}
                        style={{ width: '100%', height: HEIGHT / 1.88 }}
                    />
                </View>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        paddingVertical: 10,
                        // justifyContent: 'space-between',
                        // borderWidth: 1,
                        // borderColor: 'red',
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <View
                            style={{
                                justifyContent: 'center',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Image
                                source={require('../assets/Like.png')}
                                resizeMode={'contain'}
                                style={{ width: 22, height: 22 }}
                            />
                        </View>
                        <View
                            style={{
                                paddingLeft: 6,
                                paddingRight: 18,
                                justifyContent: 'center',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Figtree-Regular',
                                    color: '#FFFFFF',
                                }}>
                                {views}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <View
                            style={{
                                justifyContent: 'center',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Image
                                source={require('../assets/Comment.png')}
                                resizeMode={'contain'}
                                style={{ width: 22, height: 22 }}
                            />
                        </View>
                        <View
                            style={{
                                paddingLeft: 6,
                                paddingRight: 18,
                                justifyContent: 'center',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Figtree-Regular',
                                    color: '#FFFFFF',
                                }}>
                                {comment}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            justifyContent: 'center',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <Image
                            source={require('../assets/Share.png')}
                            resizeMode={'contain'}
                            style={{ width: 22, height: 22 }}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Posts;
