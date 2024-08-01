import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    FlatList,
    ImageSourcePropType,
    SafeAreaView,
    Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CenterHeader from '../../components/Headers/CustomHeader';
import { Images } from '../../theme/Images';
import { Colors } from '../../theme/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ContentType } from '../../constants';
import {
    uploadClip,
    uploadImage,
    uploadShort,
    uploadStory,
} from '../../services/ContentService';
import { useContentStore } from '../../store/contentStore';
import { useHomeFeed } from '../../store/homeFeedStore';
import { Dropdown } from 'react-native-element-dropdown';
import {
    showFailureToast,
    showSuccessToast,
} from '../../components/Toast/HitHotToast';
import axios from 'axios';
import useThemeStyles from '../../hooks/useThemeStyles';
import { useAuthStore } from '../../store/AuthStore';

interface Option {
    id: number;
    title: string;
    icon: ImageSourcePropType;
    onPress: () => void;
}

const TagSection = ({ hashtags }) => {
    const styles = useThemeStyles(styleCreator);

    return (
        <View style={styles.tagsContainer}>
            <FlatList
                data={hashtags}
                renderItem={({ item }) => (
                    <View style={styles.tagItem}>
                        <Text style={styles.tagText}>{item?.hashtag}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString() + Math.random()}
                horizontal={true}
                contentContainerStyle={styles.tagList}
            />
        </View>
    );
};

const UploadContentScreen: React.FC = () => {
    const { params } = useRoute();
    const navigation = useNavigation();
    const { setIsUploading } = useContentStore();
    const { fetchFeedPosts } = useHomeFeed();
    const { userDetails } = useAuthStore();
    // console.log('route params --> ', params);
    const [dd] = useState([
        { label: 'Private', value: 'Private' },
        { label: 'Public', value: 'Public' },
        { label: 'Only me', value: 'Only me' },
    ]);
    const [value, setValue] = useState('Public');
    const [options, setOptions] = useState<Option[]>([
        {
            id: 1,
            title: 'Who can view',
            icon: Images.visibilityIcon,
            onPress: () => {},
        },
        {
            id: 2,
            title: 'Add location',
            icon: Images.locationIcon,
            onPress: () => {
                console.log('add location');
                navigation.navigate('LocationScreen');
            },
        },
        {
            id: 3,
            title: 'Tag people',
            icon: Images.tagPeopleIcon,
            onPress: () => {
                navigation.navigate('TagPeople');
                console.log('Tag people');
            },
        },
        {
            id: 4,
            title: 'Add music',
            icon: Images.addMusicIcon,
            onPress: () => {},
        },
    ]);
    const { top } = useSafeAreaInsets();
    // const [caption, setCaption] = useState<string>('');

    const [caption, setCaption] = useState<string>('');
    const [hashtags, setHashtags] = useState<string[]>([]);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const styles = useThemeStyles(styleCreator);

    useEffect(() => {
        const fetchHashtagSuggestions = async (search: string) => {
            setLoading(true);
            try {
                const response = await axios.post(
                    'https://adminpanel.hithot.club/api/hashtagSuggestion',
                    { search },
                );

                setSuggestions(response.data.msg);
                // console.log('response.data.msg', response.data.msg);
            } catch (error) {
                console.error(
                    'Error fetching hashtag suggestions:=',
                    JSON.stringify(error),
                );
            } finally {
                setLoading(false);
            }
        };

        if (caption.startsWith('#')) {
            const search = caption.slice(1);
            fetchHashtagSuggestions(search);
        } else {
            setSuggestions([]);
        }
    }, [caption]);

    const handleTagSelect = (tag: string) => {
        setHashtags([...hashtags, tag]);
        setSuggestions([]);
        setCaption('');
    };

    const renderOption = ({ item }: { item: Option }) => (
        <TouchableOpacity style={styles.optionButton} onPress={item.onPress}>
            <View style={styles.rowNCenter}>
                <View
                    // style={{
                    //     borderRadius: 6,
                    //     backgroundColor: Colors.bluryWhite,
                    //     height: 30,
                    //     width: 30,
                    //     justifyContent: 'center',
                    //     alignItems: 'center',
                    //     marginRight: 10,
                    // }}>
                    style={styles.bluryWhiteContainer}>
                    <Image
                        source={item.icon}
                        style={{ height: 16, width: 16, resizeMode: 'contain' }}
                    />
                </View>
                <Text style={styles.optionText}>{item.title}</Text>
            </View>
            {item.id === 1 && (
                <Dropdown
                    style={[styles.dropdown]}
                    containerStyle={{ borderWidth: 0 }}
                    iconStyle={styles.dropdownIcon}
                    // iconStyle={{
                    //     height: 20,
                    //     width: 20,
                    //     tintColor: Colors.primaryWhite,
                    // }}
                    // selectedTextStyle={{
                    //     color: Colors.primaryWhite,
                    //     fontFamily: 'Figtree-Regular',
                    //     fontSize: 14,
                    // }}
                    selectedTextStyle={styles.selectedTextStyle}
                    selectedTextProps={{ numberOfLines: 1 }}
                    data={dd}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                    renderItem={renderVisibilityOptions}
                />
            )}
        </TouchableOpacity>
    );

    const handleUpload = async () => {
        try {
            if (!params) return;
            if (!caption.trim().length) {
                Alert.alert('Alert', 'Please enter a valid caption');
                return;
            }
            // console.log('handleUpload called -->', params);
            const [post] = params?.posts;
            if (!post) return;
            setIsUploading(true);
            switch (post?.uploadType) {
                case ContentType.CLIP:
                    try {
                        const formdata = new FormData();
                        formdata.append('fb_id', userDetails?.fb_id);
                        formdata.append('sound_id', '');
                        formdata.append('description', caption);
                        formdata.append('privacy_type', 'Private');
                        formdata.append('allow_comments', 'true');
                        formdata.append('allow_duet', '1');
                        formdata.append('uploaded_file', post);
                        formdata.append('duet', '0');
                        formdata.append('v_location', 'indore');
                        formdata.append('category', 'sad');
                        navigation.navigate('RootScreen', {
                            screen: 'MainScreen',
                        });
                        const res = await uploadClip(formdata);
                        // console.log(`${uploadClip.name} success!`, res);
                        fetchFeedPosts();
                        showSuccessToast(
                            `${post?.uploadType.toLowerCase()} uploaded successfully!`,
                        );
                    } catch (e) {
                        console.log(`error in ${uploadClip.name}`);
                        showFailureToast(
                            `Failed to upload your ${post?.uploadType.toLowerCase()}`,
                        );
                    } finally {
                        setIsUploading(false);
                    }
                    break;
                case ContentType.POST:
                    try {
                        const formdata = new FormData();
                        formdata.append('sound_id', '');
                        formdata.append('description', caption);
                        formdata.append('privacy_type', 'true');
                        formdata.append('allow_comments', '1');
                        formdata.append('allow_duet', '1');
                        formdata.append('uploaded_file', post);
                        formdata.append('duet', '0');
                        formdata.append('v_location', 'indore');
                        formdata.append('category', 'sad');
                        formdata.append('fb_id', userDetails?.fb_id);
                        navigation.navigate('RootScreen', {
                            screen: 'MainScreen',
                        });

                        const res = await uploadImage(formdata);
                        // console.log(`${uploadImage.name} success!`, res);
                        fetchFeedPosts();
                        showSuccessToast(
                            `${post?.uploadType.toLowerCase()} uploaded successfully!`,
                        );
                    } catch (e) {
                        console.log(`error in ${uploadImage.name}`, e);
                        showFailureToast(
                            `Failed to upload your ${post?.uploadType.toLowerCase()}`,
                        );
                    } finally {
                        setIsUploading(false);
                    }
                    break;
                case ContentType.SHORT:
                    try {
                        // console.log('SHORT Upload started');
                        const formdata = new FormData();
                        formdata.append('fb_id', userDetails?.fb_id);
                        formdata.append('sound_id', '');
                        formdata.append('description', caption);
                        formdata.append('privacy_type', 'Private');
                        formdata.append('allow_comments', 'true');
                        formdata.append('allow_duet', '1');
                        formdata.append('uploaded_file', post);
                        formdata.append('duet', '0');
                        formdata.append('v_location', 'mumbai');
                        formdata.append('category', 'happy');
                        navigation.navigate('RootScreen', {
                            screen: 'MainScreen',
                        });
                        const res = await uploadShort(formdata);
                        // console.log(`${uploadShort.name} success!`, res);
                        fetchFeedPosts();
                        showSuccessToast(
                            `${post?.uploadType.toLowerCase()} uploaded successfully!`,
                        );
                    } catch (e) {
                        console.log(`error in ${uploadShort.name}`);
                        showFailureToast(
                            `Failed to upload your ${post?.uploadType.toLowerCase()}`,
                        );
                    } finally {
                        setIsUploading(false);
                    }
                    break;
                case ContentType.STORY:
                    try {
                        const formdata = new FormData();
                        // console.log('Story Upload started');
                        formdata.append('fb_id', userDetails?.fb_id);
                        formdata.append('title', 'TEST ing');
                        formdata.append('post_file', post);
                        navigation.navigate('RootScreen', {
                            screen: 'MainScreen',
                        });
                        const res = await uploadStory(formdata);
                        console.log(`${uploadStory.name} success!`, res);
                        showSuccessToast(
                            `${post?.uploadType.toLowerCase()} uploaded successfully!`,
                        );
                    } catch (e) {
                        console.log(`error in ${uploadStory.name}`);
                        showFailureToast(
                            `Failed to upload your ${post?.uploadType.toLowerCase()}`,
                        );
                    } finally {
                        setIsUploading(false);
                    }
                    break;
            }
        } catch (e) {
            setIsUploading(false);
            // console.log('upload error -->', e);
        }
    };
    const renderVisibilityOptions = item => {
        return (
            <View style={styles.dropdownItem}>
                <Text numberOfLines={1} style={styles.dropdownItemText}>
                    {item.value}
                </Text>
            </View>
        );
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: top,
                // backgroundColor: Colors.primaryColor,
                backgroundColor: Colors.primaryColor,
            }}>
            <CenterHeader title="Post details" />
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ paddingBottom: 120 }}>
                <FlatList
                    data={params?.posts ?? []}
                    style={{ marginTop: 20 }}
                    horizontal
                    renderItem={({ item }) => {
                        return (
                            <>
                                <Image
                                    source={{ uri: item.uri }}
                                    style={styles.headerImage}
                                />
                                {item.type?.includes('video') && (
                                    <Text
                                        style={{
                                            color: Colors.primaryWhite,
                                            fontFamily: 'Figtree-Regular',
                                            position: 'absolute',
                                            bottom: 10,
                                            right: 10,
                                        }}>
                                        {item?.playDuration}
                                    </Text>
                                )}
                            </>
                        );
                    }}
                    keyExtractor={(item, index) => index?.toString()}
                    contentContainerStyle={styles.optionsContainer}
                />
                <TextInput
                    style={styles.captionInput}
                    placeholder="Add caption to your post"
                    value={caption}
                    onChangeText={setCaption}
                    placeholderTextColor={Colors.dullWhite}
                />
                {/* <FlatList
                    data={suggestions}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => handleTagSelect(item)}>
                                <Text style={styles.captionInput}>
                                    {item?.hashtag}
                                </Text>
                            </TouchableOpacity>
                        );
                    }}
                /> */}

                {/* Hashtag suggestions */}
                {caption.startsWith('#') ? (
                    <FlatList
                        data={suggestions}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => handleTagSelect(item)}>
                                <Text style={styles.suggestionText}>
                                    {item?.hashtag}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                ) : (
                    <></>
                )}
                <TagSection hashtags={hashtags} />

                <TouchableOpacity style={styles.rewriteCaptionButton}>
                    <Image
                        source={Images.rewriteIcon}
                        style={styles.rewriteIcon}
                    />
                    <Text style={styles.rewriteCaptionText}>
                        Rewrite caption with AI
                    </Text>
                </TouchableOpacity>
                <FlatList
                    data={options}
                    renderItem={renderOption}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={styles.optionsContainer}
                />
                <LinearGradient
                    colors={[Colors.gradient1, Colors.gradient2]}
                    style={styles.boostButton}>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.arrowContainer}>
                            <Image
                                source={Images.arrowBowIcon}
                                style={{
                                    height: 16,
                                    width: 16,
                                    resizeMode: 'contain',
                                }}
                            />
                        </View>
                        <Text style={styles.buttonText}>Boost your post</Text>
                    </View>
                    <View style={styles.buyPremiumBtn}>
                        <Text style={styles.buyPremiumText}>Buy Premium</Text>
                    </View>
                </LinearGradient>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.draftButton}>
                    <Text style={styles.draftButtonText}>Draft</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleUpload}>
                    <LinearGradient
                        colors={[Colors.gradient1, Colors.gradient2]}
                        style={styles.uploadButton}>
                        <Text style={styles.buttonText}>Upload</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// const styles =
