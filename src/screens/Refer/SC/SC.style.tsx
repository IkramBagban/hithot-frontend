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
    CodeContainer: {};
    Code: {};
    CopyButtonContainer: {};
    CopyIcon: {};
    ShareButtonContainer: {};
    ShareButtonSubContainer: {};
    ShareButtonTitleContainer: {};
    ShareButtonTitle: {};
    ShareButtonIconContainer: {};
    ShareButtonIcon: {};
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            paddingTop: 28,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubContainer: {
            width: '90%',
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: '#3C4045',
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        CodeContainer: {
            width: '56%',
            paddingLeft: 18,
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Code: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
        CopyButtonContainer: {
            width: '12%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        CopyIcon: {
            width: 18,
            height: 18,
        },
        ShareButtonContainer: {
            width: '28%',
            alignItems: 'flex-end',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ShareButtonSubContainer: {
            paddingVertical: 16,
            paddingHorizontal: 12,
            borderTopStartRadius: 10,
            borderBottomStartRadius: 10,
            flexDirection: 'row',
            backgroundColor: '#00BE72',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ShareButtonTitleContainer: {
            marginRight: 6,
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ShareButtonTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        ShareButtonIconContainer: {
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ShareButtonIcon: {
            width: 14,
            height: 14,
        },
    });
};

export default getStyles;
