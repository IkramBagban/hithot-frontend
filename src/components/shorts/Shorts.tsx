// import {
//     View,
//     Text,
//     Image,
//     TextInput,
//     Button,
//     TouchableOpacity,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { scale, verticalScale } from 'react-native-size-matters';
// import { RFValue } from 'react-native-responsive-fontsize';
// import Sound from 'react-native-sound';
// import { useState } from 'react';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
// import song from '../../assets/song.mp3';
// import SoundPlayer from 'react-native-sound-player';

// interface songinfo {
//     id: number;
//     name: string;
//     singer: any;
//     views: any;
//     picture: any;
//     musicURL: string;
// }

// // const [value,setvalue] = useState(false);

// // const Playsound = () => {
// //     var whoosh = new Sound(Song, Sound.MAIN_BUNDLE, error => {
// //         if (error) {
// //             console.log('failed to load the sound', error);
// //             return;
// //         }
// //     });

// //     whoosh.play();
// // };
// // import {}

// const Shorts: React.FC<songinfo> = ({
//     id,
//     name,
//     singer,
//     picture,
//     views,
//     musicURL,
// }) => {
//     console.log('musicU__________________', musicURL);

//     const [value, setValue] = useState(false);

//     function Playsound() {
//         if (value) {
//             SoundPlayer.stop();
//             setValue(false);
//         } else {
//             setValue(true);
//             try {
//                 SoundPlayer.loadUrl(
//                     'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/July2021/audio/1882.mp3',
//                 );
//             } catch (e) {
//                 console.log(e);
//             }
//         }
//     }

//     return (
//         <View
//             style={{
//                 width: '100%',
//                 paddingVertical: 14,
//                 borderBottomWidth: 1,
//                 borderBottomColor: '#3C4044',
//                 // borderWidth: 1,
//                 // borderColor: 'red',
//             }}>
//             <View
//                 style={{
//                     width: '90%',
//                     alignSelf: 'center',
//                     justifyContent: 'space-between',
//                     flexDirection: 'row',
//                     // borderWidth: 1,
//                     // borderColor: 'red',
//                 }}>
//                 <View
//                     style={{
//                         width: '22%',
//                         justifyContent: 'center',
//                         // borderWidth: 1,
//                         // borderColor: 'red',
//                     }}>
//                     <View
//                         style={{
//                             width: 56,
//                             height: 56,
//                             borderRadius: 4,
//                             overflow: 'hidden',
//                             // borderWidth: 1,
//                             // borderColor: 'red',
//                         }}>
//                         <Image
//                             source={{ uri: picture }}
//                             style={{
//                                 width: 56,
//                                 height: 56,
//                                 // borderWidth: 1,
//                                 // borderColor: 'red',
//                             }}
//                         />
//                     </View>
//                 </View>
//                 <View
//                     style={{
//                         width: '64%',
//                         flexDirection: 'column',
//                         justifyContent: 'space-between',
//                         // borderWidth: 1,
//                         // borderColor: 'red',
//                     }}>
//                     <View
//                         style={{
//                             width: '100%',
//                             alignItems: 'flex-start',
//                             // borderWidth: 1,
//                             // borderColor: 'red',
//                         }}>
//                         <View
//                             style={{
//                                 paddingVertical: 6,
//                                 paddingHorizontal: 8,
//                                 borderRadius: 4,
//                                 backgroundColor: '#4D5155',
//                                 // borderWidth: 1,
//                                 // borderColor: 'red',
//                             }}>
//                             <Text
//                                 style={{
//                                     fontSize: 14,
//                                     fontFamily: 'Figtree-Regular',
//                                     color: '#F7C900',
//                                 }}>
//                                 {views}K + posts
//                             </Text>
//                         </View>
//                     </View>
//                     <View
//                         style={{
//                             width: '100%',
//                             paddingVertical: 4,
//                             // borderWidth: 1,
//                             // borderColor: 'red',
//                         }}>
//                         <Text
//                             style={{
//                                 fontSize: 16,
//                                 fontFamily: 'Figtree-Bold',
//                                 color: '#FFFFFF',
//                             }}>
//                             {name}
//                         </Text>
//                     </View>
//                     <View
//                         style={{
//                             width: '100%',
//                             // borderWidth: 1,
//                             // borderColor: 'red',
//                         }}>
//                         <Text
//                             style={{
//                                 fontSize: 14,
//                                 fontFamily: 'Figtree-Regular',
//                                 color: '#FFFFFF',
//                                 opacity: 0.6,
//                             }}>
//                             {singer}
//                         </Text>
//                     </View>
//                 </View>

