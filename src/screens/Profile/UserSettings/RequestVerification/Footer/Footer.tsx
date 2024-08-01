// import { View, TouchableOpacity, Text } from 'react-native';
// import React, { useState } from 'react';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
// import getStyles from './Footer.style'; // Saparate Style //

// interface Props {
//     OnPress: () => void;
// }

// const Footer: React.FC<Props> = ({ OnPress }) => {
//     const navigation = useNavigation();

//     const styles = getStyles();

//     return (
//         <>
//             <View style={[styles.FooterContainer]}>
//                 <TouchableOpacity activeOpacity={0.8} onPress={OnPress}>
//                     <LinearGradient
//                         colors={['#F7C900', '#EB853C']}
//                         start={{ x: 1, y: 1 }}
//                         end={{ x: 1, y: 0 }}
//                         style={styles.FooterSubContainer}>
//                         <View style={styles.FooterTitleContainer}>
//                             <Text style={styles.FooterTitle}>{'Next'}</Text>
//                         </View>
//                     </LinearGradient>
//                 </TouchableOpacity>
//             </View>
//         </>
//     );
// };

// export default Footer;

import { View, TouchableOpacity, Text, Alert } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './Footer.style'; // Separate Style

interface Props {
    step: number;
    onPrevious: () => void;
    onNext: () => void;
    validate: () => boolean;
}

const Footer: React.FC<Props> = ({ step, onPrevious, onNext, validate }) => {
    const styles = getStyles();

    const handlePress = () => {
        if (step === 0 || step === 1) {
            if (validate()) {
                onNext();
            } else {
                Alert.alert(
                    'Validation Error',
                    'Please complete all required fields.',
                );
            }
        } else if (step === 2) {
            // Implement the logic to navigate to the home screen or finish the process
            onNext(); // or navigate to the home screen
        }
    };

    const buttonText = () => {
        if (step === 0) {
            return 'Next';
        } else if (step === 1) {
            return 'Confirm Details';
        } else if (step === 2) {
            return 'Go to Home';
        }
        return '';
    };

    return (
        <View style={styles.FooterContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
                <LinearGradient
                    colors={['#F7C900', '#EB853C']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.FooterSubContainer}>
                    <View style={styles.FooterTitleContainer}>
                        <Text style={styles.FooterTitle}>{buttonText()}</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;
