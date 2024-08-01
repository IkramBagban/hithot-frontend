import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import getStyles from './Header.style'; // Saparate Style //
import Popup from '../../../components/Popup/Popup';

const Header: React.FC = () => {
    // All States's //

    const [showPopup, setShowPopup] = useState(false);
    const [countdown, setCountdown] = useState(15);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (countdown > 0) {
            timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
        } else {
            PopupManage(); // Show popup when countdown reaches 0
        }
        return () => clearTimeout(timer);
    }, [countdown]);

    const PopupManage = () => {
        setShowPopup(!showPopup);
    };

    // Calculate the width of the progress bar based on the countdown

    const progressBarWidth = (countdown / 15) * 100;

    const styles = getStyles();

    return (
        <>
            <View style={[styles.HeaderContainer]}>
                <View style={[styles.HeaderSubContainer]}>
                    <View style={[styles.TitleAndOfferContainer]}>
                        <View style={[styles.TitleContainer]}>
                            <Text style={styles.TitleText}>Live</Text>
                        </View>
                        <View style={[styles.OfferContainer]}>
                            <Text style={styles.OfferText}>
                                {countdown ? `Free for ${countdown}:00s` : ' '}
                            </Text>
                        </View>
                        <View
                            style={[
                                styles.Absolute,
                                {
                                    width: `${progressBarWidth}%`,
                                    backgroundColor: 'red',
                                    opacity: 1,
                                },
                            ]}
                        />
                    </View>
                    <View style={[styles.TotalMembersContainer]}>
                        <View style={[styles.IconContainer]}>
                            <Image
                                source={require('../../../assets/human.png')}
                                style={[styles.Icon]}
                            />
                        </View>
                        <View style={[styles.TotalMembersTextContainer]}>
                            <Text style={styles.TotalMembersText}>3.0K</Text>
                        </View>
                    </View>
                    <View style={[styles.Absolute]} />
                </View>
            </View>
            {/* Render Popup Component */}
            {showPopup && <Popup />}
        </>
    );
};

export default Header;
