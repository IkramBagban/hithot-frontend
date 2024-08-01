import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import getStyles from './SW.style';
import LinearGradient from 'react-native-linear-gradient';
import useThemeStyles from '../../../hooks/useThemeStyles';

const SW: React.FC<{}> = ({}) => {
    const navigation = useNavigation();

    const styles = getStyles();

    const Theme = useThemeStyles(styleCreator);

    return (
        <>
            <View
                style={[
                    styles.Container,
                    { backgroundColor: Theme.ContainerColor.backgroundColor },
                ]}>
                <View style={[styles.SubContainer]}>
                    <View style={[styles.ImageContainer]}>
                        <Image
                            source={require('../../../assets/speaker.png')}
                            resizeMode={'contain'}
                            style={[styles.Image]}
                        />
                    </View>
                    <View style={[styles.TitleContainer]}>
                        <Text
                            style={[
                                styles.Title,
                                { color: Theme.TextColor.color },
                            ]}>
                            {'Share & win'}
                        </Text>
                    </View>
                    <View style={[styles.SubTitleContainer]}>
                        <Text
                            style={[
                                styles.SubTitle,
                                { color: Theme.TextColor.color },
                            ]}>
                            {
                                'Refer HITHOT to your friends and\nearn 20 Diamonds on every installl'
                            }
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
};

export default SW;

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
    });
