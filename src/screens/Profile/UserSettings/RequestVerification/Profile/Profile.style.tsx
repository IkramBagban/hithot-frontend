import { Dimensions, Platform, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type HeaderStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    ContentContainerStyle: {};
    ProfileContainer: {};
    ImageContainer: {};
    ImageAndBadgeContainer: {};
    ImageRadiusContainer: {};
    Image: {};
    BadgeContainer: {};
    BadgeRadiusContainer: {};
    Badge: {};
    NameAndUsernameContainer: {};
    NameContainer: {};
    Name: {};
    UsernameContainer: {};
    Username: {};
    ButtonContainer: {};
    ButtonSubContainer: {};
    ButtonTextContainer: {};
    ButtonText: {};
    IconContainer: {};
    Icon: {};
    ChevronDownIconButtonContainer: {};
    ChevronDownIcon: {};
    FlatListHeaderContainer: {};
    FlatListHeader: {};
    DataContainer: {};
    DataIconContainer: {};
    DataIcon: {};
    TitleAndSubTitleContainer: {};
    TitleContainer: {};
    Title: {};
    SubTitleContainer: {};
    SubTitle: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        ContentContainerStyle: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ProfileContainer: {
            width: '90%',
            flexDirection: 'column',
            alignSelf: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageContainer: {
            width: '100%',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageAndBadgeContainer: {
            height: 86,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ImageRadiusContainer: {
            width: 80,
            height: 80,
            borderRadius: 1000,
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Image: {
            width: 80,
            height: 80,
        },
        BadgeContainer: {
            width: '20%',
            bottom: 0,
            position: 'absolute',
            alignSelf: 'center',
            alignItems: 'flex-end',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        BadgeRadiusContainer: {
            width: 24,
            height: 24,
            borderRadius: 1000,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Badge: {
            width: 22,
            height: 22,
        },
        NameAndUsernameContainer: {
            width: '100%',
            flexDirection: 'column',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        NameContainer: {
            width: '100%',
            paddingTop: 8,
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Name: {
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        UsernameContainer: {
            width: '100%',
            paddingTop: 2,
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Username: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
        ButtonContainer: {
            width: '100%',
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonSubContainer: {
            paddingVertical: 6,
            paddingHorizontal: 10,
            borderRadius: 6,
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonTextContainer: {
            paddingRight: 10,
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonText: {
            fontSize: 14,
            fontFamily: 'Figtree-Medium',
            color: '#FFFFFF',
        },
        IconContainer: {
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 12,
            height: 12,
        },
        ChevronDownIconButtonContainer: {
            width: 28,
            height: 28,
            marginLeft: 6,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#45494D',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ChevronDownIcon: {
            width: 12,
            height: 12,
        },
        FlatListHeaderContainer: {
            width: '90%',
            paddingTop: 40,
            paddingBottom: 28,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        FlatListHeader: {
            fontSize: 18,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        DataContainer: {
            width: '90%',
            marginBottom: 10,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DataIconContainer: {
            width: '12%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DataIcon: {
            width: 28,
            height: 28,
        },
        TitleAndSubTitleContainer: {
            width: '86%',
            flexDirection: 'column',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            width: '100%',
            paddingBottom: 4,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        SubTitleContainer: {
            width: '100%',
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
