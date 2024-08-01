import React, { useEffect } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import axios from 'axios';
import { useHomeFeed } from '../../../store/homeFeedStore';
import { scale, verticalScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import { followProps } from '../../../components/Feed/FeedPostCard';
import FollowSuggCard from './FollowSuggCard';
import useThemeStyles from '../../../hooks/useThemeStyles';

export interface suggestedFollower {
    fb_id: string;
    username: string;
    gender: string;
    verified: number;
    first_name: string;
    last_name: string;
    profile_pic: string;
    email: string;
    created: string;
    follow_count: number;
}

const getFollowerSuggestion = async (): Promise<suggestedFollower[]> => {
    const url = 'https://adminpanel.hithot.club/api/followerSuggestion';

    const list = await axios.post(url, {
        page: 1,
    });

    return list.data;
};


const Followersuggestion = () => {
    const {
        followerSuggestions,
        fetchFollowerSuggestions,
        suggestionsLoading,
    } = useHomeFeed();

    useEffect(() => {
        fetchFollowerSuggestions();
    }, [fetchFollowerSuggestions]);
    const styles = useThemeStyles(styleCreator);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Follow suggestions
            </Text>
            {suggestionsLoading ? (
                <View style={styles.loadingContainer}>
                    <View style={styles.loadingItem}></View>
                    <View style={styles.loadingItem}></View>
                    <View style={styles.loadingItem}></View>
                    <View style={styles.loadingItem}></View>
                </View>
            ) : (
                <FlatList
                    data={followerSuggestions}
                    horizontal
                    renderItem={({ item }) => <FollowSuggCard {...item} />}
                    keyExtractor={item => item.fb_id}
                />
            )}
        </View>
    );
};

const styleCreator = colors => StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.textColor,
        marginBottom: 12,
        marginTop: 25,
    },
    loadingContainer: {
        flexDirection: 'row',
    },
    loadingItem: {
        width: 120,
        height: 140,
        paddingVertical: 10,
        paddingHorizontal: 13,
        backgroundColor: 'rgba(60, 64, 69, 1)',
        borderRadius: 8,
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 15,
    },
});

export default Followersuggestion;
