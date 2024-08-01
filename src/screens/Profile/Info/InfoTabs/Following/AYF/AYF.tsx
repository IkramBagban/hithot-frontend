import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import getStyles from './AYF.style'; // Adjust the import path as needed
import useFollowingsStore from '../../../../../../store/userFollowingStore';
import useThemeStyles from '../../../../../../hooks/useThemeStyles';

const AYF: React.FC<{
    IsLoggedin: boolean;
    FB_ID: string;
    searchQuery: any;
}> = ({ IsLoggedin, FB_ID, searchQuery }) => {
    const navigation = useNavigation();
    const { followings, loading, error, fetchFollowings } =
        useFollowingsStore();
    const [displayedFilteredFollowings, setDisplayedFilteredFollowings] =
        useState([]);

    useEffect(() => {
        fetchFollowings(FB_ID);
    }, [FB_ID]);

    useEffect(() => {
        const filteredData = followings.filter(item =>
            item?.username?.toLowerCase()?.includes(searchQuery?.toLowerCase()),
        );
        setDisplayedFilteredFollowings(filteredData);
    }, [followings, searchQuery]);

    const RenderItem: React.FC<{ item: any }> = ({ item }) => {
        const handlePress = () => {
            const selectedUser = displayedFilteredFollowings.find(
                following => following.fb_id === item.fb_id,
            );
            // console.log('AYF navigation to VisitProfile', selectedUser);
            navigation.reset({
                index: 0,
                routes: [
                    {
                        name: 'VisitProfile',
                        params: { user: selectedUser.fb_id },
                    },
                ],
            });

            // naigation.navigate('VisitProfile', { user: selectedUser });
        };
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
                <View style={[styles.DetailsContainer]}>
                    <View style={[styles.ImageContainer]}>
                        <View style={[styles.ImageRadiusContainer]}>
                            <Image
                                source={{ uri: item.profile_pic }}
                                style={[styles.Image]}
                            />
                        </View>
                    </View>
                    <View style={[styles.UsernameAndSubnameContainer]}>
                        <View style={[styles.UsernameContainer]}>
                            <Text
                                ellipsizeMode="tail"
                                numberOfLines={1}
                                style={[
                                    styles.UsernameText,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {item.username}
                            </Text>
                        </View>
                        <View style={[styles.SubnameContainer]}>
                            <Text
                                ellipsizeMode="tail"
                                numberOfLines={1}
                                style={[
                                    styles.SubnameText,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {item.first_name} {item.last_name}
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.ButtonContainer,{backgroundColor:Theme.ActionColor.backgroundColor}]}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={[styles.ButtonSubContainer]}>
                                <Text
                                    style={[
                                        styles.ButtonText,
                                        { color: Theme.TextColor.color },
                                    ]}>
                                    {'Remove'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const styles = getStyles();

    const Theme = useThemeStyles(styleCreator);

    return (
        <>
            <View style={[styles.Container]}>
                {IsLoggedin && (
                    <View style={[styles.TitleContainer]}>
                        <Text
                            style={[
                                styles.TitleText,
                                {
                                    color:
                                        displayedFilteredFollowings.length > 0
                                            ? '#FFFFFF'
                                            : '#FF0000',
                                },
                            ]}>
                            {displayedFilteredFollowings.length > 0
                                ? 'Accounts you are following'
                                : 'No result found'}
                        </Text>
                    </View>
                )}
                <FlatList
                    data={displayedFilteredFollowings}
                    renderItem={RenderItem}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[
                        styles.ContentContainerStyle,
                        { paddingTop: IsLoggedin ? null : 20 },
                    ]}
                    keyExtractor={item => item.fb_id}
                    initialNumToRender={8}
                    windowSize={8}
                    maxToRenderPerBatch={8}
                    ListFooterComponent={() =>
                        loading ? (
                            <View
                                style={{
                                    paddingTop: 10,
                                    paddingBottom: 14,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <ActivityIndicator
                                    size="large"
                                    color={'#FFFFFF'}
                                />
                            </View>
                        ) : null
                    }
                />
            </View>
        </>
    );
};

export default AYF;

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
