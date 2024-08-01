// import {
//     Dimensions,
//     FlatList,
//     Image,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
// } from 'react-native';
// import React, { useState } from 'react';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
// import getStyles from './Info.style'; // Saparate Style //
// import { verificationStore } from '../../../../../store/verificationStore';

// const WIDTH = Dimensions.get('screen').width;
// const HEIGHT = Dimensions.get('screen').height;

// const Info: React.FC = () => {
//     const navigation = useNavigation();

//     const [attechment, setAttechment] = useState(String);
//     const [attechment1, setAttechment1] = useState(String);
//     const [facebook, setFacebook] = useState(String);
//     const [youtube, setYoutube] = useState(String);
//     const [instagram, setInstagram] = useState(String);

//     const handleSubmit = async () => {
//         const verificationData: VerificationData = {
//             fb_id: '99898806172469',
//             attechment: attechment,
//             attechment1: attechment1,
//             facebook: facebook,
//             youtube: youtube,
//             instagram: instagram,
//             // Add other fields as necessary
//         };

//         try {
//             console.log('verificationData', verificationData);

//             const response = await verificationStore(verificationData);
//             // showToast(response);
//             console.log('response', response);

//             // navigation.navigate('Profile');
//         } catch (error) {
//             console.log('Failed Log', error);
//         }
//     };

//     const InfoData = [
//         {
//             id: 1,
//             InfoSubTitle:
//                 'We will be further evaluating your content based on the virality/shares, engagement and quality/likes. We are very happy to have you as a part of the HITHOT family.',
//         },
//         {
//             id: 2,
//             InfoSubTitle:
//                 'We required a government issued photo ID that shows your name and date of birth e.g driving license, passport or national identification card or official business documents (tex filling, recent utility bill, artical of incorporation) in order to review your request.',
//         },
//     ];

//     const InfoRenderItem = ({ item }) => {
//         return (
//             <View style={styles.InfoSubTitleContainer}>
//                 <Text style={styles.InfoSubTitle}>{item.InfoSubTitle}</Text>
//             </View>
//         );
//     };

//     const InfoInputData = [
//         {
//             id: 1,
//             TITLE: 'Instagram URL',
//             PLACEHOLDER: 'Input text here',
//             value: instagram,
//             onChangeText: setInstagram,
//         },
//         {
//             id: 2,
//             TITLE: 'Facebook URL',
//             PLACEHOLDER: 'Input text here',
//             value: facebook,
//             onChangeText: setFacebook,
//         },
//         {
//             id: 3,
//             TITLE: 'Youtube URL',
//             PLACEHOLDER: 'Input text here',
//             value: youtube,
//             onChangeText: setYoutube,
//         },
//     ];

//     const InfoInputRenderItem = ({ item }) => {
//         return (
//             <View style={styles.InputContainer}>
//                 <View style={styles.InputTitleContainer}>
//                     <Text style={styles.InputTitle}>{item.TITLE}</Text>
//                 </View>
//                 <View style={styles.TextInputContainer}>
//                     <TextInput
//                         keyboardType="url"
//                         placeholder={item.PLACEHOLDER}
//                         placeholderTextColor={'#B3B4B6'}
//                         value={item.value}
//                         onChangeText={item.onChangeText}
//                         style={styles.TextInput}
//                     />
//                 </View>
//             </View>
//         );
//     };

//     const InfoActionButtonsData = [
//         {
//             id: 1,
//             TITLE: 'Document\nfront image',
//         },
//         {
//             id: 2,
//             TITLE: 'Document\nback image',
//         },
//     ];

//     const InfoActionButtonsRenderItem = ({ item }) => {
//         return (
//             <TouchableOpacity activeOpacity={0.8}>
//                 <View style={styles.ActionButtonContainer}>
//                     <View style={styles.ActionButtonIconContainer}>
//                         <LinearGradient
//                             colors={['#F7C900', '#EB853C']}
//                             start={{ x: 1, y: 1 }}
//                             end={{ x: 1, y: 0 }}
//                             style={styles.ActionButtonIconRadiusContainer}>
//                             <Image
//                                 source={require('../../../../../assets/plusPrimary.png')}
//                                 resizeMode={'contain'}
//                                 style={styles.ActionButtonIcon}
//                             />
//                         </LinearGradient>
//                     </View>
//                     <View style={styles.ActionButtonTitleContainer}>
//                         <Text style={styles.ActionButtonTitle}>
//                             {item.TITLE}
//                         </Text>
//                     </View>
//                 </View>
//             </TouchableOpacity>
//         );
//     };

