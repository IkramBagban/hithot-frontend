import {
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import ChatRoomHeader from '../../components/Headers/ChatRoomHeader';
import CircleProfile from '../../components/Feed/CircleProfile';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import React, { useEffect, useState } from 'react';
import useUserChatStore from '../../store/userChatStore';
import socketServcies from '../../utils/socketService';
const ChatRoom = () => {
    const { top } = useSafeAreaInsets();
    const [inputText, setInputText] = useState('');
    const [sendMessage, setsendMessage] = useState(false);

    const { fetchRoom, room, sendChat, fetchChatHisory, chat_history } =
        useUserChatStore(state => ({
            fetchRoom: state.fetchRoom,
            room: state.room,
            sendChat: state.sendChat,
            fetchChatHisory: state.fetchChatHisory,
            chat_history: state.chat_history,
        }));

    useEffect(() => {
        if (sendMessage) {
            socketServcies.on('recevied_messgae', data => {
                console.log('recevied messgae data was////////', data);
            });
            setsendMessage(false);
        }
    }, [sendMessage]);

    const onSendMessage = () => {
        socketServcies.emit('send_message', {
            arg1: room.id,
            arg2: '595550746661780',
            arg3: inputText,
        });
        setsendMessage(true);
    };

    return (
        <SafeAreaView
            style={{ paddingTop: top }}
            edges={['left', 'right']}
            className="flex-1 bg-[#21262B]">
            <StatusBar backgroundColor="#21262B" />
            <ChatRoomHeader />
            <View className=" flex-1 relative">
                <ScrollView className="flex-1">
                    <View className="w-full flex items-center justify-center py-4">
                        <CircleProfile
                            url={require('../../assets/demoUser.png')}
                            width={58}
                            height={58}
                        />
                        <View className=" mt-2 flex items-center justify-center">
                            <Text
                                style={{ fontSize: RFValue(12) }}
                                className=" font-boldB text-white">
                                Jhon Doe
                            </Text>
                            <Text
                                style={{ fontSize: RFValue(10) }}
                                className=" font-sans text-white">
                                @Jhon_Doe1
                            </Text>
                            <View className=" flex flex-row justify-center mt-1 items-center">
                                <Text
                                    style={{ fontSize: RFValue(10) }}
                                    className=" font-sans text-white/60">
                                    120k followers
                                </Text>
                                <View
                                    style={{
                                        width: scale(4),
                                        height: verticalScale(4),
                                    }}
                                    className=" bg-white/60 rounded-full mx-2"
                                />
                                <Text
                                    style={{ fontSize: RFValue(10) }}
                                    className=" font-sans text-white/60">
                                    120k followers
                                </Text>
                            </View>
                            <TouchableOpacity className=" mt-2">
                                <View className="px-4 py-2 rounded-lg bg-white/20">
                                    <Text
                                        style={{ fontSize: RFValue(10) }}
                                        className=" text-white font-sans">
                                        View profile
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View className=" px-6 py-2 w-full flex flex-row justify-between absolute bottom-0 left-0 right-0">
                    <View className=" flex-1 bg-white/20 px-3 rounded-lg flex flex-row items-center">
                        <TextInput
                            className="  text-white flex-1 pr-3"
                            placeholderTextColor={'#FFFFFF99'}
                            placeholder="send your message..."
                            value={inputText}
                            onChangeText={setInputText}
                        />
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/smile.png')}
                                style={{
                                    width: scale(18),
                                    height: verticalScale(18),
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={onSendMessage}
                        className="flex ml-2">
                        <LinearGradient
                            colors={['#F7C900', '#EB853C']}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            // style={{
                            //     width: scale(22),
                            //     height: verticalScale(22),
                            // }}
                            className="rounded-lg py-2 px-4 flex flex-1 items-center justify-center">
                            <Image
                                resizeMode="contain"
                                source={require('../../assets/sendIc.png')}
                                style={{
                                    width: scale(16),
                                    height: verticalScale(16),
                                }}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ChatRoom;
