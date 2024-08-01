// import React, { useEffect, useState } from 'react';
// import {
//     Text,
//     View,
//     Image,
//     TouchableOpacity,
//     FlatList,
//     ActivityIndicator,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
// import { useNavigation } from '@react-navigation/native';
// import getStyles from './AF.style'; // Separate Style //
// import userFollowersStore from '../../../../../../store/userFollowersStore';

// const AF: React.FC<{ FB_ID: string; searchQuery: any }> = ({
//     FB_ID,
//     searchQuery,
// }) => {
//     const navigation = useNavigation();
//     const { followers, loading, error, fetchFollowers } = userFollowersStore();
//     const [displayedFilteredFollowers, setDisplayedFilteredFollowers] =
//         useState([]);

//     useEffect(() => {
//         fetchFollowers(FB_ID);
//     }, [fetchFollowers, FB_ID]);

//     console.log('AFFB_ID', FB_ID);

//     useEffect(() => {
//         const filteredData = followers.filter(item =>
//             item?.username?.toLowerCase()?.includes(searchQuery?.toLowerCase()),
//         );
//         setDisplayedFilteredFollowers(filteredData);
//     }, [followers, searchQuery]);

//     const RenderItem: React.FC<{ item: any }> = ({ item }) => {
//         const handlePress = () => {
//             const selectedUser = displayedFilteredFollowers.find(
//                 follower => follower.fb_id === item.fb_id,
//             );
//             // console.log('AF navigation to VisitProfile', selectedUser);
//             navigation.reset({
//                 index: 0,
//                 routes: [
//                     {
//                         name: 'VisitProfile',
//                         params: { user: selectedUser.fb_id },
//                     },
//                 ],
//             });
//         };

//         return (
//             <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
//                 <View style={[styles.DetailsContainer]}>
//                     <View style={[styles.ImageContainer]}>
//                         <View style={[styles.ImageRadiusContainer]}>
//                             {item.profile_pic === null ? (
//                                 <Image
//                                     source={require('../../../../../../assets/GradientBG.png')}
//                                     style={[styles.Image]}
//                                 />
//                             ) : (
//                                 <Image
//                                     source={{ uri: item.profile_pic }}
//                                     style={[styles.Image]}
//                                 />
//                             )}
//                         </View>
//                     </View>
//                     <View style={[styles.UsernameAndSubnameContainer]}>
//                         <View style={[styles.UsernameContainer]}>
//                             <Text
//                                 ellipsizeMode="tail"
//                                 numberOfLines={1}
//                                 style={[styles.UsernameText]}>
//                                 {item.username}
//                             </Text>
//                         </View>
//                         <View style={[styles.SubnameContainer]}>
//                             <Text
//                                 ellipsizeMode="tail"
//                                 numberOfLines={1}
//                                 style={[styles.SubnameText]}>
//                                 {item.first_name} {item.last_name}
//                             </Text>
//                         </View>
//                     </View>
//                     <View style={[styles.ButtonContainer]}>
//                         <TouchableOpacity activeOpacity={0.8}>
//                             <View style={[styles.ButtonSubContainer]}>
//                                 <Text style={[styles.ButtonText]}>Remove</Text>
//                             </View>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </TouchableOpacity>
//         );
//     };

//     const styles = getStyles();

