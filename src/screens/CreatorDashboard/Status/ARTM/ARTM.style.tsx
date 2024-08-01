import { Dimensions, Platform, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type AllStyles = {
    Container: {};
    SubContainer: {};
    DetailsContainer: {};
    RowContainer: {};
    PriceContainer: {};
    Price: {};
    PercentageContainer: {};
    Percentage: {};
    IconContainer: {};
    Icon: {};
    ActionTitleContainer: {};
    ActionTitle: {};
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
        RowContainer: {
            width: '100%',
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        PriceContainer: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Price: {
            fontSize: 22,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        PercentageContainer: {
            paddingLeft: 6,
            paddingRight: 6,
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Percentage: {
            fontSize: 14,
            fontFamily: 'Figtree-SemiBold',
            color: '#FC5A5A',
        },
        IconContainer: {
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 10,
            height: 10,
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
            opacity: 0.8,
        },
        ChartContainer: {
            width: '32%',
            height: 46,
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
    });
};

export default getStyles;
