import { View, FlatList, useWindowDimensions, Text, StyleSheet } from 'react-native';
import { useProfileStore } from '../../../../store/UserProfileStore';
import { useEffect } from 'react';
import VideoShortTile from './VideoTile';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';
import useThemeStyles from '../../../../hooks/useThemeStyles';

const AllSection: React.FC<{ route: { params: { FB_ID: string } } }> = ({
    route,
}) => {
    const { FB_ID } = route.params;

    console.log('Allsection', FB_ID);

    const { height, width } = useWindowDimensions();

    const { fetchUserShorts, shortsLoading, userShorts } = useProfileStore(
        state => ({
            userShorts: state.userShorts,
            shortsLoading: state.shortsLoading,
            fetchUserShorts: state.fetchUserShortsVideo,
        }),
    );

    useEffect(() => {
        fetchUserShorts(FB_ID);
    }, [fetchUserShorts, FB_ID]);

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

     const Theme = useThemeStyles(styleCreator);

    return (
        <View style={{ flex: 1, backgroundColor: Theme.ContainerColor.backgroundColor }}>
            {shortsLoading ? (
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
                    data={userShorts}
                    renderItem={renderItem}
                    keyExtractor={item => item.fb_id}
                    initialNumToRender={6}
                    windowSize={6}
                    maxToRenderPerBatch={6}
                    contentContainerStyle={{
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
                                        {'User does not have any data'}
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

export default AllSection;

const styleCreator = colors =>
    StyleSheet.create({
        TextColor: {
            color: colors.textColor,
        },
        ActionColor: {
            backgroundColor: colors.bgLightColor,
        },
        TextLightColor: {
            color: colors.textLightColor,
        },
        IconColor: {
            tintColor: colors.iconColor,
        },
        ContainerColor: {
            backgroundColor: colors.bgColor,
        },
        BorderColor: {
            borderColor: colors.activeBorderColor,
        },
        subcontainerColor: {
            backgroundColor: colors.subContainerColor,
        },
    });
