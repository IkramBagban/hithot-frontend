import { Platform, StyleSheet } from 'react-native';

type HeaderStyles = {
    HeaderContainer: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    HeaderSubContainer: {};
    TitleContainer: {};
    Title: {};
    SubTitleContainer: {};
    SubTitle: {};
};

const getStyles = (): HeaderStyles => {
    return StyleSheet.create({
        HeaderContainer: {
            width: '100%',
            paddingTop: Platform.OS === 'ios' ? 60 : 40,
            paddingBottom: 20,
            backgroundColor: '#309E3A',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderSubContainer: {
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TitleContainer: {
            width: '70%',
            alignItems: 'flex-start',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            textAlign: 'left',
            fontSize: 20,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        SubTitleContainer: {
            width: '28%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubTitle: {
            textAlign: 'right',
            fontSize: 20,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
    });
};

export default getStyles;
