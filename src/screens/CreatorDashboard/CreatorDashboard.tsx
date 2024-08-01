import { ScrollView, StatusBar, View } from 'react-native';
import React from 'react';
import getStyles from './CreatorDashboard.style'; // Saparate Style //
import Header from './Header/Header';
import Badges from './Badges/Badges';
import Status from './Status/Status';

const CreatorDashboard: React.FC = () => {
    const styles = getStyles();

    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={[styles.Container]}>
                <Header />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[styles.ContentContainerStyle]}>
                    <Badges />
                    <Status />
                </ScrollView>
            </View>
        </>
    );
};

export default CreatorDashboard;
