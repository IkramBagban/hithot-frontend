import { Dimensions, Platform, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type AllStyles = {
    Container: {};
    SubContainer: {};
    HeaderContainer: {};
    HeaderTitle: {};
    ChartContainer: {};
    ChartSubContainer: {};
    ActionContainer: {};
    ActionDetailsContainer: {};
    ActionTitleContainer: {};
    ActionTitle: {};
    ActionSubTitleContainer: {};
    ActionSubTitle: {};
    DataContainer: {};
    DataSubContainer: {};
    RoundContainer: {};
    Round: {};
    DetailsContainer: {};
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
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderTitle: {
            fontSize: 18,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        ChartContainer: {
            width: '100%',
            // paddingLeft: WIDTH / 18,
            paddingBottom: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ChartSubContainer: {
            width: '90%',
            alignSelf: 'center',
            // alignItems: 'center',
            // justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActionContainer: {
            width: '100%',
            height: 220,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActionDetailsContainer: {
            width: 162,
            height: 162,
            borderRadius: 1000,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#333B42',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActionTitleContainer: {
            width: '90%',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActionTitle: {
            fontSize: 28,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        ActionSubTitleContainer: {
            width: '90%',
            paddingTop: 4,
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActionSubTitle: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
            opacity: 0.6,
        },
        DataContainer: {
            width: '90%',
            paddingTop: 14,
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DataSubContainer: {
            width: '48%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        RoundContainer: {
            width: '18%',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Round: {
            width: 18,
            height: 18,
            borderRadius: 1000,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DetailsContainer: {
            width: '80%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 14,
            fontFamily: 'Figtree-Medium',
            color: '#FFFFFF',
        },
        SubTitleContainer: {
            width: '100%',
            paddingTop: 4,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
    });
};

export default getStyles;
