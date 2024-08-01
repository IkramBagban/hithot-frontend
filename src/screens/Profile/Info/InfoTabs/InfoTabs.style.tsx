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
    CountContainer: {};
    CountText: {};
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
            backgroundColor: '#3D464F',
            elevation: 0,
        },
        TabBarItemStyle: {
            width: null,
            height: null,
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
            paddingLeft: WIDTH / 18,
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
            paddingVertical: 8,
            paddingHorizontal: 12,
            marginRight: 14,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderWidth: 1.28,
            borderColor: '#FFFFFF',
        },
        TitleContainer: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleText: {
            fontSize: 14,
            fontFamily: 'Figtree-Medium',
            color: '#FFFFFF',
        },
        CountContainer: {
            paddingVertical: 4,
            paddingHorizontal: 6,
            marginLeft: 10,
            borderRadius: 1000,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        CountText: {
            fontSize: 12,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
    });
};

export default getStyles;
