import { Dimensions, Platform, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type AllStyles = {
    Container: {};
    SubContainer: {};
    DetailsContainer: {};
    ActionTitleContainer: {};
    ActionTitle: {};
    RowContainer: {};
    TitleContainer: {};
    Title: {};
    SubTitleContainer: {};
    SubTitle: {};
    ButtonContainer: {};
    ButtonSubContainer: {};
    ButtonTitle: {};
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubContainer: {
            width: '90%',
            paddingVertical: 14,
            paddingHorizontal: 14,
            borderRadius: 14,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#333B42',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DetailsContainer: {
            width: '66%',
            flexDirection: 'column',
            justifyContent: 'space-around',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActionTitleContainer: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActionTitle: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
            opacity: 0.6,
        },
        RowContainer: {
            width: '100%',
            paddingTop: 2,
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 24,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
            opacity: 0.8,
        },
        SubTitleContainer: {
            paddingLeft: 6,
            paddingRight: 6,
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubTitle: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#EC4545',
        },
        ButtonContainer: {
            width: '32%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonSubContainer: {
            paddingVertical: 8,
            paddingHorizontal: 10,
            borderRadius: 6,
            backgroundColor: '#FFFFFF',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonTitle: {
            fontSize: 14,
            fontFamily: 'Figtree-Medium',
            color: '#EB853C',
        },
    });
};

export default getStyles;
