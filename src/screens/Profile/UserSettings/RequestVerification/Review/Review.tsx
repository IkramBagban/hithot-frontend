import {
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import getStyles from './Review.style'; // Saparate Style //
import Footer from './Footer/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../../../config';
import useThemeStyles from '../../../../../hooks/useThemeStyles';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

interface Props {
    userDetails: any;
}

const Review: React.FC<Props> = ({ userDetails }) => {
    const navigation = useNavigation();

    const ReviewData = [
        {
            id: 1,
            URL: require('../../../../../assets/verifiedTickRegular.png'),
            Title: 'Get a blue tick',
            SubTitle:
                'Stand out from the crowd, increase visibility and build confidence among followers with the coveted blue tick verification.',
        },
        {
            id: 2,
            URL: require('../../../../../assets/directMessagingRegular.png'),
            Title: 'Increased account protection',
            SubTitle:
                "Elevate your account's security with verification, offering peace of mind and safeguarding againts unauthorized access.",
        },
        {
            id: 3,
            URL: require('../../../../../assets/supportRegular.png'),
            Title: 'Support',
            SubTitle:
                "Verified account's receive enhanced support features, ensuring swift resolution and personalized assistance for your social media needs.",
        },
    ];

    const ReviewRenderItem = ({ item }) => {
        return (
            <View style={styles.ReviewDataContainer}>
                <View style={[styles.ReviewDataIconContainer]}>
                    <Image
                        source={item.URL}
                        resizeMode={'contain'}
                        style={[styles.ReviewDataIcon,{tintColor:Theme.IconColor.tintColor}]}
                    />
                </View>
                <View style={styles.ReviewTitleAndSubTitleContainer}>
                    <View style={styles.ReviewTitleContainer}>
                        <Text
                            style={[
                                styles.ReviewTitle,
                                { color: Theme.TextColor.color },
                            ]}>
                            {item.Title}
                        </Text>
                    </View>
                    <View style={styles.ReviewSubTitleContainer}>
                        <Text
                            style={[
                                styles.ReviewSubTitle,
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.ReviewContainer]}>
                    <View style={[styles.ReviewProfileContainer]}>
                        <View style={[styles.ReviewImageContainer]}>
                            <View style={[styles.ReviewImageAndBadgeContainer]}>
                                <View style={styles.ReviewImageRadiusContainer}>
                                    <Image
                                        source={{
                                            uri: userDetails?.profile_pic,
                                        }}
                                        resizeMode={'cover'}
                                        style={styles.ReviewImage}
                                    />
                                </View>
                                <View style={styles.ReviewBadgeContainer}>
                                    <View
                                        style={
                                            styles.ReviewBadgeRadiusContainer
                                        }>
                                        <Image
                                            source={require('../../../../../assets/verifiedTick.png')}
                                            resizeMode={'contain'}
                                            style={styles.ReviewBadge}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.ReviewNameAndUsernameContainer]}>
                            <View style={styles.ReviewNameContainer}>
                                <Text
                                    style={[
                                        styles.ReviewName,
                                        { color: Theme.TextColor.color },
                                    ]}>
                                    {`${userDetails?.first_name} ${userDetails?.last_name}`}
                                </Text>
                            </View>
                            <View style={styles.ReviewUsernameContainer}>
                                <Text
                                    style={[
                                        styles.ReviewUsername,
                                        { color: Theme.TextColor.color },
                                    ]}>
                                    {userDetails?.username}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={[
                                styles.UpdateContainer,
                                {
                                    backgroundColor: !isDark
                                        ? '#ffff'
                                        : '#3B3F44',
                                },
                            ]}>
                            <View style={[styles.UpdateTitleContainer]}>
                                <Text style={[styles.UpdateTitle]}>
                                    {'Your account will be verified soon!'}
                                </Text>
                            </View>
                            <View style={[styles.UpdateTimeContainer]}>
                                <View style={[styles.UpdateClockIconContainer]}>
                                    <Image
                                        source={require('../../../../../assets/UpdateClock.png')}
                                        resizeMode={'contain'}
                                        style={[
                                            styles.UpdateClockIcon,
                                            {
                                                tintColor:
                                                    Theme.IconColor.tintColor,
                                            },
                                        ]}
                                    />
                                </View>
                                <Text
                                    style={[
                                        styles.UpdateTime,
                                        { color: Theme.TextColor.color },
                                    ]}>
                                    {'24-48 hrs'}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={[
                                styles.ReviewAbsolute,
                                {
                                    backgroundColor:
                                        Theme.ActionColor.backgroundColor,
                                },
                            ]}
                        />
                    </View>
                    <View
                        style={[
                            styles.ReviewFlatListHeaderContainer,
                            {
                                backgroundColor:
                                    Theme.ActionColor.backgroundColor,
                            },
                        ]}>
                        <View style={[styles.ReviewFlatListHeaderSubContainer]}>
                            <Text
                                style={[
                                    styles.ReviewFlatListHeader,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {
                                    'Once your account gets verified you\ncan enjoy this features :'
                                }
                            </Text>
                        </View>
                    </View>
                    <FlatList
                        data={ReviewData}
                        renderItem={ReviewRenderItem}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={[
                            styles.ReviewContentContainerStyle,
                            {
                                backgroundColor:
                                    Theme.ActionColor.backgroundColor,
                            },
                        ]}
                    />
                    {/* Review content goes here */}
                </View>
            </ScrollView>
            <Footer OnPress={() => navigation.navigate('Home')} />
        </>
    );
};

export default Review;

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