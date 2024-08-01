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
    liveHeader: {
        width: string;
        height: string;

        marginTop: number;
        alignSelf: undefined;
    };
};

const getStyles = (colors): AllStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            paddingBottom: 20,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            width: '90%',
            paddingBottom: 20,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleText: {
            fontSize: 20,
            fontFamily: 'Figtree-Bold',
            color: colors.textColor,
        },
        ContentContainerStyle: {
            paddingLeft: 18,
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageContainer: {
            // height: 84,
            marginRight: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageRadiusContainer: {
            width: 76,
            height: 76,
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
            borderRadius: 1000,
            position: 'absolute',
            alignSelf: 'center',
            backgroundColor: 'red',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        BadgeText: {
            fontSize: 14,
            fontFamily: 'Figtree-Bold',
            color: 'white',
        },
        liveHeader: {
            height: 20,
            width: 40,
            alignSelf: 'center',
            marginTop: -10,
        },
    });
};

export default getStyles;
