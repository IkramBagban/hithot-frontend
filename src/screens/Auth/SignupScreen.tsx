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
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from '../../route/MainStack';

const SignupScreen = () => {
    const navigation = useNavigation<StackNavigationType>();
    const [selected, setSelected] = useState<boolean>(false);
    const { top } = useSafeAreaInsets();
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
                                Mobile number
                            </Text>
                            <View className=" w-full p-3 bg-white/20 rounded-lg flex flex-row items-center mt-3">
                                <Image
                                    source={require('../../assets/phoneIc.png')}
                                    resizeMode="contain"
                                    className=" w-4 h-4 mr-2"
                                />
                                <View className=" flex flex-row items-center">
                                    <Text className="text-base text-white/60 mr-1 mt-1">
                                        +91
                                    </Text>
                                    <TextInput
                                        style={{
                                            paddingVertical: 0,
                                            padding: 0,
                                            textAlignVertical: 'center',
                                        }}
                                        placeholder="Enter 10 digit mobile number"
                                        placeholderTextColor="#FFFFFF99"
                                        className=" text-base text-white/60 flex-1"
                                    />
                                </View>
                            </View>
                            <View className=" flex flex-row items-center my-3">
                                <View className=" flex-1 h-[1px] border-b border-b-white/10" />
                                <Text className=" text-white text-sm mx-3">
                                    OR
                                </Text>
                                <View className=" flex-1 h-[1px] border-b border-b-white/10" />
                            </View>
                            <TouchableOpacity className=" rounded-lg">
                                <LinearGradient
                                    colors={['#F7C9001A', '#EB853C1A']}
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    className=" p-3 rounded-lg">
                                    <Text className=" text-base font-medium text-[#F7C900] text-center">
                                        Out of INDIA sigin
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                    <View>
                        <View className=" mb-2 flex flex-row items-center ">
                            <TouchableOpacity
                                onPress={() => setSelected(prev => !prev)}
                                className={`w-4 h-4 ${
                                    selected
                                        ? ' bg-white '
                                        : 'border-white/40 border-2'
                                }  rounded-full `}
                            />
                            <Text className=" text-base text-white font-medium ml-2">
                                Agree with{' '}
                                <Text className=" text-[#0171FF]">
                                    TERMS & CONDITIONS
                                </Text>
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('OtpVerifyScreen')
                            }
                            className=" rounded-lg">
                            <LinearGradient
                                colors={['#F7C900', '#EB853C']}
                                start={{ x: 1, y: 1 }}
                                end={{ x: 1, y: 0 }}
                                className=" p-3 rounded-lg">
                                <Text className=" text-base font-medium text-white text-center">
                                    Signup
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </AuthScreenLayout>
    );
};

export default SignupScreen;
