//last

import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { useEffect, useRef, useState } from 'react';

import {
    Alert,
    Animated,
    Button,
    Image,
    Keyboard,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
import CommentTile from '../CommentTile';
import axios from 'axios';
import React from 'react';
import { Dimensions } from 'react-native';
import FocusComment from '../FocusComment';
import Toast from 'react-native-toast-message';
import useVideoPlayingStore from '../../../store/VideoPlayingStore';
import { showTomatoToast } from '../../Toast/HitHotToast';
const { width, height } = Dimensions.get('window');
interface CommentUserInfo {
    first_name: string;
    last_name: string;
    profile_pic: string;
    username: string;
    verified: number;
}

export interface CommentInterface {
    video_id: string;
    video_owner_id: string;
    id: number;
    fb_id: string;
    comments: string;
    created: string;
    user_info: CommentUserInfo;
}

interface addNewComment {
    fb_id: string;
    video_id: number;
    comment: string;
}

interface Props {
    commentCount: number;
    postId: number;
    col?: boolean;
    fb_id: string;
}

const fetchComments = async (PostID: string): Promise<CommentInterface[]> => {
    const url = 'https://adminpanel.hithot.club/api/showVideoComments';
    try {
        const commentResponse = await axios.post(url, { video_id: PostID });

        if (commentResponse.data.msg) {
            return commentResponse.data.msg as CommentInterface[];
        } else {
            return [];
        }
    } catch (error) {
        // console.log('Error fetching comments:', error);
        return [];
    }
};
//aare
const uploadComment = async (props: addNewComment) => {
    const url = 'https://adminpanel.hithot.club/api/postComment';
    const requestBody = {
        fb_id: props.fb_id,
        video_id: props.video_id.toString(),
        comment: props.comment,
    };

    // console.log('Request body:', requestBody);

    try {
        const response = await axios.post(url, requestBody);

        // console.log('Response:', response.data);

        if (response.data.code === '200') {
            // console.log('Comment uploaded successfully');
            return true;
        } else {
            // console.log('Failed to upload comment:', response.data.msg);
            return false;
        }
    } catch (error: any) {
        if (error.response) {
            // console.log('Error response data:', error.response.data);
            // console.log('Error response status:', error.response.status);
            // console.log('Error response headers:', error.response.headers);
        } else {
            // console.log('Error message:', error.message);
        }
        return false;
    }
};

const emojiData = [
    {
        id: 1,
        text: '❤️',
        img: require('../../../assets/Emojis/redHeart.png'),
    },
    {
        id: 2,
        text: '🙌',
        img: require('../../../assets/Emojis/raise.png'),
    },
    {
        id: 3,
        text: '🔥',
        img: require('../../../assets/Emojis/nFire.png'),
    },
    {
        id: 4,
        text: '🥺',
        img: require('../../../assets/Emojis/sad.png'),
    },
    {
        id: 5,
        text: '😥',
        img: require('../../../assets/Emojis/rsad.png'),
    },
    {
        id: 6,
        text: '😍',
        img: require('../../../assets/Emojis/happy.png'),
    },
    {
        id: 7,
        text: '😭',
        img: require('../../../assets/Emojis/cry.png'),
    },
    {
        id: 8,
        text: '😂',
        img: require('../../../assets/Emojis/chappy.png'),
    },
];
// Inside CommentSection component
const CommentSection: React.FC<Props> = ({
    commentCount,
    postId,
    col,
    fb_id,
}) => {
    const [comments, setComments] = useState<CommentInterface[]>([]);
    const [commentLoading, setCommentLoading] = useState<boolean>(false);
    const [newComment, setNewComment] = useState<string>('');
    const commentBottomRef = useRef<BottomSheetModal>(null);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [ShowReaction, HideReaction] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);
    const [focussedComment, setFocusedComment] =
        useState<CommentInterface | null>(null);
    //
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [fbID, setFbID] = useState(fb_id);
    const [isCol, setIsCol] = useState(col);
    const [PostID, setPostID] = useState(postId);
    const [comment_count, setComment_count] = useState(commentCount);
    const inputRef = useRef<TextInput>(null);
    const [isKeyboradOpen, setIsKeyboradOpen] = useState(true);
    // console.log(postId, 'this is post id');

    useEffect(() => {
        setTimeout(() => {
            setShowEmoji(false);
        }, 1000);
    }, [showEmoji]);

    const handleCommentPress = (comment: CommentInterface) => {
        setFocusedComment(comment);
        // console.log('Focussed', focussedComment);

        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };
    //

    const handleCloseFocusedComment = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => setFocusedComment(null));
    };

    const handleReply = (comment: CommentInterface) => {
        // Implement reply functionality
        // console.log('Replying to:', comment);
    };
    const handleSubmit = async () => {
        const props: addNewComment = {
            fb_id: fbID,
            video_id: PostID,
            comment: newComment,
        };
        // console.log('Handle function props:', props);

        const success = await uploadComment(props);
        if (success) {
            //Alert.alert('Success', 'Comment uploaded successfully');
            // Snackbar.show({
            //     text: 'Comment uploaded successfully',
            //     duration: Snackbar.LENGTH_SHORT,
            // });
            Toast.show({
                type: 'success',
                text1: 'Comment uploaded successfuly!',
            });
            setShowSnackbar(true);
            inputRef?.current?.blur();
            setIsKeyboradOpen(false);

            setNewComment(''); // Clear the input field
            // Optionally, refetch comments to update the list
            const apicomments = await fetchComments(PostID.toString());
            setComments(apicomments);
        } else {
            Alert.alert('Error', 'Failed to upload comment');
        }
    };

    const commentHandler = async () => {
        commentBottomRef.current?.present();
        setCommentLoading(true);
        const apicomments = await fetchComments(PostID.toString());
        setCommentLoading(false);
        setComments(apicomments);
    };
    const { isOpenComment, postData, handleComment } = useVideoPlayingStore();

    useEffect(() => {
        // console.log(isOpenComment, 'commet section');

        const handleCommentBox = async () => {
            commentBottomRef.current?.present();
            setCommentLoading(true);
            const apicomments = await fetchComments(postData?.id?.toString());
            setCommentLoading(false);
            setIsKeyboradOpen(true);

            setComments(apicomments);
        };

        //handleComment();
        let timeout;
        if (isOpenComment) {
            timeout = setTimeout(() => {
                handleCommentBox();
                console.log('function called');
            }, 1000);
        }
        //return clearTimeout(timeout);
    }, [isOpenComment]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [commentLoading]);

    return (
        <View
            className={`flex ${
                isCol ? '' : 'flex-row'
            } justify-center items-center`}>
            <TouchableOpacity
                onPress={commentHandler}
                className={`${isCol ? '' : 'mr-1'}`}>
                <Image
                    source={require('../../../assets/Comment.png')}
                    resizeMode="cover"
                    style={{
                        width: scale(24),
                        height: verticalScale(24),
                    }}
                />
            </TouchableOpacity>
            <Text
                style={{ fontSize: RFValue(12) }}
                className={`${isCol ? 'mt-1' : ''} text-white font-sans`}>
                {comment_count}
            </Text>

            {/* BottomSheet */}
            <BottomSheetModal
                backdropComponent={props => (
                    <BottomSheetBackdrop
                        {...props}
                        disappearsOnIndex={-1}
                        appearsOnIndex={0}
                        onPress={() => {
                            handleComment(false);
                            commentBottomRef.current?.close();
                        }}
                        opacity={0.2}
                    />
                )}
                keyboardBehavior="interactive"
                ref={commentBottomRef}
                snapPoints={['88%', '90%']}
                handleIndicatorStyle={{
                    height: 4,
                    backgroundColor: '#FFFFFF4D',
                }}
                handleComponent={() => (
                    <View className="flex flex-row items-center justify-between w-full px-6 py-5 ">
                        <Text
                            style={{ fontSize: RFValue(18) }}
                            className="font-bold text-white">
                            Comments
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Image
                                source={require('../../../assets/commentprofile.png')}
                                resizeMode="contain"
                            />
                            <Text
                                style={{ fontSize: RFValue(12) }}
                                className="font-sans text-white/80">
                                4,758
                            </Text>
                        </View>
                    </View>
                )}
                backgroundStyle={{ backgroundColor: '#21262B' }}
                handleStyle={{
                    backgroundColor: '#21262B',
                    borderTopRightRadius: 14,
                    borderTopLeftRadius: 14,
                    height: 24,
                    borderColor: 'transparent',
                }}>
                <View style={{ backgroundColor: '#21262B', height: '100%' }}>
                    <BottomSheetScrollView
                        contentContainerStyle={{
                            backgroundColor: '#21262B',
                            paddingTop: 24,
                        }}
                        indicatorStyle={'white'}
                        showsVerticalScrollIndicator={true}
                        className="px-6 bg-[#21262B]">
                        <View>
                            {commentLoading ? (
                                <View className="w-full">
                                    <Text className="text-center text-white font-boldB">
                                        Loading comments...
                                    </Text>
                                </View>
                            ) : comments.length !== 0 ? (
                                comments.map(comment => (
                                    <TouchableOpacity
                                        className="flex"
                                        key={comment.id}
                                        onPress={() => {
                                            handleCommentPress(comment);
                                            // console.log('Presssed');
                                        }}
                                        style={{ width: width, height: 90 }}>
                                        <CommentTile
                                            key={comment.id}
                                            commentData={comment}
                                        />
                                    </TouchableOpacity>
                                ))
                            ) : (
                                <View className="w-full">
                                    <Text className="text-center text-white font-boldB">
                                        No comments
                                    </Text>
                                </View>
                            )}
                        </View>
                    </BottomSheetScrollView>
                    <View
                        className={`absolute   py-3 left-0 right-0 ${
                            isKeyboradOpen ? 'bottom-[30%]' : 'bottom-0'
                        }`}
                        style={{ backgroundColor: '#21262B' }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 10,
                            }}>
                            {emojiData?.map(item => (
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() =>
                                        setNewComment(
                                            `${newComment}${item.text}`,
                                        )
                                    }>
                                    <Image
                                        source={item.img}
                                        style={{ width: 30, height: 30 }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View
                            style={{
                                width: width,
                                alignSelf: 'center',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingHorizontal: 15,
                                position: 'relative',
                                paddingTop: 10,
                            }}>
                            <View
                                style={{
                                    width: '100%',
                                    backgroundColor:
                                        'rgba(255, 255, 255, 0.14)',
                                    height: 1,
                                    marginBottom: 5,
                                }}></View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                <TextInput
                                    value={newComment}
                                    ref={inputRef}
                                    onChangeText={text => setNewComment(text)}
                                    style={{
                                        width: scale(0.7 * width),
                                        borderRadius: 10,
                                        paddingHorizontal: 20,
                                        color: 'white',
                                        marginRight: 10,
                                        backgroundColor:
                                            'rgba(255, 255, 255, 0.14)',
                                    }}
                                    cursorColor={'rgba(255, 255, 255, 1)'}
                                    onBlur={() => setIsKeyboradOpen(false)}
                                    onFocus={() => setIsKeyboradOpen(true)}
                                    placeholder="Enter your comment"
                                    placeholderTextColor={
                                        'rgba(255, 255, 255, 1)'
                                    }
                                    onFocus={() =>
                                        commentBottomRef?.current?.snapToIndex(
                                            1,
                                        )
                                    }
                                />
                                <TouchableOpacity onPress={handleSubmit}>
                                    <Image
                                        source={require('../../../assets/Buttoncomment.png')}
                                        style={{}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {focussedComment && (
                    <Animated.View
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            opacity: fadeAnim,
                        }}>
                        <FocusComment
                            comment={focussedComment}
                            onClose={() => {
                                handleCloseFocusedComment();
                            }}
                            onReply={() => {
                                handleReply;
                            }}
                        />
                    </Animated.View>
                )}
            </BottomSheetModal>
        </View>
    );
};

export default CommentSection;
