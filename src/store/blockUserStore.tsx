import create from 'zustand';
import axios from 'axios';

interface FollowStatus {
    follow: string;
    follow_status_button: string;
}

interface User {
    fb_id: string;
    username: string;
    verified: number;
    first_name: string;
    last_name: string;
    gender: string;
    bio: string;
    profile_pic: string;
    created: string;
    marked: number;
    follow_Status: FollowStatus;
}

interface blockState {
    fb_id_test: string;
    block: User[];
    loading: boolean;
    error: string | null;
    fetchBlockUser: () => Promise<void>;
}

const blockUserStore = create<blockState>((set, get) => ({
    fb_id_test: '299806',
    block: [],
    loading: false,
    error: null,
    fetchBlockUser: async (fb_id?: string, block_fb_id?: string) => {
        const url = 'https://adminpanel.hithot.club/api/block_user';

        set(state => ({ ...state, loading: true }));

        try {
            const data = await axios.post(url, {
                fb_id: '299806',
                block_fb_id: '100157944550006196412',
            });

            if (data.data.msg[0]) {
                set(state => ({
                    ...state,
                    block: data.data.msg,
                    loading: false,
                }));
            }
        } catch (error) {
            // console.log('error fetch user block:', error);
            set(state => ({ ...state, loading: false }));
        }
    },
}));

export default blockUserStore;
