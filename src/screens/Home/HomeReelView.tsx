import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { StatusBar, View, useWindowDimensions } from 'react-native';
import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import CenterHeader from '../../components/Headers/CustomHeader';
import ReelSection2 from '../../components/Reels/ReelSection2';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const HomeReelView = () => {
    const { height } = useWindowDimensions();
    const { top, bottom } = useSafeAreaInsets();
    const bottomHeight = useBottomTabBarHeight();
    const { params } = useRoute();
    return (
        <BottomSheetModalProvider>
            <SafeAreaView edges={['left', 'right']} className="flex-1 ">
                <StatusBar translucent backgroundColor={'transparent'} />
                <View
                    style={{ height: height + top - bottomHeight }}
                    className=" w-full">
                    <ReelSection2 activeReel={params?.data} />
                    {/* <ReelSection /> */}
                </View>
            </SafeAreaView>
        </BottomSheetModalProvider>
    );
};

export default HomeReelView;
