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
    IconAndTitleContainer: {};
    IconContainer: {};
    Icon: {};
    TitleContainer: {};
    Title: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            paddingTop: Platform.OS === 'ios' ? 60 : 40,
            paddingBottom: 14,
            backgroundColor: '#21262B',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IconAndTitleContainer: {
            width: '90%',
            paddingVertical: 14,
            paddingHorizontal: 14,
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: '#565A5E',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IconContainer: {
            width: '10%',
            alignItems: 'flex-start',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 18,
            height: 18,
        },
        TitleContainer: {
            width: '90%',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: 'white',
            opacity: 0.6,
        },
        ContentContainerStyle: {
            paddingTop: 14,
            paddingLeft: WIDTH / 18,
            // borderWidth: 1,
            // borderColor: 'red',
        },
    });
};

export default getStyles;
