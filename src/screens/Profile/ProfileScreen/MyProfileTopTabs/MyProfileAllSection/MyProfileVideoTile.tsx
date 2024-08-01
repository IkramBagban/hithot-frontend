import {
    Image,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
import { VideoData } from '../../../../../components/Reels/ReelSection2';
import { useNavigation } from '@react-navigation/native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    data: any;
    videos: any;
}

const MyProfileVideoTile: React.FC<Props> = ({ data, videos }) => {
    const navigation = useNavigation();
    const { height, width } = useWindowDimensions();
    return (
        <>
            {/* {shortsLoading ? (
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
            ) : ( */}
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                    navigation.navigate('ShortsScreen', {
                        data: data,
                        videos: videos,
                    })
                }
                >
                <View
                    style={{
                        width: width / 3,
                        height: (5 / 4) * (width / 3),
                    }}
                    className="relative p-1">
                    <Image
                        source={{
                            uri: data.thum,
                        }}
                        resizeMode="cover"
                        className=" w-full h-full"
                    />
                    <View className=" bg-black/25 flex flex-row absolute bottom-2 left-2 items-center py-1 px-2 rounded-lg my-1">
                        <Image
                            source={require('../../../../../assets/outlinePlay.png')}
                            resizeMode="contain"
                            style={{
                                width: scale(10),
                                height: verticalScale(10),
                            }}
                            className="mr-1"
                        />
                        <Text
                            style={{
                                fontSize: RFValue(12),
                            }}
                            className=" text-white text-center">
                            {data.count.view}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            {/* )} */}
        </>
    );
};

export default MyProfileVideoTile;
