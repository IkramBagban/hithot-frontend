import { View, FlatList, useWindowDimensions, Text } from 'react-native';
import { useProfileStore } from '../../../../store/UserProfileStore';
import { useEffect } from 'react';
import ClipTile from './ClipTile';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';

const ClipsSection = () => {
    const route = useRoute();

    const { FB_ID } = route.params;

    // console.log('F_D_I_D', FB_ID);

    const { height, width } = useWindowDimensions();

    const { fetchUserClips, clipsLoading, userClips } = useProfileStore(
        state => ({
            userClips: state.userClips,
            clipsLoading: state.clipsLoading,
            fetchUserClips: state.fetchUserClipsVideo,
        }),
    );

    useEffect(() => {
        fetchUserClips(FB_ID);
    }, [FB_ID]);

    const renderItem: React.FC<{ item: any }> = ({ item }) => {
        return (
            <>
                <ClipTile data={item} clipsLoading={clipsLoading} />
            </>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#21262B' }}>
            {clipsLoading ? (
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
                    data={userClips}
                    renderItem={renderItem}
                    keyExtractor={item => item.fb_id}
                    initialNumToRender={6}
                    windowSize={6}
                    maxToRenderPerBatch={6}
                    contentContainerStyle={{
                        flexWrap: userClips.length < 1 ? undefined : 'wrap',
                        flexDirection: userClips.length < 1 ? undefined : 'row',
                    }}
                    ListEmptyComponent={() => (
                        <>
                            {userClips.length < 1 && (
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
                                        {'User does not have any clips'}
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

export default ClipsSection;
