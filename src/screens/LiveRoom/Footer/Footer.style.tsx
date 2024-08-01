import { Platform, StyleSheet } from 'react-native';

type HeaderStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    ContentContainerStyle: {};
    DetailsContainer: {
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
    TitleAndCommentContainer: {};
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
    CommentContainer: {
        width: string;
        alignSelf: 'center';
        flexDirection: 'row';
        justifyContent: 'space-between';
        borderWidth: number;
        borderColor: string;
    };
    CommentText: {
        fontSize: number;
        fontFamily: string;
        color: string;
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

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            bottom: 0,
            position: 'absolute',
            flexDirection: 'column',
            zIndex: 1,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DetailsContainer: {
            width: '90%',
            marginBottom: 14,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageContainer: {
            width: '16%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageRadiusContainer: {
            width: 40,
            height: 40,
            borderRadius: 1000,
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Image: {
            width: 40,
            height: 40,
        },
        TitleAndCommentContainer: {
            width: '84%',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleText: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: 'white',
        },
        CommentContainer: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        CommentText: {
            fontSize: 16,
            fontFamily: 'Figtree-Medium',
            color: 'white',
        },
    });
};

export default getStyles;
