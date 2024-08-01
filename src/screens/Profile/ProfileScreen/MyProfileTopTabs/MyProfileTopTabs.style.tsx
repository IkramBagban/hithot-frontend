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
    TabBarIndicatorStyle: {};
    TabBarStyle: {};
    TabBarItemStyle: {};
    TabBarContentContainerStyle: {};
    TabBarLableStyle: {};
    TabMainContainer: {};
    TitleContainer: {};
    TitleText: {};
    Image: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        Container: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TabBarIndicatorStyle: {
            height: 0,
            backgroundColor: '#EB853C',
        },
        TabBarStyle: {
            height: null,
            marginTop: 14,
            // backgroundColor: '#21262B',
            elevation: 0,
        },
        TabBarItemStyle: {
            width: null,
            height: 40,
            margin: null,
            padding: null,
            paddingTop: null,
            paddingBottom: null,
            paddingVertical: null,
            paddingHorizontal: null,
            marginVertical: null,
            marginHorizontal: null,
            paddingStart: null,
            paddingEnd: null,
            paddingLeft: null,
            paddingRight: null,
            top: null,
            bottom: null,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TabBarContentContainerStyle: {
            // paddingLeft: WIDTH / 18,
            height: null,
            width: 'auto',
        },
        TabBarLableStyle: {
            top: null,
            bottom: null,
            fontSize: 14,
            fontFamily: 'Figtree-Medium',
            color: '#FFFFFF',
        },
        TabMainContainer: {
            paddingBottom: 10,
            paddingHorizontal: WIDTH / 18,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            paddingLeft: 12,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleText: {
            fontSize: 16,
            fontFamily: 'Figtree-Medium',
            color: '#FFFFFF',
        },
        Image: {
            width: 18,
            height: 18,
        },
    });
};

export default getStyles;
