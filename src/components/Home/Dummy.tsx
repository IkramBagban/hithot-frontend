// TutorialScreen.js
import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    TouchableOpacity,
    Animated,
    StyleSheet,
    Image,
} from 'react-native';
import Tutorialcard from './Tutorialcard';
import { useNavigation } from '@react-navigation/native';

const TutorialScreen = () => {
    const [step, setStep] = useState(0);
    const cardPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const navigation = useNavigation();
    const steps = [
        {
            x: 210,
            y: 70,
            text: 'All your notifications!',
            image: require('../../assets/notification.png'),
            CTA: false,
        },
        {
            x: 270,
            y: 70,
            text: 'All of your chats here!',
            image: require('../../assets/emailIc.png'),
            CTA: false,
        },
        {
            x: 230,
            y: 530,
            text: 'Your profile section!',
            image: require('../../assets/ProfileIc.png'),
            CTA: true,
        },
        {
            x: 170,
            y: 530,
            text: 'Dedicated shorts section!',
            image: require('../../assets/ShortsInActive.png'),
            CTA: true,
        },
        {
            x: 80,
            y: 530,
            text: 'New discover section!',
            image: require('../../assets/notification.png'),
            CTA: true,
        },
        {
            x: 20,
            y: 530,
            text: 'How to earn HITS?',
            image: require('../../assets/diamond.png'),
            CTA: true,
        },
    ];

    useEffect(() => {
        // Initial animation
        Animated.spring(cardPosition, {
            toValue: { x: steps[0].x, y: steps[0].y },
            useNativeDriver: true,
        }).start();
    }, []);

    const handlePress = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
            Animated.spring(cardPosition, {
                toValue: { x: steps[step + 1].x, y: steps[step + 1].y },
                useNativeDriver: true,
            }).start();
        } else {
            // Tutorial finished, navigate back to Home screen
            //  navigation.navigate('MainScreen');
            navigation.goBack();
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.overlay} />
            {/* <Image source={{ uri: '../../../assets/notification.png' }} /> */}
            <Animated.View
                style={[
                    styles.cardContainer,
                    { transform: cardPosition.getTranslateTransform() },
                ]}>
                <Tutorialcard
                    imageSource={steps[step].image}
                    information={steps[step].text}
                    showCTA={steps[step].CTA}
                />
            </Animated.View>
            <TouchableOpacity
                style={{ flex: 1, zIndex: 7 }}
                onPress={handlePress}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        position: 'absolute',
        zIndex: 2,
        // backgroundColor: 'green',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
});

export default TutorialScreen;
