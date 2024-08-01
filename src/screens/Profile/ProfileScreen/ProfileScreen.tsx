import { ScrollView, RefreshControl, View, StyleSheet } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './ProfileScreen.style'; // Separate Style //
import Header from './Header/Header';
import CreatorDetails from './CreatorDetails/CreatorDetails';
import MyProfileTopTabs from './MyProfileTopTabs/MyProfileTopTabs';
import { useAuthStore } from '../../../store/AuthStore';
import useThemeStyles from '../../../hooks/useThemeStyles';

const ProfileScreen: React.FC = () => {
    const { userDetails, isLoggedIn } = useAuthStore();

    console.log('user', userDetails);

    const [isCreatorProfileEnabled, setIsCreatorProfileEnabled] =
        useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [refreshTrigger, setRefreshTrigger] = useState(0); // Add this state
    const [dataLoaded, setDataLoaded] = useState(false);

    const handleCreatorProfileToggle = (isEnabled: boolean) => {
        setIsCreatorProfileEnabled(isEnabled);
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        // Increment the refreshTrigger to trigger refresh in child components
        setRefreshTrigger(prev => prev + 1);

        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const Theme = useThemeStyles(styleCreator);

    const styles = getStyles();

    return (
        <>
            <BottomSheetModalProvider>
                <LinearGradient
                    colors={[
                        Theme.Gradient.backgroundColor,
                        Theme.Gradient.backgroundColor,
                    ]}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={{ flex: 1 }}>
                    <Header
                        userDetails={userDetails}
                        onToggleCreatorProfile={handleCreatorProfileToggle}
                    />
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={[styles.ContentContainerStyle]}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                                colors={['#21262B']} // Customize the color if needed
                            />
                        }>
                        <CreatorDetails
                            IsLoggedin={isLoggedIn}
                            FB_ID={userDetails?.fb_id}
                            IsCreatorShow={isCreatorProfileEnabled}
                            refreshTrigger={refreshTrigger}
                        />
                        <MyProfileTopTabs
                            FB_ID={userDetails?.fb_id}
                            refreshTrigger={refreshTrigger}
                            dataLoaded={dataLoaded}
                        />
                    </ScrollView>
                </LinearGradient>
            </BottomSheetModalProvider>
        </>
    );
};

const styleCreator = colors =>
    StyleSheet.create({
        Gradient: {
            backgroundColor: colors.bgColor,
        },
    });

export default ProfileScreen;
