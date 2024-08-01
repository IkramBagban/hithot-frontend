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
import { useState } from 'react';
import Popup from '../../../../../components/Profile/Popup';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    data: VideoData;
    // subscribedLoading: boolean;
}

const MyProfileSubscribeTile: React.FC<Props> = ({
    data,
    // subscribedLoading,
}) => {
    const navigation = useNavigation();
    const { height, width } = useWindowDimensions();
    const [ShowPopup, HidePopup] = useState(false);

    const PopupManage = () => {
        if (ShowPopup) {
            HidePopup(false);
        } else {
            HidePopup(true);
        }
    };
    return (
        <>
            {/* {subscribedLoading ? (
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
                onPress={PopupManage}
                // onPress={() => navigation.navigate('ShortsScreen', { data: data })}
            >
                <View
                    style={{
                        width: width / 3,
                        height: (5 / 4) * (width / 3),
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    className="relative p-1">
                    <Image
                        source={{
                            uri: data.thum,
                        }}
                        blurRadius={56}
                        resizeMode="cover"
                        className=" w-full h-full"
                    />
                    <View
                        style={{
                            position: 'absolute',
                            flexDirection: 'column',
                            // borderWidth: 1,
                            // borderColor: 'red',
                        }}>
                        <View
                            style={{
                                width: '100%',
                                alignItems: 'center',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Image
                                source={require('../../../../../assets/SubscribeActive.png')}
                                resizeMode="contain"
                                style={{ width: 20, height: 20 }}
                            />
                        </View>
                        <View
                            style={{
                                width: '100%',
                                marginTop: 6,
                                alignItems: 'center',
                                // borderWidth: 1,
                                // borderColor: 'red',
                            }}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 14,
                                    fontFamily: 'Figtree-Medium',
                                    color: '#FFFFFF',
                                }}>
                                {'Subscribe to\nwatch'}
                            </Text>
                        </View>
                    </View>
                    {/* <View className=" bg-black/25 flex flex-row absolute bottom-2 left-2 items-center py-1 px-2 rounded-lg my-1">
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
                </View> */}
                </View>
            </TouchableOpacity>
            {/* )} */}
            {ShowPopup && <Popup data={data} />}
        </>
    );
};

export default MyProfileSubscribeTile;
