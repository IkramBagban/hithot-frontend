import { Platform, StyleSheet } from 'react-native';

type AllStyles = {
    Container: {
        width: string;
        paddingTop: number;
        paddingBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    ContentContainerStyle: {};
    ProfileContainer: {};
    ImageRadiusContainer: {};
    Image: {};
    EditPictureButtonContainer: {};
    EditPictureIconContainer: {};
    EditPictureIcon: {};
    EditPictureTitleContainer: {};
    EditPictureTitle: {};
    InputContentContainerStyle: {};
    InputContainer: {};
    InputTitleContainer: {};
    InputTitle: {};
    TextInputContainer: {};
    TextInput: {};
    ActionContainer: {};
    ActionTitleContainer: {};
    ActionTitle: {};
    ActionButtonContainer: {};
    IconContainer: {};
    IconRadiusContainer: {};
    Icon: {};
    TitleContainer: {};
    Title: {};
    CategoryContainer: {};
    CategorySubContainer: {};
    CategoryTitleContainer: {};
    CategoryTitle: {};
    CategoryIconContainer: {};
    CategoryIcon: {};
    DropDownContainer: {};
    DropDownContentContainerStyle: {};
    DropDownTitleContainer: {};
    DropDownTitle: {};
};

const getStyles = (): AllStyles => {
    return StyleSheet.create({
        Container: {},
        ProfileContainer: {
            width: '90%',
            alignSelf: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ContentContainerStyle: {
            paddingBottom: 100,
        },
        ImageRadiusContainer: {
            width: 66,
            height: 66,
            borderRadius: 1000,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Image: {
            width: 66,
            height: 66,
        },
        EditPictureButtonContainer: {
            alignSelf: 'center',
            marginTop: 14,
            alignItems: 'center',
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        EditPictureIconContainer: {
            marginRight: 8,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        EditPictureIcon: {
            width: 10,
            height: 10,
        },
        EditPictureTitleContainer: {
            // borderWidth: 1,
            // borderColor: 'red',
        },
        EditPictureTitle: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: '#EB853C',
        },
        InputContentContainerStyle: {
            paddingTop: 40,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        InputContainer: {
            width: '90%',
            marginBottom: 14,
            alignSelf: 'center',
            flexDirection: 'column',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        InputTitleContainer: {
            width: '100%',
            marginBottom: 14,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        InputTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
            opacity: 0.6,
        },
        TextInputContainer: {
            width: '100%',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 8,
            backgroundColor: '#404449',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        TextInput: {
            margin: 0,
            padding: 0,
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
        ActionContainer: {
            width: '90%',
            alignSelf: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        ActionTitleContainer: {
            width: '100%',
            marginBottom: 14,
        },
        ActionTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#EB853C',
        },
        ActionButtonContainer: {
            width: '100%',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#404449',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IconContainer: {
            width: '12%',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IconRadiusContainer: {
            width: 28,
            height: 28,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#53575B',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 14,
            height: 14,
        },
        TitleContainer: {
            width: '50%',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
        CategoryContainer: {
            width: '36%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        CategorySubContainer: {
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 6,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#53575B',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        CategoryTitleContainer: {
            marginRight: 8,
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        CategoryTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
        CategoryIconContainer: {
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        CategoryIcon: {
            width: 10,
            height: 10,
        },
        DropDownContainer: {
            // width: '100%',
            top: 0,
            borderRadius: 8,
            position: 'absolute',
            backgroundColor: '#53575B',
            elevation: 10,
            zIndex: 1,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DropDownTitleContainer: {
            width: '100%',
            paddingVertical: 10,
            paddingHorizontal: 14,
            alignSelf: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        DropDownTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: '#FFFFFF',
        },
        FooterContainer: {
            width: '100%',
            paddingTop: 20,
            paddingBottom: Platform.OS === 'ios' ? 60 : 20,
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
