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
import { Song, categories, shareContentOptions, songsData } from '../../constants';
import { Images } from '../../theme/Images';
import { useContentStore } from '../../store/contentStore';
import LinearGradient from 'react-native-linear-gradient';

const NoPeopleMessage: React.FC = () => (
    <View style={styles.noPeopleContainer}>
        <Text style={styles.noPeopleText}>
            {`You don't have any followers yet`}
        </Text>
    </View>
);

const ShareContentOption: React.FC = ({ option, onPress }) => (
    <TouchableOpacity
        onPress={() => {
            onPress && onPress();
        }}
        style={styles.shareOptionView}>
        <View style={styles.optionCircle}>
            <Image source={option.icon} style={styles.shareOptionIcon} />
        </View>
        <Text style={[styles.sendTitle, { marginTop: 10 }]}>{option.text}</Text>
    </TouchableOpacity>
);
const FavUserItem: React.FC = ({ people, onPress }) => (
    <TouchableOpacity onPress={() => {}} style={styles.favUserImage}>
        <Image source={people.imageUrl} style={styles.favUserImage} />
    </TouchableOpacity>
);
const UserItem: React.FC = ({ people, onPress }) => (
    <>
        <TouchableOpacity onPress={() => {}} style={styles.userView}>
            <Image source={people.imageUrl} style={styles.songImage} />

            <View style={styles.peopleInfo}>
                <Text style={styles.peoplwTitle}>{'Sachin'}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    onPress && onPress();
                }}>
                <LinearGradient
                    colors={[Colors.gradient1, Colors.gradient2]}
                    style={styles.sendOptionButton}>
                    <Text style={styles.sendTitle}>{'Send'}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </TouchableOpacity>
        <View
            style={{
                height: 1,
                width: '100%',
                backgroundColor: 'rgba(255,255,255,0.2)',
                marginVertical: 16,
            }}
        />
    </>
);

interface Props {
    showShareOptions?: boolean;
}

const SendStorySheet = ({ showShareOptions }: Props) => {
    const [searchText, setSearchText] = useState('');
    const [filteredPeople, setFilteredPeople] = useState<Song[]>(songsData);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const bottomSheetRef = useRef<BottomSheet>(null);
    const { sendStorySheet, toggleSendStorySheet } = useContentStore();

    useEffect(() => {
        if (sendStorySheet) {
            bottomSheetRef.current?.expand();
        } else {
            bottomSheetRef.current?.close();
        }
    }, [sendStorySheet]);

    const filterPeople = (text: string) => {
        let filtered = songsData.filter(people =>
            people.title.toLowerCase().includes(text.toLowerCase()),
        );
        setFilteredPeople(filtered);
    };

    const handleSearch = (text: string) => {
        setSearchText(text);
        filterPeople(text);
    };

    const handleSend = () => {
        toggleSendStorySheet();
    };
    const handleOptionPress = () => {
        toggleSendStorySheet();
    };
    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={['72%']}
            enablePanDownToClose
            handleIndicatorStyle={{ backgroundColor: Colors.grey }}
            backgroundStyle={{ backgroundColor: Colors.primaryColor }}
            handleStyle={styles.sheetHandleStyle}
            onClose={() => sendStorySheet && toggleSendStorySheet()}>
            <View style={styles.container}>
                <Text
                    style={[
                        styles.titleText,
                        styles.bigTitleText,
                    ]}>{`Share to your loved ones!`}</Text>
                <View style={styles.searchContainer}>
                    <Image
                        source={Images.magnifyIcon}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search"
                        placeholderTextColor={Colors.dullWhite}
                        value={searchText}
                        onChangeText={handleSearch}
                    />
                </View>
                <Text style={styles.titleText}>{`Your favourites`}</Text>
                <View>
                    <FlatList
                        data={songsData}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.listAroundSpace}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        renderItem={({ item }) => (
                            <FavUserItem people={item} onPress={handleSend} />
                        )}
                    />
                </View>
                <Text style={styles.titleText}>{`Chats`}</Text>
                {filteredPeople.length ? (
                    <FlatList
                        data={filteredPeople}
                        style={styles.listAroundSpace}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        renderItem={({ item }) => (
                            <UserItem people={item} onPress={handleSend} />
                        )}
                    />
                ) : (
                    <NoPeopleMessage />
                )}
            </View>
            {showShareOptions && (
                <View style={styles.bottomOptions}>
                    <FlatList
                        data={shareContentOptions}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.listAroundSpace}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        renderItem={({ item }) => (
                            <ShareContentOption
                                option={item}
                                onPress={handleOptionPress}
                            />
                        )}
                    />
                </View>
            )}
        </BottomSheet>
    );
};

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
    bigTitleText: {
        fontSize: 20,
    },
    titleText: {
        color: Colors.primaryWhite,
        fontFamily: 'Figtree-Bold',
        fontSize: 18,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.24)',
        paddingHorizontal: 12,
        borderRadius: 8,
        marginVertical: 30,
    },
    searchIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
    },

    searchBar: {
        height: 54,
        padding: 12,
        color: Colors.primaryWhite,
        fontFamily: 'Figtree-Medium',
        fontSize: 16,
        flex: 1,
    },
    favUserView: {
        alignItems: 'center',
    },
    userView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    favUserImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
        resizeMode: 'contain',
    },
    songImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
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
    peopleInfo: {
        flex: 1,
    },
    peoplwTitle: {
        fontSize: 16,
        fontFamily: 'Figtree-Medium',
        color: Colors.primaryWhite,
    },
    noPeopleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noPeopleText: {
        fontSize: 14,
        color: Colors.dullWhite,
        textAlign: 'center',
        fontFamily: 'Figtree-Regular',
    },
    sendOptionButton: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    sendTitle: {
        fontSize: 14,
        color: Colors.primaryWhite,
        fontFamily: 'Figtree-Regular',
    },
    listAroundSpace: { marginVertical: 20 },
    bottomOptions:{
        minHeight: 40,
        backgroundColor: '#2e3338',
        position: 'absolute',
        bottom: 0,
        width:'100%'
    },
    shareOptionView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:10
    },
    shareOptionIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    optionCircle: {
        height: 54,
        width: 54,
        borderRadius: 30,
        backgroundColor: '#3b3f44',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SendStorySheet;
