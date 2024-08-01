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
    IndicatorContainer: {};
    Indicator: {};
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
    PlansContainer: {};
    PlansHeaderContainer: {};
    PlansHeader: {};
    PlansContentContainerStyle: {};
    PackageDetailsContainer: {};
    DurationContainer: {};
    Duration: {};
    DurationDaysContainer: {};
    DurationDays: {};
    DurationTitleContainer: {};
    DurationTitle: {};
    BenefitContainer: {};
    Benefit: {};
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
    FooterContainer: {};
    FooterSubContainer: {};
    FooterTitleContainer: {};
    FooterTitle: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        ContentContainerStyle: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IndicatorContainer: {
            width: '90%',
            paddingBottom: 14,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Indicator: {
            width: '48%',
            height: 8,
            borderRadius: 1000,
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
            width: 12,
            height: 12,
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
            paddingTop: 10,
            alignItems: 'center',
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
        PlansContainer: {
            width: '100%',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        PlansHeaderContainer: {
            width: '90%',
            paddingBottom: 14,
            alignSelf: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        PlansHeader: {
            fontSize: 20,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        PlansContentContainerStyle: {
            width: '90%',
            // paddingLeft: WIDTH / 18,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        PackageDetailsContainer: {
            // width: '30%',
            width: WIDTH / 3.76,
            paddingVertical: 14,
            // marginRight: 14,
            borderRadius: 8,
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DurationContainer: {
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Duration: {
            fontSize: 20,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        DurationDaysContainer: {
            width: '90%',
            paddingVertical: 2,
            alignSelf: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DurationDays: {
            fontSize: 18,
            fontFamily: 'Figtree-Medium',
            color: '#FFFFFF',
        },
        DurationTitleContainer: {
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DurationTitle: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
        BenefitContainer: {
            width: '90%',
            paddingTop: 14,
            alignSelf: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Benefit: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
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
        FooterContainer: {
            width: '100%',
            paddingTop: 20,
            paddingBottom: Platform.OS === 'ios' ? 60 : 20,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        FooterSubContainer: {
            width: '90%',
            paddingVertical: 14,
            borderRadius: 6,
            alignSelf: 'center',
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        FooterTitleContainer: {
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        FooterTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Medium',
            color: '#FFFFFF',
        },
    });
};

export default getStyles;
