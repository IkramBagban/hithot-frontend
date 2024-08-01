import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../theme/Colors';
import LinearGradient from 'react-native-linear-gradient';

interface BottomOptionsProps {
    takePhoto: () => void;
    takeVideo?: () => void;
    stopVideo?: () => void;
    isRecording?: boolean;
}

const BottomOptions: React.FC<BottomOptionsProps> = ({
    takePhoto,
    takeVideo,
    isRecording,
    stopVideo,
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={1}
                onLongPress={() => {
                    takeVideo && takeVideo();
                }}
                onPressOut={() => {
                    isRecording && stopVideo && stopVideo();
                }}
                style={styles.captureBtn}
                onPress={takePhoto}>
                {isRecording ? (
                    <View style={[styles.gradientClick, styles.recordView]} />
                ) : (
                    <LinearGradient
                        colors={[Colors.gradient1, Colors.gradient2]}
                        style={styles.gradientClick}
                    />
                )}
            </TouchableOpacity>
        </View>
    );
};
export default BottomOptions;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderColor: '#ddd',
        position: 'absolute',
        bottom: '15%',
        width: '100%',
    },
    captureBtn: {
        height: 70,
        width: 70,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: Colors.primaryWhite,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradientClick: {
        height: 60,
        width: 60,
        borderRadius: 35,
    },
    recordView: {
        height: 55,
        width: 55,
        backgroundColor: '#df4e6a',
    },
});
