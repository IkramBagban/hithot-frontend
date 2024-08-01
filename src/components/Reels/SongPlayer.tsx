import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../theme/Colors';
import SoundPlayer from 'react-native-sound-player';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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

interface SongItemProps {
    song: Song;
}

const SongPlayer: React.FC<SongItemProps> = ({ song }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0); // Add progress state
    const [totalDuration, setTotalDuration] = useState(0); // Add progress state

    useEffect(() => {
        const onFinishedPlayingSubscription = SoundPlayer.addEventListener(
            'FinishedPlaying',
            ({ success }) => {
                console.log('finished playing', success);
                setIsPlaying(false);
                setProgress(0); // Reset progress when finished
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
            async ({ success, url }) => {
                console.log('finished loading url', success, url);
                const info = await SoundPlayer.getInfo(); // Get the current position and duration
                setTotalDuration(info.duration)
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
            await SoundPlayer.playUrl(song.audio_path?.acc);
            console.log('Song should be playing now');
            setIsPlaying(true);
            startProgressInterval(); // Start updating progress
        } catch (error) {
            console.log('Failed to play the sound', error);
        }
    };

    const pauseSound = async () => {
        try {
            await SoundPlayer.pause(); // Pause the currently playing song
            setIsPlaying(false);
            console.log('Song paused');
            stopProgressInterval(); // Stop updating progress
        } catch (error) {
            console.log('Failed to pause the sound', error);
        }
    };

    let progressInterval;

    const startProgressInterval = () => {
        progressInterval = setInterval(async () => {
            try {
                const info = await SoundPlayer.getInfo(); // Get the current position and duration
                setProgress(info.currentTime);

            } catch (error) {
                console.log('Failed to get sound info', error);
            }
        }, 1000); // Update every second
    };

    const stopProgressInterval = () => {
        if (progressInterval) {
            clearInterval(progressInterval);
        }
    };

    useEffect(() => {
        return () => {
            stopProgressInterval(); // Clean up on unmount
        };
    }, []);


    const mins = Math.floor(progress / 60);
    const secs = Math.floor(progress % 60);
    const progressTime = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

    return (
        <View
            style={styles.songItem}>
            <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => {
                    console.log('Audio Path:', song.audio_path.mp3);
                    isPlaying ? pauseSound() : playSound();
                }}>
                <View>
                    <MaterialIcons
                        name={isPlaying ? "pause" : "play-arrow"}
                        color="white"
                        size={22}
                    />
                </View>
                {/* <Image source={Images.pauseIcon} style={styles.playIcon} /> */}
            </TouchableOpacity>
            <View style={{ width: '80%', }}>
                <View style={{ backgroundColor: 'gray' }}>
                    <View
                        style={[
                            {
                                width: `${progress / totalDuration * 100}%`,
                                backgroundColor: Colors.primaryWhite,
                                opacity: 1,
                                height: 5
                            },
                        ]}
                    />
                </View>
            </View>
            <Text style={{ color: '#fff', marginHorizontal: 5 }}>{progressTime}</Text>
        </View>
    );
};

export default SongPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.primaryColor,
    },
    sheetHandleStyle: {
        backgroundColor: Colors.primaryColor,
        overflow: 'hidden',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    addMusicTitle: {
        color: Colors.primaryWhite,
        fontFamily: 'Figtree-Bold',
        fontSize: 18,
        marginBottom: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.24)',
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
        color: Colors.primaryWhite,
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
        color: Colors.primaryWhite,
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
})