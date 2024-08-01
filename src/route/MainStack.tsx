import {
    StackNavigationProp,
    createStackNavigator,
} from '@react-navigation/stack';
import OnboardScreen from '../screens/Onboard/OnboardScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import OtpVerifyScreen from '../screens/Auth/OtpVerifyScreen';
import CreateAccScreen from '../screens/Auth/CreateAccScreen';
import BottomTabs from './BottomTabs';
import ChildModeScreen from '../screens/Profile/ChildMode/ChildModeScreen';
import NotificationScreen from '../screens/Notification/NotificationScreen';
import ReferScreen from '../screens/Refer/ReferScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import ChatRoom from '../screens/Chat/ChatRoom';
import WalletScreen from '../screens/Wallet/WalletScreen';
// import SearchSection from '../screens/Search/Searchsection';
import LiveScreen from '../screens/Live/LiveScreen';
import LiveRoom from '../screens/LiveRoom/LiveRoom';
// import Info from '../screens/Profile/Info/Info';
// import VisitProfile from '../screens/VisitProfile/VisitProfile';
import EditProfile from '../screens/Profile/EditProfile/EditProfile';
import SuggestionTutorial from '../screens/Profile/UserSettings/SuggestionTutorial/SuggestionTutorial';
import RequestVerification from '../screens/Profile/UserSettings/RequestVerification/RequestVerification';
import BlockedUser from '../screens/Profile/UserSettings/BlockedUser/BlockedUser';
import Help from '../screens/Profile/UserSettings/Help/Help';
import LegalsAndPolicies from '../screens/Profile/UserSettings/LegalsAndPolicies/LegalsAndPolicies';
import YourActivity from '../screens/Profile/UserSettings/YourActivity/YourActivity';
import Subscription from '../screens/Subscription/Subscription';
import CreatorDashboard from '../screens/CreatorDashboard/CreatorDashboard';
import StoryMode from '../screens/StoryMode';
import UserMode from '../screens/UserMode';
// import Discover from '../screens/Discover/Discover';
import UploadContentScreen from '../screens/AddContent/UploadContent';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CreateContent from '../screens/AddContent/CreateContent';
import ContentActionsSheet from '../components/Content/ContentActionsSheet';
import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
//import Storyviewing from '../screens/Home/Story/Storyviewing';
import StoryAdvertisement from '../screens/Home/Story/Story_Advertisement/StoryAdvertisement';
import ShortsScreen from '../screens/ShortsScreen/ShortsScreen';
import PostsScreen from '../screens/PostsScreen/PostsScreen';
import ClipsScreen from '../screens/ClipsScreen/ClipsScreen';
import SignInScreen from '../screens/Auth/SignInScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import TagPeople from '../screens/AddContent/TagPeople';
// import TutorialScreen from '../components/Home/Dummy';
import TutorialScreen from '../components/Home/Dummy';
import SingleClipCard from '../components/Feed/SingleClipCard';
import ClipCard from '../components/Feed/ClipCard';
import Storyviewing from '../screens/Home/Story/Storyviewing';
import SettingsSubscription from '../screens/Profile/UserSettings/Subscription/SettingsSubscription';import Location from '../screens/AddContent/Location';
import PlayFullScreenClip from '../screens/Home/PlayFullScreenClip';
import Languages from '../screens/Languages/Languages';

export type RootStackParamList = {
    SplashScreen: undefined;
    Onboard: undefined;
    Signup: undefined;
    OtpVerifyScreen: undefined;
    CreateAccScreen: undefined;
    MainScreen: undefined;
    ChildMode: undefined;
    NotificationScreen: undefined;
    ReferScreen: undefined;
    ChatScreen: undefined;
    ChatRoom: undefined;
    WalletScreen: undefined;
    SearchSection: undefined;
    LiveScreen: undefined;
    LiveRoom: undefined;
    // Info: undefined;
    // Discover: undefined;
    // VisitProfile: undefined;
    EditProfile: undefined;
    SuggestionTutorial: undefined;
    RequestVerification: undefined;
    BlockedUser: undefined;
    Help: undefined;
    LegalsAndPolicies: undefined;
    YourActivity: undefined;
    // ShortsScreen: undefined;
    PostsScreen: undefined;
    ClipsScreen: undefined;
    Subscription: undefined;
    CreatorDashboard: undefined;
    StoryMode: undefined;
    UserMode: undefined;
    RootScreen: undefined;
    UploadContent: undefined;
    StoryViewingPage: { fb_id: string }; // Update here
    Tutorial: undefined;
    SettingsSubscription: undefined;
    StoryView: undefined;
    PlayClipFullScreen: undefined;
    Languages : undefined
};

export type StackNavigationType = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

const TopTab = createMaterialTopTabNavigator();

