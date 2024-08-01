import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import FollowCard from '../../components/Followcard/FollowCard';
import Shorts from '../../components/shorts/Shorts';
import LiveCard from '../../components/Live/Live';
import { songdata, livedata, FollowData, postdata } from '../../../data';
import Posts from '../../components/Posts';
import ShortsAudio from '../../components/shortsaudio/Shortsaudio';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import song from '../../assets/song.mp3';
import SoundPlayer from 'react-native-sound-player';
import { useNavigation } from '@react-navigation/native';
import { searchStore } from '../../store/SearchStore';
import { SearchResult } from '../../store/types';
import useThemeStyles from '../../hooks/useThemeStyles';
import { Colors } from '../../theme/Colors';
import { ThemeContext } from '../../theme/ThemeContext';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

interface ReelCardProps {
    name: string;
}

interface DataItem {
    id: number;
    OnPress: () => void;
    URL: any; // Adjust the type based on your image type
    TITLE: any;
    ACTIVE: number;
}

const SearchSection = () => {
    const navigation = useNavigation();

    const [activeButton, setActiveButton] = useState(1);
    const [filteredResults, setFilteredResults] = useState<SearchResult>({
        users: [],
        videos: [],
        images: [],
        sounds: [],
    });

    const Data = [
        { id: 1, TITLE: 'All', ACTIVE: activeButton === 1 },
        { id: 2, TITLE: 'Account', ACTIVE: activeButton === 2 },
        { id: 3, TITLE: 'Audio', ACTIVE: activeButton === 3 },
        // { id: 4, TITLE: 'Post' },
        { id: 4, TITLE: 'Short', ACTIVE: activeButton === 4 },
        { id: 5, TITLE: 'Post', ACTIVE: activeButton === 5 },
    ];

    const RenderItem: React.FC<{ item: DataItem }> = ({ item }) => {
        return (
            <>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleFilterChange(item.id)}>
                    <View
                        style={[styles.boxContainers, {backgroundColor: item.ACTIVE
                            ? styles.boxStyle.active.backgroundColor
                            : styles.boxStyle.inactive.backgroundColor,  borderColor: item.ACTIVE ? styles.boxStyle.active.borderColor : styles.boxStyle.inactive.borderColor,} ]}>
                        <Text
                            style={styles.boxText}>
                            {item.TITLE}
                        </Text>
                    </View>
                </TouchableOpacity>
            </>
        );
    };

    const [recentSearches, setRecentSearches] = useState([
        'Food',
        'Travel',
        'Fashion',
        'Fitness',
    ]);
    const [reels, setReels] = useState([
        { id: 1, title: 'Reel 1' },
        { id: 2, title: 'Reel 2' },
        { id: 3, title: 'Reel 3' },
        { id: 4, title: 'Reel 4' },
    ]);

    const [query, setQuery] = useState<string>('');
    const [fb_id, setFbId] = useState<string>('100157944550006196412');
    const [results, setResults] = useState<SearchResult>({
        users: [],
        videos: [],
        images: [],
        sounds: [],
    });
    const [loading, setLoading] = useState(false);
    const [noResults, setNoResults] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        setNoResults(false);
        const filteredResults = await searchStore({ fb_id, keyword: query });
        setResults(filteredResults);
        setLoading(false);
        setNoResults(
            filteredResults?.users?.length === 0 &&
                filteredResults?.videos?.length === 0 &&
                filteredResults?.images?.length === 0 &&
                filteredResults?.sounds?.length === 0,
        );
        setActiveButton(1);
    };

    const handleFilterChange = id => {
        setActiveButton(id);

        switch (id) {
            case 1:
                setFilteredResults(results);
                break;
            case 2:
                setFilteredResults({
                    ...results,
                    videos: [],
                    images: [],
                    sounds: [],
                });
                break;
            case 3:
                setFilteredResults({
                    ...results,
                    users: [],
                    videos: [],
                    images: [],
                });
                break;
            case 4:
                setFilteredResults({
                    ...results,
                    users: [],
                    images: [],
                    sounds: [],
                });
                break;
            case 5:
                setFilteredResults({
                    ...results,
                    users: [],
                    videos: [],
                    sounds: [],
                });
                break;
            default:
                setFilteredResults(results);
                break;
        }
    };

    useEffect(() => {
        // Initialize filteredResults with all results when the component mounts
        setFilteredResults(results);
    }, [results]);

    const styles = useThemeStyles(styleCreator);

    const {isDark} = useContext(ThemeContext);

    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={styles.mainContainer}>
                <View
                    style={[{borderBottomWidth: query ? 1 : undefined}, styles.header]}>
                    <View
                        style={styles.headerContent}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.goBack()}
                            style={styles.backButton}>
                            <MaterialIcons
                                name="arrow-back-ios"
                                color={styles.backButton.color}
                                size={22}
                            />
                        </TouchableOpacity>
                        <View
                            style={styles.searchBox}>
                            <View
                                style={styles.searchIconContainer}>
                                <Image
                                    source={isDark ? require('../../assets/SearchIc.png') : require('../../assets/SearchIcDark.png')}
                                    resizeMode={'contain'}
                                    style={{ width: 14, height: 14 }}
                                />
                            </View>

                            <View
                                style={styles.searchInputContainer}>
                                <TextInput
                                    style={styles.searchInput}
                                    autoFocus={true}
                                    placeholder="Search"
                                    placeholderTextColor={styles.backButton.color}
                                    value={query}
                                    onChangeText={setQuery}
                                    onSubmitEditing={handleSearch}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                {loading ? (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <ActivityIndicator size="large" color="#FFFFFF" />
                    </View>
                ) : noResults ? (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>
                            No results found
                        </Text>
                    </View>
                ) : (
                    query && (
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {/* Add filter tabs here if necessary */}

                            {/* <View style={{ paddingHorizontal: 10 }}>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        marginBottom: 10,
                                        color: 'white',
                                    }}>
                                    Recent Searches
                                </Text>
                            </View> */}

                            {/* <View style={{ paddingHorizontal: 10 }}>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        marginBottom: 10,
                                    }}>
                                    Reels
                                </Text>
                            </View> */}

                            {/* Filter Tabs */}
                            {results && (
                                <View
                                    style={{
                                        width: '100%',
                                        // borderWidth: 1,
                                        // borderColor: 'red',
                                    }}>
                                    <FlatList
                                        data={Data}
                                        renderItem={RenderItem}
                                        horizontal={true}
                                        nestedScrollEnabled={true}
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={{
                                            paddingTop: 14,
                                            paddingBottom: 14,
                                            paddingLeft: WIDTH / 18,
                                        }}
                                    />
                                </View>
                            )}

                            {/* Accounts */}
                            {filteredResults?.users.length > 0 && (
                                <View>
                                    <View
                                        style={{
                                            width: '90%',
                                            alignSelf: 'center',
                                            paddingVertical: 14,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontFamily: 'Figtree-Bold',
                                                color: '#FFFFFF',
                                            }}>
                                            Accounts
                                        </Text>
                                    </View>
                                    <View>
                                        {filteredResults.users.map(
                                            (user, index) => (
                                                <FollowCard
                                                    data={user}
                                                    key={index}
                                                    fb_id={user?.fb_id}
                                                    username={user?.username}
                                                    follower={user?.last_name}
                                                    profile_pic={
                                                        user?.profile_pic
                                                    }
                                                />
                                            ),
                                        )}
                                    </View>
                                </View>
                            )}

                            {/* Shorts */}
                            {filteredResults?.videos.length > 0 && (
                                <View>
                                    <View
                                        style={{
                                            width: '90%',
                                            alignSelf: 'center',
                                            paddingVertical: 14,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontFamily: 'Figtree-Bold',
                                                color: '#FFFFFF',
                                            }}>
                                            Shorts
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            width: '100%',
                                        }}>
                                        <ScrollView
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={
                                                false
                                            }
                                            contentContainerStyle={{
                                                paddingLeft: WIDTH / 18,
                                            }}>
                                            {filteredResults.videos.map(
                                                (video, index) => (
                                                    <ShortsAudio
                                                        data={video}
                                                        key={index}
                                                        views={
                                                            video?.count?.view
                                                        }
                                                        username={
                                                            video?.user_info
                                                                ?.username
                                                        }
                                                        name={`${video?.user_info?.first_name} ${video?.user_info?.last_name}`}
                                                        image={video?.video}
                                                        userimage={
                                                            video?.user_info
                                                                ?.profile_pic
                                                        }
                                                    />
                                                ),
                                            )}
                                        </ScrollView>
                                    </View>
                                </View>
                            )}

                            {/* Audio */}
                            {filteredResults?.sounds.length > 0 && (
                                <View>
                                    <View
                                        style={{
                                            width: '90%',
                                            alignSelf: 'center',
                                            paddingVertical: 14,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontFamily: 'Figtree-Bold',
                                                color: '#FFFFFF',
                                            }}>
                                            Audio
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            width: '90%',
                                            alignSelf: 'center',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                        }}>
                                        {filteredResults.sounds.map(
                                            (sound, index) => (
                                                <Shorts
                                                    key={index}
                                                    name={sound?.sound_name}
                                                    picture={sound?.thum}
                                                    musicURL={
                                                        sound?.audio_path?.acc
                                                    }
                                                />
                                            ),
                                        )}
                                    </View>
                                </View>
                            )}

                            {/* Posts */}

                            {filteredResults?.images.length > 0 && (
                                <View>
                                    <View
                                        style={{
                                            width: '90%',
                                            alignSelf: 'center',
                                            paddingVertical: 14,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontFamily: 'Figtree-Bold',
                                                color: '#FFFFFF',
                                            }}>
                                            Posts
                                        </Text>
                                    </View>

                                    <View
                                        style={{
                                            width: '100%',
                                        }}>
                                        <ScrollView
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={
                                                false
                                            }
                                            contentContainerStyle={{
                                                paddingLeft: WIDTH / 18,
                                            }}>
                                            {filteredResults.images.map(
                                                (image, index) => (
                                                    <Posts
                                                        data={image}
                                                        fb_id={image?.fb_id}
                                                        follower={
                                                            image?.last_name
                                                        }
                                                        profile_pic={
                                                            image?.user_info
                                                                ?.profile_pic
                                                        }
                                                        key={index}
                                                        image={image.thum}
                                                        username={
                                                            image?.user_info
                                                                ?.username
                                                        }
                                                        time={image.description}
                                                        views={
                                                            image?.count?.view
                                                        }
                                                        comment={
                                                            image?.count
                                                                ?.like_count
                                                        }
                                                    />
                                                ),
                                            )}
                                        </ScrollView>
                                    </View>
                                </View>
                            )}
                        </ScrollView>
                    )
                )}
            </View>
        </>
    );
    
};

