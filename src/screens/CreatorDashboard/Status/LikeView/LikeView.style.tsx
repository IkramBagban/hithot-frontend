import { Dimensions, Platform, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type AllStyles = {
    Container: {};
    SubContainer: {};
    DetailsContainer: {};
    ChartAndIconContainer: {};
    IconContainer: {};
    Icon: {};
    TitleAndSubTitleContainer: {};
    TitleContainer: {};
    Title: {};
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
            width: '48%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ChartAndIconContainer: {
            // width: '36%',
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IconContainer: {
            position: 'absolute',
            zIndex: 1,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 14,
            height: 14,
        },
        TitleAndSubTitleContainer: {
            width: '68%',
            flexDirection: 'column',
            justifyContent: 'space-around',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 18,
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
