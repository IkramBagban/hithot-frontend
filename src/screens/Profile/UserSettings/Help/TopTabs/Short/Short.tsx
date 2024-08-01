import { View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import getStyles from './Short.style'; // Saparate Style //

const Short: React.FC = () => {
    const navigation = useNavigation();

    const styles = getStyles();

    return (
        <>
            <View style={[styles.Container]}></View>
        </>
    );
};

export default Short;
