import { Dimensions, Platform, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type AllStyles = {
    Container: {};
    SubContainer: {};
    IconContainer: {};
    IconRadiusContainer: {};
    Icon: {};
    Absolute: {};
    DetailsContainer: {};
    RowContainer: {};
    PriceContainer: {};
    Price: {};
    PercentageContainer: {};
    Percentage: {};
    ActionTitleContainer: {};
    ActionTitle: {};
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
        IconContainer: {
            width: '18%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IconRadiusContainer: {
            width: 46,
            height: 46,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 18,
            height: 18,
        },
        Absolute: {
            width: WIDTH,
            height: HEIGHT,
            position: 'absolute',
            backgroundColor: '#3DD598',
            opacity: 0.2,
        },
        DetailsContainer: {
            width: '80%',
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
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Percentage: {
            fontSize: 14,
            fontFamily: 'Figtree-SemiBold',
            color: '#3DD598',
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
    });
};

export default getStyles;
