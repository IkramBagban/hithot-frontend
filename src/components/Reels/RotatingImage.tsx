import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, StyleSheet, Easing } from 'react-native';
import { Images } from '../../theme/Images';

interface Props {
    isAudioPause?: boolean;
}
const RotatingImage = ({ isAudioPause }: Props) => {
    const rotateAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        let animation;
        const startRotation = () => {
            animation = Animated.loop(
                Animated.timing(rotateAnim, {
                    toValue: 1,
                    duration: 5500,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
                // ).start();
            );
            animation.start();
        };
        if (isAudioPause) {
            animation?.stop();
            rotateAnim.setValue(0);
        } else {
            startRotation();
        }
        return () => {
            if (animation) {
                animation?.stop();
            }
        };
    }, [rotateAnim, isAudioPause]);

    const rotation = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View>
            <Animated.Image
                style={[styles.image, { transform: [{ rotate: rotation }] }]}
                source={Images.musicAlbumIcon}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        borderRadius: 30,
    },
});

export default RotatingImage;
