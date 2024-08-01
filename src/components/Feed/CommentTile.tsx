import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
import { CommentInterface } from './SwipeLowerComp/CommentSection';
import CircleUrlProfile from './CircleUrlProfile';
import React, { useState } from 'react';
const { width, height } = Dimensions.get('window');
interface Props {
    commentData: CommentInterface;
}

const CommentTile: React.FC<Props> = ({ commentData }) => {
    const [enlargedView, setEnlargedView] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    return (
        <View>
            <View className=" flex flex-row items-start border-b border-b-white/10 pb-3 mb-3">
                <View className=" rounded-full overflow-hidden mr-2">
                    {commentData.user_info.profile_pic !== 'null' ? (
                        <CircleUrlProfile
                            url={commentData.user_info.profile_pic}
                            width={36}
                            height={36}
                        />
                    ) : (
                        <Image
                            source={require('../../assets/demoUser.png')}
                            resizeMode="contain"
                            style={{
                                width: scale(36),
                                height: verticalScale(36),
                            }}
                        />
                    )}
                </View>
                <View className=" flex-1 flex items-start">
                    <Text
                        style={{ fontSize: RFValue(12) }}
                        className=" text-white font-boldB mb-1">
                        {commentData.user_info.username || 'Hithot_User'}
                    </Text>
                    <Text
                        style={{
                            fontSize: RFValue(12),
                        }}
                        className=" text-white/80 text-left font-sans">
                        {commentData.comments || ''}
                    </Text>
                    <Text
                        style={{
                            fontSize: RFValue(12),
                        }}
                        className=" text-white text-center font-boldB mt-2">
                        Reply
                    </Text>
                </View>
                {showDelete ? (
                    <TouchableOpacity
                        onPress={() => {
                            setShowDelete(!showDelete);
                        }}>
                        <Text style={{ color: 'white' }}>Delete</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        onPress={() => {
                            setShowDelete(!showDelete);
                        }}
                        style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                        <Image
                            source={require('../../assets/navThreeDot.png')}
                            resizeMode="contain"
                            style={{
                                width: scale(20),
                                height: verticalScale(20),
                            }}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default CommentTile;
