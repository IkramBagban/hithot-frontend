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
        Container: {},
        ContentContainerStyle: {
            paddingBottom: Platform.OS === 'ios' ? 60 : 40,
            // borderWidth: 1,
            // borderColor: 'red',
        },
    });
};

export default getStyles;