//     const styles = getStyles();

//     return (
//         <>
//             <View style={styles.InfoDetailsContainer}>
//                 <View style={styles.InfoHeaderContainer}>
//                     <Text style={styles.InfoHeader}>
//                         {'Fill the details below to get verified'}
//                     </Text>
//                 </View>
//                 <FlatList
//                     data={InfoData}
//                     renderItem={InfoRenderItem}
//                     nestedScrollEnabled={true}
//                     showsVerticalScrollIndicator={false}
//                     contentContainerStyle={styles.InfoContentContainerStyle}
//                 />
//                 <FlatList
//                     data={InfoInputData}
//                     renderItem={InfoInputRenderItem}
//                     nestedScrollEnabled={true}
//                     showsVerticalScrollIndicator={false}
//                     contentContainerStyle={
//                         styles.InfoInputContentContainerStyle
//                     }
//                 />
//                 <FlatList
//                     data={InfoActionButtonsData}
//                     renderItem={InfoActionButtonsRenderItem}
//                     horizontal={true}
//                     nestedScrollEnabled={true}
//                     showsHorizontalScrollIndicator={false}
//                     contentContainerStyle={
//                         styles.InfoActionButtonsContentContainerStyle
//                     }
//                 />
//                 <TouchableOpacity onPress={handleSubmit}>
//                     <Text style={{ fontSize: 100, color: '#FFFFFF' }}>
//                         {'SUBMIT'}
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//         </>
//     );
// };

// export default Info;

// import {
//     Dimensions,
//     FlatList,
//     Image,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
// } from 'react-native';
// import React, { useCallback, useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import DocumentPicker, { types } from 'react-native-document-picker';
// import LinearGradient from 'react-native-linear-gradient';
// import getStyles from './Info.style'; // Separate Style //
// import { verificationStore } from '../../../../../store/verificationStore';

// const WIDTH = Dimensions.get('screen').width;
// const HEIGHT = Dimensions.get('screen').height;

// const Info: React.FC = () => {
//     const navigation = useNavigation();

//     const [attechment, setAttechment] = useState('');
//     const [attechment1, setAttechment1] = useState('');
//     const [facebook, setFacebook] = useState('');
//     const [youtube, setYoutube] = useState('');
//     const [instagram, setInstagram] = useState('');
//     const [fileResponse, setFileResponse] = useState([]);

//     const [errors, setErrors] = useState({
//         attechment: '',
//         attechment1: '',
//         facebook: '',
//         youtube: '',
//         instagram: '',
//     });

//     const handleDocumentSelection = useCallback(async () => {
//         try {
//             const response = await DocumentPicker.pick({
//                 presentationStyle: 'fullScreen',
//             });
//             setFileResponse(response);
//             console.log('response', response);
//         } catch (err) {
//             console.warn(err);
//         }
//     }, []);

//     const handleSubmit = async () => {
//         // Reset errors
//         setErrors({
//             attechment: '',
//             attechment1: '',
//             facebook: '',
//             youtube: '',
//             instagram: '',
//         });

//         let valid = true;

//         if (!attechment) {
//             setErrors(prev => ({
//                 ...prev,
//                 attechment: 'Attachment is required',
//             }));
//             valid = false;
//         }
//         if (!attechment1) {
//             setErrors(prev => ({
//                 ...prev,
//                 attechment1: 'Attachment1 is required',
//             }));
//             valid = false;
//         }
//         if (!facebook) {
//             setErrors(prev => ({
//                 ...prev,
//                 facebook: 'Facebook URL is required',
//             }));
//             valid = false;
//         }
//         if (!youtube) {
//             setErrors(prev => ({
//                 ...prev,
//                 youtube: 'YouTube URL is required',
//             }));
//             valid = false;
//         }
//         if (!instagram) {
//             setErrors(prev => ({
//                 ...prev,
//                 instagram: 'Instagram URL is required',
//             }));
//             valid = false;
//         }

//         if (valid) {
//             const verificationData = {
//                 fb_id: '99898806172469',
//                 attechment,
//                 attechment1,
//                 facebook,
//                 youtube,
//                 instagram,
//             };

