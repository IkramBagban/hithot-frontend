import {
    StackNavigationProp,
    createStackNavigator,
} from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import React from 'react';
import ShortsScreen from '../../ShortsScreen/ShortsScreen';
import Info from '../Info/Info';
import VisitProfile from '../../VisitProfile/VisitProfile';

export type ProfileStackParamList = {
    Profile: undefined;
    ShortsScreen: undefined; // here need to pass present reel data
    Info: undefined; // here need to pass present reel data
    VisitProfile: undefined; // here need to pass present reel data
};

export type ProfileStackNavigationType =
    StackNavigationProp<ProfileStackParamList>;

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="ChildMode" component={ChildModeScreen} /> */}
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="ShortsScreen" component={ShortsScreen} />
            <Stack.Screen name="Info" component={Info} />
            <Stack.Screen name="VisitProfile" component={VisitProfile} />

            {/* <Stack.Screen name="MainScreen" component={BottomTabs} /> */}
        </Stack.Navigator>
    );
};

export default ProfileStack;
