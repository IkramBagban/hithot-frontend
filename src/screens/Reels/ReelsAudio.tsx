import { FlatList, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useProfileStore } from '../../store/UserProfileStore';
import VideoShortTile from '../../components/Profile/TopBar/AllSection/VideoTile';
import Header from '../../components/Profile/Header';
import { Colors } from '../../theme/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import SongPlayer from '../../components/Reels/SongPlayer';


const ReelsAudio = ({ navigation,route }: any) => {
    const { height, width } = useWindowDimensions();
    console.log('route',route?.params)
    const {songDetails} = route?.params
    const sound  = songDetails
    const { fetchUserShorts, shortsLoading, userShorts } = useProfileStore(
        state => ({
            userShorts: state.userShorts,
            shortsLoading: state.shortsLoading,
            fetchUserShorts: state.fetchUserShortsVideo,
        }),
    );
    useEffect(() => {
        fetchUserShorts('116366223411929230647'); //test id
    }, [fetchUserShorts]);

    const renderItem: React.FC<{ item: any; index: string }> = ({
        item,
        index,
    }) => {
        console.log('index', index);

        return (
            <>
                <VideoShortTile
                    ItemIndex={index}
                    videos={userShorts}
                    data={item}
                    shortsLoading={shortsLoading}
                />
            </>
        );
    };

    return (
        <View style={{ backgroundColor: Colors.primaryBlack, flex: 1 }}>
            <View>
                <StatusBar translucent={true} backgroundColor={'transparent'} />
                <View
                    style={{
                        width: '100%',
                        paddingTop: Platform.OS === 'ios' ? 60 : 40,
                        paddingBottom: 20,
                        backgroundColor: '#21262B',
                        // borderWidth: 1,
                        // borderColor: 'red',
                    }}>
                    <View
                        style={{
                            width: '90%',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <View
                            style={{
                                width: '14%',
                                alignItems: 'flex-start',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                activeOpacity={0.8}>
                                <View
                                    style={{
                                        width: 32,
                                        height: 32,
                                        justifyContent: 'center',
                                        // borderWidth: 1,
                                        // borderColor: 'red',
                                    }}>
                                    <Image
                                        source={require('../../assets/leftArrow.png')}
                                        resizeMode="contain"
                                        style={{
                                            width: 16,
                                            height: 16,
                                        }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                width: '70%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontFamily: 'Figtree-Regular',
                                    color: 'white',
                                }}>
                                {'Audios'}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: '14%',
                                alignItems: 'flex-end',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>

                        </View>
                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 15 }}>
                <View className="flex flex-row items-center justify-between py-3">
                    <View className=" flex flex-row items-center">
                        <Image
                            source={
                                require('../../assets/demoUser.png')
                            }
                            style={{
                                height: 55,
                                width: 55,
                                resizeMode: 'cover',
                                borderRadius: 40,
                            }}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text
                                style={{
                                    fontSize: RFValue(15),
                                    fontFamily: 'Figtree-Bold',
                                    color: Colors.primaryWhite,
                                }}>
                                {'Orignal audio'}
                            </Text>
                            <View className=" flex flex-row items-center mt-1">
                                <Image
                                    source={
                                        require('../../assets/demoUser.png')
                                    }
                                    style={{
                                        height: 20,
                                        width: 20,
                                        resizeMode: 'cover',
                                        borderRadius: 40,
                                        marginRight: 5
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: RFValue(12),
                                        fontFamily: 'Figtree-Bold',
                                        color: Colors.primaryWhite,

                                    }}>
                                    {'Audio Auther name'}
                                </Text>
                            </View>
                            <Text
                                style={{
                                    marginTop: 10,
                                    fontSize: RFValue(12),
                                    fontFamily: 'Figtree-Bold',
                                    color: Colors.lightGray,
                                }}>
                                {'101 Reels'}
                            </Text>
                        </View>

                    </View>

                </View>
                <SongPlayer song={sound} />

            </View>
            <FlatList
                data={userShorts}
                renderItem={renderItem}
                keyExtractor={item => item.fb_id}
                initialNumToRender={6}
                windowSize={6}
                maxToRenderPerBatch={6}
                contentContainerStyle={{
                    // backgroundColor:'#fff',
                    backgroundColor: Colors.primaryBlack,
                    flexWrap: userShorts.length < 1 ? undefined : 'wrap',
                    flexDirection:
                        userShorts.length < 1 ? undefined : 'row',
                }}
                ListEmptyComponent={() => (
                    <>
                        {userShorts.length < 1 && (
                            <View
                                style={{
                                    height: height / 2.28,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontFamily: 'Figtree-Regular',
                                        color: '#FFFFFF',
                                    }}>
                                    {'Audio not Found'}
                                </Text>
                            </View>
                        )}
                    </>
                )}
            />
        </View>
    )
}

export default ReelsAudio

