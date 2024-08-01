import { Platform, StyleSheet } from 'react-native';

type AllStyles = {
    ContentContainerStyle: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        ContentContainerStyle: {
            // paddingBottom: Platform.OS === 'ios' ? 60 : 40,
            // borderWidth: 1,
            // borderColor: 'red',
        },
    });
};

export default getStyles;
