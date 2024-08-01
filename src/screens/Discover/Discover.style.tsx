import { Platform, StyleSheet } from 'react-native';

type AllStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    ContentContainerStyle: {};
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        Container: {
            flex: 1,
            backgroundColor: '#21262B',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ContentContainerStyle: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
    });
};

export default getStyles;
