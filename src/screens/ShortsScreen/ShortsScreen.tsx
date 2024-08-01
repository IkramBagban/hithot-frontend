import {
    Dimensions,
    Image,
    StatusBar,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    useWindowDimensions,
} from 'react-native';
import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
import CircleUrlProfile from '../../components/Feed/CircleUrlProfile';
import Video from 'react-native-video';
import { useState } from 'react';
import LikeSection from '../../components/Feed/SwipeLowerComp/LikeSection';
import CommentSection from '../../components/Feed/SwipeLowerComp/CommentSection';
import { useRoute } from '@react-navigation/native';
import ShortSection from './ShortSection';

interface Props {
    data: VideoData;
}

const ShortsScreen: React.FC = () => {
    const route = useRoute();

    const { data, videos } = route.params;

    console.log('data___________', data);
    console.log('videos___________', videos);

    const { top } = useSafeAreaInsets();
    const { height } = useWindowDimensions();

    const WIDTH = Dimensions.get('screen').width;
    const HEIGHT = Dimensions.get('screen').height;

    const [reelPaused, setReelPaused] = useState<boolean>();

    const togglePlayback = () => {
        setReelPaused(prevPaused => !prevPaused);
    };

    return (
        <BottomSheetModalProvider>
            <SafeAreaView edges={['left', 'right']} className="flex-1 ">
                <StatusBar translucent backgroundColor={'transparent'} />
                <ShortSection activeReel={data} videosData={videos} />
            </SafeAreaView>
        </BottomSheetModalProvider>
    );
};

export default ShortsScreen;
