import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { FlatList } from 'react-native-gesture-handler';
import { Colors } from '../../theme/Colors';
// import { Song, categories, songsData } from '../../constants';
// import { Song, songsData } from '../../constants';
import { Images } from '../../theme/Images';
import { useContentStore } from '../../store/contentStore';
import axios from 'axios';
import Sound from 'react-native-sound';
import SoundPlayer from 'react-native-sound-player';
import useThemeStyles from '../../hooks/useThemeStyles';
// import { Images} from

const NoSongsMessage: React.FC = () => {
    const styles = useThemeStyles(styleCreator);

    return (
        <View style={styles.noSongsContainer}>
            <Text style={styles.noSongsText}>
                {`No songs available in this category.\nPlease try another category or search for songs.`}
            </Text>
        </View>
    );
};

interface SongItemProps {
    song: Song;
    onPress?: () => void;
}
const SongItem: React.FC<SongItemProps> = ({ song, onPress }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);
    const styles = useThemeStyles(styleCreator);

    // useEffect(() => {
    //     return () => {
    //         console.log('unmount');
    //         stopSound();
    //     };
    // }, []);

    // const playSound = async () => {
    //     try {
    //         console.log('starting song: ');
    //         // if (currentSong && currentSong.id !== song.id) {
    //         //     const res = await SoundPlayer.stop(); // Stop previous song if playing
    //         //     console.log('stop song response: ', res);
    //         // }

    //         // const res = await SoundPlayer.playUrl(song.audio_path?.mp3);

    //         await SoundPlayer.playUrl(
    //             'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/October2022/audio/228882.mp3',
    //         ); // Play the new song
    //         // console.log('play song response: ', res);
    //         console.log('song should be playing now');
    //         setCurrentSong(song);
    //         setIsPlaying(true);
    //     } catch (error) {
    //         console.log('Failed to play the sound', error);
    //     }
    // };

    useEffect(() => {
        const onFinishedPlayingSubscription = SoundPlayer.addEventListener(
            'FinishedPlaying',
            ({ success }) => {
                console.log('finished playing', success);
                setIsPlaying(false);
            },
        );
        const onFinishedLoadingSubscription = SoundPlayer.addEventListener(
            'FinishedLoading',
            ({ success }) => {
                console.log('finished loading', success);
            },
        );
        const onFinishedLoadingFileSubscription = SoundPlayer.addEventListener(
            'FinishedLoadingFile',
            ({ success, name, type }) => {
                console.log('finished loading file', success, name, type);
            },
        );
        const onFinishedLoadingURLSubscription = SoundPlayer.addEventListener(
            'FinishedLoadingURL',
            ({ success, url }) => {
                console.log('finished loading url', success, url);
            },
        );

        return () => {
            onFinishedPlayingSubscription.remove();
            onFinishedLoadingSubscription.remove();
            onFinishedLoadingFileSubscription.remove();
            onFinishedLoadingURLSubscription.remove();
        };
    }, []);

    const playSound = async () => {
        try {
            console.log('Starting song');
            console.log('Audio Path:', song.audio_path?.acc);

            console.log('Attempting to play URL:', song.audio_path?.acc);
            await SoundPlayer.playUrl(song.audio_path?.acc);
            console.log('Song should be playing now');

            setCurrentSong(song);
            setIsPlaying(true);
        } catch (error) {
            console.log('Failed to play the sound', error);
        }
    };

    const pauseSound = async () => {
        try {
            await SoundPlayer.pause(); // Pause the currently playing song
            setIsPlaying(false);
            console.log('Song paused');
        } catch (error) {
            console.log('Failed to pause the sound', error);
        }
    };

    const stopSound = async () => {
        try {
            await SoundPlayer.stop(); // Stop the currently playing song
            setCurrentSong(null);
            setIsPlaying(false);
            console.log('Song stopped');
        } catch (error) {
            console.log('Failed to stop the sound', error);
        }
    };

    return (
        <TouchableOpacity
            onPress={() => {
                onPress && onPress();
                // isPlaying ? stopSound : playSound;
            }}
            style={styles.songItem}>
            {/* <Image source={song.imageUrl} style={styles.songImage} /> */}
            <Image source={{ uri: song.thum }} style={styles.songImage} />

            <View style={styles.songInfo}>
                <View style={styles.timesPosted}>
                    <Text style={styles.timesPostedCount}>{`25K+ posts`}</Text>
                </View>
                {/* <Text style={styles.songTitle}>{song.title}</Text> */}
                <Text style={styles.songTitle}>{song.sound_name}</Text>
                <Text style={styles.songArtist}>{'artist'}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    console.log('Audio Path:', song.audio_path.mp3);
                    // isPlaying ? stopSound() :
                    // playSound();
                    isPlaying ? pauseSound() : playSound();
                }}>
                <Image source={Images.playIcon} style={styles.playIcon} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