const styleCreator = colors =>
    StyleSheet.create({

        mainContainer:{
            flex: 1,
            backgroundColor: colors.bgColor,
        },
        header:{
            width: '100%',
            paddingTop: Platform.OS === 'ios' ? 60 : 40,
            paddingBottom: 20,
            borderBottomColor: Colors.smokeWhite,
        },
        headerContent:{
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        backButton:{
            width: '10%',
            justifyContent: 'center',
            color: colors.textColor,
        },
        searchBox:{
            width: '90%',
            paddingVertical: 10,
            paddingHorizontal: 14,
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: colors.searchBoxColor,
        },
        searchIconContainer:{
            width: '10%',
            justifyContent: 'center',
        },
        searchInputContainer:{
            width: '90%',
        },
        searchInput:{
            padding: 0,
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: colors.textColor,
            opacity: 0.6,
        },
        boxContainers:{
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 8,
            marginRight: 8,
            borderWidth: 1.28,
        },
        boxStyle: {
            active:{
                backgroundColor: colors.activeContainerColor,
                borderColor: colors.activeBorderColor,
            },
            inactive:{
                backgroundColor: colors.inActiveContainerColor,
                borderColor: colors.inactiveBorderColor,
            },
        },
        boxText:{
            fontSize: 16,
            fontFamily: 'Figtree-Medium',
            color: colors.textColor,
        }
    });

export default SearchSection;
