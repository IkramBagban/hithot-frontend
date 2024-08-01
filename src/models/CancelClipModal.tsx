import { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../theme/Colors';
import { useContentStore } from '../store/contentStore';

interface CancelClipModalProps {
    showModel: boolean;
    handleDiscard: () => void;
}

const CancelClipModal = ({
    showModel = false,
    handleDiscard,
}: CancelClipModalProps) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const { toggleDiscardModel } = useContentStore();
    useEffect(() => {
        if (showModel) {
            setModalVisible(true);
        }
    }, [showModel]);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>Cancel clip?</Text>
                    <Text style={styles.subtitle}>
                        Are you sure you want to cancel clip?
                    </Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            handleDiscard && handleDiscard();
                            setModalVisible(false);
                            toggleDiscardModel();
                        }}>
                        <LinearGradient
                            colors={[Colors.gradient1, Colors.gradient2]}
                            style={styles.gradientButton}>
                            <Text
                                style={[
                                    styles.textStyle,
                                    { color: Colors.primaryWhite },
                                ]}>
                                Start again
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button]}
                        onPress={() => {
                            handleDiscard && handleDiscard();
                            setModalVisible(false);
                            toggleDiscardModel();
                        }}>
                        <LinearGradient
                            colors={[
                                'rgba(235, 133, 60, 0.1)',
                                'rgba(247, 201, 0, 0.1)',
                                'rgba(33, 38, 43, 0)',
                            ]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 4 }}
                            style={styles.gradientButton}>
                            <Text
                                style={[
                                    styles.textStyle,
                                    { color: Colors.primaryYellow },
                                ]}>
                                Save to draft
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button]}
                        onPress={() => {
                            setModalVisible(false);
                            toggleDiscardModel();
                        }}>
                        <LinearGradient
                            colors={Colors.darkGradientColors}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 4 }}
                            style={styles.gradientButton}>
                            <Text
                                style={[
                                    styles.textStyle,
                                    { color: Colors.primaryYellow },
                                ]}>
                                Keep editing
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalView: {
        // margin: 20,
        backgroundColor: Colors.primaryColor,
        borderRadius: 20,
        padding: 24,
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 15,
        fontFamily: 'Figtree-Bold',
    },
    subtitle: {
        fontSize: 14,
        color: '#ccc',
        textAlign: 'center',
        marginBottom: 25,
        fontFamily: 'Figtree-Medium',
    },
    button: {
        borderRadius: 10,
        width: '100%',
        // backgroundColor: 'red',
        marginBottom: 15,
    },
    gradientButton: {
        height: 54,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
    },
    secondaryButton: {
        backgroundColor: '#444',
    },
    textStyle: {
        color: Colors.primaryYellow,
        textAlign: 'center',
        fontFamily: 'Figtree-Bold',
    },
});

export default CancelClipModal;
