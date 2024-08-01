import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { Lotties } from '../../theme/Lotties';
import { Colors } from '../../theme/Colors';
import Toast from 'react-native-toast-message';
import GradientText from '../GradientText';
import { Images } from '../../theme/Images';

export const showTomatoToast = (text: string) => {
    Toast.show({
        type: 'custom_toast',
        text1: text,
        props: { type: 'tomato' },
        position:'bottom'
    });
};
export const showSuccessToast = (text: string) => {
    Toast.show({
        type: 'custom_toast',
        text1: text,
        props: { type: 'success' },
    });
};
export const showFailureToast = (text: string) => {
    Toast.show({
        type: 'custom_toast',
        text1: text,
        props: { type: 'failure' },
    });
};
const selectLottie = (type: string) => {
    switch (type) {
        case 'success':
            return Lotties.postSuccessLottie;
        case 'failure':
            return Lotties.postFailureLottie;
    }
};
const HitHotToast = ({ text1, props }) => {
    console.log('props --> ', props);

    const animationRef = useRef(null);

    useEffect(() => {
        if (animationRef.current) {
            animationRef.current.play();
        }
    }, [props]);
    return props.type === 'tomato' ? (
        <View
            style={styles.tomatoToastView}>
            <View style={styles.rowNCenter}>
                <Image
                    source={require('../../../assets/icon/chat-bubble.png')}
                    style={styles.cmtIcon}
                />
                <Text style={styles.tomatoText}>
                    {text1}
                </Text>
            </View>
            <TouchableOpacity style={{}} onPress={() => {}}>
                <GradientText
                    text={'UNDO'}
                    gradientColors={['#EB853C', '#F7C900']}
                />
            </TouchableOpacity>
        </View>
    ) : (
        <View style={styles.container}>
            <LottieView
                ref={animationRef}
                source={selectLottie(props.type)}
                loop={false}
                style={styles.animation}
            />
            <Text style={styles.text}>{text1}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        width: '90%',
        backgroundColor: Colors.primaryColor,
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    animation: {
        width: 40,
        height: 40,
    },
    text: {
        marginLeft: 10,
        fontSize: 16,
        fontFamily: 'Figtree-Regular',
        color: Colors.primaryWhite,
    },
    tomatoToastView: {
        backgroundColor: 'rgba(49, 56, 64, 1)',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,

        borderRadius: 8,
        marginHorizontal: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 0.99 * Dimensions.get('window').width,
    },
    cmtIcon: { height: 24, width: 24, tintColor: Colors.primaryWhite },
    tomatoText: {
        color: Colors.primaryWhite,
        fontSize: 14,
        fontFamily: 'Figtree-Regular',
        marginLeft: 5,
    },
    rowNCenter:{ flexDirection: 'row',alignItems:'center' }
});

export default HitHotToast;
