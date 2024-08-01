import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import getStyles from './Header.style'; // Saparate Style //
import Popup from '../../../components/Popup/Popup';
import LottieView from 'lottie-react-native';
import { Lotties } from '../../../theme/Lotties';

const Header: React.FC = () => {
    // All State's //

    const [ShowPopup, HidePopup] = useState(false);

    const PopupManage = () => {
        if (ShowPopup) {
            HidePopup(false);
        } else {
            HidePopup(true);
        }
    };

    const styles = getStyles();

    return (
        <>
            <View style={[styles.HeaderContainer]}>
                <View style={[styles.HeaderSubContainer]}>
                    <View style={[styles.LeftContainer]}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => PopupManage()}>
                            <View style={[styles.LeftIconContainer]}>
                                <Image
                                    source={require('../../../assets/Search.png')}
                                    resizeMode="contain"
                                    style={[styles.LeftIcon]}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.CenterContainer]}>
                        <LottieView
                            source={Lotties.liveLottie}
                            style={{
                                height: 40,
                                width: 80,
                            }}
                            autoPlay
                            loop
                        />
                        {/* <Image
                            source={Gifs.liveGif}
                            style={{
                                width: 100,
                                height: 100,
                                marginRight: 10,
                                resizeMode: 'contain',
                            }}
                            resizeMode="contain"
                        /> */}
                        {/* <Text style={[styles.LiveText]}>Live</Text> */}
                    </View>
                    <View style={[styles.RightContainer]}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={[styles.ImageContainer]}>
                                <Image
                                    source={require('../../../assets/demoProfile2.png')}
                                    resizeMode="cover"
                                    style={[styles.Image]}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {ShowPopup && <Popup />}
        </>
    );
};

export default Header;
