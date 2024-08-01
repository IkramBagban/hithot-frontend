import { Platform, StyleSheet } from 'react-native';

type HeaderStyles = {
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
    LeftContainer: {
        width: string;
        borderWidth: number;
        borderColor: string;
    };
    LeftIconContainer: {
        width: string;
        height: string;
        borderRadius: string;
        borderWidth: number;
        borderColor: string;
    };
    LeftIcon: {
        width: string;
        height: string;
    };
    CenterContainer: {
        width: string;
        alignItems: 'center';
        borderWidth: number;
        borderColor: string;
    };
    HeaderText: {
        fontSize: number;
        fontFamily: string;
        color: string;
    };
    RightContainer: {
        width: string;
        borderWidth: number;
        borderColor: string;
    };
    ImageContainer: {
        width: string;
        height: string;
        borderRadius: string;
        overflow: undefined;
    };
    Image: {
        width: string;
        height: string;
    };
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        HeaderContainer: {
            width: '100%',
            paddingTop: Platform.OS === 'ios' ? 60 : 40,
            paddingBottom: 20,
            backgroundColor: '#3D464F',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderSubContainer: {
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        LeftContainer: {
            width: '14%',
            alignItems: 'flex-start',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        LeftIconContainer: {
            width: 32,
            height: 32,
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        LeftIcon: {
            width: 16,
            height: 16,
        },
        CenterContainer: {
            width: '70%',
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderText: {
            fontSize: 20,
            fontFamily: 'Figtree-Regular',
            color: 'white',
        },
        RightContainer: {
            width: '14%',
            alignItems: 'flex-end',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageContainer: {
            width: 32,
            height: 32,
            borderRadius: 1000,
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Image: {
            width: 32,
            height: 32,
        },
    });
};

export default getStyles;
