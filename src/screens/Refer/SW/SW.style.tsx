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
    ImageContainer: {};
    Image: {};
    TitleContainer: {};
    Title: {};
    SubTitleContainer: {};
    SubTitle: {};
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubContainer: {
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'column',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageContainer: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Image: {
            width: 180,
            height: 180,
        },
        TitleContainer: {
            width: '100%',
            paddingTop: 8,
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            textAlign: 'center',
            fontSize: 32,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        SubTitleContainer: {
            width: '100%',
            paddingTop: 8,
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubTitle: {
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
            opacity: 0.6,
        },
    });
};

export default getStyles;
