import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AuthScreenLayout from '../../layout/AuthScreenLayout';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from '../../route/MainStack';
import Toast from 'react-native-toast-message';
import {
    validateEmail,
    validatePassword,
    validateWhiteSpaces,
} from '../../utils/formUtils';
import { useAuthStore } from '../../store/AuthStore';
import { Colors } from '../../theme/Colors';
import { Images } from '../../theme/Images';
import { showFailureToast } from '../../components/Toast/HitHotToast';
import useThemeStyles from '../../hooks/useThemeStyles';
import Loader from '../../components/Loader/Loader';

const SignInScreen = () => {
    const navigation = useNavigation<StackNavigationType>();
    const styles = useThemeStyles(styleCreator);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPwd, setShowPwd] = useState(false);

    const { top } = useSafeAreaInsets();
    const { emailSignIn, authLoader } = useAuthStore();

    const handleSignIn = () => {
        if (!validateWhiteSpaces(email) || !validateEmail(email)) {
            showFailureToast('Please enter an valid email address.');
            return;
        }
        if (!validateWhiteSpaces(password)) {
            showFailureToast('Please enter a password');

            return;
        }
        if (!validatePassword(password)) {
            Toast.show({
                type: 'error',
                text1: 'Password should contain at least 8 characters',
            });
            return;
        }
        const params = {
            reqParams: {
                email_phone: email,
                password: password,
            },
            callback: () => {
                navigation.navigate('RootScreen');
            },
        };
        emailSignIn(params);
    };
    return (
        <AuthScreenLayout>
            <View className="flex-1">
                <View
                    style={{ paddingTop: top + 70 }}
                    className=" z-20 px-6 mb-8">
                    <Text className=" text-white font-bold text-4xl">
                        {`Welcome back! Discover more`}
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
                        <View className="mb-2">
                            <Text style={styles.inputTitle}>
                                Email address
                            </Text>
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
                            <Text style={styles.inputTitle}>
                                Password
                            </Text>
                            <View style={styles.inputContainer}>
                                <Image
                                    source={Images.passwordIcon}
                                    style={{ tintColor: Colors.primaryWhite }}
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
                    </ScrollView>

                    <View>
                        <TouchableOpacity
                            onPress={handleSignIn}
                            className=" rounded-lg">
                            <LinearGradient
                                colors={['#F7C900', '#EB853C']}
                                start={{ x: 1, y: 1 }}
                                end={{ x: 1, y: 0 }}
                                className=" p-3 rounded-lg">
                                <Text className=" text-base font-medium text-white text-center">
                                    Log in
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <Text style={styles.footerText}>
                            {`Don't have an account? `}
                            <Text
                                style={{
                                    color: Colors.primaryYellow,
                                    textDecorationLine: 'underline',
                                }}
                                onPress={() => {
                                    navigation.goBack();
                                }}>
                                {`Sign up`}
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>
            <Loader isLoading={authLoader}/>
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
            backgroundColor:colors.inputBoxBg,
            borderWidth: 1,
            borderColor: colors.textColor,
        },
        inputTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: colors.inputTitle,
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
        placeholder: { color: colors.placeholderColor },
        eyeIcon: {
            height: 22,
            width: 22,
            resizeMode: 'contain',
            tintColor: colors.textColor,
        },
    });
export default SignInScreen;
