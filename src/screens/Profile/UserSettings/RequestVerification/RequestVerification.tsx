import { Dimensions, View, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import getStyles from './RequestVerification.style'; // Saparate Style //
import Header from './Header/Header';
import Indicators from './Indicators/Indicators';
import Profile from './Profile/Profile';
import Info from './Info/Info';
import Review from './Review/Review';
import useThemeStyles from '../../../../hooks/useThemeStyles';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const RequestVerification: React.FC = () => {
    const route = useRoute();

    const { userDetails } = route?.params;

    const navigation = useNavigation();

    const [step, setStep] = useState(0); // 0: initial, 1: InfoDetailsContainer, 2: ReviewContainer

    const handleStepChange = (newStep: number) => {
        setStep(prevStep => {
            if (newStep >= 0 && newStep <= 2) {
                // Ensure newStep is within the valid range
                return newStep;
            }
            return prevStep;
        });
    };

    const styles = getStyles();

     const Theme = useThemeStyles(styleCreator);

    return (
        <View
            style={[
                styles.Container,
                { backgroundColor: Theme.ContainerColor.backgroundColor },
            ]}>
            <Header />
            <Indicators step={step} />
            {step === 0 && (
                <Profile
                    step={step}
                    userDetails={userDetails}
                    onNext={() => handleStepChange(1)}
                />
            )}
            {step === 1 && (
                <Info
                    step={step}
                    onNext={() => handleStepChange(2)}
                    onPrevious={() => handleStepChange(0)}
                />
            )}
            {step === 2 && (
                <Review
                    step={step}
                    userDetails={userDetails}
                    onPrevious={() => handleStepChange(1)}
                />
            )}
        </View>
    );
};

export default RequestVerification;

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