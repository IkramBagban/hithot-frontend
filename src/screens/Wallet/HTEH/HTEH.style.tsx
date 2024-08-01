import { Dimensions, Platform, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type HeaderStyles = {
    Container: {};
    ContentContainerStyle: {};
    DataContainer: {};
    DataSubContainer: {};
    HeaderContainer: {};
    HeaderTitle: {};
    PointsContentContainerStyle: {};
    RowContainer: {};
    TitleContainer: {};
    Title: {};
    SubTitleContainer: {};
    SubTitle: {};
    ButtonContainer: {};
    ButtonSubContainer: {};
    ButtonTitleContainer: {};
    ButtonTitle: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        Container: {
            paddingTop: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ContentContainerStyle: {
            paddingLeft: WIDTH / 18,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DataContainer: {
            width: WIDTH / 1.14,
            marginRight: 14,
            paddingVertical: 14,
            borderRadius: 10,
            backgroundColor: '#3C4045',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DataSubContainer: {
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'column',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderContainer: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderTitle: {
            fontSize: 20,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        PointsContentContainerStyle: {
            paddingTop: 14,
            paddingBottom: 8,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        RowContainer: {
            width: '100%',
            marginBottom: 6,
            justifyContent: 'space-between',
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            width: '6%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
        SubTitleContainer: {
            width: '94%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
        ButtonContainer: {
            width: '100%',
            paddingBottom: 4,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonSubContainer: {
            width: '100%',
            paddingVertical: 14,
            borderRadius: 6,
            alignSelf: 'center',
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonTitleContainer: {
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ButtonTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Medium',
            color: '#FFFFFF',
        },
    });
};

export default getStyles;
