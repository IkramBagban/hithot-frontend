// import {
//     Dimensions,
//     FlatList,
//     Image,
//     ScrollView,
//     Text,
//     TouchableOpacity,
//     View,
// } from 'react-native';
// import React, { useState } from 'react';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
// import getStyles from './Profile.style'; // Saparate Style //

// const WIDTH = Dimensions.get('screen').width;
// const HEIGHT = Dimensions.get('screen').height;

// interface Props {
//     userDetails: any;
// }

// const Profile: React.FC<Props> = ({ userDetails }) => {
//     const navigation = useNavigation();

//     const [profilePic, setProfilePic] = useState(userDetails?.profile_pic);
//     const [firstName, setFirstName] = useState(userDetails?.first_name);
//     const [lastname, setLastName] = useState(userDetails?.last_name);
//     const [username, setUsername] = useState(userDetails?.username);

//     const Data = [
//         {
//             id: 1,
//             URL: require('../../../../../assets/verifiedTick.png'),
//             Title: 'Get a blue tick',
//             SubTitle:
//                 'Stand out from the crowd, increase visibility and build confidence among followers with the coveted blue tick verification.',
//         },
//         {
//             id: 2,
//             URL: require('../../../../../assets/directmessaging.png'),
//             Title: 'Increased account protection',
//             SubTitle:
//                 "Elevate your account's security with verification, offering peace of mind and safeguarding againts unauthorized access.",
//         },
//         {
//             id: 3,
//             URL: require('../../../../../assets/support.png'),
//             Title: 'Support',
//             SubTitle:
//                 "Verified account's receive enhanced support features, ensuring swift resolution and personalized assistance for your social media needs.",
//         },
//     ];

//     const RenderItem = ({ item }) => {
//         return (
//             <View style={styles.DataContainer}>
//                 <View style={styles.DataIconContainer}>
//                     <Image
//                         source={item.URL}
//                         resizeMode={'contain'}
//                         style={styles.DataIcon}
//                     />
//                 </View>
//                 <View style={styles.TitleAndSubTitleContainer}>
//                     <View style={styles.TitleContainer}>
//                         <Text style={styles.Title}>{item.Title}</Text>
//                     </View>
//                     <View style={styles.SubTitleContainer}>
//                         <Text style={styles.SubTitle}>{item.SubTitle}</Text>
//                     </View>
//                 </View>
//             </View>
//         );
//     };

//     const styles = getStyles();

//     return (
//         <>
//             <ScrollView></ScrollView>
//             <View style={styles.ProfileContainer}>
//                 <View style={styles.ImageContainer}>
//                     <View style={styles.ImageAndBadgeContainer}>
//                         <View style={styles.ImageRadiusContainer}>
//                             <Image
//                                 source={{ uri: profilePic }}
//                                 resizeMode={'cover'}
//                                 style={styles.Image}
//                             />
//                         </View>
//                         <View style={styles.BadgeContainer}>
//                             <View style={styles.BadgeRadiusContainer}>
//                                 <Image
//                                     source={require('../../../../../assets/hithotBadge.png')}
//                                     resizeMode={'cover'}
//                                     style={styles.Badge}
//                                 />
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={styles.NameAndUsernameContainer}>
//                     <View style={styles.NameContainer}>
//                         <Text
//                             style={
//                                 styles.Name
//                             }>{`${firstName} ${lastname}`}</Text>
//                     </View>
//                     <View style={styles.UsernameContainer}>
//                         <Text style={styles.Username}>{username}</Text>
//                     </View>
//                 </View>
//                 <View style={styles.ButtonContainer}>
//                     <LinearGradient
//                         colors={['#F7C900', '#EB853C']}
//                         start={{ x: 1, y: 1 }}
//                         end={{ x: 1, y: 0 }}
//                         style={styles.ButtonSubContainer}>
//                         <View style={styles.ButtonTextContainer}>
//                             <Text style={styles.ButtonText}>
//                                 {'Selected account'}
//                             </Text>
//                         </View>
//                         <View style={styles.IconContainer}>
//                             <Image
//                                 source={require('../../../../../assets/selectedright.png')}
//                                 resizeMode={'contain'}
//                                 style={styles.Icon}
//                             />
//                         </View>
//                     </LinearGradient>
//                     <TouchableOpacity activeOpacity={0.8}>
//                         <View style={[styles.ChevronDownIconButtonContainer]}>
//                             <Image
//                                 source={require('../../../../../assets/chevronDown.png')}
//                                 resizeMode={'contain'}
//                                 style={[styles.ChevronDownIcon]}
//                             />
//                         </View>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//             <View style={styles.FlatListHeaderContainer}>
//                 <Text style={styles.FlatListHeader}>
//                     {'Benefits of subscription'}
//                 </Text>
//             </View>
//             <FlatList
//                 data={Data}
//                 renderItem={RenderItem}
//                 nestedScrollEnabled={true}
//                 showsVerticalScrollIndicator={false}
//             />
//         </>
//     );
// };

