import create from 'zustand';
import axios from 'axios';

interface room {
    code: string;
    message: string;
    id: number;
}

interface message {
    my_fb_id: string;
    fb_id: string;
    message: string;
    room_id: number;
}

interface ChatState {
    fb_id_test: string;
    room: room;
    loading: boolean;
    error: string | null;
    chat_history: [];
    allRooms: [];
    fetchRoom: (my_fb_id?: string, fb_id?: string) => Promise<void>;
    sendChat: (params: message) => Promise<void>;
    fetchChatHisory: (room_id?: string, my_fb_id?: string) => Promise<void>;
    fetchAllRooms: (my_fb_id?: string) => Promise<void>;
}

const useUserChatStore = create<ChatState>((set, get) => ({
    fb_id_test: '595550746661780',
    room: {},
    loading: false,
    error: null,
    chat_history: [],
    fetchRoom: async (my_fb_id?: string, fb_id?: string) => {
        const url = 'https://adminpanel.hithot.club/api/get_room';

        set(state => ({ ...state, loading: true }));

        try {
            const data = await axios.post(url, {
                my_fb_id: my_fb_id,
                fb_id: fb_id,
            });

            if (data.data) {
                set(state => ({
                    ...state,
                    room: data.data,
                    loading: false,
                }));
            }
            return data.data;
        } catch (error) {
            // console.log('error fetch user followings:', error);
            set(state => ({ ...state, loading: false }));
        }
    },
    sendChat: async (params: message) => {
        const url = 'https://adminpanel.hithot.club/api/send_message';
        set(state => ({ ...state, loading: true }));

        try {
            const data = await axios.post(url, params);

            if (data.data) {
                set(state => ({
                    ...state,
                    // room: data.data,
                    loading: false,
                }));
            }
        } catch (error) {
            // console.log('error fetch user followings:', error);
            set(state => ({ ...state, loading: false }));
        }
    },
    fetchChatHisory: async (room_id?: string, my_fb_id?: string) => {
        const url = 'https://adminpanel.hithot.club/api/chat_history';
        set(state => ({ ...state, loading: true }));

        try {
            const data = await axios.post(url, {
                room_id,
                my_fb_id,
            });

            if (data.data?.msg?.length > 0) {
                set(state => ({
                    ...state,
                    // room: data.data,
                    chat_history: data.data?.msg,
                    loading: false,
                }));
            }
        } catch (error) {
            // console.log('error fetch user followings:', error);
            set(state => ({ ...state, loading: false }));
        }
    },
    fetchAllRooms: async (my_fb_id?: string) => {
        const url = 'https://adminpanel.hithot.club/api/get_all_rooms';
        set(state => ({ ...state, loading: true }));

        try {
            const data = await axios.post(url, {
                my_fb_id,
            });

            if (data.data?.msg?.length > 0) {
                set(state => ({
                    ...state,
                    // room: data.data,
                    allRooms: data.data?.msg,
                    loading: false,
                }));
            }
        } catch (error) {
            // console.log('error fetch user followings:', error);
            set(state => ({ ...state, loading: false }));
        }
    },
}));

export default useUserChatStore;
