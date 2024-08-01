import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, createContext, useState } from 'react';
import {
    NativeModules,
    Platform,
    StyleSheet,
    useColorScheme,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStack from './src/route/MainStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast, { ToastConfig } from 'react-native-toast-message';
import HitHotToast from './src/components/Toast/HitHotToast';
import { useProfileStore } from './src/store/UserProfileStore';
import userFollowersStore from './src/store/userFollowersStore';
import { ThemeProvider } from './src/theme/ThemeContext';
import socketServcies from './src/utils/socketService';
import InAppReview from 'react-native-in-app-review';
import { CustomToast } from './src/components/Toast';
import { SearchResult } from './src/store/types';
import Orientation from 'react-native-orientation-locker';
const { InAppUpdate } = NativeModules;

// const toastConfig: ToastConfig = {
//     tomatoToast: CustomToast,
// };

interface MuteContextType {
    globalMute: boolean;
    setGlobalMute: React.Dispatch<React.SetStateAction<boolean>>;
}
// const [filteredResults, setFilteredResults] = useState<SearchResult>({
//     users: [],
//     videos: [],
//     images: [],
//     sounds: [],
// });
export const MuteContext = createContext<MuteContextType | undefined>(
    undefined,
);
function App(): React.JSX.Element {
    // const { fetchFollowers } = userFollowersStore();
    // const {
    //     fetchUserProfileData,
    //     fetchUserShortsVideo,
    //     fetchUserPostsImage,
    //     fetchUserClipsVideo,
    //     fetchUserSubscribed,
    //     fb_id_test,
    // } = useProfileStore();

    // useEffect(() => {
    //     fetchUserProfileData(fb_id_test);
    //     fetchUserShortsVideo(fb_id_test);
    //     fetchUserPostsImage(fb_id_test);
    //     fetchUserClipsVideo(fb_id_test);
    //     fetchUserSubscribed(fb_id_test);
    //     fetchFollowers(fb_id_test);
    // }, [
    //     fetchUserProfileData,
    //     fetchUserShortsVideo,
    //     fetchUserPostsImage,
    //     fetchUserClipsVideo,
    //     fetchUserSubscribed,
    //     fetchFollowers,
    //     fb_id_test,
    // ]);
    //// const isDarkMode = useColorScheme() === 'dark';
    const [globalMute, setGlobalMute] = useState(false);
    useEffect(() => {
        // forReview();
        if (Platform.OS === 'android') {
            const update = InAppUpdate.checkUpdate();
        }
        Orientation.lockToPortrait();
    }, []);

    const forReview = () => {
        InAppReview.RequestInAppReview()
            .then(hasFlowFinishedSuccessfully => {
                // when return true in android it means user finished or close review flow
                console.log(
                    'InAppReview in android',
                    hasFlowFinishedSuccessfully,
                );

                // when return true in ios it means review flow lanuched to user.
                console.log(
                    'InAppReview in ios has launched successfully',
                    hasFlowFinishedSuccessfully,
                );

                // 1- you have option to do something ex: (navigate Home page) (in android).
                // 2- you have option to do something,
                // ex: (save date today to lanuch InAppReview after 15 days) (in android and ios).

                // 3- another option:
                if (hasFlowFinishedSuccessfully) {
                    // do something for ios
                    // do something for android
                }

                // for android:
                // The flow has finished. The API does not indicate whether the user
                // reviewed or not, or even whether the review dialog was shown. Thus, no
                // matter the result, we continue our app flow.

                // for ios
                // the flow lanuched successfully, The API does not indicate whether the user
                // reviewed or not, or he/she closed flow yet as android, Thus, no
                // matter the result, we continue our app flow.
            })
            .catch(error => {
                //we continue our app flow.
                // we have some error could happen while lanuching InAppReview,
                // Check table for errors and code number that can return in catch.
                console.log(error);
            });
    };

    return (
        <GestureHandlerRootView>
            <SafeAreaProvider>
                <ThemeProvider>
                    <MuteContext.Provider value={{ globalMute, setGlobalMute }}>
                        <NavigationContainer>
                            <MainStack />
                            <Toast
                                config={{
                                    custom_toast: props => (
                                        <HitHotToast {...props} />
                                    ),
                                }}
                            />
                        </NavigationContainer>
                        {/* <Toast config={toastConfig} /> */}
                    </MuteContext.Provider>
                </ThemeProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}

export default App;
