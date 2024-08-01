import { Dimensions, Platform, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type AllStyles = {
    Container: {};
    Video: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        Container: {
            width: WIDTH,
            height: HEIGHT,
        },
        Video: {
            width: WIDTH,
            height: HEIGHT,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        PermissionContainer: {
            flex: 1,
            justifyContent: 'center',
        },
        PermissionText: {
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'Figtree-Bold',
            color: '#fff',
        },
        PermissionButton: {
            width: '90%',
            alignSelf: 'center',
            paddingVertical: 10,
            backgroundColor: 'green',
            borderRadius: 8,
        },
        PermissionButtonText: {
            textAlign: 'center',
            fontSize: 16,
            color: '#fff',
        },
    });
};

export default getStyles;