//     return (
//         <View style={[styles.Container]}>
//             <View style={[styles.TitleContainer]}>
//                 <Text
//                     style={[
//                         styles.TitleText,
//                         {
//                             color:
//                                 displayedFilteredFollowers.length > 0
//                                     ? '#FFFFFF'
//                                     : '#FF0000',
//                         },
//                     ]}>
//                     {displayedFilteredFollowers.length > 0
//                         ? 'All followers'
//                         : 'No result found'}
//                 </Text>
//             </View>
//             <FlatList
//                 data={displayedFilteredFollowers}
//                 renderItem={RenderItem}
//                 nestedScrollEnabled={true}
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={[styles.ContentContainerStyle]}
//                 keyExtractor={item => item.fb_id}
//                 initialNumToRender={6}
//                 windowSize={6}
//                 maxToRenderPerBatch={6}
//                 ListFooterComponent={() =>
//                     loading ? (
//                         <>
//                             <View style={[styles.DetailsContainer]}>
//                                 <View style={[styles.ImageContainer]}>
//                                     <View style={[styles.ImageRadiusContainer]}>
//                                         <ShimmerPlaceholder
//                                             LinearGradient={LinearGradient}
//                                             shimmerColors={[
//                                                 '#171717',
//                                                 '#464646',
//                                                 '#2f2f2f',
//                                             ]}
//                                             style={[styles.Shimmer]}
//                                         />
//                                     </View>
//                                 </View>
//                                 <View
//                                     style={[
//                                         styles.UsernameAndSubnameContainer,
//                                     ]}>
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.UsernameShimmer]}
//                                     />
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.SubNameShimmer]}
//                                     />
//                                 </View>
//                                 <View style={[styles.ButtonContainer]}>
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.ButtonShimmer]}
//                                     />
//                                 </View>
//                             </View>
//                             <View style={[styles.DetailsContainer]}>
//                                 <View style={[styles.ImageContainer]}>
//                                     <View style={[styles.ImageRadiusContainer]}>
//                                         <ShimmerPlaceholder
//                                             LinearGradient={LinearGradient}
//                                             shimmerColors={[
//                                                 '#171717',
//                                                 '#464646',
//                                                 '#2f2f2f',
//                                             ]}
//                                             style={[styles.Shimmer]}
//                                         />
//                                     </View>
//                                 </View>
//                                 <View
//                                     style={[
//                                         styles.UsernameAndSubnameContainer,
//                                     ]}>
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.UsernameShimmer]}
//                                     />
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.SubNameShimmer]}
//                                     />
//                                 </View>
//                                 <View style={[styles.ButtonContainer]}>
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.ButtonShimmer]}
//                                     />
//                                 </View>
//                             </View>
//                             <View style={[styles.DetailsContainer]}>
//                                 <View style={[styles.ImageContainer]}>
//                                     <View style={[styles.ImageRadiusContainer]}>
//                                         <ShimmerPlaceholder
//                                             LinearGradient={LinearGradient}
//                                             shimmerColors={[
//                                                 '#171717',
//                                                 '#464646',
//                                                 '#2f2f2f',
//                                             ]}
//                                             style={[styles.Shimmer]}
//                                         />
//                                     </View>
//                                 </View>
//                                 <View
//                                     style={[
//                                         styles.UsernameAndSubnameContainer,
//                                     ]}>
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.UsernameShimmer]}
//                                     />
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.SubNameShimmer]}
//                                     />
//                                 </View>
//                                 <View style={[styles.ButtonContainer]}>
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.ButtonShimmer]}
//                                     />
//                                 </View>
//                             </View>
//                             <View style={[styles.DetailsContainer]}>
//                                 <View style={[styles.ImageContainer]}>
//                                     <View style={[styles.ImageRadiusContainer]}>
//                                         <ShimmerPlaceholder
//                                             LinearGradient={LinearGradient}
//                                             shimmerColors={[
//                                                 '#171717',
//                                                 '#464646',
//                                                 '#2f2f2f',
//                                             ]}
//                                             style={[styles.Shimmer]}
//                                         />
//                                     </View>
//                                 </View>
//                                 <View
//                                     style={[
//                                         styles.UsernameAndSubnameContainer,
//                                     ]}>
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.UsernameShimmer]}
//                                     />
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.SubNameShimmer]}
//                                     />
//                                 </View>
//                                 <View style={[styles.ButtonContainer]}>
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.ButtonShimmer]}
//                                     />
//                                 </View>
//                             </View>
//                             <View style={[styles.DetailsContainer]}>
//                                 <View style={[styles.ImageContainer]}>
//                                     <View style={[styles.ImageRadiusContainer]}>
//                                         <ShimmerPlaceholder
//                                             LinearGradient={LinearGradient}
//                                             shimmerColors={[
//                                                 '#171717',
//                                                 '#464646',
//                                                 '#2f2f2f',
//                                             ]}
//                                             style={[styles.Shimmer]}
//                                         />
//                                     </View>
//                                 </View>
//                                 <View
//                                     style={[
//                                         styles.UsernameAndSubnameContainer,
//                                     ]}>
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.UsernameShimmer]}
//                                     />
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.SubNameShimmer]}
//                                     />
//                                 </View>
//                                 <View style={[styles.ButtonContainer]}>
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.ButtonShimmer]}
//                                     />
//                                 </View>
//                             </View>
//                             <View style={[styles.DetailsContainer]}>
//                                 <View style={[styles.ImageContainer]}>
//                                     <View style={[styles.ImageRadiusContainer]}>
//                                         <ShimmerPlaceholder
//                                             LinearGradient={LinearGradient}
//                                             shimmerColors={[
//                                                 '#171717',
//                                                 '#464646',
//                                                 '#2f2f2f',
//                                             ]}
//                                             style={[styles.Shimmer]}
//                                         />
//                                     </View>
//                                 </View>
//                                 <View
//                                     style={[
//                                         styles.UsernameAndSubnameContainer,
//                                     ]}>
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.UsernameShimmer]}
//                                     />
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.SubNameShimmer]}
//                                     />
//                                 </View>
//                                 <View style={[styles.ButtonContainer]}>
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.ButtonShimmer]}
//                                     />
//                                 </View>
//                             </View>
//                             <View style={[styles.DetailsContainer]}>
//                                 <View style={[styles.ImageContainer]}>
//                                     <View style={[styles.ImageRadiusContainer]}>
//                                         <ShimmerPlaceholder
//                                             LinearGradient={LinearGradient}
//                                             shimmerColors={[
//                                                 '#171717',
//                                                 '#464646',
//                                                 '#2f2f2f',
//                                             ]}
//                                             style={[styles.Shimmer]}
//                                         />
//                                     </View>
//                                 </View>
//                                 <View
//                                     style={[
//                                         styles.UsernameAndSubnameContainer,
//                                     ]}>
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.UsernameShimmer]}
//                                     />
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.SubNameShimmer]}
//                                     />
//                                 </View>
//                                 <View style={[styles.ButtonContainer]}>
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.ButtonShimmer]}
//                                     />
//                                 </View>
//                             </View>
//                             <View style={[styles.DetailsContainer]}>
//                                 <View style={[styles.ImageContainer]}>
//                                     <View style={[styles.ImageRadiusContainer]}>
//                                         <ShimmerPlaceholder
//                                             LinearGradient={LinearGradient}
//                                             shimmerColors={[
//                                                 '#171717',
//                                                 '#464646',
//                                                 '#2f2f2f',
//                                             ]}
//                                             style={[styles.Shimmer]}
//                                         />
//                                     </View>
//                                 </View>
//                                 <View
//                                     style={[
//                                         styles.UsernameAndSubnameContainer,
//                                     ]}>
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.UsernameShimmer]}
//                                     />
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.SubNameShimmer]}
//                                     />
//                                 </View>
//                                 <View style={[styles.ButtonContainer]}>
//                                     <ShimmerPlaceholder
//                                         LinearGradient={LinearGradient}
//                                         shimmerColors={[
//                                             '#171717',
//                                             '#464646',
//                                             '#2f2f2f',
//                                         ]}
//                                         style={[styles.ButtonShimmer]}
//                                     />
//                                 </View>
//                             </View>
//                         </>
//                     ) : null
//                 }
//             />
//         </View>
//     );
// };

