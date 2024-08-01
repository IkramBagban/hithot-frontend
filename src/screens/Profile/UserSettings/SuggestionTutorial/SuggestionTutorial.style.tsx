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
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        Container: {
            flex: 1,
            backgroundColor: '#21262B',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ContentContainerStyle: {},
    });
};

export default getStyles;
