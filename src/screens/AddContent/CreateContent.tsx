import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    Alert,
    View,
    Text,
    Image,
    Platform,
    PermissionsAndroid,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    Animated,
    Keyboard,
    BackHandler,
} from 'react-native';
import {
    Camera,
    useCameraDevice,
    useCameraDevices,
    useCameraFormat,
    useCameraPermission,
    useMicrophonePermission,
} from 'react-native-vision-camera';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import BottomOptions from '../../components/Content/BottomButtons';
import PostOptions from '../../components/Content/PostOptions';
import { Images } from '../../theme/Images';
import { Colors } from '../../theme/Colors';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { Dropdown } from 'react-native-element-dropdown';
import { FlatList } from 'react-native-gesture-handler';
import {
    useIsFocused,
    useNavigation,
    useRoute,
} from '@react-navigation/native';
import TopOptions from '../../components/Content/TopOptions';
import { ContentType } from '../../constants';
import { getMimeTypeFromPath } from '../../utils/contentUtils';
import MusicBottomSheet from '../../components/Content/MusicSheet';
import { useContentStore } from '../../store/contentStore';
import Video from 'react-native-video';
import StoryShareSheet from '../../components/Content/StoryShareSheet';
import SendStorySheet from '../../components/Content/SendStorySheet';
import CancelShortModal from '../../models/CancelShortModal';
import DiscardStoryModal from '../../models/DiscardStoryModal';
import CancelClipModal from '../../models/CancelClipModal';
import DiscardPostModal from '../../models/DiscardPostModal';
import { TextInput } from 'react-native';
import Draggable from 'react-native-draggable';
import USERS from './USERS';
import TextEditor from './TextEditor';
import useThemeStyles from '../../hooks/useThemeStyles';

const { width } = Dimensions.get('window');

