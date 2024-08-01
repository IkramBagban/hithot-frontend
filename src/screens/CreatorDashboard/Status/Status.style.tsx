import { Dimensions, Platform, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type AllStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    HeaderContainer: {};
    HeaderSubContainer: {};
    HeaderText: {};
    HeaderSubText: {};
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderContainer: {
            width: '100%',
            paddingTop: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderSubContainer: {
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderText: {
            fontSize: 18,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        HeaderSubText: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#EB853C',
        },
    });
};

export default getStyles;