interface MusicSheetProps {
    onSongPress?: () => void;
}

interface Song {
    id: number;
    audio_path: {
        mp3: string;
        acc: string;
    };
    sound_name: string;
    description: string;
    section: string;
    thum: string;
    created: string;
    fav: number;
}

let mount = true;
const MusicBottomSheet: React.FC = ({ onSongPress }: MusicSheetProps) => {
    const [searchText, setSearchText] = useState('');
    const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const [categories, setCategories] = useState(null);
    const [songs, setSongs] = useState<Song[]>([]);
    const [page, setPage] = useState(0);

    const bottomSheetRef = useRef<BottomSheet>(null);
    const { showMusicSheet, toggleMusicSheet } = useContentStore();

    const styles = useThemeStyles(styleCreator);

    useEffect(() => {
        fetchSongs('All', 0);
    }, []);

    const fetchSongs = async (category: string, page: number) => {
        try {
            const body = {
                fb_id: '100157944550006196412',
                section: category === 'All' ? undefined : category,
                page: page,
            };

            const response = await axios.post(
                'https://adminpanel.hithot.club/api/allSounds',
                body,
            );

            if (response.status === 200) {
                if (page === 0) {
                    if (mount) {
                        const c = response.data.msg.map(
                            section => section.section_name,
                        );
                        setCategories(c);
                        mount = false;
                    }
                    const newSongs = response.data.msg.flatMap(
                        section => section.sections_sounds,
                    );
                    setSongs(newSongs);
                    setFilteredSongs(newSongs);
                } else {
                    const newSongs = response.data.msg.flatMap(
                        section => section.sections_sounds,
                    );
                    setSongs(prevSongs => [...prevSongs, ...newSongs]);
                    setFilteredSongs(prevSongs => [...prevSongs, ...newSongs]);
                }
            }
        } catch (error) {
            console.error('Failed to fetch songs', error);
        }
    };

    useEffect(() => {
        if (showMusicSheet) {
            bottomSheetRef.current?.expand();
        } else {
            bottomSheetRef.current?.close();
        }
    }, [showMusicSheet]);

    const filterSongs = (text: string, category: string) => {
        let filtered = songs?.filter(song =>
            song.title.toLowerCase().includes(text.toLowerCase()),
        );
        if (category !== 'All') {
            filtered = filtered.filter(song => song.category === category);
        }
        setFilteredSongs(filtered);
    };

    const handleSearch = (text: string) => {
        setSearchText(text);
        const filtered = songs.filter(song =>
            song.sound_name.toLowerCase().includes(text.toLowerCase()),
        );
        setFilteredSongs(filtered);
    };

    const handleCategorySelect = async (category: string) => {
        setSelectedCategory(category);
        setPage(0);
        await fetchSongs(category, 0);
        if (searchText) {
            handleSearch(searchText);
        }
    };

    const handleSongPress = () => {
        toggleMusicSheet();
        onSongPress && onSongPress();
    };

    const handleLoadMore = async () => {
        const nextPage = page + 1;
        console.log(
            '------------------------------------ nextPage ------------------------------------',
            nextPage,
        );
        setPage(nextPage);
        await fetchSongs(selectedCategory, nextPage);
    };

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={['85%']}
            enablePanDownToClose
            handleIndicatorStyle={{ backgroundColor: Colors.grey }}
            backgroundStyle={{ backgroundColor: Colors.primaryColor }}
            handleStyle={styles.sheetHandleStyle}
            onClose={() => showMusicSheet && toggleMusicSheet()}>
            <View style={styles.container}>
                <Text style={styles.addMusicTitle}>{`Add music`}</Text>
                <View style={styles.searchContainer}>
                    <Image
                        source={Images.magnifyIcon}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search for any music"
                        placeholderTextColor={Colors.dullWhite}
                        value={searchText}
                        onChangeText={handleSearch}
                    />
                </View>

                <View style={styles.categories}>
                    {/* <Text>Categories</Text> */}
                    {categories &&
                        categories.map(category => (
                            <TouchableOpacity
                                key={category}
                                style={[
                                    styles.categoryButton,
                                    selectedCategory === category &&
                                        styles.selectedCategoryButton,
                                ]}
                                onPress={() => handleCategorySelect(category)}>
                                <Text style={styles.categoryText}>
                                    {category}
                                </Text>
                            </TouchableOpacity>
                        ))}
                </View>
                {filteredSongs.length ? (
                    <FlatList
                        data={filteredSongs}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        onEndReached={handleLoadMore}
                        onEndReachedThreshold={0.5}
                        bounces={false}
                        renderItem={({ item }) => (
                            <SongItem song={item} onPress={handleSongPress} />
                        )}
                    />
                ) : (
                    <NoSongsMessage />
                )}
            </View>
        </BottomSheet>
    );
};

