import {
    Image,
    Modal,
    StatusBar,
    Switch,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import CenterHeader from '../../../components/Headers/CustomHeader';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useState } from 'react';
import { scale, verticalScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const ChildModeScreen = () => {
    const [childModeEnabled, setChildModeEnabled] = useState<boolean>(false);
    const [showPinModal, setShowPinModal] = useState<boolean>(false);
    const { top } = useSafeAreaInsets();
    const toggleMode = () => {
        setShowPinModal(true);
        // setChildModeEnabled(prev => !prev);
    };
    return (
        <SafeAreaView
            style={{ paddingTop: top }}
            edges={['bottom', 'left', 'right']}
            className=" flex-1">
            <StatusBar backgroundColor="#21262B" />
            <CenterHeader title="Child mode" />
            <View className=" flex-1 bg-[#21262B] px-6 pt-6 ">
                {/* Toogle section */}

                <View className=" border-b border-b-white/10 pb-6 mb-6 pt-3">
                    <View className=" flex flex-row items-center justify-between mb-2 pr-2">
                        <Text
                            style={{ fontSize: RFValue(18) }}
                            className={`text-white font-boldB`}>
                            Turn on child mode
                        </Text>

                        <Switch
                            thumbColor={
                                childModeEnabled ? '#F7C900' : '#FFFFFF'
                            }
                            trackColor={{
                                false: '#FFFFFF66',
                                true: '#FFFFFF66',
                            }}
                            value={childModeEnabled}
                            onChange={toggleMode}
                        />
                    </View>
                    <Text
                        style={{ fontSize: RFValue(14) }}
                        className=" text-white/60 font-sans">
                        With Child Mode engaged, parents can rest assured
                        knowing their children are engaging with age-appropriate
                        material, allowing them to explore, learn, and grow with
                        confidence.
                    </Text>
                </View>

                {/* Details section */}

                <View className=" w-full p-4  bg-[#3C4045] rounded-2xl relative ">
                    <Text
                        style={{ fontSize: RFValue(16) }}
                        className={`text-white font-boldB mb-3`}>
                        What child mode does?
                    </Text>
                    <View className="flex flex-row mb-3">
                        <View
                            style={{
                                width: scale(32),
                                height: verticalScale(32),
                            }}
                            className="  bg-white/20 rounded-full flex items-center justify-center mr-2">
                            <Text className=" text-sm text-white font-sans">01</Text>
                        </View>
                        <View className=" flex-1">
                            <Text
                                style={{ fontSize: RFValue(14) }}
                                className=" text-white font-sans">
                                Activate Kid-Friendly Mode: Spark imagination,
                                ignite learning, and explore safely!
                            </Text>
                        </View>
                    </View>
                    <View className="flex flex-row mb-3">
                        <View
                            style={{
                                width: scale(32),
                                height: verticalScale(32),
                            }}
                            className="  bg-white/20 rounded-full flex items-center justify-center mr-2">
                            <Text className=" text-sm text-white font-sans">02</Text>
                        </View>
                        <View className=" flex-1">
                            <Text
                                style={{ fontSize: RFValue(14) }}
                                className=" text-white font-sans">
                                Unlock Child Mode: Fun adventures await with
                                curated content for young explorers.
                            </Text>
                        </View>
                    </View>
                    <View className="flex flex-row mb-3">
                        <View
                            style={{
                                width: scale(32),
                                height: verticalScale(32),
                            }}
                            className="  bg-white/20 rounded-full flex items-center justify-center mr-2">
                            <Text className=" text-sm text-white font-sans">03</Text>
                        </View>
                        <View className=" flex-1">
                            <Text
                                style={{ fontSize: RFValue(14) }}
                                className=" text-white font-sans">
                                Secured lock: Enhance your child's online safety
                                with app lock security upon activating child
                                mode.
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ height: verticalScale(140) }}
                        className=" w-full"
                    />
                    <View className="absolute -bottom-16 flex items-center justify-center left-0 right-0">
                        <Image
                            source={require('../../../assets/rocketChild.png')}
                            resizeMode="contain"
                            style={{
                                width: scale(200),
                                height: verticalScale(200),
                            }}
                        />
                    </View>
                </View>

                {/* Set pin modal */}

                <Modal
                    visible={showPinModal}
                    transparent={true}
                    statusBarTranslucent={true}
                    animationType="fade">
                    <TouchableWithoutFeedback
                        onPress={() => setShowPinModal(false)}>
                        <View className=" flex-1  items-center justify-center bg-black/80">
                            <TouchableWithoutFeedback>
                                <View className="rounded-lg p-5 bg-[#21262B] w-[80%] flex items-center">
                                    <Image style={{width: scale(90), height: verticalScale(90)}} className=' mb-5' source={require('../../../assets/lockYellow.png')} resizeMode='contain'  />
                                    <Text
                                        style={{ fontSize: RFValue(20) }}
                                        className={`text-white font-bold mb-2`}>
                                        Setup PIN
                                    </Text>
                                    <Text
                                        style={{ fontSize: RFValue(11) }}
                                        className={`text-white/60 font-medium text-center mb-5`}>
                                        Enhance your child's online safety with
                                        app lock security by setting up
                                        PIN/Biometric unlock.
                                    </Text>
                                    <TouchableOpacity className=" rounded-lg w-full">
                                        <LinearGradient
                                            colors={['#F7C900', '#EB853C']}
                                            start={{ x: 1, y: 1 }}
                                            end={{ x: 1, y: 0 }}
                                            className=" p-3 rounded-lg">
                                            <Text className=" text-base font-medium text-white text-center">
                                                Set password
                                            </Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        </SafeAreaView>
    );
};

export default ChildModeScreen;
