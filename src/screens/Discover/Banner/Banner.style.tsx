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
    ImageAndIndicatorContainer: {};
    ImageContainer: {};
    Image: {};
    IndicatorContainer: {};
    Indicator: {};
    ActiveIndicator: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageAndIndicatorContainer: {
            width: WIDTH,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageContainer: {
            width: WIDTH,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Image: {
            width: WIDTH,
            height: HEIGHT / 4.28,
        },
        IndicatorContainer: {
            width: '100%',
            bottom: 0,
            paddingVertical: 6,
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Indicator: {
            width: 6,
            height: 6,
            marginHorizontal: 2,
            borderRadius: 4,
            backgroundColor: '#4F4F4F',
        },
        ActiveIndicator: {
            width: 16,
            marginHorizontal: 4,
            backgroundColor: '#FFFFFF',
        },
    });
};

export default getStyles;