const RootStack = ({ navigation, route }) => {
    const [tabSwipe, setTabSwipe] = useState(false);
    useEffect(() => {
        const state = navigation.getState();
        // console.log('|| TopRoute ||', state);

        const nestedMainScreen = state.routes
            .find(tab => tab.name === 'RootScreen')
            ?.state?.routes?.find(i => i.name === 'MainScreen');
        const sE = nestedMainScreen?.state?.index === 0;

        setTabSwipe(!!sE || !nestedMainScreen?.state);
        // console.log('swipeEnable ---> ', sE);
    }, [navigation, route]);

    return (
        <View style={{ flex: 1 }}>
            <TopTab.Navigator
                // screenOptions={{
                //      swipeEnabled: tabSwipe,
                // }}
                tabBar={() => null}
                initialRouteName="MainScreen">
                {(tabSwipe) && (
                    <TopTab.Screen
                        name="CreateContentScreen"
                        component={CreateContent}
                    />
                )}
                <TopTab.Screen name="MainScreen" component={BottomTabs} />
            </TopTab.Navigator>
        </View>
    );
};

const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="SplashScreen">
            {/* <Stack.Screen name="ChildMode" component={ChildModeScreen} /> */}
            {/* <Stack.Screen name="NotificationScreen" component={NotificationScreen} /> */}
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LanguagesScreen" component={Languages} />
            <Stack.Screen name="RootScreen" component={RootStack} />
            <Stack.Screen name="MainScreen" component={BottomTabs} />
            <Stack.Screen name="Onboard" component={OnboardScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="OtpVerifyScreen" component={OtpVerifyScreen} />
            <Stack.Screen name="CreateAccScreen" component={CreateAccScreen} />
            <Stack.Screen name="BlockedUser" component={BlockedUser} />
            <Stack.Screen name="ChildMode" component={ChildModeScreen} />
            <Stack.Screen
                name="NotificationScreen"
                component={NotificationScreen}
            />
            <Stack.Screen name="ReferScreen" component={ReferScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            <Stack.Screen name="ChatRoom" component={ChatRoom} />
            <Stack.Screen name="WalletScreen" component={WalletScreen} />
            {/* <Stack.Screen name="SearchSection" component={SearchSection} /> */}
            <Stack.Screen name="LiveScreen" component={LiveScreen} />
            <Stack.Screen name="LiveRoom" component={LiveRoom} />
            {/* <Stack.Screen name="Info" component={Info} />
            <Stack.Screen name="Discover" component={Discover} /> */}
            <Stack.Screen name="Subscription" component={Subscription} />
            <Stack.Screen
                name="SettingsSubscription"
                component={SettingsSubscription}
            />
            {/* <Stack.Screen
                name="VisitProfile"
                component={VisitProfile}
                options={{
                    cardStyle: { backgroundColor: '#21262B' },
                }}
            /> */}
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen
                name="SuggestionTutorial"
                component={SuggestionTutorial}
            />
            <Stack.Screen
                name="RequestVerification"
                component={RequestVerification}
            />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen
                name="LegalsAndPolicies"
                component={LegalsAndPolicies}
            />
            <Stack.Screen name="YourActivity" component={YourActivity} />
            {/* <Stack.Screen name="ShortsScreen" component={ShortsScreen} /> */}
            <Stack.Screen name="PostsScreen" component={PostsScreen} />
            <Stack.Screen name="ClipsScreen" component={ClipsScreen} />
            <Stack.Screen
                name="CreatorDashboard"
                component={CreatorDashboard}
            />
            <Stack.Screen name="StoryMode" component={StoryMode} />
            <Stack.Screen name="UserMode" component={UserMode} />
            <Stack.Screen
                name="UploadContent"
                component={UploadContentScreen}
            />
            <Stack.Screen name="SingIn" component={SignInScreen} />
            <Stack.Screen name="TagPeople" component={TagPeople} />
            <Stack.Screen name="LocationScreen" component={Location} />
            <Stack.Screen name="StoryView" component={Storyviewing} />
            <Stack.Screen
                name="PlayClipFullScreen"
                component={PlayFullScreenClip}
            />
            {/* //  was commented to run dummy story  <Stack.Screen name="StoryViewingPage" component={Storyviewing} /> */}
            <Stack.Screen name="StoryViewingPage" component={Storyviewing} />
            <Stack.Screen
                name="CreateContentScreen"
                component={CreateContent}
            />
            {/* <Stack.Screen
                name="Tutorial"
                component={TutorialScreen}
                options={{
                    presentation: 'transparentModal',
                    cardStyle: { backgroundColor: 'transparent' },
                }}
            /> */}
        </Stack.Navigator>
    );
};

// export default RootStack;
export default MainStack;
