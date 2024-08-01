//last
import {
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { CommentInterface } from './SwipeLowerComp/CommentSection';
import CommentTile from './CommentTile';
import { scale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('window');

interface FocussedCommentProps {
    comment: CommentInterface;
    onClose: () => void;
    onReply: () => void;
}
const FocusComment: React.FC<FocussedCommentProps> = ({
    comment,
    onClose,
    onReply,
}) => {
    const [Reply, setNewReply] = useState('');
    const [wantToReply, setWantToReply] = useState(false);
    return (
        <Animated.View style={[styles.container]}>
            <TouchableOpacity
                onPress={onClose}
                style={{
                    //backgroundColor: 'green',
                    width: '100%',
                    // flexWrap: 'wrap',
                }}>
                <View
                    style={{
                        flexDirection: 'column',
                        // flexWrap: 'wrap',

                        // backgroundColor: 'red',
                    }}>
                    <View
                        style={{
                            backgroundColor: 'rgba(33, 38, 43, 1)',
                            marginHorizontal: 10,
                            paddingHorizontal: 10,
                            paddingTop: 20,
                            borderRadius: 10,
                        }}>
                        <CommentTile key={comment.id} commentData={comment} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 10,
                                justifyContent: 'space-between',
                                marginHorizontal: 10,
                            }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setWantToReply(true);
                                }}
                                style={{
                                    backgroundColor: 'rgba(33, 38, 43, 1)',
                                    width: 100,
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    flexDirection: 'row',
                                }}>
                                <Image
                                    source={require('../../assets/replyfill.png')}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginHorizontal: 5,
                                    }}
                                />
                                <Text style={{ color: 'white' }}>Reply</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'rgba(33, 38, 43, 1)',
                                    width: 100,
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    flexDirection: 'row',
                                }}>
                                <Image
                                    source={require('../../assets/blockComment.png')}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginHorizontal: 5,
                                    }}
                                />
                                <Text style={{ color: 'white' }}>Block</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'rgba(33, 38, 43, 1)',
                                    width: 100,
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    flexDirection: 'row',
                                }}>
                                <Image
                                    source={require('../../assets/mdi_about.png')}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginHorizontal: 5,
                                    }}
                                />
                                <Text style={{ color: 'white' }}>Report</Text>
                            </TouchableOpacity>
                        </View>
                        {wantToReply ? (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: width,
                                    alignSelf: 'center',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    //justifyContent: 'center',
                                    marginTop: 20,
                                    paddingHorizontal: 15,
                                    borderTopWidth: 1,
                                    position: 'relative',
                                    //backgroundColor: 'transparent',
                                    borderTopColor: 'rgba(255, 255, 255, 0.14)',
                                    paddingTop: 10,
                                }}>
                                <TextInput
                                    value={Reply}
                                    onChangeText={text => setNewReply(text)}
                                    style={{
                                        width: scale(0.6 * width),
                                        borderRadius: 10,
                                        paddingHorizontal: 20,
                                        color: 'white',
                                        backgroundColor: 'rgba(33, 38, 43, 1)',
                                    }}
                                    cursorColor={'rgba(255, 255, 255, 1)'}
                                    placeholder="Enter your reply"
                                    placeholderTextColor={
                                        'rgba(255, 255, 255, 1)'
                                    }
                                />
                                <Image
                                    source={require('../../assets/smilecomment.png')}
                                    style={{
                                        position: 'absolute',
                                        right: 80,
                                        bottom: 13,
                                        zIndex: 10,
                                    }}
                                />
                                <TouchableOpacity onPress={() => {}}>
                                    <Image
                                        source={require('../../assets/Buttoncomment.png')}
                                        style={{}}
                                    />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View></View>
                        )}
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default FocusComment;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, .9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