// export default Profile;

import {
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Alert,
    StyleSheet, // Import Alert for user feedback
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './Profile.style'; // Separate Style
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

const Profile: React.FC<Props> = ({ userDetails, step, onNext }) => {
    const navigation = useNavigation();

    const [profilePic, setProfilePic] = useState(userDetails?.profile_pic);
    const [firstName, setFirstName] = useState(userDetails?.first_name);
    const [lastName, setLastName] = useState(userDetails?.last_name);
    const [username, setUsername] = useState(userDetails?.username);

    const HandleNext = () => {
        // Perform validation
        if (!profilePic || !firstName || !lastName || !username) {
            Alert.alert(
                'Validation Error',
                'Please fill in all fields before proceeding.',
            );
            return;
        }
        // If validation passes, call onNext
        onNext();
    };

    const Data = [
        {
            id: 1,
            URL: require('../../../../../assets/verifiedTick.png'),
            Title: 'Get a blue tick',
            SubTitle:
                'Stand out from the crowd, increase visibility and build confidence among followers with the coveted blue tick verification.',
        },
        {
            id: 2,
            URL: require('../../../../../assets/directmessaging.png'),
            Title: 'Increased account protection',
            SubTitle:
                "Elevate your account's security with verification, offering peace of mind and safeguarding against unauthorized access.",
        },
        {
            id: 3,
            URL: require('../../../../../assets/support.png'),
            Title: 'Support',
            SubTitle:
                'Verified accounts receive enhanced support features, ensuring swift resolution and personalized assistance for your social media needs.',
        },
    ];

    const RenderItem = ({ item }) => {
        return (
            <View style={styles.DataContainer}>
                <View style={styles.DataIconContainer}>
                    <Image
                        source={item.URL}
                        resizeMode={'contain'}
                        style={styles.DataIcon}
                    />
                </View>
                <View style={styles.TitleAndSubTitleContainer}>
                    <View style={styles.TitleContainer}>
                        <Text
                            style={[
                                styles.Title,
                                { color: Theme.TextColor.color },
                            ]}>
                            {item.Title}
                        </Text>
                    </View>
                    <View style={styles.SubTitleContainer}>
                        <Text
                            style={[
                                styles.SubTitle,
                                { color: Theme.TextColor.color },
                            ]}>
                            {item.SubTitle}
                        </Text>
                    </View>
                </View>
            </View>
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
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.ContentContainerStyle]}>
                <View style={styles.ProfileContainer}>
                    <View style={styles.ImageContainer}>
                        <View style={styles.ImageAndBadgeContainer}>
                            <View style={styles.ImageRadiusContainer}>
                                <Image
                                    source={{ uri: profilePic }}
                                    resizeMode={'cover'}
                                    style={styles.Image}
                                />
                            </View>
                            <View style={styles.BadgeContainer}>
                                <View style={styles.BadgeRadiusContainer}>
                                    <Image
                                        source={require('../../../../../assets/hithotBadge.png')}
                                        resizeMode={'cover'}
                                        style={styles.Badge}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.NameAndUsernameContainer}>
                        <View style={styles.NameContainer}>
                            <Text
                                style={[
                                    styles.Name,
                                    { color: Theme.TextColor.color },
                                ]}>{`${firstName} ${lastName}`}</Text>
                        </View>
                        <View style={[styles.UsernameContainer]}>
                            <Text
                                style={[
                                    styles.Username,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {username}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.ButtonContainer}>
                        <LinearGradient
                            colors={['#F7C900', '#EB853C']}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.ButtonSubContainer}>
                            <View style={styles.ButtonTextContainer}>
                                <Text style={styles.ButtonText}>
                                    {'Selected account'}
                                </Text>
                            </View>
                            <View style={[styles.IconContainer]}>
                                <Image
                                    source={require('../../../../../assets/selectedright.png')}
                                    resizeMode={'contain'}
                                    style={styles.Icon}
                                />
                            </View>
                        </LinearGradient>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View
                                style={[
                                    styles.ChevronDownIconButtonContainer,
                                    { backgroundColor:!isDark ? '#EDEEEE' : '#45494D' },
                                ]}>
                                <Image
                                    source={require('../../../../../assets/chevronDown.png')}
                                    resizeMode={'contain'}
                                    style={[styles.ChevronDownIcon,{tintColor:Theme.IconColor.tintColor}]}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.FlatListHeaderContainer}>
                    <Text
                        style={[
                            styles.FlatListHeader,
                            { color: Theme.TextColor.color },
                        ]}>
                        {'Benefits of subscription'}
                    </Text>
                </View>
                <FlatList
                    data={Data}
                    renderItem={RenderItem}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                />
            </ScrollView>
            <Footer OnPress={HandleNext} />
        </>
    );
};

export default Profile;

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