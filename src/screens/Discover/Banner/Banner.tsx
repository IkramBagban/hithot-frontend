import {
    View,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    NativeSyntheticEvent,
    NativeScrollEvent,
    Dimensions,
} from 'react-native';
import React, { useRef, useState } from 'react';
import getStyles from './Banner.style'; // Saparate Style //

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Banner: React.FC<Props> = () => {
    // All State's //

    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / WIDTH);
        setCurrentIndex(index);
    };

    const Data = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
    ];

    const RenderItem = () => {
        return (
            <>
                <View style={[styles.ImageContainer]}>
                    <Image
                        source={require('../../../assets/GradientBG.png')}
                        resizeMode={'cover'}
                        style={[styles.Image]}
                    />
                </View>
            </>
        );
    };

    const styles = getStyles();

    return (
        <>
            <View style={[styles.Container]}>
                <View style={[styles.ImageAndIndicatorContainer]}>
                    <FlatList
                        data={Data}
                        renderItem={RenderItem}
                        pagingEnabled={true}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                        onScroll={handleScroll}
                        ref={flatListRef}
                    />
                    <View style={[styles.IndicatorContainer]}>
                        {Data.map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.Indicator,
                                    currentIndex === index &&
                                        styles.ActiveIndicator,
                                ]}
                            />
                        ))}
                    </View>
                </View>
            </View>
        </>
    );
};

export default Banner;
