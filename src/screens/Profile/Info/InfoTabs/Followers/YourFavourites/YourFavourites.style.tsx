import { Dimensions, Platform, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type AllStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    ContentContainerStyle: {};
    ImageContainer: {};
    ImageRadiusContainer: {};
    Image: {};
    BadgeContainer: {};
    BadgeText: {};
    TitleContainer: {};
    TitleText: {};
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },

        ContentContainerStyle: {
            paddingLeft: WIDTH / 18,
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageContainer: {
            // height: 84,
            marginRight: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageRadiusContainer: {
            width: 56,
            height: 56,
            borderRadius: 1000,
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Image: {
            width: 76,
            height: 76,
        },
        BadgeContainer: {
            bottom: 0,
            paddingVertical: 4,
            paddingHorizontal: 6,
            borderRadius: 1000,
            position: 'absolute',
            alignSelf: 'center',
            backgroundColor: 'red',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        BadgeText: {
            fontSize: 14,
            fontFamily: 'Figtree-Bold',
            color: 'white',
        },
        TitleContainer: {
            width: '90%',
            paddingTop: 14,
            paddingBottom: 14,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleText: {
            fontSize: 18,
            fontFamily: 'Figtree-Bold',
            color: 'white',
        },
    });
};

export default getStyles;
