import React, { useEffect, useRef, useState } from 'react';
import {
    Text,
    Platform,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    View,
    Keyboard,
} from 'react-native';
import {
    actions,
    RichEditor,
    RichToolbar,
} from 'react-native-pell-rich-editor';
import Draggable from 'react-native-draggable';
import {
    GestureHandlerRootView,
    Gesture,
    GestureDetector,
} from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';

const handleHead = ({ tintColor }) => (
    <Text style={{ color: tintColor }}>H1</Text>
);

const TextEditor = ({ editors, onAddEditor, onUpdateEditor }) => {
    const richText = useRef(null);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const scale = useSharedValue(1);
    const startScale = useSharedValue(0);

    const pinch = Gesture.Pinch()
        .onStart(() => {
            startScale.value = scale.value;
        })
        .onUpdate(event => {
            scale.value = startScale.value * event.scale;
        });

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            },
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            },
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <GestureHandlerRootView style={styles.container}>
            <SafeAreaView style={styles.safeContainer}>
                {isKeyboardVisible && (
                    <Draggable x={50} y={50}>
                        <View style={styles.toolbarContainer}>
                            <RichToolbar
                                editor={richText}
                                actions={[
                                    actions.setBold,
                                    actions.setItalic,
                                    actions.setUnderline,
                                    actions.heading1,
                                    actions.insertBulletsList,
                                    actions.checkboxList,
                                    actions.undo,
                                    actions.redo,
                                ]}
                                iconMap={{ [actions.heading1]: handleHead }}
                                style={styles.toolbar}
                            />
                        </View>
                    </Draggable>
                )}
                {/* <Draggable x={50} y={50}> */}
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.keyboardAvoidingView}>
                    <GestureDetector gesture={pinch}>
                        <Animated.View
                            style={[
                                // styles.editorContainer,
                                animatedStyles,
                            ]}>
                            <RichEditor
                                ref={richText}
                                placeholder="Add Text..."
                                onChange={descriptionText => {
                                    console.log(
                                        'descriptionText:',
                                        descriptionText,
                                    );
                                }}
                                style={styles.editor}
                                editorStyle={styles.editorInner}
                            />
                        </Animated.View>
                    </GestureDetector>
                </KeyboardAvoidingView>
                {/* </Draggable> */}
            </SafeAreaView>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Take full available space
    },
    safeContainer: {
        flex: 1,
        backgroundColor: 'transparent', // Set to 'transparent' for debugging
    },
    toolbarContainer: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        padding: 10,
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    editorContainer: {
        flex: 1, // Ensure it takes full available space
        backgroundColor: 'transparent', // For debugging
        justifyContent: 'center',
        alignItems: 'center',
    },
    editor: {
        borderColor: 'transparent',
        borderWidth: 1,
        width: 250,
        fontFamily: 'Helvetica',
        alignSelf: 'center',
        borderRadius: 8,
    },
    editorInner: {
        backgroundColor: 'transparent',
        color: 'white',
        fontFamily: 'Figtree-Regular',
    },
    toolbar: {
        backgroundColor: 'transparent',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: '100%',
    },
});

export default TextEditor;

// import React, { useEffect, useRef, useState } from 'react';
// import {
//     Text,
//     Platform,
//     KeyboardAvoidingView,
//     SafeAreaView,
//     StyleSheet,
//     View,
//     Keyboard,
// } from 'react-native';
// import {
//     actions,
//     RichEditor,
//     RichToolbar,
// } from 'react-native-pell-rich-editor';
// import Draggable from 'react-native-draggable';
// import {
//     GestureHandlerRootView,
//     Gesture,
//     GestureDetector,
// } from 'react-native-gesture-handler';
// import Animated, {
//     useSharedValue,
//     useAnimatedStyle,
// } from 'react-native-reanimated';

// const handleHead = ({ tintColor }) => (
//     <Text style={{ color: tintColor }}>H1</Text>
// );

// const TextEditor = () => {
//     const richText = useRef(null);
//     const [isKeyboardVisible, setKeyboardVisible] = useState(false);
//     const scale = useSharedValue(1);
//     const startScale = useSharedValue(0);

//     const pinch = Gesture.Pinch()
//         .onStart(() => {
//             startScale.value = scale.value;
//         })
//         .onUpdate(event => {
//             scale.value = startScale.value * event.scale;
//         });

//     const animatedStyles = useAnimatedStyle(() => ({
//         transform: [{ scale: scale.value }],
//     }));

//     useEffect(() => {
//         const keyboardDidShowListener = Keyboard.addListener(
//             'keyboardDidShow',
//             () => {
//                 setKeyboardVisible(true);
//             },
//         );
//         const keyboardDidHideListener = Keyboard.addListener(
//             'keyboardDidHide',
//             () => {
//                 setKeyboardVisible(false);
//             },
//         );

//         return () => {
//             keyboardDidHideListener.remove();
//             keyboardDidShowListener.remove();
//         };
//     }, []);

