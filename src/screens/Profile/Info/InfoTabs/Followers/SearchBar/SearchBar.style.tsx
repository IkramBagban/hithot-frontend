import { Platform, StyleSheet } from 'react-native';

type HeaderStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    IconAndInputContainer: {};
    IconContainer: {};
    Icon: {};
    InputContainer: {};
    TextInput: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            paddingTop: 14,
            paddingBottom: 14,
            backgroundColor: '#3D464F',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IconAndInputContainer: {
            width: '90%',
            paddingVertical: 14,
            paddingHorizontal: 14,
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: '#787B7E',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IconContainer: {
            width: '10%',
            alignItems: 'flex-start',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 18,
            height: 18,
        },
        InputContainer: {
            width: '90%',
            paddingLeft: 4,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TextInput: {
            padding: 0,
            justifyContent: 'center',
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: 'white',
            opacity: 0.6,
        },
    });
};

export default getStyles;