//             try {
//                 console.log('verificationData', verificationData);
//                 const response = await verificationStore(verificationData);
//                 console.log('response', response);
//                 // navigation.navigate('Profile');
//             } catch (error) {
//                 console.log('Failed Log', error);
//             }
//         }
//     };

//     const InfoData = [
//         {
//             id: 1,
//             InfoSubTitle:
//                 'We will be further evaluating your content based on the virality/shares, engagement and quality/likes. We are very happy to have you as a part of the HITHOT family.',
//         },
//         {
//             id: 2,
//             InfoSubTitle:
//                 'We required a government issued photo ID that shows your name and date of birth e.g driving license, passport or national identification card or official business documents (tex filling, recent utility bill, artical of incorporation) in order to review your request.',
//         },
//     ];

//     const InfoRenderItem = ({ item }) => {
//         return (
//             <View style={[styles.InfoSubTitleContainer]}>
//                 <Text style={[styles.InfoSubTitle]}>{item.InfoSubTitle}</Text>
//             </View>
//         );
//     };

//     const InfoInputData = [
//         {
//             id: 1,
//             TITLE: 'Instagram URL',
//             PLACEHOLDER: 'Input text here',
//             value: instagram,
//             onChangeText: setInstagram,
//             error: errors.instagram,
//         },
//         {
//             id: 2,
//             TITLE: 'Facebook URL',
//             PLACEHOLDER: 'Input text here',
//             value: facebook,
//             onChangeText: setFacebook,
//             error: errors.facebook,
//         },
//         {
//             id: 3,
//             TITLE: 'Youtube URL',
//             PLACEHOLDER: 'Input text here',
//             value: youtube,
//             onChangeText: setYoutube,
//             error: errors.youtube,
//         },
//     ];

//     const InfoInputRenderItem = ({ item }) => {
//         return (
//             <View style={[styles.InputContainer]}>
//                 <View style={[styles.InputTitleContainer]}>
//                     <Text style={[styles.InputTitle]}>{item.TITLE}</Text>
//                 </View>
//                 <View style={[styles.TextInputContainer]}>
//                     <TextInput
//                         keyboardType="url"
//                         placeholder={item.PLACEHOLDER}
//                         placeholderTextColor={'#B3B4B6'}
//                         value={item.value}
//                         onChangeText={item.onChangeText}
//                         style={styles.TextInput}
//                     />
//                 </View>
//                 {item.error ? (
//                     <View style={[styles.ErrorContainer]}>
//                         <Text style={[styles.Error]}>{item.error}</Text>
//                     </View>
//                 ) : null}
//             </View>
//         );
//     };

//     const InfoActionButtonsData = [
//         {
//             id: 1,
//             OnPress: handleDocumentSelection,
//             TITLE: 'Document\nfront image',
//         },
//         {
//             id: 2,
//             TITLE: 'Document\nback image',
//         },
//     ];

//     const InfoActionButtonsRenderItem = ({ item }) => {
//         return (
//             <TouchableOpacity activeOpacity={0.8} onPress={item.OnPress}>
//                 <View style={[styles.ActionButtonContainer]}>
//                     <View style={[styles.ActionButtonIconContainer]}>
//                         <LinearGradient
//                             colors={['#F7C900', '#EB853C']}
//                             start={{ x: 1, y: 1 }}
//                             end={{ x: 1, y: 0 }}
//                             style={[styles.ActionButtonIconRadiusContainer]}>
//                             <Image
//                                 source={require('../../../../../assets/plusPrimary.png')}
//                                 resizeMode={'contain'}
//                                 style={[styles.ActionButtonIcon]}
//                             />
//                         </LinearGradient>
//                     </View>
//                     <View style={[styles.ActionButtonTitleContainer]}>
//                         <Text style={[styles.ActionButtonTitle]}>
//                             {item.TITLE}
//                         </Text>
//                     </View>
//                 </View>
//             </TouchableOpacity>
//         );
//     };

//     const styles = getStyles();

