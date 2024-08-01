import { Dimensions, Platform, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type AllStyles = {
    Container: {};
    SubContainer: {};
    HeaderContainer: {};
    TitleContainer: {};
    Title: {};
    ActionButtonContainer: {};
    ActionButtonTextContainer: {};
    ActionButtonText: {};
    ActionButtonIconContainer: {};
    ActionButtonIcon: {};
    ChartContainer: {};
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
            borderRadius: 14,
            alignSelf: 'center',
            backgroundColor: '#333B42',
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderContainer: {
            width: '90%',
            paddingVertical: 14,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            maxWidth: '50%',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 18,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        ActionButtonContainer: {
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderRadius: 4,
            justifyContent: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#ADB1B3',
        },
        ActionButtonTextContainer: {
            paddingRight: 6,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActionButtonText: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
            opacity: 0.6,
        },
        ActionButtonIconContainer: {
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActionButtonIcon: {
            width: 10,
            height: 10,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ChartContainer: {
            width: '100%',
            paddingLeft: WIDTH / 24,
            paddingBottom: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
    });
};

export default getStyles;
