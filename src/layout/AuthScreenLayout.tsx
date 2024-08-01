import {
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    View,
} from 'react-native';
import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import useThemeStyles from '../hooks/useThemeStyles';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    children: React.ReactNode;
}

const AuthScreenLayout: React.FC<Props> = ({ children }) => {
    const { top } = useSafeAreaInsets();
    const styles = useThemeStyles(styleCreator);
    return (
        <SafeAreaView edges={['bottom', 'left', 'right']} className=" flex-1">
            <KeyboardAvoidingView className=" flex-1">
                <View style={styles.container}>
                    <View className="z-20 flex-1">{children}</View>
                    <View style={styles.imageBg}>
                        <Image
                            source={require('../assets/authBanner.png')}
                            resizeMode="cover"
                            style={styles.lightsImage}
                        />
                        <LinearGradient
                            colors={styles.gradients}
                            style={styles.gradientPosition}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
const styleCreator = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.bgColor,
        },
        imageBg: {
            position: 'absolute',
            top: 0,
            height: '40%',
            width: '100%',
        },
        lightsImage: {
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
        },
        gradientPosition: {
            height: '35%',
            width: '100%',
            position: 'absolute',
            bottom: 0,
        },
        gradients: colors.bgImageGradient,
    });

export default AuthScreenLayout;
