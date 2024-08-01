import {
    View,
    Text,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { useNavigation } from '@react-navigation/native';
import { followUsersStore } from '../../store/followUsersStore';
import { useState } from 'react';
import { useAuthStore } from '../../store/AuthStore';

interface followdata {
    data: any;
    profile_pic: any;
    username: string;
    follower: string;
    load: boolean;
}

const FollowCard: React.FC<followdata> = ({
    data,
    load,
    username,
    follower,
    profile_pic,
}) => {
    const navigation = useNavigation();

    const [followStatus, setFollowStatus] = useState(null);
    const { userDetails } = useAuthStore();
    const fb_id = userDetails?.fb_id;
    const followed_fb_id = data.fb_id;
    const [isFollowing, setIsFollowing] = useState(String);

    const handlePress = () => {
        const selectedUser = data?.fb_id;
        navigation.navigate('VisitProfile', { user: selectedUser });
    };

    const handleFollowUnfollow = async () => {
        const status = isFollowing ? '0' : '1';
        console.log('home_foollow___', status);

        try {
            const response = await followUsersStore(
                fb_id,
                followed_fb_id,
                status,
            );
            setFollowStatus(response.status);
            setIsFollowing(!isFollowing);
        } catch (error) {
            setFollowStatus('Error updating follow status');
        }
    };

    const FollowButton = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleFollowUnfollow}>
                <View
                    style={{
                        // borderWidth: 1,
                        // borderColor: 'red',
                        alignItems: 'flex-end',
                    }}>
                    <LinearGradient
                        colors={['#F7C900', '#EB853C']}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={{
                            width: '96%',
                            paddingVertical: 8,
                            borderRadius: 6,
                            alignItems: 'center',
                            justifyContent: 'center',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <Text
                            style={{
                                fontSize: 14,
                                fontFamily: 'Figtree-Medium',
                                color: 'white',
                            }}>
                            {isFollowing ? 'Unfollow' : 'Follow'}
                        </Text>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
                <View
                    style={{
                        width: '90%',
                        marginBottom: 14,
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // borderWidth: 1,
                        // borderColor: 'red',
                    }}>
                    <View
                        style={{
                            width: '14%',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <View
                            style={{
                                width: 38,
                                height: 38,
                                borderRadius: 1000,
                                overflow: 'hidden',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            {load ? (
                                <ShimmerPlaceholder
                                    LinearGradient={LinearGradient}
                                    shimmerColors={[
                                        '#171717',
                                        '#464646',
                                        '#2f2f2f',
                                    ]}
                                    style={{ width: 38, height: 38 }}
                                />
                            ) : (
                                <Image
                                    style={{ width: 38, height: 38 }}
                                    resizeMode={'cover'}
                                    source={{ uri: profile_pic }}
                                />
                            )}
                        </View>
                    </View>
                    <View
                        style={{
                            width: '56%',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <View
                            style={{
                                width: '80%',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            {load ? (
                                <ShimmerPlaceholder
                                    LinearGradient={LinearGradient}
                                    shimmerColors={[
                                        '#171717',
                                        '#464646',
                                        '#2f2f2f',
                                    ]}
                                    style={{ width: 120, height: 16 }}
                                />
                            ) : (
                                <Text
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                    style={{
                                        fontSize: 16,
                                        fontFamily: 'Figtree-Bold',
                                        color: '#FFFFFF',
                                    }}>
                                    {username}
                                </Text>
                            )}
                        </View>
                        <View
                            style={{
                                width: '60%',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            {load ? (
                                <ShimmerPlaceholder
                                    LinearGradient={LinearGradient}
                                    shimmerColors={[
                                        '#171717',
                                        '#464646',
                                        '#2f2f2f',
                                    ]}
                                    style={{ width: 60, height: 10 }}
                                />
                            ) : (
                                <Text
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                    style={{
                                        fontSize: 14,
                                        fontFamily: 'Figtree-Regular',
                                        color: '#FFFFFF',
                                        opacity: 0.6,
                                    }}>
                                    {follower}
                                </Text>
                            )}
                        </View>
                    </View>
                    <View
                        style={{
                            width: '28%',
                            alignItems: load ? 'flex-end' : undefined,
                            justifyContent: 'center',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        {load ? (
                            <ShimmerPlaceholder
                                LinearGradient={LinearGradient}
                                shimmerColors={[
                                    '#171717',
                                    '#464646',
                                    '#2f2f2f',
                                ]}
                                style={{
                                    width: 100,
                                    height: 30,
                                    borderRadius: 8,
                                }}
                            />
                        ) : (
                            <FollowButton />
                        )}
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
};

export default FollowCard;
