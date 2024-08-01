import { Platform, StyleSheet } from 'react-native';

type AllStyles = {
    ModalContainer: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    PopupContainer: {};
    ImageContainer: {};
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        ModalContainer: {
            margin: null,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        PopupContainer: {
            width: '90%',
            paddingTop: 14,
            paddingBottom: 14,
            borderRadius: 28,
            alignSelf: 'center',
            backgroundColor: '#21262B',
            borderWidth: 1,
            borderColor: 'red',
        },
        ImageContainer: {
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'red',
        },
    });
};

export default getStyles;
