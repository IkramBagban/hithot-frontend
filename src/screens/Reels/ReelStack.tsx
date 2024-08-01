import {
    StackNavigationProp,
    createStackNavigator,
} from '@react-navigation/stack';

import ReelScreen from './ReelScreen';
import ReelsAudio from './ReelsAudio';

export type ReelsStackParamList = {
    Reels: undefined;
    ReelsAudio: undefined; // here need to pass present reel data

};

export type ProfileStackNavigationType =
    StackNavigationProp<ReelsStackParamList>;

const Stack = createStackNavigator<ReelsStackParamList>();

const ReelStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="ChildMode" component={ChildModeScreen} /> */}
            <Stack.Screen name="Reels" component={ReelScreen} />
            <Stack.Screen name="ReelsAudio" component={ReelsAudio} />
            {/* <Stack.Screen name="MainScreen" component={BottomTabs} /> */}
        </Stack.Navigator>
    );
};

export default ReelStack;
