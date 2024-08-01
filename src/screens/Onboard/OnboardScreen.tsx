import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SwipeSection from '../../components/OnboardSwiper/SwipeSection';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from '../../route/MainStack';
import React, { useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../config';
import { useAuthStore } from '../../store/AuthStore';
import useThemeStyles from '../../hooks/useThemeStyles';
import { ThemeContext } from '../../theme/ThemeContext';
import { Colors } from '../../theme/Colors';

const OnboardScreen = () => {
    const navigation = useNavigation<StackNavigationType>();
    const { isDark, toggleTheme } = useContext(ThemeContext);

    const nextHandler = () => {
        // navigation.navigate('Signup');
        navigation.navigate('CreateAccScreen');
    };

    const styles = useThemeStyles(styleCreator);
    return (
        <SafeAreaView
            edges={['bottom', 'left', 'right']}
            className="flex-1 relative">
            <StatusBar translucent backgroundColor={'transparent'} />

            <View className=" flex-1 z-20  ">
                <SwipeSection />

                {isDark ? (
                    <View className=" px-6 my-6">
                        <TouchableOpacity
                            onPress={nextHandler}
                            className="  bg-white rounded-lg w-full p-3">
                            <Text className=" text-base font-medium text-[#21262B] text-center">
                                Next
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity onPress={nextHandler}>
                        <LinearGradient
                            colors={[Colors.gradient1, Colors.gradient2]}
                            style={styles.gradientButton}>
                            <Text
                                style={[
                                    styles.textStyle,
                                    { color: Colors.primaryWhite },
                                ]}>
                                Next
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                )}
            </View>
            <LinearGradient
                colors={
                    isDark ? ['#F7C900', '#EB853C'] : ['#FFFFFF', '#FFFFFF']
                }
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={styles.container}
            />
        </SafeAreaView>
    );
};
const styleCreator = colors =>
    StyleSheet.create({
        container: {
            backgroundColor: colors.bgColor,
            ...StyleSheet.absoluteFill,
        },
        gradientButton: {
            height: 48,
            width:'90%',
            alignSelf:'center',
            marginTop:15,
            marginBottom:20,
            borderRadius: 8,
            justifyContent: 'center',
        },
        textStyle: {
            color: Colors.primaryYellow,
            textAlign: 'center',
            fontFamily: 'Figtree-Bold',
        },
    });
export default OnboardScreen;
