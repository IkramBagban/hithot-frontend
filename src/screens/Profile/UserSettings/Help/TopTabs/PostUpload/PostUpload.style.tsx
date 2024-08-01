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
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        Container: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
    });
};

export default getStyles;
