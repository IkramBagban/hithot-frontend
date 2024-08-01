import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions,
    Image,
    TouchableOpacity,
    Animated,
} from 'react-native';
import React from 'react';
import {
    BannerAd,
    BannerAdSize,
    TestIds,
} from 'react-native-google-mobile-ads';
import bgUrl from '../../assets/static_images/AdBg.png';
import zoomato from '../../assets/static_images/zmt.png';
import CircleProfile from './CircleProfile';
import { scale, verticalScale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';
import SwipeLowerSection from './SwipeLowerSection';

const FeedAds: React.FC = () => {
    const { width, height } = useWindowDimensions();
    const adUnitId = __DEV__
        ? TestIds.ADAPTIVE_BANNER
        : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

    return (
        <View>
            <View
                style={{
                    width: width,
                    height: 80,
                    position: 'relative',
                    zIndex: 1,
                    marginBottom: 0,
                    backgroundColor: '#57238C',
                    padding: 0,
                }}>
                <Image
                    source={bgUrl}
                    style={{ width: width, height: 80 }}
                    blurRadius={10}
                />
                <View
                    style={{
                        width: width * 0.9,
                        justifyContent: 'space-between',
                        position: 'absolute',
                        top: 18,
                        left: 10,
                    }}>
                    <View>
                        <View
                            style={{
                                width: width * 0.9,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: width * 0.51,
                                }}>
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    style={{
                                        borderRadius: 20,
                                        overflow: 'hidden',
                                        marginRight: 10,
                                    }}>
                                    <CircleProfile
                                        url={zoomato}
                                        width={40}
                                        height={40}
                                    />
                                </TouchableOpacity>
                                <View
                                    style={{
                                        width: scale(153),
                                        marginRight: 10,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: RFValue(12),
                                            color: 'white',
                                            fontWeight: 'bold',
                                        }}
                                        numberOfLines={1}>
                                        HitHot
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: RFValue(10),
                                            color: 'rgba(255, 255, 255, 0.6)',
                                        }}>
                                        1hrs ago
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: width * 0.45,
                                    justifyContent: 'space-between',
                                }}>
                                <TouchableOpacity
                                    // onPress={handleFollowUnfollow}
                                    style={{
                                        width: scale(107),
                                        height: verticalScale(32),
                                        borderRadius: 100,
                                        backgroundColor:
                                            'rgba(255, 255, 255, 0.2)',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: RFValue(10),
                                            color: 'white',
                                        }}>
                                        Follow
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        width: scale(32),
                                        height: verticalScale(32),
                                        borderRadius: 100,
                                        backgroundColor:
                                            'rgba(255, 255, 255, 0.2)',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        source={require('../../assets/navThreeDot.png')}
                                        resizeMode="contain"
                                        style={{
                                            width: scale(20),
                                            height: verticalScale(20),
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.INLINE_ADAPTIVE_BANNER}
            />
            <Animated.View
                style={{
                    width: width,
                    // height: animatedHeight,
                    height: 130,
                    backgroundColor: '#57238C',
                }}>
                <Image
                    source={bgUrl}
                    style={{
                        width: width,
                        height: '100%',
                    }}
                    blurRadius={50}
                />
                <View
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        position: 'absolute',
                        width: width,
                        height: '100%',
                    }}>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 8,
                            width: width,
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            // backgroundColor: '#57238C',

                            zIndex: 10,
                        }}>
                        <SwipeLowerSection
                            commentCount={10}
                            postId={Number(34534212)}
                            likeCount={55}
                            fb_id={''}
                            //onLikePress={handleLikePress}
                        />
                        <Text
                            //numberOfLines={viewMore ? undefined : 1}
                            style={{ color: 'white' }}>
                            <Text
                                style={{
                                    fontSize: RFValue(14),
                                    fontWeight: 'bold',
                                }}>
                                @Zomato
                            </Text>
                            <Text style={{ fontSize: RFValue(14) }}>
                                aklsuf asiouaoie iqwyeioqwe
                            </Text>
                        </Text>
                        <TouchableOpacity
                        //onPress={handleViewMore}
                        >
                            {/* <Text
                                style={{
                                    fontWeight: '300',
                                    fontSize: RFValue(14),
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    borderBottomWidth: 1,
                                    borderBottomColor:
                                        'rgba(255, 255, 255, 0.6)',
                                    marginTop: -5,
                                    width: true ? 100 : 50,
                                }}>
                                {viewMore ? 'Hide details>' : 'more>'}
                            </Text> */}
                            <Text
                                style={{
                                    fontSize: RFValue(14),
                                    color: 'white',
                                }}>
                                View all 155+ comments
                            </Text>
                            <Text
                                style={{
                                    fontSize: RFValue(14),
                                    fontWeight: '300',
                                    color: 'rgba(255, 255, 255, 0.6)',
                                }}>
                                15 days ago
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default FeedAds;
