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
            color: colors.textColor
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
            width: 180,
            height: 228,
            borderRadius: 8,
            // justifyContent: 'center',
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Image: {
            width: 180,
            height: 228,
            // opacity: 0.1,
        },
    });
};

export default getStyles;
