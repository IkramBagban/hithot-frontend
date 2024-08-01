import { Platform, StyleSheet } from 'react-native';

type AllStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    SubContainer: {};
    HeaderContainer: {};
    HeaderTitle: {};
    InputAndButtonContainer: {};
    InputContainer: {};
    TextInput: {};
    ButtonContainer: {};
    ButtonSubContainer: {};
    ButtonTitle: {};
    BaseToastStyle: {};
    BaseToastContentContainerStyle: {};
    BaseToasttext2Style: {};
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            paddingTop: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubContainer: {
            width: '90%',
            paddingBottom: 14,
            borderRadius: 10,
            alignSelf: 'center',
            backgroundColor: '#3C4045',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderContainer: {
            width: '90%',
            paddingTop: 14,
            paddingBottom: 14,
            alignSelf: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderTitle: {
            fontSize: 20,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        InputAndButtonContainer: {
            width: '90%',
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: '#575B5E',
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        InputContainer: {
            width: '70%',
            paddingLeft: 18,
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TextInput: {
            padding: 0,
            margin: null,
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
            opacity: 0.6,
        },
        ButtonContainer: {
            width: '28%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonSubContainer: {
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        BaseToastStyle: {
            width: '90%',
            height: null,
            padding: null,
            paddingLeft: null,
            paddingVertical: 14,
            borderRadius: 10,
            alignSelf: 'center',
            backgroundColor: '#FFFFFF',
            borderLeftWidth: 0,
        },
        BaseToastContentContainerStyle: {
            width: '100%',
            alignSelf: 'center',
            alignItems: 'flex-start',
            margin: null,
            paddingLeft: null,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        BaseToasttext2Style: {
            textAlign: 'left',
            left: null,
            margin: null,
            marginLeft: null,
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#0A4500',
        },
    });
};

export default getStyles;
