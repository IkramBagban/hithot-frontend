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
    FlatListContentContainerStyle: {};
    SeparatorContainer: {};
    DataContainer: {};
    TitleContainer: {};
    Title: {};
    IconContainer: {};
    Icon: {};
    SubTitleContainer: {};
    SubTitle: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        ContentContainerStyle: {
            paddingTop: 20,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        FlatListContentContainerStyle: {},
        SeparatorContainer: {
            width: '90%',
            alignSelf: 'center',
            height: 0.8,
            backgroundColor: '#3C4044',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DataContainer: {
            width: '90%',
            paddingVertical: 18,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderBottomWidth: 1,
            // borderBottomColor: '#3C4044',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            width: '72%',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 16,
            fontFamily: 'Figtree-Medium',
            color: '#FFFFFF',
        },
        IconContainer: {
            width: '14%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            opacity: 0.6,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 12,
            height: 12,
        },
        SubTitleContainer: {
            width: '90%',
            alignSelf: 'center',
            marginBottom: 18,
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
