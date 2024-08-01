import { useNavigation } from '@react-navigation/native';
import {
    Image,
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import CircleProfile from '../Feed/CircleProfile';
import { scale, verticalScale } from 'react-native-size-matters';
interface Props {
    HeaderIc?: ImageSourcePropType;
    title?: string;
    bgColor?: string;
    RightComp?: React.FC;
}

const ChatRoomHeader: React.FC<Props> = ({}) => {
    const navigation = useNavigation();

    return (
        <View className="flex flex-row justify-between items-center px-6 pb-4 border-b border-b-white/10">
            <View className=" flex flex-row items-center">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className=" w-6 h-6 flex items-start justify-center">
                    <Image
                        source={require('../../assets/WhiteArrow.png')}
                        resizeMode="contain"
                        className=" w-6 h-3"
                    />
                </TouchableOpacity>
                <View className=" flex flex-row">
                    <CircleProfile
                        url={require('../../assets/demoUser.png')}
                        width={36}
                        height={36}
                    />
                    <View className=' ml-3 flex items-start justify-center'>
                        <Text
                            style={{ fontSize: RFValue(12) }}
                            className=" font-boldB text-white">
                            Jhon Doe
                        </Text>
                        <Text
                            style={{ fontSize: RFValue(10) }}
                            className=" font-sans text-white/60">
                            @Jhon_Doe1
                        </Text>
                    </View>
                </View>
            </View>

            <View>
                <Image
                    source={require('../../assets/navThreeDot.png')}
                    style={{ width: scale(12), height: verticalScale(18) }}
                />
            </View>
        </View>
    );
};

export default ChatRoomHeader;