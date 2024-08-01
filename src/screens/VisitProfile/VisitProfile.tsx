import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Header from '../../components/Profile/Header';
import ProfileDetail from '../../components/Profile/ProfileDetail';
import ProfileTopTab from '../../components/Profile/TopBar/ProfileTopTab';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useCallback, useState } from 'react';
import { RefreshControl } from 'react-native';
import useThemeStyles from '../../hooks/useThemeStyles';

const VisitProfile: React.FC<{}> = ({}) => {
    const route = useRoute();

    const { user, followeduserstatus, onStatusChange, userData } =
        route?.params || {};

    console.log('onStatusChange', onStatusChange);

    const { top } = useSafeAreaInsets();

    const [isPrivate, setIsPrivate] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const handleIsPrivateChange = isPrivate => {
        setIsPrivate(isPrivate);
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

    return (
        <BottomSheetModalProvider>
            <LinearGradient
                colors={['#21262B', '#21262B']}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1 }}>
                <Header />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        backgroundColor: Theme.ContainerColor.backgroundColor,
                    }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            colors={['#21262B']} // Customize the color if needed
                        />
                    }>
                    <ProfileDetail
                        FB_ID={user}
                        onIsPrivateChange={handleIsPrivateChange}
                        followeduserstatus={followeduserstatus}
                        refreshTrigger={refreshTrigger}
                        onStatusChange={onStatusChange}
                    />
                    {isPrivate ? (
                        <>
                            <View
                                style={{
                                    width: '90%',
                                    marginTop: 14,
                                    paddingVertical: 10,
                                    paddingHorizontal: 8,
                                    borderRadius: 8,
                                    alignSelf: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    backgroundColor:
                                        Theme.ContainerColor.backgroundColor,
                                    // borderWidth: 1,
                                    // borderColor: 'red',
                                }}>
                                <View
                                    style={{
                                        width: '12%',
                                        justifyContent: 'center',
                                        // borderWidth: 1,
                                        // borderColor: 'red',
                                    }}>
                                    <View
                                        style={{
                                            width: 30,
                                            height: 30,
                                            borderRadius: 1000,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // borderWidth: 1,
                                            // borderColor: 'red',
                                        }}>
                                        <Image
                                            source={require('../../assets/hithotBadge.png')}
                                            resizeMode={'cover'}
                                            style={{ width: 28, height: 28 }}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: '88%',
                                        flexDirection: 'column',
                                        justifyContent: 'space-around',
                                        // borderWidth: 1,
                                        // borderColor: 'red',
                                    }}>
                                    <View
                                        style={{
                                            width: '100%',
                                            // borderWidth: 1,
                                            // borderColor: 'red',
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontFamily: 'Figtree-Bold',
                                                color: Theme.TextColor.color,
                                            }}>
                                            {'This account is private'}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            width: '100%',
                                            marginTop: 4,
                                            // borderWidth: 1,
                                            // borderColor: 'red',
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontFamily: 'Figtree-Regular',
                                                color: Theme.TextColor.color,
                                                opacity: 0.6,

                                            }}>
                                            {
                                                'Follow this account to see their photos and videos.'
                                            }
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </>
                    ) : (
                        <ProfileTopTab userData={userData} FB_ID={user} />
                    )}
                </ScrollView>
            </LinearGradient>
        </BottomSheetModalProvider>
    );
};

export default VisitProfile;
const styleCreator = colors =>
    StyleSheet.create({
        TextColor: {
            color: colors.textColor,
        },
        ActionColor: {
            backgroundColor: colors.bgLightColor,
        },
        TextLightColor: {
            color: colors.textLightColor,
        },
        IconColor: {
            tintColor: colors.iconColor,
        },
        ContainerColor: {
            backgroundColor: colors.bgColor,
        },
        BorderColor: {
            borderColor: colors.activeBorderColor,
        },
        subcontainerColor: {
            backgroundColor: colors.subContainerColor,
        },
    });