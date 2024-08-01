import { Platform, StyleSheet } from 'react-native';

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
            paddingVertical: 6,
            paddingHorizontal: 10,
            borderRadius: 8,
            marginRight: 8,
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: '#21262B',
            borderWidth: 1,
            borderColor: '#3C4044',
        },
        IconContainer: {
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 18,
            height: 18,
        },
        TitleContainer: {
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 14,
            fontFamily: 'Figtree-Medium',
            color: 'white',
        },
    });
};

export default getStyles;
