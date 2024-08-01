import { RefreshControl, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './LiveScreen.style'; // Saparate Style //
import Header from './Header/Header';
import TCL from './TCL/TCL'; // Top creators live //
import ULV from './ULV/ULV'; // Upcoming live videos //
import CLN from './CLN/CLN'; // Creators live now //
import PV from './PV/PV'; // Popular Videos //
import useLiveFeedStore from '../../store/liveFeedStore';
import { useProfileStore } from '../../store/UserProfileStore';
import { ThemeContext } from '../../../src/theme/ThemeContext';

const LiveScreen: React.FC = () => {
    const [refreshing, setRefreshing] = useState(false);
    const styles = getStyles();
    const { fetchLiveFeed, tclLive, loading, fetchUpcomingFeed, upcomingLive } =
        useLiveFeedStore(state => ({
            fetchLiveFeed: state.fetchLiveFeed,
            tclLive: state.tclLive,
            loading: state.loading,
            fetchUpcomingFeed: state.fetchUpcomingFeed,
            upcomingLive: state.upcomingLive,
        }));
    const { fb_id_test } = useProfileStore();
    useEffect(() => {
        fetchLiveFeed(fb_id_test);
        fetchUpcomingFeed(fb_id_test);
    }, []);

    const handleRefresh = () => {
        setRefreshing(true);
        fetchLiveFeed(fb_id_test);
        fetchUpcomingFeed(fb_id_test);
        // Call your API or perform the refresh action here
        setTimeout(() => {
            setRefreshing(false);
            // Update your data array here
        }, 1500);
    };

    const { isDark } = useContext(ThemeContext);

    return (
        <>
            <LinearGradient
                colors={isDark?['#21262B', '#21262B']:['#FFFFFF', '#FFFFFF']}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1 }}>
                <Header />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                            tintColor={'#FFFFFF'}
                        />
                    }
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[styles.ContentContainerStyle]}>
                    {/* Render Top creators live Component */}
                    <TCL data={tclLive} />
                    {/* Render Upcoming live videos Component */}
                    <ULV data={upcomingLive} />
                    {/* Render Creators live now Component */}
                    <CLN data={tclLive} />
                    {/* Render Popular videos Component */}
                    <PV />
                </ScrollView>
            </LinearGradient>
        </>
    );
};

export default LiveScreen;
