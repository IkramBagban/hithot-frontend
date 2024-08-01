import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../theme/Colors';
import { ContentType, contentOptions } from '../../constants';
import { Images } from '../../theme/Images';
import { useContentStore } from '../../store/contentStore';
import { useProfileStore } from '../../store/UserProfileStore';

const { width } = Dimensions.get('window');
interface PostOptionsProp {
    onGalleryClick: () => void;
    activeContentType: string;
    displayOptions?: boolean;
    onPost?: () => void;
    onOptionPress?: (val: string) => void;
}

const PostOptions: React.FC<PostOptionsProp> = ({
    onGalleryClick,
    activeContentType,
    displayOptions = true,
    onPost = () => {},
    onOptionPress,
}) => {
    const [selectedC, setSelectedC] = useState<string>(ContentType.STORY);
    const { toggleShowShareStorySheet, toggleSubscribeModel } =
        useContentStore();
        const { profileData } = useProfileStore();
    const handleOptionPress = (type: string) => {
        setSelectedC(type);
        onOptionPress(type);
    };
    const flatListRef = useRef(null);

    const scrollToItem = index => {
        flatListRef?.current.scrollToIndex({ animated: true, index });
    };

    useEffect(() => {
        activeContentType && setSelectedC(activeContentType);
        const cIdx = contentOptions?.findIndex(
            i => i.type === activeContentType,
        );
        scrollToItem(cIdx);
    }, [activeContentType]);
    return displayOptions ? (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.firstButton}
                onPress={() => {
                    onGalleryClick && onGalleryClick();
                }}>
                <Image
                    source={Images.addContentIcon}
                    style={{ height: 24, width: 24, resizeMode: 'contain' }}
                />
            </TouchableOpacity>
            <FlatList
                ref={flatListRef}
                horizontal
                data={contentOptions}
                onScrollToIndexFailed={() => null}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            if (item.type === ContentType.CLIP) {
                                if (profileData?.hasSubscription) {
                                } else {
                                    toggleSubscribeModel();
                                    return;
                                }
                                return;
                            }
                            handleOptionPress(item.type);
                        }}>
                        {item.type === selectedC ? (
                            <LinearGradient
                                colors={[Colors.gradient1, Colors.gradient2]}
                                style={styles.optionContainer}>
                                <Text style={styles.selectedText}>
                                    {item.type}
                                </Text>
                            </LinearGradient>
                        ) : (
                            <View style={styles.optionContainer}>
                                <Text style={styles.optionText}>
                                    {item.type}
                                </Text>
                            </View>
                        )}
                        {item.type === ContentType.CLIP && (
                            <Image
                                source={Images.crownIcon}
                                style={{
                                    position: 'absolute',
                                    top: 4,
                                    left: 6,
                                    height: 16,
                                    width: 16,
                                    resizeMode: 'contain',
                                    transform: [{ rotate: '-50deg' }],
                                }}
                            />
                        )}
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    ) : (
        <View style={styles.postOptionView}>
            {activeContentType === ContentType.STORY && (
                <View style={styles.rowNCenter}>
                    <TouchableOpacity style={styles.fullWidth} onPress={onPost}>
                        <LinearGradient
                            colors={[Colors.gradient1, Colors.gradient2]}
                            style={styles.postOptionButton}>
                            <Text style={styles.selectedText}>
                                {'Post Story'}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            toggleShowShareStorySheet();
                        }}
                        style={styles.sendStory}>
                        <Image
                            style={styles.sendIcon}
                            source={Images.shareIcon}
                        />
                    </TouchableOpacity>
                </View>
            )}
            {activeContentType !== ContentType.STORY && (
                <TouchableOpacity style={styles.fullWidth} onPress={onPost}>
                    <LinearGradient
                        colors={[Colors.gradient1, Colors.gradient2]}
                        style={styles.postOptionButton}>
                        <Text style={styles.selectedText}>{`Post ${
                            activeContentType === ContentType.POST
                                ? 'Image'
                                : activeContentType
                        }`}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: Colors.bluryWhite,
        position: 'absolute',
        marginHorizontal: 15,
        borderRadius: 10,
        bottom: '5%',
    },
    postOptionView: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        // paddingBottom: 50,
        position: 'absolute',
        bottom: '5%',
        // bottom: 0,
        // borderTopLeftRadius:10,
        // borderTopRightRadius:10,
        width: '100%',
        // backgroundColor:Colors.primaryBlack
    },
    postOptionButton: {
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        // borderRadius: 10,
        height: 54,
        width: 258,
        padding: 10,
        borderRadius: 8,
        backgroundColor: Colors.grey,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullWidth: {
        // width: '70%',
    },
    firstButton: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: Colors.bluryWhite,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    optionContainer: {
        marginRight: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: Colors.grey,
    },
    selectedText: {
        color: Colors.primaryWhite,
        fontFamily: 'Figtree-Medium',
        textTransform: 'capitalize',
    },
    optionText: {
        color: Colors.primaryWhite,
        fontFamily: 'Figtree-Medium',
        textTransform: 'capitalize',
    },
    listContainer: {
        alignItems: 'center',
    },
    rowNCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
    sendStory: {
        height: 54,
        width: 54,
        backgroundColor: 'rgba(255,255,255,0.16)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    sendIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
    },
});

export default PostOptions;
