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
    InfoDetailsContainer: {};
    InfoHeaderContainer: {};
    InfoHeader: {};
    InfoContentContainerStyle: {};
    InfoSubTitleContainer: {};
    InfoSubTitle: {};
    InfoInputContentContainerStyle: {};
    InputContainer: {};
    InputTitleContainer: {};
    InputTitle: {};
    TextInputContainer: {};
    TextInput: {};
    ErrorContainer: {};
    Error: {};
    InfoActionButtonsContentContainerStyle: {};
    ActionButtonContainer: {};
    ActionButtonIconContainer: {};
    ActionButtonIconRadiusContainer: {};
    ActionButtonIcon: {};
    ActionButtonTitleContainer: {};
    InfoActionButtonsError: {};
    ActionButtonTitle: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        InfoDetailsContainer: {
            width: '90%',
            alignSelf: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        InfoHeaderContainer: {
            width: '100%',
            marginBottom: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        InfoHeader: {
            fontSize: 20,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        InfoContentContainerStyle: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        InfoSubTitleContainer: {
            width: '100%',
            marginBottom: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        InfoSubTitle: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
            opacity: 0.6,
        },
        InfoInputContentContainerStyle: {
            paddingTop: 14,
        },
        InputContainer: {
            width: '100%',
            marginBottom: 14,
            alignSelf: 'center',
            flexDirection: 'column',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        InputTitleContainer: {
            width: '100%',
            marginBottom: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        InputTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
            opacity: 0.6,
        },
        TextInputContainer: {
            width: '100%',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 8,
            backgroundColor: '#404449',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TextInput: {
            margin: 0,
            padding: 0,
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
        ErrorContainer: {
            width: '100%',
            paddingTop: 14,
            paddingBottom: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Error: {
            fontSize: 16,
            fontFamily: 'Figtree-Medium',
            color: '#FF0000',
            letterSpacing: 2,
        },
        InfoActionButtonsContentContainerStyle: {
            width: '100%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActionButtonContainer: {
            width: WIDTH / 2.4,
            paddingVertical: 28,
            marginBottom: 14,
            borderRadius: 8,
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#404449',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActionButtonIconContainer: {
            width: '90%',
            marginBottom: 14,
            alignSelf: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActionButtonIconRadiusContainer: {
            width: 28,
            height: 28,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActionButtonIcon: {
            width: 14,
            height: 14,
        },
        ActionButtonTitleContainer: {
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        InfoActionButtonsError: {
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'Figtree-Medium',
            color: '#FF0000',
        },
        ActionButtonTitle: {
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
    });
};

export default getStyles;
