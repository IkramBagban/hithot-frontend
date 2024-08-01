import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import getStyles from './ReferScreen.style';
import Header from './Header/Header';
import SW from './SW/SW';
import SC from './SC/SC';
import RC from './RC/RC';
import ECSH from './ECSH/ECSH';
import FAQ from './FAQ/FAQ';
import useThemeStyles from '../../hooks/useThemeStyles';

const ReferScreen = () => {
    const styles = getStyles();
     const Theme = useThemeStyles(styleCreator);

    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View 
            style={[styles.Container,{backgroundColor:Theme.ContainerColor.backgroundColor}]}
            >
                <Header />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[styles.ContentContainerStyle]}
                    >
                    {/* Render "Share & win" Component */}
                    <SW />
                    {/* Render "Share Code" Component */}
                    <SC />
                    {/* Render "Redeem Code" Component */}
                    <RC />
                    {/* Render "Earn cashback see how?" Component */}
                    <ECSH />
                    {/* Render "FAQ" Component */}
                    <FAQ />
                </ScrollView>
            </View>
        </>
    );
};

export default ReferScreen;

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
