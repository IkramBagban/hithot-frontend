import { Dimensions, Platform, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type AllStyles = {
    HeaderContainer: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    HeaderSubContainer: {
        width: string;
        alignSelf: 'center';
        flexDirection: 'row';
        justifyContent: 'space-between';
        borderWidth: number;
        borderColor: string;
    };
    TitleAndOfferContainer: {
        width: string;
        borderWidth: number;
        borderColor: string;
    };
    TitleContainer: {
        width: string;
        height: string;
        borderRadius: string;
        borderWidth: number;
        borderColor: string;
    };
    TitleText: {
        fontSize: number;
        fontFamily: string;
        color: string;
    };
    OfferContainer: {
        width: string;
        alignItems: 'center';
        borderWidth: number;
        borderColor: string;
    };
    OfferText: {
        fontSize: number;
        fontFamily: string;
        color: string;
    };
    TotalMembersContainer: {
        width: string;
        borderWidth: number;
        borderColor: string;
    };
    IconContainer: {
        width: string;
        height: string;
        borderRadius: string;
        overflow: undefined;
    };
    Icon: {
        width: string;
        height: string;
    };
    TotalMembersTextContainer: {};
    TotalMembersText: {
        fontSize: number;
        fontFamily: string;
        color: string;
    };
    Absolute: {};
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        HeaderContainer: {
            width: '100%',
            top: 0,
            paddingTop: Platform.OS === 'ios' ? 60 : 40,
            paddingBottom: 20,
            position: 'absolute',
            zIndex: 1,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderSubContainer: {
            width: '90%',
            paddingVertical: 8,
            paddingHorizontal: 10,
            borderRadius: 1000,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleAndOfferContainer: {
            width: '78%',
            // paddingVertical: 4,
            // paddingHorizontal: 8,
            borderRadius: 1000,
            flexDirection: 'row',
            justifyContent: 'space-between',
            overflow: 'hidden',
            // backgroundColor: 'red',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            // width: '28%',
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 1000,
            backgroundColor: 'red',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleText: {
            fontSize: 14,
            fontFamily: 'Figtree-SemiBold',
            color: 'white',
        },
        OfferContainer: {
            width: '70%',
            paddingVertical: 4,
            paddingHorizontal: 8,
            alignItems: 'flex-end',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        OfferText: {
            textAlign: 'right',
            fontSize: 14,
            fontFamily: 'Figtree-SemiBold',
            color: 'white',
        },
        TotalMembersContainer: {
            width: '20%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IconContainer: {
            width: '32%',
            alignItems: 'flex-start',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 18,
            height: 18,
        },
        TotalMembersTextContainer: {
            width: '66%',
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TotalMembersText: {
            textAlign: 'right',
            fontSize: 16,
            fontFamily: 'Figtree-SemiBold',
            color: 'white',
        },
        Absolute: {
            width: 500,
            height: 500,
            position: 'absolute',
            backgroundColor: '#000000',
            opacity: 0.6,
            zIndex: -1,
        },
    });
};

export default getStyles;
