import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import {
    Image,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    View,
} from 'react-native';
import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import CenterHeader from '../../components/Headers/CustomHeader';
import ChatFilterComp from '../../components/Chat/ChatFilterComp';
import { scale, verticalScale } from 'react-native-size-matters';
import React, { useEffect, useState } from 'react';
import CircleProfile from '../../components/Feed/CircleProfile';
import { RFValue } from 'react-native-responsive-fontsize';
import MessageTile from '../../components/Chat/MessageTile';
import useUserChatStore from '../../store/userChatStore';
import socketServcies from '../../utils/socketService';
import { useAuthStore } from '../../store/AuthStore';

const ChatScreen = ({ navigation }) => {
    const { top } = useSafeAreaInsets();
    const [searchText, setSearchText] = useState<string>('');

    const { fetchRoom, room, fetchAllRooms, allRooms } = useUserChatStore(
        state => ({
            fetchRoom: state.fetchRoom,
            room: state.room,
            fetchAllRooms: state.fetchAllRooms,
            allRooms: state.allRooms,
        }),
    );

    useEffect(() => {
        socketServcies.initializeSocket();
    }, []);

    const { userDetails } = useAuthStore();

    const onCardClick = async () => {
        await fetchRoom(userDetails?.fb_id, '595550746661780').then(res => {
            socketServcies.emit('join_room', {
                arg1: res?.id,
                arg2: userDetails?.fb_id,
            });
        });

        navigation.navigate('ChatRoom');
    };

    return (
        <BottomSheetModalProvider>
            <SafeAreaView
                style={{ paddingTop: top }}
                edges={['left', 'right']}
                className=" flex-1 bg-[#21262B]">
                <StatusBar backgroundColor="#21262B" />
                <CenterHeader title="Messages" RightComp={ChatFilterComp} />
                <ScrollView className="flex-1 px-6">
                    {/* -------chat search------ */}

                    <View className=" rounded-xl bg-white/25 flex flex-row items-center px-3 my-4">
                        <Image
                            source={require('../../assets/Search.png')}
                            resizeMode="contain"
                            style={{
                                width: scale(20),
                                height: verticalScale(20),
                            }}
                            className=" mr-2"
                        />
                        <TextInput
                            value={searchText}
                            maxLength={10}
                            onChangeText={text => setSearchText(text)}
                            style={{ width: '100%', fontSize: scale(14) }}
                            className=" font-sans text-white"
                            placeholder="Search"
                            placeholderTextColor={'#FFFFFF'}
                        />
                    </View>
                    <Text
                        style={{ fontSize: RFValue(16) }}
                        className=" font-boldB text-white">
                        Your favourites
                    </Text>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        className=" mt-2 mb-4 flex flex-row"
                        horizontal={true}>
                        <View className="mr-2">
                            <CircleProfile
                                url={require('../../assets/demoProfile.png')}
                                width={48}
                                height={48}
                            />
                        </View>
                        <View className="mr-2">
                            <CircleProfile
                                url={require('../../assets/demoProfile.png')}
                                width={48}
                                height={48}
                            />
                        </View>
                        <View className="mr-2">
                            <CircleProfile
                                url={require('../../assets/demoProfile.png')}
                                width={48}
                                height={48}
                            />
                        </View>
                        <View className="mr-2">
                            <CircleProfile
                                url={require('../../assets/demoProfile.png')}
                                width={48}
                                height={48}
                            />
                        </View>
                    </ScrollView>

                    {/* messages section */}

                    <Text
                        style={{ fontSize: RFValue(16) }}
                        className=" font-boldB text-white mb-2">
                        Your favourites
                    </Text>

                    <MessageTile
                        onMessagePress={() => onCardClick()}
                        userName="Jhon"
                        unreadCount={1}
                        unreadMessage={true}
                        profileUrl={require('../../assets/demoUser.png')}
                        latestMessage="how are you?"
                        latestMessageTime="12:39"
                    />
                    <MessageTile
                        onMessagePress={() => onCardClick()}
                        userName="Jhon"
                        unreadCount={3}
                        unreadMessage={true}
                        profileUrl={require('../../assets/demoUser.png')}
                        latestMessage="how are you?"
                        latestMessageTime="12:39"
                    />
                    <MessageTile
                        onMessagePress={() => onCardClick()}
                        userName="Jhon"
                        unreadCount={1}
                        unreadMessage={false}
                        profileUrl={require('../../assets/demoUser.png')}
                        latestMessage="how are you?"
                        latestMessageTime="12:39"
                    />
                    <MessageTile
                        onMessagePress={() => onCardClick()}
                        userName="Jhon"
                        unreadCount={1}
                        unreadMessage={false}
                        profileUrl={require('../../assets/demoUser.png')}
                        latestMessage="how are you?"
                        latestMessageTime="12:39"
                    />
                    <MessageTile
                        onMessagePress={() => onCardClick()}
                        userName="Jhon"
                        unreadCount={1}
                        unreadMessage={false}
                        profileUrl={require('../../assets/demoUser.png')}
                        latestMessage="how are you?"
                        latestMessageTime="12:39"
                    />
                    <MessageTile
                        onMessagePress={() => onCardClick()}
                        userName="Jhon"
                        unreadCount={1}
                        unreadMessage={false}
                        profileUrl={require('../../assets/demoUser.png')}
                        latestMessage="how are you?"
                        latestMessageTime="12:39"
                    />
                    <MessageTile
                        onMessagePress={() => onCardClick()}
                        userName="Jhon"
                        unreadCount={1}
                        unreadMessage={false}
                        profileUrl={require('../../assets/demoUser.png')}
                        latestMessage="how are you?"
                        latestMessageTime="12:39"
                    />
                    <MessageTile
                        onMessagePress={() => onCardClick()}
                        userName="Jhon"
                        unreadCount={1}
                        unreadMessage={false}
                        profileUrl={require('../../assets/demoUser.png')}
                        latestMessage="how are you?"
                        latestMessageTime="12:39"
                    />
                    <View
                        style={{ height: verticalScale(50) }}
                        className=" w-full"
                    />
                </ScrollView>
            </SafeAreaView>
        </BottomSheetModalProvider>
    );
};

export default ChatScreen;
