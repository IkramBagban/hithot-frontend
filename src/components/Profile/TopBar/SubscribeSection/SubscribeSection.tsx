import { View, FlatList, useWindowDimensions, Text } from 'react-native';
import { useProfileStore } from '../../../../store/UserProfileStore';
import { useEffect } from 'react';
import VideoShortTile from './VideoTile';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';

const SubscribeSection: React.FC<{ userData: any; FB_ID: string }> = ({
    userData,
    FB_ID,
}) => {
    console.log('lhncfwqelwvwl', userData);
    console.log('FB_ID', FB_ID);

    const { height, width } = useWindowDimensions();

    const { fetchUserSubscribed, subscribedLoading, userSubscribed } =
        useProfileStore(state => ({
            userSubscribed: state.userSubscribed,
            subscribedLoading: state.subscribedLoading,
            fetchUserSubscribed: state.fetchUserSubscribed,
        }));

    useEffect(() => {
        fetchUserSubscribed(FB_ID);
    }, [FB_ID]);

    const renderItem: React.FC<{ item: any }> = ({ item }) => {
        return (
            <>
                <VideoShortTile
                    data={item}
                    subscribedLoading={subscribedLoading}
                    userData={userData}
                />
            </>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#21262B' }}>
            {subscribedLoading ? (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <ShimmerPlaceholder
                        shimmerStyle={{
                            width: width / 3,
                            height: (5 / 4) * (width / 3),
                        }}
                        LinearGradient={LinearGradient}
                        shimmerColors={['#171717', '#464646', '#2f2f2f']}>
                        <View
                            style={{
                                width: width / 3,
                                height: (5 / 4) * (width / 3),
                            }}
                            className=" border border-white"
                        />
                    </ShimmerPlaceholder>
                    <ShimmerPlaceholder
                        shimmerStyle={{
                            width: width / 3,
                            height: (5 / 4) * (width / 3),
                        }}
                        LinearGradient={LinearGradient}
                        shimmerColors={['#171717', '#464646', '#2f2f2f']}>
                        <View
                            style={{
                                width: width / 3,
                                height: (5 / 4) * (width / 3),
                            }}
                            className=" border border-white"
                        />
                    </ShimmerPlaceholder>
                    <ShimmerPlaceholder
                        shimmerStyle={{
                            width: width / 3,
                            height: (5 / 4) * (width / 3),
                        }}
                        LinearGradient={LinearGradient}
                        shimmerColors={['#171717', '#464646', '#2f2f2f']}>
                        <View
                            style={{
                                width: width / 3,
                                height: (5 / 4) * (width / 3),
                            }}
                            className=" border border-white"
                        />
                    </ShimmerPlaceholder>
                    <ShimmerPlaceholder
                        shimmerStyle={{
                            width: width / 3,
                            height: (5 / 4) * (width / 3),
                        }}
                        LinearGradient={LinearGradient}
                        shimmerColors={['#171717', '#464646', '#2f2f2f']}>
                        <View
                            style={{
                                width: width / 3,
                                height: (5 / 4) * (width / 3),
                            }}
                            className=" border border-white"
                        />
                    </ShimmerPlaceholder>
                    <ShimmerPlaceholder
                        shimmerStyle={{
                            width: width / 3,
                            height: (5 / 4) * (width / 3),
                        }}
                        LinearGradient={LinearGradient}
                        shimmerColors={['#171717', '#464646', '#2f2f2f']}>
                        <View
                            style={{
                                width: width / 3,
                                height: (5 / 4) * (width / 3),
                            }}
                            className=" border border-white"
                        />
                    </ShimmerPlaceholder>
                    <ShimmerPlaceholder
                        shimmerStyle={{
                            width: width / 3,
                            height: (5 / 4) * (width / 3),
                        }}
                        LinearGradient={LinearGradient}
                        shimmerColors={['#171717', '#464646', '#2f2f2f']}>
                        <View
                            style={{
                                width: width / 3,
                                height: (5 / 4) * (width / 3),
                            }}
                            className=" border border-white"
                        />
                    </ShimmerPlaceholder>
                </View>
            ) : (
                <FlatList
                    data={userSubscribed}
                    renderItem={renderItem}
                    keyExtractor={item => item.fb_id}
                    initialNumToRender={6}
                    windowSize={6}
                    maxToRenderPerBatch={6}
                    contentContainerStyle={{
                        flexWrap:
                            userSubscribed.length < 1 ? undefined : 'wrap',
                        flexDirection:
                            userSubscribed.length < 1 ? undefined : 'row',
                    }}
                    ListEmptyComponent={() => (
                        <>
                            {userSubscribed.length < 1 && (
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
                                        {
                                            'User does not have any subscribe data'
                                        }
                                    </Text>
                                </View>
                            )}
                        </>
                    )}
                />
            )}
        </View>
    );
};

export default SubscribeSection;