//     return (
//         <>
//             <View style={[styles.InfoDetailsContainer]}>
//                 <View style={[styles.InfoHeaderContainer]}>
//                     <Text style={[styles.InfoHeader]}>
//                         {'Fill the details below to get verified'}
//                     </Text>
//                 </View>
//                 <FlatList
//                     data={InfoData}
//                     renderItem={InfoRenderItem}
//                     nestedScrollEnabled={true}
//                     showsVerticalScrollIndicator={false}
//                     contentContainerStyle={[styles.InfoContentContainerStyle]}
//                 />
//                 <FlatList
//                     data={InfoInputData}
//                     renderItem={InfoInputRenderItem}
//                     nestedScrollEnabled={true}
//                     showsVerticalScrollIndicator={false}
//                     contentContainerStyle={[
//                         styles.InfoInputContentContainerStyle,
//                     ]}
//                 />
//                 <FlatList
//                     data={InfoActionButtonsData}
//                     renderItem={InfoActionButtonsRenderItem}
//                     horizontal={true}
//                     nestedScrollEnabled={true}
//                     showsHorizontalScrollIndicator={false}
//                     contentContainerStyle={[
//                         styles.InfoActionButtonsContentContainerStyle,
//                     ]}
//                 />
//                 <TouchableOpacity onPress={handleSubmit}>
//                     <Text style={{ fontSize: 100, color: '#FFFFFF' }}>
//                         {'SUBMIT'}
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//         </>
//     );
// };

// export default Info;

