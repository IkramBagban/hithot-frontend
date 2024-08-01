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
    RowContainer: {
        width: string;
        height: string;
        borderRadius: string;
        overflow: undefined;
    };
    IconContainer: {};
    Icon: {
        width: string;
        height: string;
    };
    ActionTitleContainer: {};
    ActionTitle: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        HeaderContainer: {
            width: '100%',
            paddingTop: Platform.OS === 'ios' ? 60 : 40,
            paddingBottom: 20,
            backgroundColor: '#21262B',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderSubContainer: {
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
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
            width: '100%',
            height: 34,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: -1,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderText: {
            fontSize: 20,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
        RightContainer: {
            width: '28%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        RowContainer: {
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#3C4045',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IconContainer: {
            marginRight: 8,
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 16,
            height: 16,
        },
        ActionTitleContainer: {
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActionTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
    });
};

export default getStyles;
