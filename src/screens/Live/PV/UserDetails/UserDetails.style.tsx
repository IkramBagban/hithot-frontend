import { Platform, StyleSheet } from 'react-native';

type AllStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    ScheduledContainer: {
        width: string;
        alignSelf: 'center';
        flexDirection: 'row';
        justifyContent: 'space-between';
        borderWidth: number;
        borderColor: string;
    };
    IconContainer: {
        width: string;
        alignSelf: 'center';
        flexDirection: 'row';
        justifyContent: 'space-between';
        borderWidth: number;
        borderColor: string;
    };
    TimeText: {
        fontSize: number;
        fontFamily: string;
        color: string;
    };
    DetailsContainer: {
        width: string;
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
    SubTitleContainer: {
        width: string;
        alignSelf: 'center';
        flexDirection: 'row';
        justifyContent: 'space-between';
        borderWidth: number;
        borderColor: string;
    };
    SubTitleText: {
        fontSize: number;
        fontFamily: string;
        color: string;
    };
    Dot: {};
    StatusContainer: {
        width: string;
        alignSelf: 'center';
        flexDirection: 'row';
        justifyContent: 'space-between';
        borderWidth: number;
        borderColor: string;
    };
    StatusText: {
        fontSize: number;
        fontFamily: string;
        color: string;
    };
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            height: 228,
            position: 'absolute',
            alignSelf: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ScheduledContainer: {
            width: '90%',
            paddingTop: 10,
            alignSelf: 'center',
            alignItems: 'flex-start',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IconAndTimeTextContainer: {
            paddingVertical: 6,
            paddingHorizontal: 8,
            paddingRight: 10,
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IconContainer: {
            // width: '14%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 18,
            height: 18,
        },
        TimeTextContainer: {
            paddingLeft: 6,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TimeText: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
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
        DetailsContainer: {
            width: '90%',
            alignSelf: 'center',
            paddingBottom: 10,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageContainer: {
            paddingBottom: 4,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageRadiusContainer: {
            width: 28,
            height: 28,
            borderRadius: 1000,
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Image: {
            width: 28,
            height: 28,
        },
        TitleContainer: {
            width: '100%',
            paddingBottom: 2,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleText: {
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
            color: 'white',
        },
        SubTitleAndStatusContainer: {
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubTitleContainer: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubTitleText: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: 'white',
        },
        Dot: {
            width: 4,
            height: 4,
            marginHorizontal: 6,
            borderRadius: 1000,
            backgroundColor: 'white',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        StatusContainer: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        StatusText: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: 'white',
        },
        ShadowContainer: {
            width: '100%',
            bottom: 0,
            position: 'absolute',
            // borderWidth: 1,
            // borderColor: 'red',
            zIndex: -1,
        },
        ShadowImage: {
            width: '100%',
            // height: 50,
        },
    });
};

export default getStyles;
