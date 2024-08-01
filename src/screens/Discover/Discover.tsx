import {
    Dimensions,
    Image,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import { Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';
import axios from 'axios';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import FastImage from 'react-native-fast-image';
import ReelScreen from '../Reels/ReelScreen';
import { useNavigation } from '@react-navigation/native';
import useThemeStyles from '../../hooks/useThemeStyles';
const { width } = Dimensions.get('window');
interface UserInfo {
    fb_id: string;
    first_name: string;
    last_name: string;
    profile_pic: string;
    username: string;
    verified: number;
    bio: string;
    gender: string;
    category: string;
    marked: number;
}

interface Count {
    like_count: number;
    video_comment_count: number;
    view: number | null;
}

interface Sound {
    id: string;
    audio_path: {
        mp3: string;
        acc: string;
    };
    sound_name: string;
    description: string;
    thum: string;
    section: string;
    created: string;
}

interface VideoItem {
    id: number;
    veid: number;
    orderBy: number;
    fb_id: string;
    user_info: UserInfo;
    count: Count;
    followStatus: boolean;
    liked: number;
    video: string;
    thum: string;
    gif: string;
    category: string;
    description: string;
    type: string;
    marked: number;
    sound: Sound;
    created: string;
}
const Discover: React.FC = () => {
    const styles = useThemeStyles(styleCreator);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMorePages, setHasMorePages] = useState(true);
    const [userShorts, setUserShorts] = useState<VideoItem[] | null>([]);
    const [activeReel, setactiveReel] = useState(null);

    const navigation = useNavigation<NavigationProp<any>>();
    const handleBackPress = () => {
        if (activeReel === null) {
            navigation.goBack();
        } else {
            setactiveReel(null);
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', e => {
            // If activeReel is not null, prevent default behavior and call handleBackPress
            if (activeReel !== null) {
                e.preventDefault();
                handleBackPress();
            }
        });

        return unsubscribe;
    }, [activeReel, navigation]);

    const fetchPosts = async () => {
        // console.log('here');
        if (!hasMorePages) {
            // console.log('no pages');
            return null;
        }
        setIsLoading(true);
        try {
            const url = 'https://adminpanel.hithot.club/api/allVideosExploreNew';
            const list = await axios.post(url, {
                fb_id: '103822615954526038871',
                page: page,
            });
            console.log('hihi', list.data.msg[0]);

            setUserShorts(prev => [...prev, ...list.data.msg]);
            const total = Math.ceil(list.data.total_record / 20);
            // console.log(total, 'total');
            if (page > total) {
                setHasMorePages(false);
            }
            if (total >= page) {
                setPage(prevPage => prevPage + 1);
            }
        } catch (error) {
            // console.error('Error fetching posts:', error);
        } finally {
            setIsLoading(false);
        }
    };
    // console.log(userShorts.length, 'length');
    useEffect(() => {
        fetchPosts();
    }, []);

    const keyExtractor = (item, index) => index;

    const renderItem = ({ item, index }) => {
        if (index % 3 !== 0) {
            return null;
        }
        const group = userShorts.slice(index, index + 3);
        const types = group.map(groupItem => groupItem.type);
        if (types.every(type => type === 'POST') && group.length === 3) {
            console.log(types[0], types[1], types[2]);
            return (
                <View style={discoverStyle.twoRow}>
                    {group.map(item => (
                        <View
                            style={{
                                width: width / 3,
                                height: (5 / 4) * (width / 3),
                            }}
                            className="relative p-1">
                            <Image
                                source={{
                                    uri: item.thum,
                                }}
                                resizeMode="cover"
                                className=" w-full h-full"
                            />
                            {/* <Video
                                source={{ uri: item.video }}
                                style={{ width: '100%', height: '100%' }}
                                muted={true}
                                repeat={true}
                                resizeMode="cover"
                            /> */}
                        </View>
                    ))}
                </View>
            );
        } else if (
            types[0] === 'VIDEO' &&
            types[1] === 'VIDEO' &&
            types[2] === 'POST'
        ) {
            console.log(types[0], types[1], types[2]);
            return (
                <View style={discoverStyle.rowLayout}>
                    <View style={discoverStyle.columnStack}>
                        {group.slice(0, 2).map(item => (
                            <TouchableOpacity
                                style={{
                                    width: width / 2.5,
                                    height: (5 / 4) * (width / 3),
                                }}
                                className="relative p-1"
                                onPress={() => {
                                    setactiveReel(item);
                                }}>
                                {/* <Image
                                    source={{
                                        uri: item.thum,
                                    }}
                                    resizeMode="cover"
                                    className=" w-full object-cover h-full"
                                /> */}
                                <FastImage
                                    style={{ width: '100%', height: '100%' }}
                                    source={{ uri: item.gif }}
                                    resizeMode={FastImage.resizeMode.cover}
                                />
                                {/* <View className=" bg-black/25 flex flex-row absolute bottom-2 left-2 items-center py-1 px-2 rounded-lg my-1">
                       <Image
                           source={require('../../../../../assets/outlinePlay.png')}
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
                           {data.count.view}
                       </Text>
                   </View> */}
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View>
                        <View
                            style={{
                                width: width / 1.8,
                                height: (5 / 2) * (width / 3),
                            }}
                            className="relative p-1">
                            <Image
                                source={{
                                    uri: group[2].thum,
                                }}
                                resizeMode="cover"
                                className=" w-full  h-full"
                            />
                            <View className=" bg-black/25 flex flex-row absolute bottom-2 left-2 items-center py-1 px-2 rounded-lg my-1">
                                {/* <Image
         source={require('../../../../../assets/outlinePlay.png')}
         resizeMode="contain"
         style={{
             width: scale(10),
             height: verticalScale(10),
         }}
         className="mr-1"
     /> */}
                                <Text
                                    style={{
                                        fontSize: RFValue(12),
                                    }}
                                    className=" text-white text-center">
                                    {group[2].count.view}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        } else if (
            types[0] === 'POST' &&
            types[1] === 'POST' &&
            types[2] === 'VIDEO'
        ) {
            console.log(types[0], types[1], types[2]);
            return (
                <View style={discoverStyle.rowLayout}>
                    <View style={discoverStyle.columnStack}>
                        {group.slice(0, 2).map(item => (
                            <View
                                style={{
                                    width: width / 2.5,
                                    height: (5 / 4) * (width / 3),
                                }}
                                className="relative p-1">
                                <Image
                                    source={{
                                        uri: item.thum,
                                    }}
                                    resizeMode="cover"
                                    className=" w-full object-cover h-full"
                                />
                            </View>
                        ))}
                    </View>
                    <View>
                        <TouchableOpacity
                            style={{
                                width: width / 1.8,
                                height: (5 / 2) * (width / 3),
                            }}
                            className="relative p-1"
                            onPress={() => {
                                setactiveReel(group[2]);
                            }}>
                            {/* <Image
                                source={{
                                    uri: group[2].thum,
                                }}
                                resizeMode="cover"
                                className=" w-full  h-full"
                            /> */}
                            <FastImage
                                style={{ width: '100%', height: '100%' }}
                                source={{ uri: group[2].gif }}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                            <View className=" bg-black/25 flex flex-row absolute bottom-2 left-2 items-center py-1 px-2 rounded-lg my-1">
                                {/* <Image
             source={require('../../../../../assets/outlinePlay.png')}
             resizeMode="contain"
             style={{
                 width: scale(10),
                 height: verticalScale(10),
             }}
             className="mr-1"
         /> */}
                                <Text
                                    style={{
                                        fontSize: RFValue(12),
                                    }}
                                    className=" text-white text-center">
                                    {group[2].count.view}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        } else {
            console.log(types[0], types[1], types[2], 'dsfdsf');
            return (
                <View style={discoverStyle.rowLayout}>
                    <View style={discoverStyle.columnStack}>
                        {group.slice(0, 2).map(item => (
                            <TouchableOpacity
                                style={{
                                    width: width / 2.5,
                                    height: (5 / 4) * (width / 3),
                                }}
                                className="relative p-1"
                                onPress={() => {
                                    setactiveReel(item);
                                }}>
                                {/* <Image
                                    source={{
                                        uri: item.thum,
                                    }}
                                    resizeMode="cover"
                                    className=" w-full object-cover h-full"
                                /> */}
                                <FastImage
                                    style={{ width: '100%', height: '100%' }}
                                    source={{ uri: item.gif }}
                                    resizeMode={FastImage.resizeMode.cover}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View>
                        <TouchableOpacity
                            style={{
                                width: width / 1.8,
                                height: (5 / 2) * (width / 3),
                            }}
                            className="relative p-1"
                            onPress={() => {
                                setactiveReel(group[2]);
                            }}>
                            {/* <Image
                                source={{
                                    uri: group[2] && group[2].thum,
                                }}
                                resizeMode="cover"
                                className=" w-full  h-full"
                            /> */}
                            {/* <Video
                                source={{ uri: group[2] && group[2].video }}
                                style={{ width: '100%', height: '100%' }}
                                muted={true}
                                repeat={true}
                                resizeMode="cover"
                            /> */}
                            <FastImage
                                style={{ width: '100%', height: '100%' }}
                                source={{ uri: group[2] && group[2].gif }}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                            <View className=" bg-black/25 flex flex-row absolute bottom-2 left-2 items-center py-1 px-2 rounded-lg my-1">
                                {/* <Image
     source={require('../../../../../assets/outlinePlay.png')}
     resizeMode="contain"
     style={{
         width: scale(10),
         height: verticalScale(10),
     }}
     className="mr-1"
 /> */}
                                <Text
                                    style={{
                                        fontSize: RFValue(12),
                                    }}
                                    className=" text-white text-center">
                                    {group[2] && group[2].count.view}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    };
    console.log('page', page, '->has', hasMorePages);
    const renderFooter = () => {
        return isLoading ? <SkeletonLoader /> : null;
    };

    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            {activeReel ? (
                <ReelScreen activeReel={activeReel} />
            ) : (
                <View style={[styles.container]}>
                    <Header />
                    <FlatList
                        data={userShorts}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        contentContainerStyle={discoverStyle.container}
                        ListHeaderComponent={Banner}
                        onEndReached={() => {
                            fetchPosts();
                        }}
                        onEndReachedThreshold={0.5}
                        initialNumToRender={10}
                        maxToRenderPerBatch={10}
                        windowSize={10}
                        ListFooterComponent={renderFooter}
                    />
                </View>
            )}
        </>
    );
};

const SkeletonLoader = () => {
    const width = Dimensions.get('window').width;

    return (
        <SkeletonPlaceholder backgroundColor="#e0e0e0">
            <View style={{ flexDirection: 'row' }}>
                {/* First two tiles */}
                <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <View
                            key={index}
                            style={{
                                width: width / 2.5,
                                height: (5 / 4) * (width / 3) - 10,
                                margin: 5,
                                borderRadius: 10,
                                backgroundColor: '#e0e0e0', // Set grey color
                            }}
                        />
                    ))}
                </View>

                {/* Third tile */}
                <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
                    <View
                        key={4}
                        style={{
                            width: width / 2,
                            height: (10 / 4) * (width / 3),
                            margin: 5,
                            borderRadius: 10,
                            backgroundColor: '#e0e0e0', // Set grey color
                        }}
                    />
                    <View
                        key={5}
                        style={{
                            width: width / 2,
                            height: (10 / 4) * (width / 3),
                            margin: 5,
                            borderRadius: 10,
                            backgroundColor: '#e0e0e0', // Set grey color
                        }}
                    />
                </View>
            </View>
        </SkeletonPlaceholder>
    );
};

const styleCreator = colors => 
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.bgColor,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ContentContainerStyle: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
    });


const discoverStyle = StyleSheet.create({
    threeRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 0.3,
    },
    twoRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    rowLayout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    columnStack: {
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        flexGrow: 1,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-btweeen',
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default Discover;
