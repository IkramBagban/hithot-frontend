import { Platform, StyleSheet } from 'react-native';

type AllStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    TitleContainer: {
        width: string;
        alignSelf: 'center';
        flexDirection: 'row';
        justifyContent: 'space-between';
        borderWidth: number;
        borderColor: string;
    };
    TitleText: {
        fontSize: number;
        fontFamily: string;
        color: string;
    };
    ImageContainer: {
        width: string;
        height: string;
    };
    ImageRadiusContainer: {
        width: string;
        height: string;
        borderRadius: string;
        overflow: undefined;
        borderWidth: number;
        borderColor: string;
    };
    Image: {
        width: string;
        height: string;
    };
    BadgeContainer: {
        bottom: string;
        paddingVertical: string;
        paddingHorizontal: string;
        borderRadius: string;
        position: undefined;
        alignSelf: undefined;
        backgroundColor: string;
        borderWidth: string;
        borderColor: string;
    };
    BadgeText: {
        fontSize: number;
        fontFamily: string;
        color: string;
    };
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            width: '90%',
            paddingTop: 14,
            paddingBottom: 14,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleText: {
            fontSize: 18,
            fontFamily: 'Figtree-Bold',
            color: 'white',
        },
        ContentContainerStyle: {
            paddingLeft: 18,
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageContainer: {
            height: 64,
            marginRight: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageRadiusContainer: {
            width: 56,
            height: 56,
            borderRadius: 1000,
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Image: {
            width: 76,
            height: 76,
        },
        BadgeContainer: {
            bottom: 0,
            paddingVertical: 4,
            paddingHorizontal: 6,
            borderRadius: 4,
            position: 'absolute',
            alignSelf: 'center',
            backgroundColor: 'red',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        BadgeText: {
            fontSize: 12,
            fontFamily: 'Figtree-Regular',
            color: 'white',
        },
    });
};

export default getStyles;
