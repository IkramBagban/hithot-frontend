import { Dimensions, Platform, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type HeaderStyles = {
    IndicatorContainer: {};
    Indicator: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
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
    });
};

export default getStyles;
