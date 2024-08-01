import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import getStyles from './Subscriptions.style'; // Saparate Style //
import SearchBar from './SearchBar/SearchBar';
import STCYF from './STCYF/STCYF'; // Subscribe to creators you follow //
import SS from './SS/SS'; // Suggested subscription //

const Subscriptions: React.FC = () => {
    // All States //

    const [searchQuery, setSearchQuery] = useState('');

    const styles = getStyles();

    return (
        <>
            <View style={[styles.Container]}>
                <SearchBar OnChangeText={setSearchQuery} />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[styles.ContentContainerStyle]}>
                    {/* Render Subscribe to creators you follow component */}
                    <STCYF />
                    {/* Render Suggested subscription component */}
                    <SS />
                </ScrollView>
            </View>
        </>
    );
};

export default Subscriptions;