//     return (
//         <GestureHandlerRootView style={styles.container}>
//             <SafeAreaView style={styles.container}>
//                 {isKeyboardVisible && (
//                     <Draggable x={50} y={50}>
//                         <View style={styles.toolbarContainer}>
//                             <RichToolbar
//                                 editor={richText}
//                                 actions={[
//                                     actions.setBold,
//                                     actions.setItalic,
//                                     actions.setUnderline,
//                                     actions.heading1,
//                                     actions.insertBulletsList,
//                                     // actions.insertOrderedList,
//                                     // actions.insertLink,
//                                     // actions.keyboard,
//                                     // actions.setStrikethrough,
//                                     // actions.removeFormat,
//                                     // actions.insertVideo,
//                                     actions.checkboxList,
//                                     actions.undo,
//                                     actions.redo,
//                                 ]}
//                                 iconMap={{ [actions.heading1]: handleHead }}
//                                 style={styles.toolbar}
//                             />
//                         </View>
//                     </Draggable>
//                 )}

//                 {/* {[1, 2, 4, 2, 1, 3, 5].map(() => ( */}
//                 <Draggable x={50} y={150}>
//                     <KeyboardAvoidingView
//                         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//                         style={{ flex: 1 }}>
//                         <GestureDetector gesture={pinch}>
//                             <Animated.View
//                                 style={[
//                                     styles.editorContainer,
//                                     animatedStyles,
//                                 ]}>
//                                 <RichEditor
//                                     ref={richText}
//                                     placeholder="Add Text..."
//                                     onChange={descriptionText => {
//                                         console.log(
//                                             'descriptionText:',
//                                             descriptionText,
//                                         );
//                                         console.log('---- ref: ', richText);
//                                     }}
//                                     style={styles.editor}
//                                     editorStyle={styles.editorInner}
//                                 />
//                             </Animated.View>
//                         </GestureDetector>
//                     </KeyboardAvoidingView>
//                 </Draggable>
//                 {/* ))} */}
//             </SafeAreaView>
//         </GestureHandlerRootView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         // height: '100%',
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         // top:40
//         // zIndex: -2,
//         backgroundColor: 'yellow',
//         // backgroundColor: 'none',
//         // backgroundColor:'white'
//     },
//     toolbarContainer: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         backgroundColor: 'transparent',
//         justifyContent: 'center',
//         padding: 10,
//     },
//     editorContainer: {
//         // width: '100%',
//         // alignItems: 'center',
//         // justifyContent: 'center',
//         // zIndex: 10,.
//         backgroundColor: 'rgba(255,0,0,0.5)',
//         position: 'absolute', // Ensure it's positioned absolutely
//         top: 0, // Adjust these values as needed
//         left: 0,
//         right: 0,
//         bottom: 0,
//         zIndex: 10,
//     },
//     editor: {
//         borderColor: 'transparent',
//         borderWidth: 1,
//         // padding: 8,
//         // minHeight: 20,
//         // maxHeight: 100,
//         // minWidth: 60,
//         width: 250,
//         zIndex: 100,

//         // backgroundColor: 'white',
//         // backgroundColor: '#B5BAD400',
//         fontFamily: 'Helvetica',
//         alignSelf: 'center',
//         borderRadius: 8,
//     },
//     editorInner: {
//         backgroundColor: 'transparent',
//         color: 'white',
//         fontFamily: 'Figtree-Regular',
//         zIndex: 40,
//     },
//     toolbar: {
//         backgroundColor: 'transparent',
//         borderBottomColor: '#ccc',
//         borderBottomWidth: 1,
//         width: '100%',
//         flexWrap: 'wrap',
//         zIndex: 40,
//     },
// });

// export default TextEditor;

// // import React, { useEffect, useRef, useState } from 'react';
// // import {
// //     Text,
// //     Platform,
// //     KeyboardAvoidingView,
// //     SafeAreaView,
// //     StyleSheet,
// //     View,
// //     Keyboard,
// // } from 'react-native';
// // import {
// //     actions,
// //     RichEditor,
// //     RichToolbar,
// // } from 'react-native-pell-rich-editor';
// // import Draggable from 'react-native-draggable';
// // import {
// //     GestureHandlerRootView,
// //     Gesture,
// //     GestureDetector,
// // } from 'react-native-gesture-handler';
// // import Animated, {
// //     useSharedValue,
// //     useAnimatedStyle,
// // } from 'react-native-reanimated';

// // const handleHead = ({ tintColor }) => (
// //     <Text style={{ color: tintColor }}>H1</Text>
// // );

// // const TextEditor = ({ editors, onAddEditor, onUpdateEditor }) => {
// //     const richText = useRef(null);
// //     const [isKeyboardVisible, setKeyboardVisible] = useState(false);
// //     const scale = useSharedValue(1);
// //     const startScale = useSharedValue(0);
// //     console.log('editors', editors);

// //     const pinch = Gesture.Pinch()
// //         .onStart(() => {
// //             startScale.value = scale.value;
// //         })
// //         .onUpdate(event => {
// //             scale.value = startScale.value * event.scale;
// //         });

// //     const animatedStyles = useAnimatedStyle(() => ({
// //         transform: [{ scale: scale.value }],
// //     }));

