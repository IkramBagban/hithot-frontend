import { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../theme/Colors';
import { useContentStore } from '../store/contentStore';
import { Images } from '../theme/Images';
import LottieView from 'lottie-react-native';
import { Lotties } from '../theme/Lotties';

interface SubscribeModalProps {
    showModel: boolean;
    handleDiscard: () => void;
}

const SubscribeModal = ({
    showModel = false,
    handleDiscard,
}: SubscribeModalProps) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const { showSubscribeModel,toggleSubscribeModel } = useContentStore();
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
                    <LottieView
                    source={Lotties.crownStarsLottie}
                    style={{height:120,width:120}}
                    autoPlay
                    loop
                    />
                    {/* <Image
                        style={styles.crownIcon}
                        source={Images.subscribeCrownIcon}
                    /> */}
                    <Text style={styles.title}>Subscribe to post clips</Text>
                    <Text style={styles.subtitle}>
                        Take a subscription to explore exciting features.
                    </Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            handleDiscard && handleDiscard();
                            setModalVisible(false);
                            toggleSubscribeModel();
                        }}>
                        <LinearGradient
                            colors={[Colors.gradient1, Colors.gradient2]}
                            style={styles.gradientButton}>
                            <Text
                                style={[
                                    styles.textStyle,
                                    { color: Colors.primaryWhite },
                                ]}>
                                Subscribe now
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
        fontFamily: 'Figtree-Medium',
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
    crownIcon: {
        height: 90,
        width: 90,
        resizeMode: 'contain',
        marginBottom: 20,
    },
});

export default SubscribeModal;
