import {Animated, StyleSheet, View, useWindowDimensions} from 'react-native';
import { swipeItemInterface } from './SwipeSection';
import useThemeStyles from '../../hooks/useThemeStyles';

export interface swiperIndicatorInterface {
  data: swipeItemInterface[];
  scrollX: Animated.Value;
}

const SwipeIndicator: React.FC<swiperIndicatorInterface> = ({
  data,
  scrollX,
}) => {
  const {width} = useWindowDimensions();
  const styles = useThemeStyles(styleCreator)
  return (
    <View className=" w-full flex flex-row items-center justify-center gap-1">
      {data.map((item, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
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
            style={[{
              width: indicatorWidth,
              height: 8,
              opacity
            },styles.movingDots]}
          />
        );
      })}
    </View>
  );
};
const styleCreator = colors =>
    StyleSheet.create({
        movingDots: {
            backgroundColor: colors.textColor,
            borderRadius:8
        },
    });
export default SwipeIndicator;
