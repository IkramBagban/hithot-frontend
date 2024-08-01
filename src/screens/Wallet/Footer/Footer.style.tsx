import { Dimensions, Platform, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type HeaderStyles = {
    FooterContainer: {};
    FooterSubContainer: {};
    FooterTitleContainer: {};
    FooterTitle: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        FooterContainer: {
            width: '100%',
            paddingTop: 20,
            paddingBottom: Platform.OS === 'ios' ? 60 : 20,
            backgroundColor: '#2E3337',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        FooterSubContainer: {
            width: '90%',
            paddingVertical: 14,
            borderRadius: 6,
            alignSelf: 'center',
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        FooterTitleContainer: {
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        FooterTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Medium',
            color: '#FFFFFF',
        },
    });
};

export default getStyles;
