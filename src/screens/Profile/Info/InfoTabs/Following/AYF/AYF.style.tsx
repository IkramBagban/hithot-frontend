import { Platform, StyleSheet } from 'react-native';

type HeaderStyles = {
    Container: {};
    ActivityIndicatorContainer: {};
    TitleContainer: {};
    TitleText: {};
    ContentContainerStyle: {};
    DetailsContainer: {};
    ImageContainer: {};
    ImageRadiusContainer: {};
    Image: {};
    UsernameAndSubnameContainer: {};
    UsernameContainer: {};
    UsernameText: {};
    SubnameContainer: {};
    SubnameText: {};
    ButtonContainer: {};
    ButtonSubContainer: {};
    ButtonText: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActivityIndicatorContainer: {
            flex: 1,
            paddingVertical: 28,
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            width: '90%',
            paddingTop: 20,
            paddingBottom: 20,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleText: {
            fontSize: 18,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        DetailsContainer: {
            width: '90%',
            marginBottom: 14,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageContainer: {
            width: '16%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageRadiusContainer: {
            width: 40,
            height: 40,
            borderRadius: 1000,
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Image: {
            width: 40,
            height: 40,
        },
        UsernameAndSubnameContainer: {
            width: '54%',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        UsernameContainer: {
            width: '94%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        UsernameText: {
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
            color: 'white',
        },
        SubnameContainer: {
            width: '80%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubnameText: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: 'white',
        },
        ButtonContainer: {
            width: '28%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonSubContainer: {
            width: '100%',
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 6,
            alignItems: 'center',
            backgroundColor: '#787B7E',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonText: {
            fontSize: 14,
            fontFamily: 'Figtree-Medium',
            color: 'white',
        },
    });
};

export default getStyles;
