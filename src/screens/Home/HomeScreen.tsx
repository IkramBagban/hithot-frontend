//Feed
import {
    ActivityIndicator,
    FlatList,
    ListRenderItem,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ViewToken,
} from 'react-native';
import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Header from '../../components/Home/Header';
import StoriesSection from '../../components/Home/StoriesSection';
import FeedPostCard from '../../components/Feed/FeedPostCard';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useHomeFeed } from '../../store/homeFeedStore';
import { VideoData } from '../../components/Reels/ReelSection2';
import React from 'react';
import { RootStackParamList } from '../../route/MainStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { Colors } from '../../theme/Colors';
import { useContentStore } from '../../store/contentStore';
//import CancelShortModal from '../../components/Models/CancelShortModal';
import SubscribeModal from '../../models/SubscribeModel';

import Followersuggestion, {
    suggestedFollower,
} from './FollowerSuggestion/Followersuggestion';
import { StackNavigationType } from '../../route/MainStack';
import { useNavigation } from '@react-navigation/native';
import useVideoStore from '../../store/VideoStore';
import useThemeStyles from '../../hooks/useThemeStyles';

export interface FeedContentInterface {
    id: string;
    type: 'Image' | 'Video';
    url: string;
    thum?: string;
}

export interface FeedDataInterface {
    id: string;
    userName: string;
    userProfile: string;
    likes: number;
    followStatus: boolean;
    comments: number;
    caption: string;
    content: FeedContentInterface[];
}

export const contentData: FeedContentInterface[] = [
    {
        id: '1',
        type: 'Image',
        url: 'https://res.cloudinary.com/krishanucloud/image/upload/v1714921698/postdemo_cxbfww.png',
    },
    {
        id: '11',
        type: 'Image',
        url: 'https://res.cloudinary.com/krishanucloud/image/upload/v1714430994/buyrentbanner_vlcppk.jpg',
    },
];

const FeedData: FeedDataInterface[] = [
    {
        id: '12',
        userName: '@Anagha daghaotty',
        userProfile:
            'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/July2023/images/1690046016119_372b8875-70f8-4cc6-920f-b8c99383c03d.png',
        likes: 24,
        followStatus: true,
        comments: 30,
        caption:
            'Moonlight 🌙🌄💐. #ipl2024 #loughingmonth #hithotglam  #rohits143 #streak30 #hithot #hithothiring #Originalcontent #hithot_official #hithotindia #hithotshotvideo #hithotcreator #hithotrending  #comedy #comedyvideos #hithotcomedy #hithot',
        content: [
            {
                id: '145',
                type: 'Video',
                url: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/May2024/video/1716360398033_f429ed70-0346-4d2a-b28c-70d9e269222c.mp4',
                thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1702463197501_5ca83a62-b37b-44e1-bebc-9df8e803b898.jpg',
            },
            {
                id: '1',
                type: 'Image',
                url: 'https://res.cloudinary.com/krishanucloud/image/upload/v1714921698/postdemo_cxbfww.png',
            },
            {
                id: '11',
                type: 'Image',
                url: 'https://res.cloudinary.com/krishanucloud/image/upload/v1714430994/buyrentbanner_vlcppk.jpg',
            },
            {
                id: '121',
                type: 'Video',
                url: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702008992077_bc1cce13-c424-43db-bffb-1527f79d7a7d.mp4',
                thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1702008992077_bc1cce13-c424-43db-bffb-1527f79d7a7d.jpg',
            },
        ],
    },
    {
        id: '123',
        userName: '@Anagha_',
        userProfile:
            'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/July2023/images/1690046016119_372b8875-70f8-4cc6-920f-b8c99383c03d.png',
        likes: 22,
        followStatus: false,
        comments: 3,
        caption:
            'Moonlight 🌙🌄💐. #ipl2024 #loughingmonth #hithotglam  #rohits143 #streak30 #hithot #hithothiring #Originalcontent #hithot_official #hithotindia #hithotshotvideo #hithotcreator #hithotrending  #comedy #comedyvideos #hithotcomedy #hithot',
        content: [
            {
                id: '12',
                type: 'Image',
                url: 'https://res.cloudinary.com/krishanucloud/image/upload/v1714921698/postdemo_cxbfww.png',
            },
            {
                id: '111',
                type: 'Image',
                url: 'https://res.cloudinary.com/krishanucloud/image/upload/v1714430994/buyrentbanner_vlcppk.jpg',
            },
        ],
    },
    {
        id: '1234',
        userName: '@Anagha_',
        userProfile:
            'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/July2023/images/1690046016119_372b8875-70f8-4cc6-920f-b8c99383c03d.png',
        likes: 22,
        followStatus: false,
        comments: 3,
        caption:
            'Moonlight 🌙🌄💐. #ipl2024 #loughingmonth #hithotglam  #rohits143 #streak30 #hithot #hithothiring #Originalcontent #hithot_official #hithotindia #hithotshotvideo #hithotcreator #hithotrending  #comedy #comedyvideos #hithotcomedy #hithot',
        content: [
            {
                id: '121',
                type: 'Video',
                url: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702463197501_5ca83a62-b37b-44e1-bebc-9df8e803b898.mp4',
                thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/thum/1702463197501_5ca83a62-b37b-44e1-bebc-9df8e803b898.jpg',
            },
        ],
    },
    {
        id: '12346',
        userName: '@Anagha_',
        userProfile:
            'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/July2023/images/1690046016119_372b8875-70f8-4cc6-920f-b8c99383c03d.png',
        likes: 22,
        followStatus: false,
        comments: 3,
        caption:
            'Moonlight 🌙🌄💐. #ipl2024 #loughingmonth #hithotglam  #rohits143 #streak30 #hithot #hithothiring #Originalcontent #hithot_official #hithotindia #hithotshotvideo #hithotcreator #hithotrending  #comedy #comedyvideos #hithotcomedy #hithot',
        content: [
            {
                id: '12',
                type: 'Image',
                url: 'https://res.cloudinary.com/krishanucloud/image/upload/v1714921698/postdemo_cxbfww.png',
            },
            {
                id: '111',
                type: 'Image',
                url: 'https://res.cloudinary.com/krishanucloud/image/upload/v1714430994/buyrentbanner_vlcppk.jpg',
            },
        ],
    },
];

