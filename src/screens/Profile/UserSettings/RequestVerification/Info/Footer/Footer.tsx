import { View, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './Footer.style'; // Saparate Style //

interface Props {
    OnPress: () => void;
}

const Footer: React.FC<Props> = ({ OnPress }) => {
    const navigation = useNavigation();

    const styles = getStyles();

    return (
        <>
            <View style={[styles.FooterContainer]}>
                <TouchableOpacity activeOpacity={0.8} onPress={OnPress}>
                    <LinearGradient
                        colors={['#F7C900', '#EB853C']}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.FooterSubContainer}>
                        <View style={styles.FooterTitleContainer}>
                            <Text style={styles.FooterTitle}>
                                {'Confirm Details'}
                            </Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Footer;
