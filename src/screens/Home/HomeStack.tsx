import {
    StackNavigationProp,
    createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import HomeReelView from './HomeReelView';
import React from 'react';
import VisitProfile from '../VisitProfile/VisitProfile';
import Discover from '../Discover/Discover';
import SearchSection from '../Search/Searchsection';
import Info from '../Profile/Info/Info';
import ShortsScreen from '../ShortsScreen/ShortsScreen';
import ReelsAudio from '../Reels/ReelsAudio';

export type HomeRootStackParamList = {
    MainHome: undefined;
    HomeReelView: undefined; // here need to pass present reel data
    VisitProfile: undefined; // here need to pass present reel data
    Discover: undefined; // here need to pass present reel data
    SearchSection: undefined; // here need to pass present reel data
    Info: undefined; // here need to pass present reel data
    PlayClipFullScreen: undefined; // here need to pass present reel data
    ShortsScreen: undefined;
    ReelsHomeAudio:undefined;

};

export type HomeStackNavigationType =
    StackNavigationProp<HomeRootStackParamList>;

const Stack = createStackNavigator<HomeRootStackParamList>();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="ChildMode" component={ChildModeScreen} /> */}
            <Stack.Screen name="MainHome" component={HomeScreen} />
            <Stack.Screen name="ShortsScreen" component={ShortsScreen} />
            <Stack.Screen name="HomeReelView" component={HomeReelView} />
            <Stack.Screen name="VisitProfile" component={VisitProfile} />
            <Stack.Screen name="Discover" component={Discover} />
            <Stack.Screen name="SearchSection" component={SearchSection} />
            <Stack.Screen name="Info" component={Info} />
            <Stack.Screen name="ReelsHomeAudio" component={ReelsAudio} />

            {/* <Stack.Screen
                name="PlayClipFullScreen"
                component={PlayFullScreenClip}
            /> */}

            {/* <Stack.Screen name="MainScreen" component={BottomTabs} /> */}
        </Stack.Navigator>
    );
};

export default HomeStack;