// const keyExtractorFunction = (item: VideoData) => {
//     return item.id;
// };
const keyExtractorFunction = (item: FeedItem) => `${item.type}-${item.index}`;

type FeedItem = {
    type: 'Post' | 'FollowSuggestion';
    data: VideoData | suggestedFollower;
    index: number;
};

// method for
function interleaveFollowSuggestion(
    feedPosts: VideoData[],
    suggestion: suggestedFollower[],
): FeedItem[] {
    console.log('interleaveFollowSuggestion called');
    const result: FeedItem[] = [];
    let suggestionIndex = 0;
    // console.log('Suggestion is isis is', suggestion[suggestionIndex]);

    feedPosts.forEach((post, index) => {
        result.push({ type: 'Post', data: post, index });
        if ((index + 1) % 5 === 0 && suggestionIndex < suggestion.length) {
            result.push({
                type: 'FollowSuggestion',
                data: suggestion[suggestionIndex],
                index: result.length,
            });
            suggestionIndex++;
        }
    });

    return result;
}

// type homeStackNavigationProp = StackNavigationProp<
//     RootStackParamList,
//     'MainScreen'
// >;

const HomeScreen = () => {
    const { top } = useSafeAreaInsets();

    const {
        feedLoading,
        feedPosts,
        fetchFeedPosts,
        followerSuggestions,
        suggestionsLoading,
        fetchFollowerSuggestions,
        getAllNotifications,
    } = useHomeFeed(state => ({
        feedPosts: state.feedPosts,
        fetchFeedPosts: state.fetchFeedPosts,
        feedLoading: state.feedLoading,
        followerSuggestions: state.followerSuggestions,
        suggestionsLoading: state.suggestionsLoading,
        fetchFollowerSuggestions: state.fetchFollowerSuggestions,
        getAllNotifications: state.getAllNotifications,
    }));
    const { isUploading, showSubscribeModel } = useContentStore();
    const { fetchVideos } = useVideoStore();
    const combinedData = [];
    const postsPerSuggestion = 5;

    // const { feedLoading, feedPosts, fetchFeedPosts } = useHomeFeed(state => ({
    //     feedPosts: state.feedPosts,
    //     fetchFeedPosts: state.fetchFeedPosts,
    //     feedLoading: state.feedLoading,
    // }));
    // const {
    //     feedPosts,
    //     feedLoading,
    //     fetchFeedPosts,
    //     followerSuggestions,
    //     suggestionsLoading,
    //     fetchFollowerSuggestions,
    // } = useHomeFeed();

    useLayoutEffect(() => {
        fetchVideos();
    }, []);

    useEffect(() => {
        fetchFeedPosts();
        fetchFollowerSuggestions();

        // Prefetch the notifications and reels
        getAllNotifications({
            fb_id: '108079010412844413016',
            record_per_page: '10',
            page: '1',
        });
    }, []);

    const [currentFeedIndex, setCurrentFeedIndex] = useState<string>('');
    const getFeed = async () => {
        const firstPostId = await fetchFeedPosts();
        // setCurrentFeedIndex(firstPostId);
    };

    useEffect(() => {
        // console.log('==== FEED-POSTS ====',feedPosts)
        // const getFeed = async () => {
        //     const firstPostId = await fetchFeedPosts();
        //     setCurrentFeedIndex(firstPostId);
        // }
        // getFeed();
        // fetchFeedPosts();
    }, []);
    // useEffect(() => {
    //     // const getFeed = async () => {
    //     //     const firstPostId = await fetchFeedPosts();
    //     //     setCurrentFeedIndex(firstPostId);
    //     // }
    //     getFeed();
    //     // fetchFeedPosts();
    // }, []);
    const navigation = useNavigation<StackNavigationType>();

    useEffect(() => {
        const showTutorial = async () => {
            // Here you can check if the tutorial has been shown before
            // For now, it always shows the tutorial
            //navigation.navigate('Tutorial');
        };

        showTutorial();
    }, [navigation]);
    useEffect(() => {
        console.log('Current Feed Index:', currentFeedIndex);
    }, []);
    const onViewRef = useRef(
        (viewableItems: {
            viewableItems: ViewToken[];
            changed: ViewToken[];
        }) => {
            if (viewableItems?.viewableItems?.length > 0) {
             
                setCurrentFeedIndex(viewableItems.viewableItems[0]?.item?.data.id);
            }
        },
    );

    const FeedHeaderSection = () => {
        return (
            <View>
                <Header />
                <StoriesSection />
                {isUploading && (
                    <View
                        style={styles.uploadingContainer}>
                        <ActivityIndicator
                            size={'large'}
                            color={Colors.primaryYellow}
                        />
                        <Text
                            style={styles.uploadingText}>
                            Your content is being uploaded...
                        </Text>
                    </View>
                )}
            </View>
        );
    };
    // console.log('FFFFFFFF', followerSuggestions);

    // To stop unnecessary re-renders
    const feedData = useMemo(
        () => interleaveFollowSuggestion(feedPosts, followerSuggestions),
        [feedPosts],
    ); 

    const renderItem = ({ item }: { item: FeedItem }) => {
        if (item.type === 'Post') {
            //console.log('FEEEDDDDD', item.data as VideoData);
            // console.log('FEEEDDDDD', item.data as VideoData);

            return (
                <FeedPostCard
                    item={item}
                    data={item.data as VideoData}
                    index={item.index}
                    viewableItem={currentFeedIndex}
                />
            );
        } else if (item.type === 'FollowSuggestion') {
            return <Followersuggestion />;
        } else return null;
    };

    const styles = useThemeStyles(styleCreator);
    return (
        <BottomSheetModalProvider>
            <SafeAreaView
                style={[{ paddingTop: top }, styles.mainContainer]}
                edges={['left', 'right']}>
                <StatusBar backgroundColor="#21262B" />
                <View style={styles.mainContainer}>
                    {/* {feedLoading ? (
                        <View className="w-full ">
                            <Text className="font-sans text-white ">
                                Loading feeds...
                            </Text>
                        </View>
                    ) : ( */}
                    <FlatList
                        ListHeaderComponent={FeedHeaderSection}
                        data={feedData}
                        renderItem={renderItem}
                        onViewableItemsChanged={onViewRef.current}
                        keyExtractor={keyExtractorFunction}
                        maxToRenderPerBatch={5}
                        windowSize={7}
                        initialNumToRender={10}
                        // ItemSeparatorComponent={}
                        contentContainerStyle={{ padding: 0 }}
                        viewabilityConfig={{
                            itemVisiblePercentThreshold: 50,
                        }}
                        // refreshing={!!feedData?.length && feedLoading}
                        // onRefresh={fetchFeedPosts}
                    />
                    {/* )} */}
                </View>
                <SubscribeModal
                    showModel={showSubscribeModel}
                    handleDiscard={() => {}}
                />
            </SafeAreaView>
        </BottomSheetModalProvider>
    );

    // const FeedHeaderSection = () => {
    //     const {
    //         feedPosts,
    //         feedLoading,
    //         fetchFeedPosts,
    //         followerSuggestions,
    //         suggestionsLoading,
    //         fetchFollowerSuggestions,
    //     } = useHomeFeed();
    // const FeedHeaderSection = () => {
    //     const {
    //         feedPosts,
    //         feedLoading,
    //         fetchFeedPosts,
    //         followerSuggestions,
    //         suggestionsLoading,
    //         fetchFollowerSuggestions,
    //     } = useHomeFeed();

    //     useEffect(() => {
    //         fetchFeedPosts();
    //         fetchFollowerSuggestions();
    //     }, []);
    //     return (
    //         <View>
    //             <Header />
    //             <StoriesSection />
    //         </View>
    //     );
    // };

    //     useEffect(() => {
    //         fetchFeedPosts();
    //         fetchFollowerSuggestions();
    //     }, []);
    //     return (
    //         <View>
    //             <Header />
    //             <StoriesSection videos={feedPosts} />
    //         </View>
    //     );
    // >>>>>>> f4f074e (Till clips)
    // };
};

const styleCreator = colors =>
    StyleSheet.create({
        mainContainer:{
            flex: 1,
            backgroundColor: colors.bgColor
        },
        innerContainer:{
            flex:1
        },
        uploadingContainer:{
            width: '100%',
            backgroundColor: colors.uploadBg,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingVertical: 15,
        },
        uploadingText:{
            color: colors.textColor,
            marginLeft: 15,
            fontSize: 16,
            fontFamily: 'Figtree-Medium',
        }
    });
export default HomeScreen;
