// import {
//     FlatList,
//     Image,
//     ScrollView,
//     Text,
//     TouchableOpacity,
//     View,
//     TextInput,
// } from 'react-native';
// import React, { useState } from 'react';
// import { useRoute } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
// import getStyles from './EditProfile.style'; // Saparate Style //
// import Header from './Header/Header';
// import { EditProfileStore } from '../../../store/EditProfileStore';

// const EditProfile: React.FC = () => {
//     const route = useRoute();

//     const { user } = route.params;

//     const [ShowDropDown, HideDropDown] = useState(false);
//     const [selectedTitle, setSelectedTitle] = useState('Public');
//     const [firstName, setFirstName] = useState<string>('');
//     const [lastName, setLastName] = useState<string>('');
//     const [username, setUsername] = useState<string>('');
//     const [bio, setBio] = useState<string>('');

//     const DropDownManage = () => {
//         HideDropDown(!ShowDropDown);
//     };

//     const handleDropDownSelect = title => {
//         setSelectedTitle(title);
//         HideDropDown(false);
//     };

//     const InputData = [
//         {
//             id: 1,
//             TITLE: 'Your name',
//             PLACEHOLDER: `${user.first_name} ${user.last_name}`,
//         },
//         {
//             id: 2,
//             TITLE: 'User name',
//             PLACEHOLDER: user.username,
//         },
//         {
//             id: 3,
//             TITLE: 'Bio',
//             PLACEHOLDER: user.bio,
//         },
//     ];

//     const InputRenderItem = ({ item }) => {
//         return (
//             <>
//                 <View style={[styles.InputContainer]}>
//                     <View style={[styles.InputTitleContainer]}>
//                         <Text style={[styles.InputTitle]}>{item.TITLE}</Text>
//                     </View>
//                     <View style={[styles.TextInputContainer]}>
//                         <TextInput
//                             value={item.value}
//                             onChangeText={item.onChangeText}
//                             placeholder={item.PLACEHOLDER}
//                             placeholderTextColor={'#B3B4B6'}
//                             style={[styles.TextInput]}
//                         />
//                     </View>
//                 </View>
//             </>
//         );
//     };

//     const DropDownData = [
//         {
//             id: 1,
//             TITLE: 'Private',
//         },
//         {
//             id: 2,
//             TITLE: 'Public',
//         },
//     ];

//     const DropDownRenderItem = ({ item }) => {
//         return (
//             <>
//                 <TouchableOpacity
//                     activeOpacity={0.8}
//                     onPress={() => handleDropDownSelect(item.TITLE)}>
//                     <View style={[styles.DropDownTitleContainer]}>
//                         <Text style={[styles.DropDownTitle]}>{item.TITLE}</Text>
//                     </View>
//                 </TouchableOpacity>
//             </>
//         );
//     };

//     const styles = getStyles();

