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
    DataContainer: {};
    TitleContainer: {};
    Title: {};
    IconContainer: {};
    Icon: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        ContentContainerStyle: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        FlatListContentContainerStyle: {},
        DataContainer: {
            width: '90%',
            paddingVertical: 14,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: '#3C4044',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            width: '84%',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 20,
            fontFamily: 'Figtree-Regular',
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
            width: 14,
            height: 14,
        },
    });
};

export default getStyles;
