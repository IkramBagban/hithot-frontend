import { Platform, StyleSheet } from 'react-native';

type AllStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    ContentContainerStyle: {};
    FlatListContentContainerStyle: {};
    TitleAndSubTitleContainer: {};
    TitleContainer: {};
    Title: {};
    SubTitleContainer: {};
    SubTitle: {};
    DetailsContainer: {};
    ImageContainer: {};
    ImageRadiusContainer: {};
    Image: {};
    UsernameAndSubnameContainer: {};
    UsernameContainer: {};
    UsernameText: {};
    SubnameContainer: {};
    SubnameText: {};
    ButtonContainer: {};
    ButtonSubContainer: {};
    ButtonText: {};
    EmptyContainer: {};
    EmptyIconContainer: {};
    EmptyIcon: {};
    EmptyText: {};
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        Container: {
            flex: 1,
            backgroundColor: '#21262B',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ContentContainerStyle: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        FlatListContentContainerStyle: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleAndSubTitleContainer: {
            width: '90%',
            marginBottom: 20,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            width: '48%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 20,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        SubTitleContainer: {
            width: '48%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubTitle: {
            textAlign: 'right',
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
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
            width: '14%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageRadiusContainer: {
            width: 36,
            height: 36,
            borderRadius: 1000,
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Image: {
            width: 36,
            height: 36,
        },
        UsernameAndSubnameContainer: {
            width: '56%',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        UsernameContainer: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        UsernameText: {
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        SubnameContainer: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubnameText: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
        ButtonContainer: {
            width: '28%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonSubContainer: {
            width: '100%',
            paddingVertical: 8,
            paddingHorizontal: 18,
            borderRadius: 8,
            alignItems: 'center',
            backgroundColor: '#787B7E',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonText: {
            fontSize: 14,
            fontFamily: 'Figtree-Medium',
            color: '#FFFFFF',
        },
        EmptyContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        EmptyIconContainer: {
            marginBottom: 2,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        EmptyIcon: {
            width: 156,
            height: 156,
        },
        EmptyText: {
            fontSize: 14,
            fontFamily: 'Figtree-Medium',
            color: '#FFFFFF',
            opacity: 0.6,
        },
    });
};

export default getStyles;