//     return (
//         <>
//             <LinearGradient
//                 colors={['#21262B', '#21262B']}
//                 start={{ x: 1, y: 1 }}
//                 end={{ x: 1, y: 0 }}
//                 style={{ flex: 1 }}>
//                 <Header />
//                 <ScrollView
//                     showsVerticalScrollIndicator={false}
//                     contentContainerStyle={[styles.ContentContainerStyle]}>
//                     <View style={[styles.ProfileContainer]}>
//                         <View style={[styles.ImageRadiusContainer]}>
//                             <Image
//                                 source={{ uri: user.profile_pic }}
//                                 resizeMode={'cover'}
//                                 style={[styles.Image]}
//                             />
//                         </View>
//                         <TouchableOpacity activeOpacity={0.8}>
//                             <View style={[styles.EditPictureButtonContainer]}>
//                                 <View style={[styles.EditPictureIconContainer]}>
//                                     <Image
//                                         source={require('../../../assets/pencil.png')}
//                                         resizeMode={'contain'}
//                                         style={[styles.EditPictureIcon]}
//                                     />
//                                 </View>
//                                 <View
//                                     style={[styles.EditPictureTitleContainer]}>
//                                     <Text style={[styles.EditPictureTitle]}>
//                                         Edit picture
//                                     </Text>
//                                 </View>
//                             </View>
//                         </TouchableOpacity>
//                     </View>
//                     <FlatList
//                         data={InputData}
//                         renderItem={InputRenderItem}
//                         nestedScrollEnabled={true}
//                         showsVerticalScrollIndicator={false}
//                         contentContainerStyle={[
//                             styles.InputContentContainerStyle,
//                         ]}
//                     />
//                     <View style={[styles.ActionContainer]}>
//                         <TouchableOpacity activeOpacity={0.8}>
//                             <View style={[styles.ActionTitleContainer]}>
//                                 <Text style={[styles.ActionTitle]}>
//                                     {'+ Add link'}
//                                 </Text>
//                             </View>
//                         </TouchableOpacity>
//                         <View style={[styles.ActionButtonContainer]}>
//                             <View style={[styles.IconContainer]}>
//                                 <View style={[styles.IconRadiusContainer]}>
//                                     <Image
//                                         source={require('../../../assets/Canview.png')}
//                                         resizeMode={'contain'}
//                                         style={[styles.Icon]}
//                                     />
//                                 </View>
//                             </View>
//                             <View style={[styles.TitleContainer]}>
//                                 <Text style={[styles.Title]}>
//                                     {'Who can view'}
//                                 </Text>
//                             </View>
//                             <View style={[styles.CategoryContainer]}>
//                                 <TouchableOpacity
//                                     activeOpacity={0.8}
//                                     onPress={DropDownManage}>
//                                     <View style={[styles.CategorySubContainer]}>
//                                         <View
//                                             style={[
//                                                 styles.CategoryTitleContainer,
//                                             ]}>
//                                             <Text
//                                                 style={[styles.CategoryTitle]}>
//                                                 {selectedTitle}
//                                             </Text>
//                                         </View>
//                                         <View
//                                             style={[
//                                                 styles.CategoryIconContainer,
//                                             ]}>
//                                             <Image
//                                                 source={require('../../../assets/chevronDown.png')}
//                                                 resizeMode={'contain'}
//                                                 style={[styles.CategoryIcon]}
//                                             />
//                                         </View>
//                                     </View>
//                                 </TouchableOpacity>
//                                 {ShowDropDown && (
//                                     <View style={[styles.DropDownContainer]}>
//                                         <FlatList
//                                             data={DropDownData}
//                                             renderItem={DropDownRenderItem}
//                                             showsVerticalScrollIndicator={false}
//                                             contentContainerStyle={[
//                                                 styles.DropDownContentContainerStyle,
//                                             ]}
//                                         />
//                                     </View>
//                                 )}
//                             </View>
//                         </View>
//                     </View>
//                 </ScrollView>
//                 <View style={[styles.FooterContainer]}>
//                     <TouchableOpacity activeOpacity={0.8}>
//                         <LinearGradient
//                             colors={['#F7C900', '#EB853C']}
//                             start={{ x: 1, y: 1 }}
//                             end={{ x: 1, y: 0 }}
//                             style={[styles.FooterSubContainer]}>
//                             <View style={[styles.FooterTitleContainer]}>
//                                 <Text style={[styles.FooterTitle]}>
//                                     {'Save'}
//                                 </Text>
//                             </View>
//                         </LinearGradient>
//                     </TouchableOpacity>
//                 </View>
//             </LinearGradient>
//         </>
//     );
// };

// export default EditProfile;

import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Alert,
    StyleSheet,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './EditProfile.style'; // Separate Style //
