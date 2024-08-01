import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import getStyles from './SuggestionTutorial.style'; // Saparate Style //
import Header from './Header/Header';
import TopTabs from './TopTabs/TopTabs';

const SuggestionTutorial: React.FC = () => {
    const navigation = useNavigation();
    const styles = getStyles();

    return (
        <>
            <View style={[styles.Container]}>
                <Header />
                <TopTabs />
            </View>
        </>
    );
};

export default SuggestionTutorial;