// //     useEffect(() => {
// //         const keyboardDidShowListener = Keyboard.addListener(
// //             'keyboardDidShow',
// //             () => {
// //                 setKeyboardVisible(true);
// //             },
// //         );
// //         const keyboardDidHideListener = Keyboard.addListener(
// //             'keyboardDidHide',
// //             () => {
// //                 setKeyboardVisible(false);
// //             },
// //         );

// //         return () => {
// //             keyboardDidHideListener.remove();
// //             keyboardDidShowListener.remove();
// //         };
// //     }, []);

// //     return (
// //         <GestureHandlerRootView style={styles.container}>
// //             <SafeAreaView style={styles.container}>
// //                 {/* {editors?.map(ed => (
// //                     <> */}
// //                 {isKeyboardVisible && (
// //                     <Draggable x={50} y={50}>
// //                         <View style={styles.toolbarContainer}>
// //                             <RichToolbar
// //                                 editor={richText}
// //                                 // editor={richText}
// //                                 actions={[
// //                                     actions.setBold,
// //                                     actions.setItalic,
// //                                     actions.setUnderline,
// //                                     actions.heading1,
// //                                     actions.insertBulletsList,
// //                                     // actions.insertOrderedList,
// //                                     // actions.insertLink,
// //                                     // actions.keyboard,
// //                                     // actions.setStrikethrough,
// //                                     // actions.removeFormat,
// //                                     // actions.insertVideo,
// //                                     actions.checkboxList,
// //                                     actions.undo,
// //                                     actions.redo,
// //                                 ]}
// //                                 iconMap={{
// //                                     [actions.heading1]: handleHead,
// //                                 }}
// //                                 style={styles.toolbar}
// //                             />
// //                         </View>
// //                     </Draggable>
// //                 )}

// //                 <Draggable
// //                     x={150}
// //                     y={150}
// //                     onDragRelease={e => {
// //                         console.log(
// //                             'pageX, pageY = ' +
// //                                 e.nativeEvent.pageX +
// //                                 ', ' +
// //                                 e.nativeEvent.pageY,
// //                         );
// //                         // onUpdateEditor('content');
// //                         console.log(
// //                             'locX, locY = ' +
// //                                 e.nativeEvent.locationX +
// //                                 ', ' +
// //                                 e.nativeEvent.locationY,
// //                         );
// //                     }}>
// //                     <KeyboardAvoidingView
// //                         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// //                         style={{ flex: 1, zIndex: 100 }}>
// //                         <GestureDetector gesture={pinch}>
// //                             <Animated.View
// //                                 style={[
// //                                     styles.editorContainer,
// //                                     animatedStyles,
// //                                 ]}>
// //                                 <RichEditor
// //                                     ref={richText}
// //                                     // ref={ed.ref}
// //                                     onFocus={() =>
// //                                         console.log('Editor focused')
// //                                     }
// //                                     onBlur={() => console.log('Editor blurred')}
// //                                     placeholder="Add Text..."
// //                                     onChange={descriptionText => {
// //                                         console.log(
// //                                             'descriptionText:',
// //                                             descriptionText,
// //                                         );
// //                                         // onUpdateEditor(
// //                                         //     'content',
// //                                         //     descriptionText,
// //                                         //     ed.id,
// //                                         // );
// //                                         // console.log('---- ref: ', richText);
// //                                     }}
// //                                     style={styles.editor}
// //                                     editorStyle={styles.editorInner}
// //                                 />
// //                             </Animated.View>
// //                         </GestureDetector>
// //                     </KeyboardAvoidingView>
// //                 </Draggable>
// //                 {/* </>
// //                 ))} */}
// //             </SafeAreaView>
// //         </GestureHandlerRootView>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         height: '100%',
// //         // flex: 1,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         // top:40
// //         zIndex: -2,
// //         // backgroundColor: 'transparent',
// //         // backgroundColor: 'none',
// //         // backgroundColor:'white'
// //     },
// //     toolbarContainer: {
// //         flexDirection: 'row',
// //         flexWrap: 'wrap',
// //         backgroundColor: 'transparent',
// //         justifyContent: 'center',
// //         padding: 10,
// //     },
// //     editorContainer: {
// //         width: '100%',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         zIndex: 4,
// //     },
// //     editor: {
// //         borderColor: 'transparent',
// //         borderWidth: 1,
// //         // padding: 8,
// //         // minHeight: 20,
// //         // maxHeight: 100,
// //         // minWidth: 60,
// //         width: 250,
// //         zIndex: 4,

// //         // backgroundColor: 'white',
// //         // backgroundColor: '#B5BAD400',
// //         fontFamily: 'Helvetica',
// //         alignSelf: 'center',
// //         borderRadius: 8,
// //     },
// //     editorInner: {
// //         backgroundColor: 'transparent',
// //         color: 'white',
// //         fontFamily: 'Figtree-Regular',
// //         zIndex: 40,
// //     },
// //     toolbar: {
// //         backgroundColor: 'transparent',
// //         borderBottomColor: '#ccc',
// //         borderBottomWidth: 1,
// //         width: '100%',
// //         flexWrap: 'wrap',
// //         zIndex: 40,
// //     },
// // });

// // export default TextEditor;
