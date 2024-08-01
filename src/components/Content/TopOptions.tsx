import {
    FlatList,
    Image,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import { Colors } from '../../theme/Colors';
import { Images } from '../../theme/Images';

interface TopOptionProps {
    onFlashPress?: () => void;
    onTextPress?: () => void;
    onFlipCamPress?: () => void;
    onMusicPress?: () => void;
    onMentionPress?: () => void;
    isCameraOn?: boolean;
    isTorchOn?: boolean;
}
const TopOptions = ({
    onFlashPress,
    onTextPress,
    onFlipCamPress,
    onMusicPress,
    onMentionPress,
    isCameraOn = true,
    isTorchOn = false,
}: TopOptionProps) => {
    const camOnOptions = [
        {
            icon: Images.topFlashIcon,
            onPress: () => {
                onFlashPress && onFlashPress();
            },
            title: 'flash',
        },
        {
            icon: Images.topFlipCamIcon,
            onPress: () => {
                onFlipCamPress && onFlipCamPress();
            },
            title: 'flip',
        },
    ];
    const camOffOptions = [
        {
            icon: Images.topTextIcon,
            onPress: () => {
                onTextPress && onTextPress();
            },
            title: 'text',
        },

        {
            icon: Images.topMusicIcon,
            onPress: () => {
                onMusicPress && onMusicPress();
            },
            title: 'music',
        },
        {
            icon: Images.topMentionIcon,
            onPress: () => {
                onMentionPress && onMentionPress();
            },
            title: 'mention',
        },
    ];
    const topOptionsData = isCameraOn ? camOnOptions : camOffOptions;
    return (
        <View
            style={[
                styles.container,
                //  isCameraOn && { top: '35%' }
            ]}>
            <FlatList
                data={topOptionsData}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={item.onPress}
                        style={styles.optionBg}>
                        <Image
                            style={[
                                styles.optionIcon,
                                isTorchOn &&
                                    item.title === 'flash' && {
                                        tintColor: Colors.primaryYellow,
                                    },
                            ]}
                            source={item.icon}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default TopOptions;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top:
            Platform.OS === 'ios'
                ? StatusBar.currentHeight + 50
                : StatusBar.currentHeight + 15,
        right: 25,
        backgroundColor: Colors.transparent,
    },
    optionBg: {
        backgroundColor: Colors.bluryWhite,
        height: 46,
        width: 46,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 10,
    },
    optionIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
    },
});
