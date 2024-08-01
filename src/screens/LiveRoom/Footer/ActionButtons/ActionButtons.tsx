import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import getStyles from './ActionButtons.style';
import LinearGradient from 'react-native-linear-gradient';
import { Gifs } from '../../../../theme/Gifs';
import useThemeStyles from '../../../../hooks/useThemeStyles';
import { ThemeContext } from '../../../../theme/ThemeContext';
import LottieView from 'lottie-react-native';
import { getEmoji } from '../../../../utils/contentUtils';

interface ActionButtonsProps {
    onSendMessage: (message: string) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onSendMessage }) => {
    const EmojiData = [
        {
            id: 1,
            emoji: require('../../../../assets/Emojis/Heart.png'),
        },
        {
            id: 2,
            emoji: require('../../../../assets/Emojis/Fire.png'),
        },
        {
            id: 3,
            emoji: require('../../../../assets/Emojis/Smily.png'),
        },
        {
            id: 4,
            emoji: require('../../../../assets/Emojis/SmilyHeart.png'),
        },
        {
            id: 5,
            emoji: require('../../../../assets/Emojis/Champ.png'),
        },
    ];

    const [showPopup, setShowPopup] = useState(false);
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (countdown > 0) {
            timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
        } else {
            PopupManage(); // Show popup when countdown reaches 0
        }
        return () => clearTimeout(timer);
    }, [countdown]);

    const PopupManage = () => {
        setShowPopup(!showPopup);
    };

    const [showButton, setShowButton] = useState(true);
    const [showTextInput, setShowTextInput] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [inputText, setInputText] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState('');

    const handleButtonPress = () => {
        setShowButton(false); // Hide the button immediately
        setShowLoader(true); // Show the loader
        const delay = Math.random() * (7000 - 5000) + 5000; // Random delay between 5 and 7 seconds

        setTimeout(() => {
            setShowLoader(false); // Hide the loader
            setShowTextInput(true); // Show text input after the delay
        }, delay);
    };

    const [ShowReaction, HideReaction] = useState(false);

    const ReactionManage = item => {
        if (ShowReaction) {
            HideReaction(false);
        } else {
            setSelectedEmoji(item.id);
            setShowEmoji(true);
            HideReaction(true);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setShowEmoji(false);
        }, 1000);
    }, [showEmoji]);

    const handleSendIconPress = () => {
        if (inputText.trim()) {
            onSendMessage(inputText);
            setInputText('');
        }
    };

    const styles = useThemeStyles(getStyles);

    const { isDark } = useContext(ThemeContext);

    return (
        <>
            <View style={[styles.Container]}>
                <View style={[styles.SubContainer]}>
                    <View style={[styles.ButtonContainer]}>
                        {/* {showButton && ( */}
                        {countdown ? (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={handleButtonPress}>
                                <LinearGradient
                                    colors={['#F7C900', '#EB853C']}
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    style={[styles.GradientContainer]}>
                                    <View style={[styles.LinkIconContainer]}>
                                        <Image
                                            source={require('../../../../assets/linkicon.png')}
                                            style={[styles.LinkIcon]}
                                        />
                                    </View>
                                    <View style={[styles.TitleContainer]}>
                                        <Text style={styles.TitleText}>
                                            Send join link
                                        </Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        ) : (
                            <View style={[styles.InputAndIconContainer]}>
                                <View style={[styles.InputContainer]}>
                                    <TextInput
                                        // autoFocus={true}
                                        placeholder={'Send your message...'}
                                        placeholderTextColor={isDark ? '#FFFFFF': '#000000'}
                                        style={[styles.TextInput]}
                                        value={inputText}
                                        onChangeText={text =>
                                            setInputText(text)
                                        }
                                    />
                                </View>
                                <View style={[styles.IconContainer]}>
                                    <TouchableOpacity
                                        onPress={handleSendIconPress}>
                                        {inputText ? (
                                            <Image
                                                source={isDark? require('../../../../assets/sendIc.png') : require('../../../../assets/sendIcDark.png')}
                                                resizeMode="contain"
                                                style={[styles.Icon]}
                                            />
                                        ) : (
                                            <Image
                                                source={isDark? require('../../../../assets/smile.png') : require('../../../../assets/smileDark.png')}
                                                resizeMode="contain"
                                                style={[styles.Icon]}
                                            />
                                        )}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        {/* )} */}
                        {/* {showLoader && (
                            <View style={styles.LoaderContainer}>
                                <ActivityIndicator
                                    size="large"
                                    color="#F7C900"
                                />
                            </View>
                        )}
                        {showTextInput && (
                            <View style={[styles.InputAndIconContainer]}>
                                <View style={[styles.InputContainer]}>
                                    <TextInput
                                        placeholder={'Send your message...'}
                                        placeholderTextColor={'#FFFFFF'}
                                        style={[styles.TextInput]}
                                        value={inputText}
                                        onChangeText={text =>
                                            setInputText(text)
                                        }
                                    />
                                </View>
                                <View style={[styles.IconContainer]}>
                                    {inputText ? (
                                        <Image
                                            source={require('../../../../assets/sendIc.png')}
                                            resizeMode="contain"
                                            style={[styles.Icon]}
                                        />
                                    ) : (
                                        <Image
                                            source={require('../../../../assets/smile.png')}
                                            resizeMode="contain"
                                            style={[styles.Icon]}
                                        />
                                    )}
                                </View>
                            </View>
                        )} */}
                    </View>
                    <View style={[styles.IconButtonsContainer]}>
                        <View style={[styles.EmojiContainer]}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={ReactionManage}>
                                <View style={[styles.IconButtonContainer]}>
                                    <Image
                                        source={require('../../../../assets/Emojis/Heart.png')}
                                        resizeMode="contain"
                                        style={[styles.Icon]}
                                    />
                                </View>
                            </TouchableOpacity>
                            {!ShowReaction && (
                                <View style={[styles.EmojiListContainer]}>
                                    {EmojiData.map(item => (
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() =>
                                                ReactionManage(item)
                                            }>
                                            <View
                                                style={[
                                                    styles.EmojiViewContainer,
                                                ]}>
                                                <Image
                                                    style={[styles.Emoji]}
                                                    source={item.emoji}
                                                    resizeMode={'contain'}
                                                />
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}
                        </View>
                        {showEmoji && (
                            <LottieView
                                source={getEmoji(selectedEmoji)}
                                style={{
                                    height: 330,
                                    width: 100,
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 40,
                                }}
                                resizeMode="contain"
                                autoPlay
                                loop
                            />
                            // <Image
                            //     source={
                            //         selectedEmoji === 1
                            //             ? Gifs.spreadHGif
                            //             : Gifs.spreadSGif
                            //     }
                            //     style={{
                            //         width: 100,
                            //         height: 200,
                            //         position: 'absolute',
                            //         bottom: 50,
                            //         right: 40,
                            //     }}
                            //     resizeMode="contain"
                            // />
                        )}
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={[styles.IconButtonContainer]}>
                                <Image
                                    source={isDark ? require('../../../../assets/linkshare.png') : require('../../../../assets/linkshareDark.png') }
                                    style={[styles.Icon]}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

export default ActionButtons;

// import {
//     Text,
//     View,
//     Image,
//     TouchableOpacity,
//     TextInput,
//     ActivityIndicator,
// } from 'react-native';
// import React, { useState } from 'react';
// import getStyles from './ActionButtons.style';
// import LinearGradient from 'react-native-linear-gradient';

// interface ActionButtonsProps {
//     onSendMessage: (message: string) => void;
// }

// const ActionButtons: React.FC<ActionButtonsProps> = ({ onSendMessage }) => {
//     const styles = getStyles();

//     const [showButton, setShowButton] = useState(true);
//     const [showTextInput, setShowTextInput] = useState(false);
//     const [showLoader, setShowLoader] = useState(false);
//     const [inputText, setInputText] = useState('');

//     const handleButtonPress = () => {
//         setShowButton(false);
//         setShowLoader(true);
//         const delay = Math.random() * (7000 - 5000) + 5000;

//         setTimeout(() => {
//             setShowLoader(false);
//             setShowTextInput(true);
//         }, delay);
//     };

//     const handleSendIconPress = () => {
//         if (inputText.trim()) {
//             onSendMessage(inputText);
//             setInputText('');
//         }
//     };

//     return (
//         <>
//             <View style={styles.Container}>
//                 <View style={styles.SubContainer}>
//                     <View style={styles.ButtonContainer}>
//                         {showButton && (
//                             <TouchableOpacity
//                                 activeOpacity={0.8}
//                                 // onPress={handleButtonPress}
//                             >
//                                 <LinearGradient
//                                     colors={['#F7C900', '#EB853C']}
//                                     start={{ x: 1, y: 1 }}
//                                     end={{ x: 1, y: 0 }}
//                                     style={styles.GradientContainer}>
//                                     <View style={styles.LinkIconContainer}>
//                                         <Image
//                                             source={require('../../../../assets/linkicon.png')}
//                                             style={styles.LinkIcon}
//                                         />
//                                     </View>
//                                     <View style={styles.TitleContainer}>
//                                         <Text style={styles.TitleText}>
//                                             Send join link
//                                         </Text>
//                                     </View>
//                                 </LinearGradient>
//                             </TouchableOpacity>
//                         )}
//                         {showLoader && (
//                             <View style={styles.LoaderContainer}>
//                                 <ActivityIndicator
//                                     size="large"
//                                     color="#F7C900"
//                                 />
//                             </View>
//                         )}
//                         {showTextInput && (
//                             <View style={styles.InputAndIconContainer}>
//                                 <View style={styles.InputContainer}>
//                                     <TextInput
//                                         placeholder={'Send your message...'}
//                                         placeholderTextColor={'#FFFFFF'}
//                                         style={styles.TextInput}
//                                         value={inputText}
//                                         onChangeText={text =>
//                                             setInputText(text)
//                                         }
//                                     />
//                                 </View>
//                                 <View style={[styles.SendIconContainer]}>
//                                     <TouchableOpacity
//                                         onPress={handleSendIconPress}>
//                                         {inputText ? (
//                                             <Image
//                                                 source={require('../../../../assets/sendIc.png')}
//                                                 resizeMode="contain"
//                                                 style={styles.SendIcon}
//                                             />
//                                         ) : (
//                                             <Image
//                                                 source={require('../../../../assets/smile.png')}
//                                                 resizeMode="contain"
//                                                 style={styles.SendIcon}
//                                             />
//                                         )}
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                         )}
//                     </View>
//                     <View style={styles.IconButtonsContainer}>
//                         <TouchableOpacity activeOpacity={0.8}>
//                             <View style={styles.IconButtonContainer}>
//                                 <Image
//                                     source={require('../../../../assets/RedHeart.png')}
//                                     resizeMode="contain"
//                                     style={styles.Icon}
//                                 />
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity activeOpacity={0.8}>
//                             <View style={styles.IconButtonContainer}>
//                                 <Image
//                                     source={require('../../../../assets/linkshare.png')}
//                                     style={styles.Icon}
//                                 />
//                             </View>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//         </>
//     );
// };

// export default ActionButtons;