const styleCreator = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
            backgroundColor: colors.bgColor,
        },
        sheetHandleStyle: {
            backgroundColor: colors.bgColor,
            overflow: 'hidden',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
        },
        addMusicTitle: {
            color: colors.textColor,
            fontFamily: 'Figtree-Bold',
            fontSize: 18,
            marginBottom: 15,
        },
        searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: 'rgba(255, 255, 255, 0.24)',
            backgroundColor: colors.searchBoxColor,
            paddingHorizontal: 12,
            borderRadius: 8,
            marginBottom: 15,
        },
        searchIcon: {
            height: 24,
            width: 24,
            resizeMode: 'contain',
        },

        searchBar: {
            paddingHorizontal: 8,
            color: colors.textColor,
            fontFamily: 'Figtree-Medium',
            fontSize: 16,
            minHeight: 54,
            flex: 1,
        },
        categories: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 16,
        },
        categoryButton: {
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 6,
            marginRight: 8,
            marginBottom: 8,
            borderColor: Colors.grey,
            borderWidth: 1,
        },
        selectedCategoryButton: {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderColor: Colors.primaryWhite,
        },
        categoryText: {
            color: Colors.primaryWhite,
            fontFamily: 'Figtree-Medium',
            fontSize: 14,
        },
        selectedCategoryText: {
            color: '#fff',
        },
        songItem: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
        },
        songImage: {
            width: 60,
            height: 60,
            borderRadius: 5,
            marginRight: 16,
            resizeMode: 'contain',
        },
        playIcon: {
            width: 24,
            height: 24,
            resizeMode: 'contain',
        },
        timesPosted: {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            paddingVertical: 2,
            paddingHorizontal: 6,
            borderRadius: 6,
            width: '35%',
            // flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 5,
        },
        timesPostedCount: {
            color: Colors.primaryYellow,
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
        },
        songInfo: {
            flex: 1,
        },
        songTitle: {
            fontSize: 16,
            fontFamily: 'Figtree-Bold',
            color: colors.textColor,
        },
        songArtist: {
            fontSize: 14,
            fontFamily: 'Figtree-Regular',
            color: 'rgba(255, 255, 255, 0.6)',
        },
        noSongsContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        noSongsText: {
            fontSize: 14,
            color: Colors.dullWhite,
            textAlign: 'center',
            fontFamily: 'Figtree-Regular',
        },
    });

export default MusicBottomSheet;
