import { useCallback, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
import { formatNumber } from '../../../utils/utilFunc';
import axios from 'axios';
import { debounce } from '../../../utils/debounce';
import { useProfileStore } from '../../../store/UserProfileStore';
import React from 'react';

interface Props {
    likeCount: number;
    videoId: string;
    col?: boolean;
    onLikePress?: () => void;
    isLiked?:boolean
}

const LikeSection: React.FC<Props> = ({
    likeCount,
    videoId,
    col,
    onLikePress,
    isLiked
}) => {
    const [count, setCount] = useState<number>(likeCount);
    const fbId = useProfileStore(state => state.fb_id_test);
    const [liked, setLiked] = useState<boolean>(!!isLiked); // here will initialize with api data case: already liked/unliked
    const likeVideoApiCall = useCallback(
        debounce(async (isLiked: boolean) => {
            try {
                const likeResponse = await axios.post(
                    'https://adminpanel.hithot.club/api/likeDislikeVideo',
                    {
                        // fb_id: fbId,
                        fb_id: '108079010412844413016',
                        video_id: videoId,
                        action: isLiked ? 1 : 0,
                    },
                );
            } catch (error) {
                // console.error('Error liking the video:', error);

                setCount(prev => (isLiked ? --prev : ++prev));
                setLiked(!isLiked);
            }
        }, 500),
        [],
    );

    const toggleLikeHandler = () => {
        if (liked) {
            setCount(prev => --prev);
            setLiked(false);
            likeVideoApiCall(false);
        } else {
            setCount(prev => ++prev);
            setLiked(true);
            likeVideoApiCall(true);
        }
        onLikePress && onLikePress();
    };
    return (
        <View
            className={`flex ${
                col ? '' : 'flex-row'
            } justify-center items-center`}>
            <TouchableOpacity
                onPress={toggleLikeHandler}
                className={`${col ? '' : 'mr-1'}`}>
                {liked ? (
                    <Image
                        source={require('../../../assets/RedHeart.png')}
                        resizeMode="contain"
                        style={{
                            width: scale(24),
                            height: verticalScale(24),
                        }}
                    />
                ) : (
                    <Image
                        source={require('../../../assets/Like.png')}
                        resizeMode="cover"
                        style={{
                            width: scale(24),
                            height: verticalScale(24),
                        }}
                    />
                )}
            </TouchableOpacity>
            <Text
                style={{ fontSize: RFValue(12) }}
                className={`${col ? 'mt-1' : ''} text-white font-sans`}>
                {formatNumber(count)}
            </Text>
        </View>
    );
};

export default LikeSection;
