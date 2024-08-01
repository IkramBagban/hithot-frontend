import { Platform, StyleSheet } from 'react-native';

type HeaderStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    SubContainer: {};
    IconContainer: {};
    Icon: {};
    ActionContainer: {};
    TitleContainer: {};
    Title: {};
    ButtonContainer: {};
    ButtonSubContainer: {};
    ButtonTitle: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            paddingTop: Platform.OS === 'ios' ? 60 : 40,
            paddingBottom: 20,
            borderBottomStartRadius: 28,
            borderBottomEndRadius: 28,
            backgroundColor: '#3D464F',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubContainer: {
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IconContainer: {
            width: '28%',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 88,
            height: 88,
        },
        ActionContainer: {
            width: '70%',
            flexDirection: 'column',
            justifyContent: 'space-around',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 18,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        ButtonContainer: {
            width: '100%',
            alignItems: 'flex-start',
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonSubContainer: {
            paddingVertical: 8,
            paddingHorizontal: 14,
            marginRight: 10,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonTitle: {
            fontSize: 14,
            fontFamily: 'Figtree-Medium',
            color: '#EB853C',
        },
    });
};

export default getStyles;
