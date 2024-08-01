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
    ContentContainerStyle: {};
    DataContainer: {};
    ImageContainer: {};
    Image: {};
    BadgeContainer: {};
    Badge: {};
    TitleContainer: {};
    Title: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        Container: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ContentContainerStyle: {
            width: '90%',
            paddingTop: 14,
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            flexWrap: 'wrap',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DataContainer: {
            width: WIDTH / 2.32,
            marginBottom: 14,
            flexDirection: 'column',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageContainer: {
            width: '100%',
            height: 88,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Image: {
            width: '100%',
            height: 88,
        },
        BadgeContainer: {
            width: '100%',
            height: 88,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Badge: {
            width: 28,
            height: 28,
        },
        TitleContainer: {
            width: '100%',
            paddingTop: 6,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
            opacity: 0.6,
        },
    });
};

export default getStyles;
