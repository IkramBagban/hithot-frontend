import React, { useState } from 'react';
import {
    View,
    ViewStyle,
    TouchableWithoutFeedback,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import { scale, verticalScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import useThemeStyles from '../../hooks/useThemeStyles';

interface PopupProps {
    ModalContainerStyle?: ViewStyle;
}

const Popup: React.FC<PopupProps> = ({ ModalContainerStyle }) => {
    const [showPinModal, setShowPinModal] = useState<boolean>(true);
    const toggleMode = () => {
        setShowPinModal(true);
    };

    const styles = useThemeStyles(styleCreator);

    return (
        <>
            <Modal
                visible={showPinModal}
                transparent={true}
                statusBarTranslucent={true}
                animationType="fade"
                style={[{ margin: null }]}>
                <TouchableWithoutFeedback
                    onPress={() => setShowPinModal(false)}>
                    <View style={styles.modalOverlay}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContent}>
                                <Image
                                    style={styles.image}
                                    source={require('../../assets/kingicon.png')}
                                    resizeMode="contain"
                                />
                                <Text style={styles.title}>
                                    {'Subscribe to continue\n watching live stream'}
                                </Text>
                                <Text style={styles.subtitle}>
                                    {'Your account has been successfully created, please\nlog in first so you can start viewing videos'}
                                </Text>
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <LinearGradient
                                        colors={['#F7C900', '#EB853C']}
                                        start={{ x: 1, y: 1 }}
                                        end={{ x: 1, y: 0 }}
                                        style={styles.button}>
                                        <Text style={styles.buttonText}>
                                            Subscribe now
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </>
    );
};

const styleCreator = colors => StyleSheet.create({
    modalOverlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalContent: {
        borderRadius: 8,
        padding: 20,
        backgroundColor: colors.bgColor,
        width: '80%',
        alignItems: 'center',
    },
    image: {
        width: scale(90),
        height: verticalScale(90),
        marginBottom: 20,
    },
    title: {
        fontSize: RFValue(20),
        textAlign: 'center',
        color: colors.textColor,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: RFValue(11),
        color: colors.lightTextColor,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        borderRadius: 8,
        width: '100%',
    },
    button: {
        padding: 12,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
    },
});

export default Popup;
