import { StatusBar, Text, TouchableOpacity, View, Image } from 'react-native';
import { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import getStyles from './Header.style';

interface HeaderProps {
    onToggleCreatorProfile: (isEnabled: boolean) => void;
}

const Header: React.FC = ({}) => {
    const navigation = useNavigation();

    const styles = getStyles();

    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={[styles.HeaderContainer]}>
                <View style={[styles.HeaderSubContainer]}>
                    <View style={[styles.TitleContainer]}>
                        <Text style={[styles.Title]}>
                            {'You might be looking for'}
                        </Text>
                    </View>
                    <View style={[styles.SubTitleContainer]}>
                        <Text style={[styles.SubTitle]}>{'Help'}</Text>
                    </View>
                </View>
            </View>
        </>
    );
};

export default Header;