// const styleCreator = colors =>
//     StyleSheet.create({
//         tagsContainer: {
//             marginTop: 10,
//             marginBottom: 10,
//             paddingHorizontal: 10,
//         },
//         tagItem: {
//             backgroundColor: colors.activeContainerColor,
//             paddingVertical: 5,
//             paddingHorizontal: 10,
//             borderRadius: 6,
//             marginRight: 10,
//         },
//         tagText: {
//             fontSize: 14,
//             color: colors.textColor,
//         },
//         tagList: {
//             flexDirection: 'row',
//             flexWrap: 'wrap',
//         },
//         suggestionText: {
//             borderRadius: 8,
//             paddingVertical: 10,
//             paddingHorizontal: 16,
//             marginBottom: 10,
//             fontSize: 16,
//             backgroundColor: colors.inactiveBorderColor,
//             color: colors.textColor,
//             fontFamily: 'Figtree-Regular',
//         },
//         container: {
//             flex: 1,
//             padding: 16,
//             backgroundColor: colors.bgColor,
//         },
//         header: {
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             marginBottom: 16,
//         },
//         headerImage: {
//             width: 92,
//             height: 92,
//             borderRadius: 12,
//             margin: 5,
//         },
//         captionInput: {
//             borderRadius: 8,
//             padding: 10,
//             marginBottom: 10,
//             fontSize: 16,
//             backgroundColor: colors.searchBoxColor,
//             color: colors.textColor,
//             fontFamily: 'Figtree-Regular',
//         },
//         rewriteCaptionButton: {
//             flexDirection: 'row',
//             alignItems: 'center',
//             width: '100%',
//             marginBottom: 16,
//             paddingHorizontal: 20,
//             paddingVertical: 10,
//             borderRadius: 8,
//             borderColor: colors.inactiveBorderColor,
//             borderWidth: 2,
//         },
//         rewriteCaptionText: {
//             color: colors.textLightColor,
//             fontSize: 16,
//             fontFamily: 'Figtree-Regular',
//         },
//         rewriteIcon: {
//             height: 16,
//             width: 16,
//             resizeMode: 'contain',
//             marginRight: 10,
//         },
//         optionsContainer: {
//             marginBottom: 16,
//         },
//         optionButton: {
//             paddingVertical: 10,
//             marginVertical: 5,
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//         },
//         optionText: {
//             fontSize: 16,
//             color: colors.textColor,
//             fontFamily: 'Figtree-Regular',
//         },
//         contentList: {
//             justifyContent: 'center',
//         },
//         contentItem: {
//             flex: 1,
//             alignItems: 'center',
//             margin: 10,
//             backgroundColor: colors.bgLightColor,
//             borderRadius: 10,
//             overflow: 'hidden',
//             shadowColor: colors.iconColor,
//             shadowOpacity: 0.1,
//             shadowRadius: 5,
//             elevation: 5,
//         },
//         contentImage: {
//             width: 150,
//             height: 150,
//         },
//         boostButton: {
//             width: '100%',
//             marginRight: 10,
//             paddingVertical: 12,
//             paddingHorizontal: 15,
//             borderRadius: 10,
//             alignItems: 'center',
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//         },
//         buttonContainer: {
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//             alignItems: 'center',
//             backgroundColor: colors.inActiveContainerColor,
//             position: 'absolute',
//             bottom: 0,
//             width: '100%',
//             height: 90,
//         },
//         draftButton: {
//             height: 54,
//             width: 156,
//             paddingVertical: 15,
//             borderRadius: 10,
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderColor: colors.inactiveBorderColor,
//             borderWidth: 2,
//         },
//         uploadButton: {
//             height: 54,
//             width: 156,
//             marginLeft: 10,
//             paddingVertical: 15,
//             borderRadius: 10,
//             alignItems: 'center',
//             justifyContent: 'center',
//         },
//         buttonText: {
//             color: colors.textColor,
//             fontSize: 16,
//             fontFamily: 'Figtree-Bold',
//         },
//         buyPremiumBtn: {
//             borderRadius: 6,
//             backgroundColor: colors.inActiveContainerColor,
//             paddingVertical: 10,
//             padding: 10,
//             justifyContent: 'center',
//             alignItems: 'center',
//         },
//         buyPremiumText: {
//             color: colors.textColor,
//             fontSize: 16,
//             fontWeight: '500',
//             fontFamily: 'Figtree-Medium',
//         },
//         dropdown: {
//             maxHeight: 35,
//             borderColor: colors.inactiveBorderColor,
//             borderWidth: 1,
//             borderRadius: 8,
//             padding: 5,
//             width: '30%',
//             alignSelf: 'flex-end',
//         },
//         dropdownItem: {
//             padding: 15,
//             backgroundColor: colors.inActiveContainerColor,
//         },
//         dropdownItemText: {
//             color: colors.textColor,
//             fontFamily: 'Figtree-Regular',
//             fontSize: 16,
//         },
//         rowNCenter: {
//             flexDirection: 'row',
//             alignItems: 'center',
//         },
//     });

