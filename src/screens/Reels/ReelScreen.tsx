import { StatusBar, View, useWindowDimensions } from 'react-native';
import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import ReelSection from '../../components/Reels/ReelSection';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import ReelSection2 from '../../components/Reels/ReelSection2';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import ReportSheet from '../../components/Content/ReportSheet';
import ReportSuccessSheet from '../../components/Content/ReportSuccessSheet';
import ReelMoreOptions from '../../components/Reels/ReelMoreOptions';

interface ReelScreenProps {
    activeReel?: object;
  }

const ReelScreen: React.FC<ReelScreenProps> = ({activeReel}) => {
    const { top } = useSafeAreaInsets();
    const { height } = useWindowDimensions();
    const bottomHeight = useBottomTabBarHeight();

    return (
        <BottomSheetModalProvider>
            <SafeAreaView edges={['left', 'right']} className="flex-1 ">
                <StatusBar translucent backgroundColor={'transparent'} />
                <View
                    style={{ height: height + top - bottomHeight }}
                    className=" w-full">
                    <ReelSection2 activeReel={activeReel} />
                    {/* <ReelSection /> */}
                </View>
                <ReelMoreOptions />
                <ReportSheet />
                <ReportSuccessSheet />
            </SafeAreaView>
        </BottomSheetModalProvider>
    );
};

export default ReelScreen;
