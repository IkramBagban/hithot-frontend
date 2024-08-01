import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import AuthScreenLayout from '../../layout/AuthScreenLayout';
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, { useState } from 'react';
import OTPInput from '../../components/Input/OTPInput';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from '../../route/MainStack';
const OtpVerifyScreen = () => {
    const [selected, setSelected] = useState<boolean>(false);
    const { top } = useSafeAreaInsets();
    const navigation = useNavigation<StackNavigationType>();
    return (
        <AuthScreenLayout>
            <View className="flex-1">
                <View
                    style={{ paddingTop: top + 70 }}
                    className=" z-20 px-6 mb-8">
                    <Text className=" text-white font-bold text-4xl">
                        Let’s get started
                    </Text>
                    <View className=" flex flex-row items-center">
                        <Text className="text-white font-bold text-4xl pt-2">
                            with
                        </Text>
                        <Image
                            source={require('../../assets/hithotwhitelogo.png')}
                            resizeMode="contain"
                            className=" w-36 h-11"
                        />
                    </View>
                </View>

                <View className="w-full h-[68vh] px-6 flex justify-between pb-4 flex-1">
                    <ScrollView className=" flex-1">
                        <View>
                            <Text className=" text-base text-white/60">
                                OTP
                            </Text>
                            <View className=" w-full mt-2">
                                <OTPInput />
                            </View>
                            <View className=" w-full flex flex-row justify-between mt-2">
                                <Text className=" text-white text-sm">
                                    Resend OTP
                                </Text>
                            </View>
                        </View>
                    </ScrollView>

                    <View>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('CreateAccScreen')
                            }
                            className=" rounded-lg">
                            <LinearGradient
                                colors={['#F7C900', '#EB853C']}
                                start={{ x: 1, y: 1 }}
                                end={{ x: 1, y: 0 }}
                                className=" p-3 rounded-lg">
                                <Text className=" text-base font-medium text-white text-center">
                                    Confirm OTP
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </AuthScreenLayout>
    );
};

export default OtpVerifyScreen;
