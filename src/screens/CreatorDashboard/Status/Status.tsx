import { Text, View, Image } from 'react-native';
import React from 'react';
import getStyles from './Status.style'; // Saparate Style //
import RevenueCard from './RevenueCard/RevenueCard';
import ARTM from './ARTM/ARTM';
import LikeView from './LikeView/LikeView';
import Growth from './Growth/Growth';

const Status: React.FC = () => {
    const styles = getStyles();

    return (
        <>
            <View style={[styles.Container]}>
                <View style={[styles.HeaderContainer]}>
                    <View style={[styles.HeaderSubContainer]}>
                        <Text style={[styles.HeaderText]}>Status</Text>
                        {/* <Text style={[styles.HeaderSubText]}>View all</Text> */}
                    </View>
                </View>
                <RevenueCard />
                <ARTM />
                <LikeView />
                <Growth />
            </View>
        </>
    );
};

export default Status;
