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
    HeaderContainer: {};
    HeaderText: {};
    ContentContainerStyle: {};
    FlatListContentContainerStyle: {};
    SeparatorContainer: {};
    DataContainer: {};
    TitleContainer: {};
    Title: {};
    IconAndSubTitleContainer: {};
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
        HeaderContainer: {
            width: '90%',
            alignSelf: 'center',
            paddingVertical: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderText: {
            fontSize: 20,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        FlatListContentContainerStyle: {
            paddingBottom: Platform.OS === 'ios' ? 100 : 60,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SeparatorContainer: {
            width: '90%',
            alignSelf: 'center',
            height: 0,
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
            borderBottomWidth: 1,
            borderBottomColor: '#3C4044',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            width: '28%',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        IconAndSubTitleContainer: {
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IconContainer: {
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 20,
            height: 20,
        },
        SubTitleContainer: {
            marginLeft: 8,
            alignItems: 'flex-end',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubTitle: {
            textAlign: 'right',
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
    });
};

export default getStyles;
