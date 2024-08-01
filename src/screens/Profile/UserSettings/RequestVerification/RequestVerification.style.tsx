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
    IndicatorContainer: {};
    Indicator: {};
    ContentContainerStyle: {};
    FooterContainer: {};
    FooterSubContainer: {};
    FooterTitleContainer: {};
    FooterTitle: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        Container: {
            flex: 1,
            backgroundColor: '#21262B',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IndicatorContainer: {
            width: '90%',
            paddingBottom: 14,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Indicator: {
            width: '32%',
            height: 8,
            borderRadius: 1000,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ContentContainerStyle: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        FooterContainer: {
            width: '100%',
            paddingTop: 20,
            paddingBottom: Platform.OS === 'ios' ? 60 : 20,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        FooterSubContainer: {
            width: '90%',
            paddingVertical: 14,
            borderRadius: 6,
            alignSelf: 'center',
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        FooterTitleContainer: {
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        FooterTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Medium',
            color: '#FFFFFF',
        },
    });
};

export default getStyles;