//                 <View
//                     style={{
//                         width: '12%',
//                         alignItems: 'flex-end',
//                         justifyContent: 'center',
//                         // borderWidth: 1,
//                         // borderColor: 'red',
//                     }}>
//                     <TouchableOpacity activeOpacity={0.8} onPress={Playsound}>
//                         <Image
//                             source={
//                                 value === false
//                                     ? require('../../assets/AudioPlay.png')
//                                     : require('../../assets/Reel.png')
//                             }
//                             resizeMode="contain"
//                             style={{ width: 18, height: 18 }}
//                         />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     );
// };

// export default Shorts;

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import SoundPlayer from 'react-native-sound-player';

interface SongInfo {
    id: number;
    name: string;
    singer: string;
    views: string;
    picture: string;
    musicURL: string;
}

const Shorts: React.FC<SongInfo> = ({
    id,
    name,
    singer,
    picture,
    views,
    musicURL,
}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlaySound = async () => {
        if (isPlaying) {
            SoundPlayer.stop();
            setIsPlaying(false);
            // console.log('Stopped playing');
        } else {
            try {
                // console.log('Attempting to play sound from URL:', musicURL);
                await SoundPlayer.playUrl(musicURL);
                setIsPlaying(true);
                // console.log('Playing sound');
            } catch (e) {
                // console.error('Cannot play the sound file', e);
            }
        }
    };

    return (
        <View
            style={{
                width: '100%',
                paddingVertical: 14,
                borderBottomWidth: 1,
                borderBottomColor: '#3C4044',
            }}>
            <View
                style={{
                    width: '90%',
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                }}>
                <View
                    style={{
                        width: '22%',
                        justifyContent: 'center',
                    }}>
                    <View
                        style={{
                            width: 56,
                            height: 56,
                            borderRadius: 4,
                            overflow: 'hidden',
                        }}>
                        <Image
                            source={{ uri: picture }}
                            style={{
                                width: 56,
                                height: 56,
                            }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        width: '64%',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                    <View
                        style={{
                            width: '100%',
                            alignItems: 'flex-start',
                        }}>
                        <View
                            style={{
                                paddingVertical: 6,
                                paddingHorizontal: 8,
                                borderRadius: 4,
                                backgroundColor: '#4D5155',
                            }}>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontFamily: 'Figtree-Regular',
                                    color: '#F7C900',
                                }}>
                                {views}K + posts
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            paddingVertical: 4,
                        }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontFamily: 'Figtree-Bold',
                                color: '#FFFFFF',
                            }}>
                            {name}
                        </Text>
                    </View>
                    <View
                        style={{
                            width: '100%',
                        }}>
                        <Text
                            style={{
                                fontSize: 14,
                                fontFamily: 'Figtree-Regular',
                                color: '#FFFFFF',
                                opacity: 0.6,
                            }}>
                            {singer}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        width: '12%',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={handlePlaySound}>
                        <Image
                            source={
                                isPlaying
                                    ? require('../../assets/Reel.png')
                                    : require('../../assets/AudioPlay.png')
                            }
                            resizeMode="contain"
                            style={{ width: 18, height: 18 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Shorts;
