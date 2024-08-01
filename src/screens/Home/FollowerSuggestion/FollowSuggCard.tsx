import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Animated,
    Easing,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { suggestedFollower } from './Followersuggestion';
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale } from 'react-native-size-matters';
import axios from 'axios';
import { followProps } from '../../../components/Feed/FeedPostCard';
import { useNavigation } from '@react-navigation/native';

const FollowSuggCard: React.FC<suggestedFollower> = item => {
    const [followed, setFollowed] = useState(false);
    const scaleValue = useRef(new Animated.Value(1)).current;
    const navigation = useNavigation()

    const followFromFeed = async (props: followProps) => {
        const url = 'https://adminpanel.hithot.club/api/follow_users';
        try {
            const response = await axios.post(url, { ...props });
            if (response.data) {
                animateButton();
                setFollowed(true);
            }
            console.log('Response for following from feed:', response.data);
        } catch (e) {
            console.log('Error for following from feed is', e);
        }
    };

    const animateButton = () => {
        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 0.8,
                duration: 150,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 150,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    navigation.navigate('VisitProfile', {
                        user: item.fb_id,
                        followeduserstatus: '',
                        userData: null,
                    });
                }}
                style={styles.suggestionItem}>
                <Image
                    source={{ uri: item.profile_pic }}
                    style={styles.profilePic}
                />
                <Text style={styles.name} numberOfLines={1}>
                    {item.first_name}
                </Text>
                <Text style={styles.username} numberOfLines={1}>
                    {item.username}
                </Text>
                <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
                    <LinearGradient
                        colors={['#F7C900', '#EB853C']}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradient}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                followFromFeed({
                                    fb_id: '108939508596614871982',
                                    followed_fb_id: item.fb_id,
                                    status: '1',
                                });
                            }}>
                            <Text style={styles.buttonText}>
                                {followed ? 'Following' : 'Follow'}
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

export default FollowSuggCard;

const styles = StyleSheet.create({
    container: {
        width: 120,
        paddingVertical: 10,
        paddingHorizontal: 13,
        backgroundColor: 'rgba(60, 64, 69, 1)',
        borderRadius: 8,
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 15,
    },
    suggestionItem: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    name: {
        color: 'rgba(255, 255, 255, 1)',
        fontWeight: '800',
        marginBottom: 8,
    },
    username: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: '300',
        marginBottom: 8,
    },
    gradient: {
        borderRadius: 8,
    },
    button: {
        height: verticalScale(32),
        width: scale(94),
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});
