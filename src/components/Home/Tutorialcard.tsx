import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '../../theme/Colors';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from '../GradientText';

interface tutorial {
    imageSource: string;
    information: string;
    showCTA: boolean;
}
const Tutorialcard: React.FC<tutorial> = props => {
    return (
        <View
            style={{
                backgroundColor: 'rgba(33, 38, 43, 1)',
                width: 120,
                justifyContent: 'center',
                //alignItems: 'center',
                padding: 14,
                borderRadius: 15,
            }}>
            <View
                style={{
                    width: 30,
                    height: 30,
                    backgroundColor: 'rgba(255, 255, 255, 0.16)',
                    borderRadius: 50,

                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <LinearGradient
                    colors={[Colors.gradient1, Colors.gradient2]}
                    style={{ padding: 4, borderRadius: 10 }}>
                    <Image
                        source={props.imageSource}
                        style={{
                            width: 12,
                            height: 12,
                            tintColor: 'rgba(33, 38, 43, .8)',
                            zIndex: 5,
                        }}
                    />
                </LinearGradient>
            </View>
            <Text style={{ color: 'white', fontSize: 13, marginTop: 5 }}>
                {props.information}
            </Text>

            {props.showCTA && (
                <TouchableOpacity
                    style={{
                        width: 94,
                        height: 32,
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 7,
                    }}>
                    <GradientText
                        text={'Tap to see'}
                        gradientColors={['#EB853C', '#F7C900']}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Tutorialcard;

const styles = StyleSheet.create({});
