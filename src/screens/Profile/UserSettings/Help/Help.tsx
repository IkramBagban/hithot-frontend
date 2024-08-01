import { Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './Help.style'; // Saparate Style //
import Header from './Header/Header';
import TopTabs from './TopTabs/TopTabs';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Help: React.FC = () => {
    const navigation = useNavigation();

    const styles = getStyles();

    return (
        <LinearGradient
            colors={['#21262B', '#21262B']}
            start={{ x: 1, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}>
            <Header />
            <TopTabs />
        </LinearGradient>
    );
};

export default Help;
