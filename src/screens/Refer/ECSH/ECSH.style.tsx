import { Platform, StyleSheet } from 'react-native';

type AllStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    SubContainer: {};
    HeaderContainer: {};
    HeaderTitle: {};
    ContentContainerStyle: {};
    SeparatorContainer: {};
    SeparatorLineContainer: {};
    SeparatorLine: {};
    DataContainer: {};
    StepsContainer: {};
    StepsRadiusContainer: {};
    StepsTitle: {};
    TitleContainer: {};
    Title: {};
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        Container: {
            width: '100%',
            paddingTop: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SubContainer: {
            width: '90%',
            borderRadius: 10,
            paddingBottom: 18,
            alignSelf: 'center',
            backgroundColor: '#3C4045',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderContainer: {
            width: '90%',
            paddingTop: 14,
            alignSelf: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        HeaderTitle: {
            fontSize: 20,
            fontFamily: 'Figtree-Bold',
            color: '#FFFFFF',
        },
        ContentContainerStyle: {
            paddingTop: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SeparatorContainer: {
            width: '90%',
            alignSelf: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SeparatorLineContainer: {
            width: 40,
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        SeparatorLine: {
            width: 2,
            height: 18,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DataContainer: {
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        StepsContainer: {
            width: '18%',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        StepsRadiusContainer: {
            width: 40,
            height: 40,
            borderRadius: 1000,
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        StepsTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Medium',
            color: '#FFFFFF',
        },
        TitleContainer: {
            width: '82%',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
    });
};

export default getStyles;
