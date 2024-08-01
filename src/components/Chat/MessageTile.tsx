import {
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import CircleProfile from '../Feed/CircleProfile';
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from '../../route/MainStack';

interface Props {
    profileUrl: ImageSourcePropType;
    userName: string;
    latestMessage: string;
    latestMessageTime: string;
    unreadMessage?: boolean;
    unreadCount?: number;
    onMessagePress: () => void;
}

const MessageTile: React.FC<Props> = ({
    unreadCount,
    userName,
    latestMessage,
    unreadMessage,
    onMessagePress,
}) => {
    const navigation = useNavigation<StackNavigationType>();
    return (
        <TouchableOpacity onPress={() => onMessagePress()}>
            <View className=" w-full border-b border-b-white/20 py-4 flex flex-row">
                <CircleProfile
                    url={require('../../assets/demoUser.png')}
                    width={42}
                    height={42}
                />
                <View className=" flex-1 flex flex-row">
                    <View className=" flex-1 items-start justify-between pl-3 py-1">
                        <Text
                            style={{ fontSize: RFValue(16) }}
                            className=" font-boldB text-white">
                            {userName || 'Hithot_User'}
                        </Text>
                        <Text
                            style={{ fontSize: RFValue(14) }}
                            className=" font-sans text-white/60">
                            {latestMessage || 'Hithot_User'}
                        </Text>
                    </View>
                    <View
                        className={` flex items-center ${
                            unreadMessage
                                ? ' justify-between '
                                : ' justify-center'
                        }`}>
                        <Text
                            style={{ fontSize: RFValue(12) }}
                            className=" font-sans text-[#F7C900]">
                            12:59
                        </Text>
                        {unreadMessage ? (
                            <LinearGradient
                                colors={['#F7C900', '#EB853C']}
                                start={{ x: 1, y: 1 }}
                                end={{ x: 1, y: 0 }}
                                style={{
                                    width: scale(22),
                                    height: verticalScale(22),
                                }}
                                className="rounded-full flex items-center justify-center">
                                <Text className="font-mediumM text-white text-center">
                                    {unreadCount}
                                </Text>
                            </LinearGradient>
                        ) : null}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MessageTile;
