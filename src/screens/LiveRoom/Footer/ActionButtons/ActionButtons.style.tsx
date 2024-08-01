import { Platform, StyleSheet } from 'react-native';

type HeaderStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    SubContainer: {
        width: string;
        alignSelf: 'center';
        flexDirection: 'row';
        justifyContent: 'space-between';
        borderWidth: number;
        borderColor: string;
    };
    ButtonContainer: {
        width: string;
        borderWidth: number;
        borderColor: string;
    };
    GradientContainer: {};
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
    LoaderContainer: {};
    IconButtonsContainer: {};
    EmojiContainer: {};
    IconButtonContainer: {
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
    EmojiListContainer: {};
    EmojiViewContainer: {};
    Emoji: {};
    TotalMembersTextContainer: {};
    TotalMembersText: {
        fontSize: number;
        fontFamily: string;
        color: string;
    };
    Absolute: {};
};

const getStyles = (colors): HeaderStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            paddingTop: 20,
            paddingBottom: Platform.OS === 'ios' ? 60 : 40,
            backgroundColor: colors.bgColor,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubContainer: {
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonContainer: {
            width: '66%',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        GradientContainer: {
            width: '100%',
            paddingVertical: 12,
            paddingHorizontal: 12,
            borderRadius: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: '#787B7E',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        LinkIconContainer: {
            width: '14%',
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        LinkIcon: {
            width: 18,
            height: 18,
        },
        TitleContainer: {
            width: '82%',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleText: {
            fontSize: 18,
            fontFamily: 'Figtree-Medium',
            color: 'white',
        },
        LoaderContainer: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        InputAndIconContainer: {
            width: '100%',
            paddingVertical: 8,
            paddingHorizontal: 8,
            borderRadius: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: colors.containersColor,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        InputContainer: {
            width: '80%',
            paddingLeft: 4,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TextInput: {
            padding: 0,
            justifyContent: 'center',
            fontSize: 14,
            fontFamily: 'Figtree-Medium',
            color: colors.textColor,
            opacity: 0.6,
        },
        SendIconContainer: {
            width: '14%',
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SendIcon: {
            width: 20,
            height: 20,
        },
        IconButtonsContainer: {
            width: '30%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        EmojiContainer: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        EmojiListContainer: {
            width: '100%',
            bottom: 0,
            paddingVertical: 10,
            borderRadius: 1000,
            position: 'absolute',
            backgroundColor: colors.containersColor,
            overflow: 'hidden',
            zIndex: 1,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        EmojiViewContainer: {
            width: '100%',
            alignItems: 'center',
            paddingVertical: 6,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Emoji: {
            width: 20,
            height: 20,
        },
        IconButtonContainer: {
            width: 44,
            height: 44,
            borderRadius: 1000,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.containersColor,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 22,
            height: 22,
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
