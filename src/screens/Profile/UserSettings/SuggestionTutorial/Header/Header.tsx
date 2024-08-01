import { StatusBar, Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import getStyles from './Header.style';
import useThemeStyles from '../../../../../hooks/useThemeStyles';

interface HeaderProps {
    onToggleCreatorProfile: (isEnabled: boolean) => void;
}

const Header: React.FC = ({}) => {
    const navigation = useNavigation();

       const Theme = useThemeStyles(styleCreator);

    const styles = getStyles();

    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={[styles.Container,{backgroundColor:Theme.ActionColor.backgroundColor}]}>
                <View style={[styles.SubContainer]}>
                    <View style={[styles.IconContainer]}>
                        <Image
                            source={require('../../../../../assets/SuggestionTutorialMan.png')}
                            resizeMode={'contain'}
                            style={[styles.Icon]}
                        />
                    </View>
                    <View style={[styles.ActionContainer]}>
                        <View style={[styles.TitleContainer]}>
                            <Text style={[styles.Title,{color:Theme.TextColor.color}]}>
                                {
                                    'Get to know our app with youtube tutorials videos'
                                }
                            </Text>
                        </View>
                        <View style={[styles.ButtonContainer]}>
                            <TouchableOpacity activeOpacity={0.8}>
                                <View style={[styles.ButtonSubContainer]}>
                                    <Text style={[styles.ButtonTitle]}>
                                        {'Go to youtube'}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.goBack()}>
                                <View style={[styles.ButtonSubContainer]}>
                                    <Text style={[styles.ButtonTitle]}>
                                        {'Go Back'}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

export default Header;

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
    });