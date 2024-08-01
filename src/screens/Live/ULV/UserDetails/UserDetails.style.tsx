import { Platform, StyleSheet } from 'react-native';

type AllStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
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
        textAlign: 'center';
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
        textAlign: 'center';
    };
    ScheduledContainer: {
        width: string;
        alignSelf: 'center';
        flexDirection: 'row';
        justifyContent: 'space-between';
        borderWidth: number;
        borderColor: string;
    };
    ScheduledText: {
        fontSize: number;
        fontFamily: string;
        color: string;
    };
};

const getStyles = (colors): AllStyles => {
    return StyleSheet.create({
        Container: {
            width: '90%',
            alignSelf: 'center',
            position: 'absolute',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageContainer: {
            // height: 84,
            alignItems: 'center',
            paddingBottom: 8,
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
            width: 56,
            height: 56,
        },
        TitleContainer: {
            width: '100%',
            paddingBottom: 2,
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleText: {
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
            color: colors.textColor,
            textAlign: 'center',
        },
        SubTitleContainer: {
            width: '100%',
            paddingBottom: 2,
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubTitleText: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: colors.textColor,
            textAlign: 'center',
        },
        ScheduledContainer: {
            width: '100%',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ScheduledText: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: colors.textColor,
            opacity: 0.6,
        },
    });
};

export default getStyles;