import {
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker, { types } from 'react-native-document-picker';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './Info.style'; // Separate Style //
import { verificationStore } from '../../../../../store/verificationStore';
import Footer from './Footer/Footer';
import useThemeStyles from '../../../../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../../../config';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

interface Props {
    userDetails: any;
    step: number;
    onNext: () => void;
}

const Info: React.FC<Props> = ({ onNext, step, userDetails }) => {
    const navigation = useNavigation();

    const [attechment, setAttechment] = useState(null);
    const [attechment1, setAttechment1] = useState(null);
    const [facebook, setFacebook] = useState('');
    const [youtube, setYoutube] = useState('');
    const [instagram, setInstagram] = useState('');

    const [errors, setErrors] = useState({
        attechment: '',
        attechment1: '',
        facebook: '',
        youtube: '',
        instagram: '',
    });

    const handleDocumentSelection = async type => {
        try {
            const response = await DocumentPicker.pick({
                type: [types.allFiles],
                presentationStyle: 'fullScreen',
            });
            if (type === 'attechment') {
                setAttechment(response[0]);
            } else if (type === 'attechment1') {
                setAttechment1(response[0]);
            }
            console.log('response', response);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.warn('User cancelled the document picker');
            } else {
                console.warn(err);
            }
        }
    };

    const handleSubmit = async () => {
        // Reset errors
        setErrors({
            attechment: '',
            attechment1: '',
            facebook: '',
            youtube: '',
            instagram: '',
        });

        let valid = true;

        if (!attechment) {
            setErrors(prev => ({
                ...prev,
                attechment: 'Document front image is required',
            }));
            valid = false;
        }
        if (!attechment1) {
            setErrors(prev => ({
                ...prev,
                attechment1: 'Document back image is required',
            }));
            valid = false;
        }
        if (!facebook) {
            setErrors(prev => ({
                ...prev,
                facebook: 'Facebook URL is required',
            }));
            valid = false;
        }
        if (!youtube) {
            setErrors(prev => ({
                ...prev,
                youtube: 'YouTube URL is required',
            }));
            valid = false;
        }
        if (!instagram) {
            setErrors(prev => ({
                ...prev,
                instagram: 'Instagram URL is required',
            }));
            valid = false;
        }

        if (valid) {
            const verificationData = {
                fb_id: userDetails?.fb_id,
                attechment,
                attechment1,
                facebook,
                youtube,
                instagram,
            };

            try {
                console.log('verificationData', verificationData);
                const response = await verificationStore(verificationData);
                console.log('response', response);
                onNext();
                // navigation.navigate('Profile');
            } catch (error) {
                console.log('Failed Log', error);
            }
        }
    };

    const InfoData = [
        {
            id: 1,
            InfoSubTitle:
                'We will be further evaluating your content based on the virality/shares, engagement and quality/likes. We are very happy to have you as a part of the HITHOT family.',
        },
        {
            id: 2,
            InfoSubTitle:
                'We required a government issued photo ID that shows your name and date of birth e.g driving license, passport or national identification card or official business documents (tax filing, recent utility bill, article of incorporation) in order to review your request.',
        },
    ];

    const InfoRenderItem = ({ item }) => {
        return (
            <View style={[styles.InfoSubTitleContainer]}>
                <Text
                    style={[
                        styles.InfoSubTitle,
                        { color: Theme.TextColor.color },
                    ]}>
                    {item.InfoSubTitle}
                </Text>
            </View>
        );
    };

    const InfoInputData = [
        {
            id: 1,
            TITLE: 'Instagram URL',
            PLACEHOLDER: 'Input text here',
            value: instagram,
            onChangeText: setInstagram,
            error: errors.instagram,
        },
        {
            id: 2,
            TITLE: 'Facebook URL',
            PLACEHOLDER: 'Input text here',
            value: facebook,
            onChangeText: setFacebook,
            error: errors.facebook,
        },
        {
            id: 3,
            TITLE: 'YouTube URL',
            PLACEHOLDER: 'Input text here',
            value: youtube,
            onChangeText: setYoutube,
            error: errors.youtube,
        },
    ];

    const InfoInputRenderItem = ({ item }) => {
        return (
            <View style={[styles.InputContainer]}>
                <View style={[styles.InputTitleContainer]}>
                    <Text
                        style={[
                            styles.InputTitle,
                            { color: Theme.TextColor.color },
                        ]}>
                        {item.TITLE}
                    </Text>
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
                        keyboardType="url"
                        placeholder={item.PLACEHOLDER}
                        placeholderTextColor={'#B3B4B6'}
                        value={item.value}
                        onChangeText={item.onChangeText}
                        style={styles.TextInput}
                    />
                </View>
                {item.error ? (
                    <View style={[styles.ErrorContainer]}>
                        <Text style={[styles.Error]}>{item.error}</Text>
                    </View>
                ) : null}
            </View>
        );
    };

    const InfoActionButtonsData = [
        {
            id: 1,
            OnPress: () => handleDocumentSelection('attechment'),
            Title: 'Document\nfront image',
            error: errors.attechment,
        },
        {
            id: 2,
            OnPress: () => handleDocumentSelection('attechment1'),
            Title: 'Document\nback image',
            error: errors.attechment1,
        },
    ];

    const InfoActionButtonsRenderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity activeOpacity={0.8} onPress={item.OnPress}>
                    <View
                        style={[
                            styles.ActionButtonContainer,
                            {
                                backgroundColor:
                                    Theme.subcontainerColor.backgroundColor,
                                borderWidth: !isDark ? 0.5 : null,
                            },
                        ]}>
                        <View style={[styles.ActionButtonIconContainer]}>
                            <LinearGradient
                                colors={['#F7C900', '#EB853C']}
                                start={{ x: 1, y: 1 }}
                                end={{ x: 1, y: 0 }}
                                style={[
                                    styles.ActionButtonIconRadiusContainer,
                                ]}>
                                <Image
                                    source={require('../../../../../assets/plusPrimary.png')}
                                    resizeMode={'contain'}
                                    style={[styles.ActionButtonIcon]}
                                />
                            </LinearGradient>
                        </View>
                        <View style={[styles.ActionButtonTitleContainer]}>
                            {item.error ? (
                                <Text style={[styles.InfoActionButtonsError]}>
                                    {item.error}
                                </Text>
                            ) : (
                                <Text style={[styles.ActionButtonTitle,{color:Theme.TextColor.color}]}>
                                    {item.Title}
                                </Text>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        );
    };

    const styles = getStyles();

     const Theme = useThemeStyles(styleCreator);

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
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.InfoDetailsContainer]}>
                    <View style={[styles.InfoHeaderContainer]}>
                        <Text style={[styles.InfoHeader,{color:Theme.TextColor.color}]}>
                            {'Fill the details below to get verified'}
                        </Text>
                    </View>
                    <FlatList
                        data={InfoData}
                        renderItem={InfoRenderItem}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={[
                            styles.InfoContentContainerStyle,
                        ]}
                    />
                    <FlatList
                        data={InfoInputData}
                        renderItem={InfoInputRenderItem}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={[
                            styles.InfoInputContentContainerStyle,
                        ]}
                    />
                    <FlatList
                        data={InfoActionButtonsData}
                        renderItem={InfoActionButtonsRenderItem}
                        horizontal={true}
                        nestedScrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={[
                            styles.InfoActionButtonsContentContainerStyle,
                        ]}
                    />
                </View>
            </ScrollView>
            <Footer OnPress={handleSubmit} />
        </>
    );
};

export default Info;

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