const styleCreator = colors =>
    StyleSheet.create({
        tagsContainer: {
            marginTop: 10,
            marginBottom: 10,
            paddingHorizontal: 10,
        },
        tagItem: {
            backgroundColor: colors.bgLightColor,
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 20,
            marginRight: 10,
        },
        tagText: {
            fontSize: 14,
            color: colors.textColor,
        },
        tagList: {
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        suggestionText: {
            borderRadius: 8,
            paddingVertical: 10,
            paddingHorizontal: 16,
            // marginBottom: 10,
            borderBottomWidth: 0.31,
            marginBottom: 3,
            fontSize: 16,
            // backgroundColor: '#F0F0F0',
            backgroundColor: colors.topButtonColor,
            // color: Colors.primaryBlack,
            color: colors.textColor,
            fontFamily: 'Figtree-Regular',
        },
        container: {
            flex: 1,
            padding: 16,
            backgroundColor: colors.bgColor,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
        },
        headerImage: {
            width: 92,
            height: 92,
            borderRadius: 12,
            margin: 5,
            // resizeMode:'contain'
        },
        captionInput: {
            borderRadius: 8,
            padding: 10,
            marginBottom: 10,
            fontSize: 16,
            backgroundColor: colors.searchBoxColor,
            color: colors.textColor,
            fontFamily: 'Figtree-Regular',
        },
        rewriteCaptionButton: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            marginBottom: 16,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 8,
            borderColor: Colors.grey,
            borderWidth: 2,
        },
        rewriteCaptionText: {
            color: Colors.primaryYellow,
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
        },
        arrowContainer: {
            borderRadius: 6,
            // backgroundColor: Colors.bluryWhite,
            backgroundColor: colors.bgColor,
            height: 30,
            width: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
        },
        rewriteIcon: {
            height: 16,
            width: 16,
            resizeMode: 'contain',
            marginRight: 10,
        },
        optionsContainer: {
            marginBottom: 16,
        },
        optionButton: {
            paddingVertical: 10,
            marginVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        // optionText: {
        //     fontSize: 16,
        //     color: '#fff',
        //     fontFamily: 'Figtree-Regular',
        // },
        contentList: {
            justifyContent: 'center',
        },
        contentItem: {
            flex: 1,
            alignItems: 'center',
            margin: 10,
            backgroundColor: '#fff',
            borderRadius: 10,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 5,
        },
        contentImage: {
            width: 150,
            height: 150,
        },
        boostButton: {
            // height: 58,
            width: '100%',
            marginRight: 10,
            paddingVertical: 12,
            paddingHorizontal: 15,
            borderRadius: 10,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            // backgroundColor: Colors.dullGrey,
            backgroundColor: colors.bgColor,
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 90,
        },
        draftButton: {
            height: 54,
            width: 156,
            paddingVertical: 15,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: colors.topButtonColor,
            borderWidth: 2,
        },
        draftButtonText: {
            color: colors.textColor,
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
        },
        uploadButton: {
            height: 54,
            width: 156,
            marginLeft: 10,
            paddingVertical: 15,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonText: {
            color: colors.primaryWhite,
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
        },
        buyPremiumBtn: {
            borderRadius: 6,
            backgroundColor: Colors.primaryWhite,
            paddingVertical: 10,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        buyPremiumText: {
            color: Colors.primaryYellow,
            fontSize: 16,
            fontWeight: '500',
            fontFamily: 'Figtree-Medium',
        },
        // dropdown: {
        //     maxHeight: 35,
        //     borderColor: colors.inactiveBorderColor,
        //     borderWidth: 1,
        //     borderRadius: 8,
        //     padding: 5,
        //     width: '30%',
        //     alignSelf: 'flex-end',
        //     // backgroundColor:'red'
        // },
        dropdownItem: {
            padding: 15,
            // backgroundColor: colors.inactiveBorderColor,
            backgroundColor: colors.bgLightColor,
        },
        dropdownItemText: {
            color: colors.textColor,
            fontFamily: 'Figtree-Regular',
            fontSize: 16,
        },
        rowNCenter: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        bluryWhiteContainer: {
            borderRadius: 6,
            backgroundColor: colors.topButtonColor,

            height: 30,
            width: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
        },
        optionText: {
            fontSize: 16,
            color: colors.textColor,
            fontFamily: 'Figtree-Regular',
        },
        dropdown: {
            maxHeight: 35,
            borderColor: colors.lightTextColor,
            borderWidth: 1,
            borderRadius: 8,
            padding: 5,
            width: '30%',
            alignSelf: 'flex-end',
        },
        dropdownIcon: {
            height: 20,
            width: 20,
            tintColor: colors.textColor,
        },
        selectedTextStyle: {
            color: colors.textColor,
            fontFamily: 'Figtree-Regular',
            fontSize: 14,
        },
    });
export default UploadContentScreen;
