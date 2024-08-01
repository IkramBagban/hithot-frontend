import { Dimensions, Platform, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type HeaderStyles = {
    Container: {};
    ImageContainer: {};
    ImageRadiusContainer: {};
    LogoImage: {};
    BalanceContainer: {};
    BalanceTitleContainer: {};
    BalanceTitle: {};
    BalanceSubTitleContainer: {};
    BalanceSubTitle: {};
    ActionButtonsContainer: {};
    ActionButtonContainer: {};
    ABTitleContainer: {};
    ABTitle: {};
    ABSubTitleContainer: {};
    ABSubTitle: {};
    ABActionTitleContainer: {};
    ABActionTitle: {};
    Saprator: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        Container: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageContainer: {
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageRadiusContainer: {
            width: 128,
            height: 128,
            borderRadius: 1000,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2E3338',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        LogoImage: {
            width: 100,
            height: 100,
        },
        BalanceContainer: {
            width: '90%',
            alignSelf: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        BalanceTitleContainer: {
            width: '100%',
            paddingTop: 14,
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        BalanceTitle: {
            fontSize: 20,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        BalanceSubTitleContainer: {
            width: '100%',
            paddingTop: 4,
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        BalanceSubTitle: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
        ActionButtonsContainer: {
            width: '90%',
            paddingTop: 22,
            paddingBottom: 18,
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActionButtonContainer: {
            width: '30%',
            flexDirection: 'column',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ABTitleContainer: {
            width: '100%',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ABTitle: {
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        ABSubTitleContainer: {
            width: '100%',
            paddingVertical: 6,
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ABSubTitle: {
            textAlign: 'center',
            fontSize: 12,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
            opacity: 0.6,
        },
        ABActionTitleContainer: {
            width: '100%',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ABActionTitle: {
            textAlign: 'center',
            fontSize: 12,
            fontFamily: 'Figtree-Regular',
            color: '#EB853C',
        },
        Saprator: {
            width: 1,
            backgroundColor: '#3C4044',
        },
    });
};

export default getStyles;
