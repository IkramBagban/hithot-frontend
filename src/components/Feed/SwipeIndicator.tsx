import { Animated, View, useWindowDimensions } from 'react-native';

import { FeedContentInterface } from '../../screens/Home/HomeScreen';
import { VideoData } from '../Reels/ReelSection2';
import React from 'react';

export interface swiperIndicatorInterface {
    data: VideoData[];
    scrollX: Animated.Value;
}

const SwipeIndicator: React.FC<swiperIndicatorInterface> = ({
    data,
    scrollX,
}) => {
    const { width } = useWindowDimensions();
    return (
        <View className=" w-full flex flex-row items-center justify-end gap-1 flex-1">
            {data.map((item, i) => {
                const inputRange = [
                    (i - 1) * width,
                    i * width,
                    (i + 1) * width,
                ];
                const indicatorWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [8, 32, 8],
                    extrapolate: 'clamp',
                });
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp',
                });
                return (
                    <Animated.View
                        key={item.id}
                        style={{
                            width: indicatorWidth,
                            height: 8,
                            opacity,
                        }}
                        className=" bg-white rounded-full"
                    />
                );
            })}
        </View>
    );
};

export default SwipeIndicator;
