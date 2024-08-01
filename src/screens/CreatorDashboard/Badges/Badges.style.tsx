import { Dimensions, Platform, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type HeaderStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    HeaderContainer: {};
    HeaderSubContainer: {};
    HeaderText: {};
    HeaderSubText: {};
    FlatlistContainer: {};
    ContentContainerStyle: {};
    Saparator: {};
    BadgeContainer: {};
    BadgeBGContainer: {};
    BadgeBG: {};
    BadgeBenefitContainer: {};
    BadgeBenefit: {};
    BadgeIconContainer: {};
    BadgeIconRadiusContainer: {};
    BadgeIcon: {};
    BadgeTitleContainer: {};
    BadgeTitle: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderContainer: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderSubContainer: {
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderText: {
            fontSize: 18,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        HeaderSubText: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#EB853C',
        },
        FlatlistContainer: {
            width: '100%',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ContentContainerStyle: {
            paddingTop: 14,
            paddingLeft: WIDTH / 18,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Saparator: {
            paddingHorizontal: 8,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        BadgeContainer: {
            width: WIDTH / 3.8,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        BadgeBGContainer: {
            width: '100%',
            height: 100,
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        BadgeBG: {
            width: 88,
            height: 88,
            alignSelf: 'center',
        },
        BadgeBenefitContainer: {
            width: '60%',
            marginTop: 34,
            position: 'absolute',
            alignSelf: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        BadgeBenefit: {
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        BadgeIconContainer: {
            bottom: 0,
            position: 'absolute',
            alignSelf: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        BadgeIconRadiusContainer: {
            width: 28,
            height: 28,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 1000,
            backgroundColor: '#FFFFFF',
        },
        BadgeIcon: {
            width: 18,
            height: 18,
        },
        BadgeTitleContainer: {
            width: '100%',
            marginTop: 6,
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        BadgeTitle: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
    });
};

export default getStyles;
