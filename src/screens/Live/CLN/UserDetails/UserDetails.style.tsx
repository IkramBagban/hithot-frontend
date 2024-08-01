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
    liveView: {
        width: string;
        height: string;
        alignSelf: 'center';
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
        BadgeAndTotalMembersContainer: {
            width: '90%',
            paddingTop: 10,
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        BadgeContainer: {
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderRadius: 1000,
            backgroundColor: '#FF3D3A',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        BadgeText: {
            fontSize: 12,
            fontFamily: 'Figtree-SemoBold',
            color: 'white',
        },
        TotalMembersContainer: {
            width: '70%',
            justifyContent: 'center',
            alignItems: 'flex-end',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TotalMembersText: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: 'white',
            opacity: 0.6,
        },
        DetailsContainer: {
            width: '90%',
            alignSelf: 'center',
            paddingBottom: 10,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            width: '70%',
            paddingBottom: 10,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleText: {
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
            color: 'white',
        },
        ImageAndSubTitleAndStatusContainer: {
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageContainer: {
            paddingRight: 6,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageRadiusContainer: {
            width: 20,
            height: 20,
            borderRadius: 1000,
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Image: {
            width: 20,
            height: 20,
        },
        SubTitleContainer: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubTitleText: {
            fontSize: 16,
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
            opacity: 0.6,
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
        liveView: {
            height: 20,
            width: 40,
            alignSelf: 'center',
            // marginTop: -10,
        },
    });
};

export default getStyles;