// export default AF;

import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { useNavigation } from '@react-navigation/native';
import getStyles from './AF.style'; // Separate Style //
import userFollowersStore from '../../../../../../store/userFollowersStore';
import useThemeStyles from '../../../../../../hooks/useThemeStyles';

const AF: React.FC<{
    IsLoggedin: boolean;
    FB_ID: string;
    searchQuery: any;
}> = ({ IsLoggedin, FB_ID, searchQuery }) => {
    const navigation = useNavigation();
    const { followers, loading, error, fetchFollowers } = userFollowersStore();
    const [displayedFilteredFollowers, setDisplayedFilteredFollowers] =
        useState([]);
    const [isFetchingMore, setIsFetchingMore] = useState(false);

    useEffect(() => {
        fetchFollowers(FB_ID);
    }, [fetchFollowers, FB_ID]);

    useEffect(() => {
        const filteredData = followers.filter(item =>
            item?.username?.toLowerCase()?.includes(searchQuery?.toLowerCase()),
        );
        setDisplayedFilteredFollowers(filteredData);
    }, [followers, searchQuery]);

    const loadMoreFollowers = () => {
        if (!loading && !isFetchingMore) {
            setIsFetchingMore(true);
            // Simulate fetching more data here
            setTimeout(() => {
                // Here you should actually fetch more data and update the store
                // For demonstration, we'll simulate adding more items to the list
                const moreFollowers = followers.slice(); // Make a copy of the current followers
                // Simulate new data
                moreFollowers.push(...followers); // Add current followers again for testing
                setDisplayedFilteredFollowers(prev => [
                    ...prev,
                    ...moreFollowers,
                ]);
                setIsFetchingMore(false);
            }, 1500);
        }
    };

    const RenderItem: React.FC<{ item: any }> = ({ item }) => {
        const handlePress = () => {
            const selectedUser = displayedFilteredFollowers.find(
                follower => follower.fb_id === item.fb_id,
            );
            navigation.reset({
                index: 0,
                routes: [
                    {
                        name: 'VisitProfile',
                        params: { user: selectedUser.fb_id },
                    },
                ],
            });
        };

        return (
            <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
                <View style={[styles.DetailsContainer]}>
                    <View style={[styles.ImageContainer]}>
                        <View style={[styles.ImageRadiusContainer]}>
                            {item.profile_pic === null ? (
                                <Image
                                    source={require('../../../../../../assets/GradientBG.png')}
                                    style={[styles.Image]}
                                />
                            ) : (
                                <Image
                                    source={{ uri: item.profile_pic }}
                                    style={[styles.Image]}
                                />
                            )}
                        </View>
                    </View>
                    <View style={[styles.UsernameAndSubnameContainer]}>
                        <View style={[styles.UsernameContainer]}>
                            <Text
                                ellipsizeMode="tail"
                                numberOfLines={1}
                                style={[
                                    styles.UsernameText,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {item.username}
                            </Text>
                        </View>
                        <View style={[styles.SubnameContainer]}>
                            <Text
                                ellipsizeMode="tail"
                                numberOfLines={1}
                                style={[
                                    styles.SubnameText,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {item.first_name} {item.last_name}
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.ButtonContainer,{backgroundColor:Theme.ActionColor.backgroundColor}]}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={[styles.ButtonSubContainer]}>
                                <Text
                                    style={[
                                        styles.ButtonText,
                                        { color: Theme.TextColor.color },
                                    ]}>
                                    Remove
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const styles = getStyles();
    const Theme = useThemeStyles(styleCreator);

    return (
        <View style={[styles.Container]}>
            {IsLoggedin && (
                <View style={[styles.TitleContainer]}>
                    <Text
                        style={[
                            styles.TitleText,
                            {
                                color:
                                    displayedFilteredFollowers.length > 0
                                        ? '#FFFFFF'
                                        : '#FF0000',
                            },
                        ]}>
                        {displayedFilteredFollowers.length > 0
                            ? 'All followers'
                            : 'No result found'}
                    </Text>
                </View>
            )}
            <FlatList
                data={displayedFilteredFollowers}
                renderItem={RenderItem}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    styles.ContentContainerStyle,
                    { paddingTop: IsLoggedin ? null : 20 },
                ]}
                keyExtractor={item => item.fb_id}
                initialNumToRender={3}
                windowSize={10}
                maxToRenderPerBatch={7}
                onEndReached={loadMoreFollowers}
                refreshing={true}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() =>
                    loading || isFetchingMore ? (
                        <View style={{ paddingVertical: 20 }}>
                            <ActivityIndicator size="large" color="#FFFFFF" />
                        </View>
                    ) : null
                }
            />
        </View>
    );
};

export default AF;

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
