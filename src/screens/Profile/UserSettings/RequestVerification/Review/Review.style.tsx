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
    ReviewContainer: {};
    ReviewProfileContainer: {};
    ReviewImageContainer: {};
    ReviewImageAndBadgeContainer: {};
    ReviewImageRadiusContainer: {};
    ReviewImage: {};
    ReviewBadgeContainer: {};
    ReviewBadgeRadiusContainer: {};
    ReviewBadge: {};
    ReviewNameAndUsernameContainer: {};
    ReviewNameContainer: {};
    ReviewName: {};
    ReviewUsernameContainer: {};
    ReviewUsername: {};
    UpdateContainer: {};
    UpdateTitleContainer: {};
    UpdateTitle: {};
    UpdateTimeContainer: {};
    UpdateClockIconContainer: {};
    UpdateClockIcon: {};
    UpdateTime: {};
    ReviewAbsolute: {};
    ReviewFlatListHeaderContainer: {};
    ReviewFlatListHeaderSubContainer: {};
    ReviewFlatListHeader: {};
    ReviewContentContainerStyle: {};
    ReviewDataContainer: {};
    ReviewDataIconContainer: {};
    ReviewDataIcon: {};
    ReviewTitleAndSubTitleContainer: {};
    ReviewTitleContainer: {};
    ReviewTitle: {};
    ReviewSubTitleContainer: {};
    ReviewSubTitle: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        ReviewContainer: {
            width: '90%',
            alignSelf: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewProfileContainer: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewImageContainer: {
            width: '100%',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewImageAndBadgeContainer: {
            height: 86,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewImageRadiusContainer: {
            width: 80,
            height: 80,
            borderRadius: 1000,
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewImage: {
            width: 80,
            height: 80,
        },
        ReviewBadgeContainer: {
            width: '20%',
            bottom: 0,
            position: 'absolute',
            alignSelf: 'center',
            alignItems: 'flex-end',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewBadgeRadiusContainer: {
            width: 24,
            height: 24,
            borderRadius: 1000,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: '#FFFFFF',
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewBadge: {
            width: 24,
            height: 24,
        },
        ReviewNameAndUsernameContainer: {
            width: '100%',
            flexDirection: 'column',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewNameContainer: {
            width: '100%',
            paddingTop: 8,
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewName: {
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        ReviewUsernameContainer: {
            width: '100%',
            paddingTop: 2,
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewUsername: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
        UpdateContainer: {
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'column',
            marginTop: 14,
            paddingVertical: 10,
            borderRadius: 10,
            backgroundColor: '#3B3F44',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        UpdateTitleContainer: {
            width: '100%',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        UpdateTitle: {
            fontSize: 14,
            fontFamily: 'Figtree-Medium',
            color: '#00BE72',
        },
        UpdateTimeContainer: {
            width: '100%',
            marginTop: 4,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        UpdateClockIconContainer: {
            marginRight: 6,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        UpdateClockIcon: {
            width: 12,
            height: 12,
        },
        UpdateTime: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
            opacity: 0.8,
        },
        ReviewAbsolute: {
            width: '100%',
            height: '80%',
            bottom: 0,
            borderTopStartRadius: 28,
            borderTopEndRadius: 28,
            position: 'absolute',
            backgroundColor: '#45494D',
            zIndex: -1,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewFlatListHeaderContainer: {
            width: '100%',
            paddingTop: 14,
            backgroundColor: '#45494D',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewFlatListHeaderSubContainer: {
            width: '90%',
            alignSelf: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewFlatListHeader: {
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        ReviewContentContainerStyle: {
            paddingTop: 14,
            paddingBottom: 14,
            borderBottomStartRadius: 28,
            borderBottomEndRadius: 28,
            backgroundColor: '#45494D',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewDataContainer: {
            width: '90%',
            marginBottom: 10,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewDataIconContainer: {
            width: '8%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewDataIcon: {
            width: 18,
            height: 18,
        },
        ReviewTitleAndSubTitleContainer: {
            width: '90%',
            flexDirection: 'column',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewTitleContainer: {
            width: '100%',
            paddingBottom: 4,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Medium',
            color: '#FFFFFF',
        },
        ReviewSubTitleContainer: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ReviewSubTitle: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
            opacity: 0.6,
        },
    });
};

export default getStyles;