function CreateContent() {
    const camera = useRef(null);
    const device = useCameraDevice('back');
    const { hasPermission, requestPermission } = useCameraPermission();
    const [photos, setPhotos] = useState([]);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [dd, setDD] = useState([]);
    const [ctType, setCtType] = useState(ContentType.STORY);
    const [torchActive, setTorchActive] = useState(false);
    const [frontCamera, setFrontCamera] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [endCursor, setEndCursor] = useState('0');
    const [hasNextPage, setHasNextPage] = useState(true);
    const [isRecording, setIsRecording] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isMultipost, setIsMultiPost] = useState(false);
    const [paused, setPaused] = useState(false);
    const videoRef = useRef(null);

    const isFocused = useIsFocused();
    const { params } = useRoute();
    const navigation = useNavigation();
    const { toggleMusicSheet, showDiscardModel, toggleDiscardModel,enableCreateContent } =
        useContentStore();
    const { hasPermission: isMicAvailable, requestPermission: reqMic } =
        useMicrophonePermission();
    const canRecordAudio = isMicAvailable;

    const progressAnim = useRef(new Animated.Value(0)).current;
    const styles = useThemeStyles(styleCreator);

    useEffect(() => {}, [currentTime]);

    useEffect(() => {
        if (params) setCtType(params.type);
        if (!isFocused) {
            setSelectedImage(null);
            setTorchActive(false);
            // device && enableCreateContent(false)
        }
    }, [isFocused]);
    useEffect(() => {
        const goToFeed = () =>
            navigation.navigate('RootScreen', {
                screen: 'MainScreen',
            });
        const backListener = BackHandler.addEventListener(
            'hardwareBackPress',
            goToFeed,
        );
        return () => backListener.remove();
    }, []);
    useEffect(() => {
        // This will ask permission for devices camera
        if (!hasPermission) {
            requestPermission().then(() => {
                // requestMicrophonePermission();
                !isMicAvailable &&
                    reqMic().then(() => {
                        if (Platform.OS === 'android') {
                            hasAndroidPermission();
                        } else {
                            fetchAlbums();
                        }
                    });
            });
        }
    }, []);

    /* Here we use hook provided by library to take available devices (lenses) */
    const availableDevices = useCameraDevices();

    const switchCamera = (cameraSide: string) =>
        availableDevices.find(d => d.position === cameraSide);
    const currentDevice =
        frontCamera && switchCamera('front')
            ? switchCamera('front')
            : switchCamera('back');

    const takePhoto = async () => {
        try {
            const result = await camera.current?.takePhoto();
            // console.log('result ---> ', result);
            if (result?.path)
                setSelectedImage({
                    path: result.path,
                    type: getMimeTypeFromPath(result.path),
                });
        } catch (e) {
            Alert.alert(`Error: ${e}`);
        }
    };

    const flipCamera = () => {
        setFrontCamera(prevState => !prevState);
    };
    const toggleTorch = () => setTorchActive(prevState => !prevState);

    const handleLoadMore = () => {
        if (hasNextPage) {
            fetchPhotos(selectedAlbum);
        }
    };

    useEffect(() => {
        setPhotos([]);
        fetchAlbums();
    }, [ctType]);
    const fetchPhotos = useCallback(
        async (album, ecVal = endCursor) => {
            if (loading || !hasNextPage) return;
            setLoading(true);
            try {
                const params = {
                    first: 20,
                    assetType: 'All',
                    ...(endCursor && { after: endCursor }),
                    after: ecVal,
                    groupName: album,
                    include: [
                        'playableDuration',
                        'imageSize',
                        'filename',
                        'sourceType',
                    ],
                };
                // console.log('params -->', params);

                const result = await CameraRoll.getPhotos(params);
                // console.log('result --photos--->', result);

                let filteredPhotos = result.edges;
                // console.log('edges=>', JSON.stringify(result));

                if (ctType === 'SHORT') {
                    filteredPhotos = filteredPhotos.filter(item =>
                        item.node.type.includes('video'),
                    );
                } else if (ctType === 'POST') {
                    filteredPhotos = filteredPhotos.filter(item =>
                        item.node.type.includes('image'),
                    );
                }

                setPhotos(prevPhotos => [...prevPhotos, ...filteredPhotos]);
                // setPhotos(prevPhotos => [...prevPhotos, ...result.edges]);
                setEndCursor(result.page_info.end_cursor);
                setHasNextPage(result.page_info.has_next_page);
            } catch (error) {
                // console.error(error);
            } finally {
                setLoading(false);
            }
        },
        [loading, hasNextPage, ctType],
    );

    async function hasAndroidPermission() {
        const getCheckPermissionPromise = () => {
            if (Platform.Version >= 33) {
                return Promise.all([
                    PermissionsAndroid.check(
                        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
                    ),
                    PermissionsAndroid.check(
                        PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
                    ),
                ]).then(
                    ([
                        hasReadMediaImagesPermission,
                        hasReadMediaVideoPermission,
                    ]) =>
                        hasReadMediaImagesPermission &&
                        hasReadMediaVideoPermission,
                );
            } else {
                return PermissionsAndroid.check(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                );
            }
        };

        const hasPermission = await getCheckPermissionPromise();
        // console.log('hasPermission --> ', hasPermission);
        if (hasPermission) {
            fetchAlbums();
            return true;
        }
        const getRequestPermissionPromise = () => {
            if (Platform.Version >= 33) {
                return PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
                    PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
                ]).then(
                    statuses =>
                        statuses[
                            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
                        ] === PermissionsAndroid.RESULTS.GRANTED &&
                        statuses[
                            PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO
                        ] === PermissionsAndroid.RESULTS.GRANTED,
                );
            } else {
                return PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                ).then(status => status === PermissionsAndroid.RESULTS.GRANTED);
            }
        };
        let result = await getRequestPermissionPromise();
        if (result) fetchAlbums();

        return result;
    }

    const fetchAlbums = async () => {
        try {
            const albums = await CameraRoll.getAlbums({ assetType: 'Photos' });
            // console.log('ALBUMS ==============> ', albums);
            const mappedAlbums = albums.map(i => ({
                label: i.title,
                value: i.title,
            }));
            setDD(mappedAlbums);
            setValue(mappedAlbums[0]?.value);
            setSelectedAlbum(mappedAlbums[0]?.value);
            fetchPhotos(mappedAlbums[0]?.value);
        } catch (error) {
            // console.log(error);
        }
    };

    const formatDuration = duration => {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const renderAlbumName = item => {
        // console.log('item ================>, ', item);
        return (
            <View style={styles.dropdownItem}>
                <Text numberOfLines={1} style={styles.dropdownItemText}>
                    {item.value}
                </Text>
            </View>
        );
    };
    const shootVideo = () => {
        setIsRecording(true);
        camera?.current.startRecording({
            onRecordingFinished: video => {
                // console.log('recorded video --> ', video);
                if (video) {
                    setSelectedImage({
                        path: video.path,
                        type: getMimeTypeFromPath(video.path),
                        duration: video.duration,
                    });
                }
                setIsRecording(false);
            },
            onRecordingError: error => {
                // console.log('Error while shooting a video', error);
                setIsRecording(false);
            },
        });
    };
    const getProgress = () => {
        if (duration === 0) return 0;
        return (currentTime / duration) * width;
    };
    const onProgress = data => {
        setCurrentTime(data.currentTime);
    };

    const onLoad = data => {
        setDuration(data.duration);
    };

    const handleDiscard = () => {
        setSelectedImage(null);
    };

    const renderDiscardModal = () => {
        switch (ctType) {
            case ContentType.CLIP: {
                return (
                    <CancelClipModal
                        showModel={showDiscardModel}
                        handleDiscard={handleDiscard}
                    />
                );
            }
            case ContentType.SHORT: {
                return (
                    <CancelShortModal
                        showModel={showDiscardModel}
                        handleDiscard={handleDiscard}
                    />
                );
            }
            case ContentType.STORY: {
                return (
                    <DiscardStoryModal
                        showModel={showDiscardModel}
                        handleDiscard={handleDiscard}
                    />
                );
            }
            case ContentType.POST: {
                return (
                    <DiscardPostModal
                        showModel={showDiscardModel}
                        handleDiscard={handleDiscard}
                    />
                );
            }
        }
    };

    const [editors, setEditors] = useState([]);
    const editorRefs = useRef([]);

    const handleAddEditor = () => {
        setEditors(prev => [
            ...prev,
            {
                coords: { x: 50, y: 150 },
                ref: React.createRef(),
                textContent: ``,
                id: Math.random(),
            },
        ]);
    };

    const handleEditorUpdate = (property, value, id) => {
        // setEditors()
        const c = editors.map(e => {
            if (e.id === id) {
                e[property] = value;
            }
        });

        setEditors(prev => [...prev, c]);
    };

    const [taggedPersons, setTaggedPersons] = useState<string[] | any>([]);
    const [showMentionInput, setShowMentionInput] = useState(false);

    const [showContentText, setShowContentText] = useState<Boolean>(false);
    const [mentionText, setMentionText] = useState<string>('');
    const MentionInput = () => {
        // const [inputWidth, setInputWidth] = useState(10);

        const handleTextChange = (text: String) => {
            console.log('text: ', text);
            setMentionText(text);
            // setInputWidth(Math.max(10, Math.min(width - 20, text.length * 8)));
        };

        return (
            <TextInput
                style={styles.mentionTextInput}
                value={mentionText}
                onChangeText={handleTextChange}
                placeholder="Mention someone..."
            />
        );
    };

    return (
        <View
            style={{
                backgroundColor: Colors.primaryColor,
                flex: 1,
                paddingTop: StatusBar.currentHeight,
            }}>
            <StatusBar translucent backgroundColor={Colors.transparent} />
            <View
                style={{
                    flex: 1,
                    // flex: 0.85,
                    // borderBottomLeftRadius: 30,
                    // borderBottomRightRadius: 30,
                    overflow: 'hidden',
                    backgroundColor: Colors.dullGrey,
                }}>
                {selectedImage &&
                    (selectedImage?.node?.type?.includes('image') ||
                        selectedImage?.type?.includes('image')) && (
                        <Image
                            source={{
                                uri: selectedImage?.node
                                    ? selectedImage?.node.image.uri
                                    : `file://${selectedImage.path}`,
                            }}
                            style={{
                                height: '100%',
                                width: '100%',
                                resizeMode: selectedImage?.node
                                    ? 'contain'
                                    : 'cover',
                            }}
                        />
                    )}
                {selectedImage &&
                    (selectedImage?.node?.type?.includes('video') ||
                        selectedImage?.type?.includes('video')) && (
                        <TouchableOpacity
                            onPress={() => {
                                setPaused(!paused);
                            }}
                            activeOpacity={1}>
                            <Video
                                source={{
                                    uri: selectedImage?.node
                                        ? selectedImage?.node.image.uri
                                        : `file://${selectedImage.path}`,
                                }}
                                style={[
                                    {
                                        height: '100%',
                                        width: '100%',
                                    },
                                    // StyleSheet.absoluteFill,
                                ]}
                                resizeMode={
                                    selectedImage?.node ? 'contain' : 'cover'
                                }
                                repeat={true}
                                paused={paused}
                                // onLoad={onLoad}
                                // onProgress={onProgress}
                            />
                        </TouchableOpacity>
                    )}
                {hasPermission &&
                    availableDevices &&
                    isFocused &&
                    !selectedImage &&
                    !isSheetOpen && (
                        <Camera
                            ref={camera}
                            style={StyleSheet.absoluteFill}
                            device={currentDevice ?? device}
                            isActive={!isFocus}
                            photo={true}
                            torch={torchActive ? 'on' : 'off'}
                            video={true}
                            audio={true}
                        />
                    )}
                {/* {(selectedImage?.node?.type?.includes('video') ||
                    selectedImage?.type?.includes('video')) && (
                    <View style={styles.sliderView}>
                        <View
                            style={[styles.slider, { width: getProgress() }]}
                        />
                    </View>
                )} */}
            </View>

            {!selectedImage && (
                <BottomOptions
                    takePhoto={takePhoto}
                    takeVideo={shootVideo}
                    isRecording={isRecording}
                    stopVideo={async () => {
                        await camera?.current?.stopRecording();
                    }}
                />
            )}
            {selectedImage && (
                <TouchableOpacity
                    onPress={() => {
                        toggleDiscardModel();
                    }}
                    style={{
                        position: 'absolute',
                        top:
                            Platform.OS === 'ios'
                                ? StatusBar.currentHeight + 50
                                : StatusBar.currentHeight + 15,
                        left: 25,
                        elevation: 10,
                    }}>
                    <Image
                        source={Images.crossIcon}
                        style={{
                            height: 30,
                            width: 30,
                            resizeMode: 'contain',
                        }}
                    />
                </TouchableOpacity>
            )}
            <TopOptions
                onFlashPress={toggleTorch}
                onFlipCamPress={flipCamera}
                onMusicPress={toggleMusicSheet}
                isCameraOn={!selectedImage}
                isTorchOn={torchActive}
                onMentionPress={() => {
                    setShowMentionInput(!showMentionInput);
                    console.log('Mention click');
                }}
                onTextPress={() => {
                    console.log('Text click');
                    setShowContentText(prev => !prev);
                    handleAddEditor();
                }}
            />
            {/* {selectedImage && editors.length > 0 && ( */}
            {selectedImage && showContentText && (
                <View
                    style={{
                        // width: '100%',
                        // height: '100%',
                        flex: 1,
                        // position: 'relative',
                        // top:50,
                        // left:50,

                        // zIndex: 3,
                        // backgroundColor: 'none',
                    }}>
                    <TextEditor
                        editors={editors}
                        onAddEditor={handleAddEditor}
                        onUpdateEditor={handleEditorUpdate}
                    />
                </View>
            )}
            <View
                style={{
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    // width: '100%',
                    // height: '100%',
                    backgroundColor: 'transparent',
                    position: 'absolute',
                }}>
                {showMentionInput && (
                    <Draggable x={100} y={200}>
                        <MentionInput />
                    </Draggable>
                )}
            </View>
            <View
                style={{
                    position: 'relative',
                    bottom: 270,
                    padding: 10,
                    borderRadius: 10,
                }}>
                {selectedImage && showMentionInput && (
                    <FlatList
                        data={USERS}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    alignItems: 'center',
                                    marginHorizontal: 10,
                                }}>
                                <Image
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 25,
                                        borderColor: '#ccc',
                                        borderWidth: 1,
                                    }}
                                    source={{ uri: item?.avatar }}
                                />
                                <Text
                                    style={{
                                        marginTop: 5,
                                        fontSize: 14,
                                        color: Colors?.primaryWhite,
                                    }}>
                                    {item?.username}
                                </Text>
                            </View>
                        )}
                    />
                )}
            </View>
            <PostOptions
                onGalleryClick={() => {
                    bottomSheetRef?.current?.expand();
                }}
                activeContentType={ctType}
                onOptionPress={t => setCtType(t)}
                displayOptions={!selectedImage}
                onPost={() => {
                    const path = selectedImage?.node
                        ? selectedImage?.node?.image?.uri
                        : `file://${selectedImage?.path}`;
                    let posts = [
                        {
                            name: selectedImage?.node
                                ? selectedImage?.node?.image?.filename
                                : path,
                            uri: path,
                            type: selectedImage?.node
                                ? selectedImage?.node.type
                                : selectedImage?.type,
                            uploadType: ctType,
                            playDuration: formatDuration(
                                selectedImage?.node
                                    ? selectedImage?.node.image.playableDuration
                                    : selectedImage?.duration,
                            ),
                        },
                    ];
                    navigation.navigate('UploadContent', { posts });
                }}
            />
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={['80%']}
                index={-1}
                backgroundStyle={{
                    // backgroundColor: Colors.primaryColor,
                    backgroundColor: 'white',
                    borderRadius: 0,
                    flex: 1,
                }}
                handleIndicatorStyle={{
                    height: 3,
                    backgroundColor: Colors.grey,
                }}
                handleComponent={() => null}
                enablePanDownToClose
                onChange={change => {
                    // console.log('change -->', change);
                    setIsSheetOpen(true);
                }}
                onClose={() => {
                    setIsSheetOpen(false);
                }}>
                <BottomSheetView style={styles.contentContainer}>
                    <BottomSheetView
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <View style={[styles.headerOptions, styles.rowNCenter]}>
                            <Dropdown
                                style={[
                                    styles.dropdown,
                                    {
                                        borderWidth: 0,
                                    },
                                ]}
                                containerStyle={{ borderWidth: 0 }}
                                itemTextStyle={{ color: 'red' }}
                                iconStyle={{
                                    height: 30,
                                    width: 30,
                                    tintColor: Colors.primaryWhite,
                                }}
                                selectedTextStyle={{
                                    color: Colors.primaryWhite,
                                    fontFamily: 'Figtree-Bold',
                                    fontSize: 20,
                                }}
                                selectedTextProps={{ numberOfLines: 1 }}
                                data={dd}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'All' : '...'}
                                placeholderStyle={{
                                    color: Colors.primaryWhite,
                                    fontFamily: 'Figtree-Bold',
                                    fontSize: 20,
                                }}
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    // console.log('ddITEm -->', item);
                                    setValue(item.value);
                                    setIsFocus(false);
                                    setEndCursor('0');
                                    setHasNextPage(true);
                                    setPhotos([]); // Clear current photos
                                    setSelectedAlbum(item.label);
                                    fetchPhotos(item.label, '0'); // Fetch new photos
                                }}
                                renderItem={renderAlbumName}
                            />
                            <View style={[styles.rowNCenter]}>
                                {isMultipost ? (
                                    <TouchableOpacity
                                        style={styles.tOptionView}>
                                        <Image
                                            source={
                                                Images.multipostSelectionIcon
                                            }
                                            style={styles.sheetTopIcons}
                                        />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity
                                        style={styles.tOptionView}>
                                        <Image
                                            source={
                                                Images.multipostSelectionIcon
                                            }
                                            style={styles.sheetTopIcons}
                                        />
                                    </TouchableOpacity>
                                )}
                                <TouchableOpacity
                                    style={[
                                        styles.tOptionView,
                                        styles.leftSpace,
                                    ]}
                                    onPress={() =>
                                        bottomSheetRef.current?.close()
                                    }>
                                    <Image
                                        source={Images.sheetCameraIcon}
                                        style={styles.sheetTopIcons}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FlatList
                            data={photos}
                            bounces={false}
                            keyExtractor={item => item.node.image.uri}
                            style={[
                                { marginTop: 15 },
                                photos.length < 3 && {
                                    alignSelf: 'flex-start',
                                },
                            ]}
                            contentContainerStyle={{ paddingBottom: 80 }}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        // console.log('item', item);
                                        bottomSheetRef?.current?.close();
                                        setSelectedImage(item);
                                    }}>
                                    <Image
                                        source={{ uri: item.node.image.uri }}
                                        style={{
                                            width: 115,
                                            height: 130,
                                            margin: 3,
                                            borderRadius: 6,
                                        }}
                                    />
                                    {item.node.type?.includes('video') && (
                                        <Text
                                            style={{
                                                color: 'white',
                                                position: 'absolute',
                                                bottom: 2,
                                                right: 10,
                                            }}>
                                            {formatDuration(
                                                item.node.image
                                                    .playableDuration,
                                            )}
                                        </Text>
                                    )}
                                </TouchableOpacity>
                            )}
                            numColumns={3}
                            onEndReached={handleLoadMore}
                            onEndReachedThreshold={0.2}
                        />
                    </BottomSheetView>
                </BottomSheetView>
            </BottomSheet>
            <MusicBottomSheet />
            <StoryShareSheet />
            <SendStorySheet />
            {isFocused && renderDiscardModal()}
        </View>
    );
}
const styleCreator = colors =>
    StyleSheet.create({
        draggableContainer: {
            padding: 8,
            backgroundColor: 'white',
            borderRadius: 4,
        },

        mentionTextInput: {
            // flex: 1,
            // borderColor:

            borderWidth: 1,
            padding: 8,
            borderRadius: 4,
            color: colors.textColor,
            backgroundColor: colors?.bgColor,
        },
        container: {
            flex: 1,
            padding: 24,
            backgroundColor: 'grey',
        },
        contentContainer: {
            flex: 1,
            padding: 15,
        },
        rowNCenter: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        bottomMargin: { marginBottom: 15 },
        spaceBtw: { justifyContent: 'space-between' },
        actionText: {
            color: Colors.primaryWhite,
            fontFamily: 'Figtree-Medium',
        },
        premiumText: {
            color: Colors.dullWhite,
            fontFamily: 'Figtree-Regular',
            fontSize: 14,
        },
        dropdown: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 0.5,
            borderRadius: 8,
            paddingHorizontal: 8,
            width: '35%',
        },
        icon: {
            height: 30,
            width: 30,
            resizeMode: 'contain',
            margin: 5,
        },
        label: {
            position: 'absolute',
            backgroundColor: 'white',
            left: 22,
            top: 8,
            zIndex: 999,
            paddingHorizontal: 8,
            fontSize: 14,
        },
        dropdownItem: {
            padding: 15,
            backgroundColor: Colors.dullGrey,
        },
        dropdownItemText: {
            color: Colors.primaryWhite,
            fontFamily: 'Figtree-Regular',
            fontSize: 16,
        },
        sliderView: {
            backgroundColor: 'rgba(255,255,255,0.24)',
            position: 'absolute',
            top: 0,
            elevation: 0,
            width: '100%',
            borderRadius: 10,
        },
        slider: {
            height: 6,
            backgroundColor: Colors.lime,
            borderRadius: 10,
        },
        sheetTopOptions: {},
        sheetTopIcons: {
            height: 16,
            width: 16,
            resizeMode: 'contain',
        },
        tOptionView: {
            height: 30,
            width: 30,
            backgroundColor: 'rgba(255,255,255,0.12)',
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',
        },
        leftSpace: {
            marginLeft: 10,
        },
        headerOptions: {
            width: '100%',
            paddingHorizontal: 10,
            backgroundColor: Colors.bluryWhite,
            borderRadius: 10,
            justifyContent: 'space-between',
        },
    });
export default CreateContent;