import Header from './Header/Header';
import { EditProfileStore } from '../../../store/EditProfileStore';
import Toast, { BaseToast, SuccessToast } from 'react-native-toast-message';
import useThemeStyles from '../../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../config';
const EditProfile: React.FC = () => {
    const route = useRoute();

    const { user } = route.params;
    console.log("user",user);
    

    const navigation = useNavigation();

    const [ShowDropDown, HideDropDown] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState('Public');
    const [firstName, setFirstName] = useState<string>(user.first_name);
    const [lastName, setLastName] = useState<string>(user.last_name);
    const [username, setUsername] = useState<string>(user.username);
    const [bio, setBio] = useState<string>(user.bio);

    const DropDownManage = () => {
        HideDropDown(!ShowDropDown);
    };

    const handleDropDownSelect = (title: string) => {
        setSelectedTitle(title);
        HideDropDown(false);
    };

    const showToast = () => {
        Toast.show({
            type: 'success',
            // text1: 'Hello',
            text2: 'Profile updated successfully 👋',
        });
        setTimeout(() => {
            navigation.navigate('Profile');
        }, 100);
    };

    const InputData = [
        {
            id: 1,
            TITLE: 'Your name',
            PLACEHOLDER: `${user.first_name} ${user.last_name}`,
            value: firstName,
            onChangeText: setFirstName,
        },
        {
            id: 2,
            TITLE: 'User name',
            PLACEHOLDER: user.username,
            value: username,
            onChangeText: setUsername,
        },
        {
            id: 3,
            TITLE: 'Bio',
            PLACEHOLDER: user.bio,
            value: bio,
            onChangeText: setBio,
        },
    ];

    const InputRenderItem = ({ item }: { item: any }) => {
        return (
            <View style={styles.InputContainer}>
                <View style={styles.InputTitleContainer}>
                    <Text style={[styles.InputTitle,{color:Theme.TextColor.color}]}>{item.TITLE}</Text>
                </View>
                <View
                    style={[
                        styles.TextInputContainer,
                        {
                            backgroundColor:
                                Theme.subcontainerColor.backgroundColor,
                            borderWidth: !isDark ? 0.5 : null,
                        },
                    ]}>
                    <TextInput
                        value={item.value}
                        onChangeText={item.onChangeText}
                        placeholder={item.PLACEHOLDER}
                        placeholderTextColor={Theme.TextColor.color}
                        style={[styles.TextInput,{color:Theme.TextColor.color}]}
                    />
                </View>
            </View>
        );
    };

    const DropDownData = [
        {
            id: 1,
            TITLE: 'Private',
        },
        {
            id: 2,
            TITLE: 'Public',
        },
    ];

    const DropDownRenderItem = ({ item }: { item: any }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleDropDownSelect(item.TITLE)}>
                <View style={styles.DropDownTitleContainer}>
                    <Text style={styles.DropDownTitle}>{item.TITLE}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const toastConfig = {
        success: (internalState: any) => (
            <BaseToast
                {...internalState}
                style={{
                    width: '90%',
                    height: null,
                    padding: null,
                    paddingLeft: null,
                    paddingVertical: 14,
                    paddingHorizontal: 14,
                    borderRadius: 10,
                    alignSelf: 'center',
                    backgroundColor: '#FFFFFF',
                    borderLeftWidth: null,
                }}
                renderLeadingIcon={() => (
                    <Image
                        source={require('../../../assets/profileupdated.png')}
                        resizeMode="contain"
                        style={{ width: 16, height: 16 }}
                    />
                )}
                contentContainerStyle={{
                    width: '100%',
                    alignSelf: 'center',
                    alignItems: 'flex-start',
                    margin: null,
                    paddingLeft: null,
                    // borderWidth: 1,
                    // borderColor: 'red',
                }}
                text2Style={{
                    textAlign: 'left',
                    left: null,
                    margin: null,
                    marginLeft: null,
                    fontSize: 16,
                    fontFamily: 'Figtree-Regular',
                    color: '#0A4500',
                }}
            />
        ),
    };

    const handleSave = async () => {
        const profileData: ProfileData = {
            fb_id:user?.fb_id,
            first_name: firstName,
            last_name: lastName,
            username: username,
            gender: user?.gender,
            bio: bio,
            // Add other fields as necessary
        };
        console.log('profileData', profileData);
        
        try {
            // console.log('profiledata', profileData);

            await EditProfileStore(profileData);
            showToast();
            // Alert.alert('Success', 'Profile updated successfully!');
            navigation.navigate('Profile');
        } catch (error) {
            Alert.alert('Error', 'Failed to update profile. Please try again.');
        }
    };

    const styles = getStyles();
    

    const Theme = useThemeStyles(styleCreator);

     console.log('theme', Theme);
     const [isDark, setIsDark] = useState('');

     useEffect(() => {
         const savedTheme = async () => {
             const theme = await AsyncStorage.getItem(StorageKey.$THEME);
             console.log('theme', theme);

             if (theme) {
                 setIsDark(theme === 'dark');
             }
         };
         savedTheme();
     }, []);

    return (
        <View style={{ backgroundColor: Theme.ContainerColor.backgroundColor }}>
            <Header />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.ContentContainerStyle]}>
                <View style={styles.ProfileContainer}>
                    <View style={styles.ImageRadiusContainer}>
                        <Image
                            source={{ uri: user.profile_pic }}
                            resizeMode={'cover'}
                            style={styles.Image}
                        />
                    </View>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.EditPictureButtonContainer}>
                            <View style={styles.EditPictureIconContainer}>
                                <Image
                                    source={require('../../../assets/pencil.png')}
                                    resizeMode={'contain'}
                                    style={styles.EditPictureIcon}
                                />
                            </View>
                            <View style={styles.EditPictureTitleContainer}>
                                <Text style={styles.EditPictureTitle}>
                                    Edit picture
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={InputData}
                    renderItem={InputRenderItem}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.InputContentContainerStyle}
                />
                <View style={styles.ActionContainer}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.ActionTitleContainer}>
                            <Text style={styles.ActionTitle}>
                                {'+ Add link'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={[
                            styles.ActionButtonContainer,
                            {
                                backgroundColor:
                                    Theme.subcontainerColor.backgroundColor,
                                borderWidth: !isDark ? 0.5 : null,
                            },
                        ]}>
                        <View style={[styles.IconContainer]}>
                            <View
                                style={[
                                    styles.IconRadiusContainer,
                                    {
                                        backgroundColor:
                                            Theme.ActionColor.backgroundColor,
                                    },
                                ]}>
                                <Image
                                    source={require('../../../assets/Canview.png')}
                                    resizeMode={'contain'}
                                    style={[
                                        styles.Icon,
                                        { tintColor: Theme.IconColor.tintColor },
                                    ]}
                                />
                            </View>
                        </View>
                        <View style={styles.TitleContainer}>
                            <Text
                                style={[
                                    styles.Title,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {'Who can view'}
                            </Text>
                        </View>
                        <View style={[styles.CategoryContainer]}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={DropDownManage}>
                                <View
                                    style={[
                                        styles.CategorySubContainer,
                                        {
                                            backgroundColor:
                                                Theme.subcontainerColor
                                                    .backgroundColor,
                                            borderWidth: !isDark ? 0.5 : null,
                                        },
                                    ]}>
                                    <View style={styles.CategoryTitleContainer}>
                                        <Text style={[styles.CategoryTitle,{color:Theme.TextColor.color}]}>
                                            {selectedTitle}
                                        </Text>
                                    </View>
                                    <View style={styles.CategoryIconContainer}>
                                        <Image
                                            source={require('../../../assets/chevronDown.png')}
                                            resizeMode={'contain'}
                                            style={[styles.CategoryIcon,{tintColor:Theme.IconColor.tintColor}]}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {ShowDropDown && (
                                <View style={styles.DropDownContainer}>
                                    <FlatList
                                        data={DropDownData}
                                        renderItem={DropDownRenderItem}
                                        showsVerticalScrollIndicator={false}
                                        contentContainerStyle={
                                            styles.DropDownContentContainerStyle
                                        }
                                    />
                                </View>
                            )}
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.FooterContainer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleSave()}>
                    <LinearGradient
                        colors={['#F7C900', '#EB853C']}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.FooterSubContainer}>
                        <View style={styles.FooterTitleContainer}>
                            <Text style={styles.FooterTitle}>{'Save'}</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <Toast
                position="top"
                ref={ref => Toast.setRef(ref)}
                config={toastConfig}
            />
        </View>
    );
};

export default EditProfile;


const styleCreator = colors =>
    StyleSheet.create({
        TextColor: {
            color: colors.textColor,
        },
        ActionColor: {
            backgroundColor: colors.bgLightColor,
        },
        TextLightColor: {
            color: colors.textLightColor,
        },
        IconColor: {
            tintColor: colors.iconColor,
        },
        ContainerColor: {
            backgroundColor: colors.bgColor,
        },
        BorderColor: {
            borderColor: colors.activeBorderColor,
        },
        subcontainerColor: {
            backgroundColor: colors.subContainerColor,
        },
    });

