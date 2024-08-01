import { Platform, StyleSheet } from 'react-native';

type AllStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    SubContainer: {};
    HeaderContainer: {};
    HeaderTitle: {};
    ContentContainerStyle: {};
    SeparatorContainer: {};
    DataContainer: {};
    TitleContainer: {};
    Title: {};
    IconContainer: {};
    Icon: {};
    SubTitleContainer: {};
    SubTitle: {};
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            paddingTop: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubContainer: {
            width: '90%',
            borderRadius: 10,
            paddingBottom: 4,
            alignSelf: 'center',
            backgroundColor: '#3C4045',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderContainer: {
            width: '90%',
            paddingTop: 14,
            alignSelf: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderTitle: {
            fontSize: 20,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        ContentContainerStyle: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SeparatorContainer: {
            width: '95%',
            height: 1,
            alignSelf: 'flex-end',
            backgroundColor: '#FFFFFF',
            opacity: 0.12,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DataContainer: {
            width: '90%',
            paddingVertical: 14,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderBottomWidth: 1,
            // borderBottomColor: '#3C4044',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            width: '72%',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 16,
            fontFamily: 'Figtree-Medium',
            color: '#FFFFFF',
        },
        IconContainer: {
            width: '14%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            opacity: 0.6,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 12,
            height: 12,
        },
        SubTitleContainer: {
            width: '90%',
            alignSelf: 'center',
            marginBottom: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubTitle: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
            opacity: 0.6,
        },
    });
};

export default getStyles;
