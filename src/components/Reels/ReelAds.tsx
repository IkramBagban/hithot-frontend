import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    RewardedAd,
    RewardedAdEventType,
    TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.REWARDED : 'your-admob-unit-id';

const ReelAds = () => {
    const [adLoaded, setAdLoaded] = useState(false);
    const [reward, setReward] = useState(null);

    const rewarded = RewardedAd.createForAdRequest(adUnitId, {
        requestNonPersonalizedAdsOnly: true,
    });

    useEffect(() => {
        const unsubscribe = rewarded.onAdEvent((type, error, reward) => {
            if (type === RewardedAdEventType.LOADED) {
                setAdLoaded(true);
            }
            if (type === RewardedAdEventType.EARNED_REWARD) {
                setReward(reward);
            }
        });

        // Start loading the rewarded ad straight away
        rewarded.load();

        // Unsubscribe from events on unmount
        return () => {
            unsubscribe();
        };
    }, []);

    const showAd = () => {
        if (adLoaded) {
            rewarded.show();
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rewarded Ad Example</Text>
            <TouchableOpacity onPress={showAd} style={styles.button}>
                <Text style={styles.buttonText}>Show Rewarded Ad</Text>
            </TouchableOpacity>
            {reward && (
                <Text>
                    Reward: {reward?.amount} {reward?.type}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default ReelAds;
