import { View, FlatList, useWindowDimensions, Text, StyleSheet } from 'react-native';
import { useProfileStore } from '../../../../store/UserProfileStore';
import { useEffect } from 'react';
import ImagePostTile from './ImageTile';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';
import useThemeStyles from '../../../../hooks/useThemeStyles';

const ImagesSection = () => {
    const route = useRoute();

    const { FB_ID } = route.params;

    const { height, width } = useWindowDimensions();

    const { fetchUserPosts, postsLoading, userPosts } = useProfileStore(
        state => ({
            userPosts: state.userPosts,
            postsLoading: state.postsLoading,
            fetchUserPosts: state.fetchUserPostsImage,
        }),
    );

    useEffect(() => {
        fetchUserPosts(FB_ID);
    }, [FB_ID]);

    const renderItem: React.FC<{ item: any }> = ({ item }) => {
        return (
            <>
                <ImagePostTile data={item} allPhotos={userPosts} postsLoading={postsLoading} />
            </>
        );
    };

     const Theme = useThemeStyles(styleCreator);

    return (
        <View style={{ flex: 1, backgroundColor: Theme.ContainerColor.backgroundColor }}>
            {postsLoading ? (
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
                    data={userPosts}
                    renderItem={renderItem}
                    keyExtractor={item => item.fb_id}
                    initialNumToRender={6}
                    windowSize={6}
                    maxToRenderPerBatch={6}
                    contentContainerStyle={{
                        flexWrap: userPosts.length < 1 ? undefined : 'wrap',
                        flexDirection: userPosts.length < 1 ? undefined : 'row',
                    }}
                    ListEmptyComponent={() => (
                        <>
                            {userPosts.length < 1 && (
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
                                        {'User does not have any images'}
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

export default ImagesSection;

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
