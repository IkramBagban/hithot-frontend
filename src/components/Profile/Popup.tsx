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
import { useNavigation } from '@react-navigation/native';
import useThemeStyles from '../../hooks/useThemeStyles';

const Popup: React.FC<{
    data: any;
}> = ({ data }) => {
    console.log('profileData', data);

    const navigation = useNavigation();

    const [showPinModal, setShowPinModal] = useState<boolean>(true);
    const toggleMode = () => {
        setShowPinModal(true);
        // setChildModeEnabled(prev => !prev);
    };

         const Theme = useThemeStyles(styleCreator);

    return (
        <>
            <Modal
                isVisible={showPinModal}
                backdropColor={'transparent'}
                statusBarTranslucent={true}
                animationIn={'bounceIn'}
                animationOut={'bounceOut'}
                style={[{ margin: null }]}>
                <TouchableWithoutFeedback
                    onPress={() => setShowPinModal(false)}>
                    <View className=" flex-1  items-center justify-center bg-black/80">
                        <TouchableWithoutFeedback>
                            <View
                                className="rounded-lg p-5 bg-[#21262B] w-[80%] flex items-center"
                                style={{
                                    backgroundColor:
                                        Theme.ContainerColor.backgroundColor,
                                }}>
                                <Image
                                    style={{
                                        width: scale(90),
                                        height: verticalScale(90),
                                    }}
                                    className=" mb-5"
                                    source={require('../../assets/kingicon.png')}
                                    resizeMode="contain"
                                />
                                <Text
                                    style={{
                                        fontSize: RFValue(20),
                                        textAlign: 'center',
                                        color: Theme.TextColor.color,
                                    }}
                                    className={`text-white font-bold mb-2`}>
                                    {'Subscribe to Watch\nexclusive content'}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: RFValue(11),
                                        color: Theme.TextColor.color,
                                    }}
                                    className={`text-white/60 font-medium text-center mb-5`}>
                                    {
                                        'Your account has been successfully created, please\nlog in first so you can start viewing videos'
                                    }
                                </Text>
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate('Subscription', {
                                            data: data,
                                        })
                                    }
                                    className=" rounded-lg w-full">
                                    <LinearGradient
                                        colors={['#F7C900', '#EB853C']}
                                        start={{ x: 1, y: 1 }}
                                        end={{ x: 1, y: 0 }}
                                        className=" p-3 rounded-lg">
                                        <Text className=" text-base font-medium text-white text-center">
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

export default Popup;


const styleCreator = colors =>
    StyleSheet.create({
        TextColor: {
            color: colors.textColor,
        },
        ActionColor: {
            backgroundColor: colors.bgLightColor,
        },
        TextLightColor: {
            color: colors.textLightColor,
        },
        IconColor: {
            tintColor: colors.iconColor,
        },
        ContainerColor: {
            backgroundColor: colors.bgColor,
        },
        BorderColor: {
            borderColor: colors.activeBorderColor,
        },
        subcontainerColor: {
            backgroundColor: colors.subContainerColor,
        },
    });
