import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/HomeScreen';
import TabTile from './component/TabTile';
import ProfileScreen from '../screens/Profile/ProfileScreen/ProfileScreen';
import ReelScreen from '../screens/Reels/ReelScreen';
import HomeStack from '../screens/Home/HomeStack';
import LiveScreen from '../screens/Live/LiveScreen';
import { StyleSheet, View } from 'react-native';
import ContentActionsSheet from '../components/Content/ContentActionsSheet';
import { useContentStore } from '../store/contentStore';
import { useEffect } from 'react';
import SendStorySheet from '../components/Content/SendStorySheet';
import ProfileStack from '../screens/Profile/ProfileScreen/ProfileStack';
import useThemeStyles from '../hooks/useThemeStyles';
import { Gifs } from '../theme/Gifs';
import ReelStack from '../screens/Reels/ReelStack';

const Tab = createBottomTabNavigator();

const BottomTabs = ({ navigation, route }) => {
    useEffect(() => {
        const routeName = route.state
            ? route.state.routes[route.state.index].name
            : 'Home';
        // console.log(
        //     'BTrouteName --> ',
        //     routeName,
        //     route,
        //     'Nav --> ',
        //     navigation,
        // );
        navigation.setOptions({
            swipeEnabled: routeName === 'Home',
        });
    }, [navigation, route]);
    const { toggleShowSheet } = useContentStore();
    const styles = useThemeStyles(styleCreator);
    return (
        <View style={{ flex: 1, backgroundColor: '#21262B' }}>
            <Tab.Navigator
                initialRouteName={'Home'}
                sceneContainerStyle={{ backgroundColor: 'red' }}
                screenOptions={{
                    headerShown: false,
                    unmountOnBlur: true,
                    tabBarStyle: {
                        height: 80,
                        paddingHorizontal: 12,
                        paddingBottom: 16,
                        backgroundColor: styles.tabContainer.backgroundColor,
                    },
                }}>
                <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={({ route }) => ({
                        tabBarButton: props => {
                            return (
                                <TabTile
                                    tabProps={props}
                                    icon={require('../assets/Home2.png')}
                                    iconSelected={require('../assets/HomeIc.png')}
                                    title={route.name}
                                />
                            );
                        },
                    })}
                />
                <Tab.Screen
                    name="Search"
                    component={LiveScreen}
                    options={({ route }) => ({
                        tabBarButton: props => {
                            return (
                                <TabTile
                                    tabProps={props}
                                    icon={require('../assets/LiveInActive.png')}
                                    iconSelected={require('../assets/LiveActive.png')}
                                    title={route.name}
                                />
                            );
                        },
                    })}
                />
                <Tab.Screen
                    name="Post"
                    component={HomeScreen}
                    options={({ route }) => ({
                        tabBarButton: props => {
                            return (
                                <TabTile
                                    tabProps={props}
                                    icon={Gifs.rocketGif}
                                    iconSelected={Gifs.rocketGif}
                                    title={route.name}
                                />
                            );
                        },
                    })}
                    listeners={() => ({
                        tabPress: e => {
                            e.preventDefault();
                            toggleShowSheet();
                        },
                    })}
                />
                <Tab.Screen
                    name="Reel"
                    component={ReelStack}
                    options={({ route }) => ({
                        tabBarButton: props => {
                            return (
                                <TabTile
                                    tabProps={props}
                                    icon={require('../assets/Reel.png')}
                                    iconSelected={require('../assets/reelWhite2.png')}
                                    title={route.name}
                                />
                            );
                        },
                    })}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileStack}
                    options={({ route }) => ({
                        tabBarButton: props => {
                            return (
                                <TabTile
                                    tabProps={props}
                                    icon={require('../assets/ProfileIc.png')}
                                    iconSelected={require('../assets/ProfileWhiteIc.png')}
                                    title={route.name}
                                />
                            );
                        },
                    })}
                />
            </Tab.Navigator>
            <ContentActionsSheet />
            <SendStorySheet showShareOptions={true} />
        </View>
    );
};

const styleCreator = colors =>
    StyleSheet.create({
        tabContainer: {
            backgroundColor: colors.bgColor,
        },
    });

export default BottomTabs;
