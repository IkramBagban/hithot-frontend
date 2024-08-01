import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import AuthScreenLayout from '../../layout/AuthScreenLayout';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from '../../route/MainStack';
import DeviceInfo from 'react-native-device-info';
import {
    validateEmail,
    validatePassword,
    validateWhiteSpaces,
} from '../../utils/formUtils';
import { showFailureToast } from '../../components/Toast/HitHotToast';
import { useAuthStore } from '../../store/AuthStore';
import { Colors } from '../../theme/Colors';
import { Images } from '../../theme/Images';
import useThemeStyles from '../../hooks/useThemeStyles';
import Loader from '../../components/Loader/Loader';

const CreateAccScreen = () => {
    const navigation = useNavigation<StackNavigationType>();
    const styles = useThemeStyles(styleCreator);
    const [selected, setSelected] = useState<boolean>(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [showPwd, setShowPwd] = useState(false);
    const { top } = useSafeAreaInsets();
    const { emailSignUp, authLoader } = useAuthStore();

    const handleSignUp = () => {
        if (!validateWhiteSpaces(firstname)) {
            showFailureToast('Please enter firstname.');
            return;
        }
        if (!validateWhiteSpaces(lastname)) {
            showFailureToast('Please enter lastname.');
            return;
        }
        if (!validateWhiteSpaces(email) || !validateEmail(email)) {
            showFailureToast('Please enter an valid email address.');
            return;
        }
        if (!validateWhiteSpaces(password)) {
            showFailureToast('Please enter a password.');
            return;
        }
        if (!validatePassword(password)) {
            showFailureToast('Password should contain at least 8 characters.');
            return;
        }
        const params = {
            reqParams: {
                first_name: firstname,
                last_name: lastname,
                email: email,
                // phone: '8888888888',
                version: DeviceInfo.getVersion(),
                device: Platform.OS,
                location: 'mumbai',
                password: password,
                referral: '', // optional
            },
            callback: () => {
                navigation.navigate('RootScreen');
            },
        };
        emailSignUp(params);
    };
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

                <View className="w-full h-[68vh] px-6 flex flex-1">
                    <ScrollView
                        className=" flex-1"
                        showsVerticalScrollIndicator={false}>
                        <View className="mb-2">
                            <Text style={styles.inputTitle}>First name</Text>
                            <View style={styles.inputContainer}>
                                <Image
                                    source={require('../../assets/whiteUserIc.png')}
                                    resizeMode="contain"
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.inputBox}
                                    placeholder="Enter your first name here"
                                    placeholderTextColor={
                                        styles.placeholder.color
                                    }
                                    value={firstname}
                                    onChangeText={setFirstname}
                                />
                            </View>
                        </View>
                        <View className="mb-2">
                            <Text style={styles.inputTitle}>Last name</Text>
                            <View style={styles.inputContainer}>
                                <Image
                                    source={require('../../assets/whiteUserIc.png')}
                                    resizeMode="contain"
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.inputBox}
                                    placeholder="Enter your last name here"
                                    placeholderTextColor={
                                        styles.placeholder.color
                                    }
                                    value={lastname}
                                    onChangeText={setLastname}
                                />
                            </View>
                        </View>
                        <View className="mb-2">
                            <Text style={styles.inputTitle}>Email address</Text>
                            <View style={styles.inputContainer}>
                                <Image
                                    source={require('../../assets/emailIc.png')}
                                    resizeMode="contain"
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.inputBox}
                                    placeholder="Enter your email address"
                                    placeholderTextColor={
                                        styles.placeholder.color
                                    }
                                    value={email}
                                    onChangeText={setEmail}
                                />
                            </View>
                        </View>
                        <View className="mb-2">
                            <Text style={styles.inputTitle}>Password</Text>
                            <View style={styles.inputContainer}>
                                <Image
                                    source={Images.passwordIcon}
                                    resizeMode="contain"
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.inputBox}
                                    placeholder="Enter password"
                                    placeholderTextColor={
                                        styles.placeholder.color
                                    }
                                    secureTextEntry={showPwd}
                                    value={password}
                                    onChangeText={setPassword}
                                />
                                <TouchableOpacity
                                    onPress={() => {
                                        setShowPwd(!showPwd);
                                    }}>
                                    <Image
                                        source={
                                            showPwd
                                                ? Images.eyeOpenIcon
                                                : Images.eyeCloseIcon
                                        }
                                        style={styles.eyeIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View className="mb-2">
                            <Text style={styles.inputTitle}>Username</Text>
                            <View style={styles.inputContainer}>
                                <Image
                                    source={Images.atIcon}
                                    resizeMode="contain"
                                    style={{ tintColor: Colors.primaryWhite }}
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.inputBox}
                                    placeholder="Enter username"
                                    placeholderTextColor={
                                        styles.placeholder.color
                                    }
                                    secureTextEntry={true}
                                    value={username}
                                    onChangeText={setUsername}
                                />
                            </View>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <TouchableOpacity
                                onPress={handleSignUp}
                                className=" rounded-lg">
                                <LinearGradient
                                    colors={['#F7C900', '#EB853C']}
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    className=" p-3 rounded-lg">
                                    <Text className=" text-base font-medium text-white text-center">
                                        Create account
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>

                            <Text style={styles.footerText}>
                                {`Already have an account? `}
                                <Text
                                    style={{
                                        color: Colors.primaryYellow,
                                        textDecorationLine: 'underline',
                                    }}
                                    onPress={() => {
                                        navigation.navigate('SingIn');
                                    }}>
                                    {`Log in`}
                                </Text>
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <Loader isLoading={authLoader} />
        </AuthScreenLayout>
    );
};

const styleCreator = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.bgColor,
        },
        footerText: {
            marginTop: 15,
            marginBottom: 30,
            color: colors.textColor,
            fontFamily: 'Figtree-Regular',
            textAlign: 'center',
        },
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderRadius: 8,
            marginTop: 12,
            backgroundColor: colors.inputBoxBg,
            borderWidth: 1,
            borderColor: colors.textColor,
        },
        inputBox: {
            flex: 1,
            paddingVertical: 0,
            padding: 0,
            textAlignVertical: 'center',
            color: colors.textColor,
            fontFamily: 'Figtree-Regular',
            width: '100%',
        },
        inputIcon: {
            height: 22,
            width: 22,
            marginRight: 5,
            resizeMode: 'contain',
            tintColor: colors.textColor,
        },
        inputTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: colors.inputTitle,
        },
        placeholder: { color: colors.placeholderColor },
        eyeIcon: {
            height: 22,
            width: 22,
            resizeMode: 'contain',
            tintColor: colors.textColor,
        },
    });
export default CreateAccScreen;
