import { StatusBar, Text, TouchableOpacity, View, Image } from 'react-native';
import { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import getStyles from './Header.style';

const Header: React.FC<{}> = ({}) => {
    const navigation = useNavigation();

    const styles = getStyles();

    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={[styles.HeaderContainer]}>
                <View style={[styles.HeaderSubContainer]}>
                    <View style={[styles.LeftContainer]}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            activeOpacity={0.8}>
                            <View style={[styles.LeftIconContainer]}>
                                <Image
                                    source={require('../../../assets/leftArrow.png')}
                                    resizeMode="contain"
                                    style={[styles.LeftIcon]}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.CenterContainer]}>
                        <Text style={[styles.HeaderText]}>
                            {'Subscription purchase'}
                        </Text>
                    </View>
                    <View style={[styles.RightContainer]}>
                        {/* <TouchableOpacity
                            activeOpacity={0.8}>
                            <View style={[styles.RightIconContainer]}>
                                <Image
                                    source={require('../../../assets/HamIc.png')}
                                    resizeMode="contain"
                                    style={[styles.RightIcon]}
                                />
                            </View>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </View>
        </>
    );
};

export default Header;
