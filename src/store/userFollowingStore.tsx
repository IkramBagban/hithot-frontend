// import create from 'zustand';
// import axios from 'axios';

// interface FollowStatus {
//     follow: string;
//     follow_status_button: string;
// }

// interface User {
//     fb_id: string;
//     username: string;
//     verified: number;
//     first_name: string;
//     last_name: string;
//     gender: string;
//     bio: string;
//     profile_pic: string;
//     created: string;
//     marked: number;
//     follow_Status: FollowStatus;
// }

// interface FollowingsState {
//     followings: User[];
//     loading: boolean;
//     error: string | null;
//     fetchFollowings: () => Promise<void>;
// }

// const useFollowingsStore = create<FollowingsState>(set => ({
//     followings: [],
//     loading: false,
//     error: null,
//     fetchFollowings: async () => {
//         set({ loading: true, error: null });
//         try {
//             const response = await axios.get(
//                 'https://adminpanel.hithot.club/api/get_followings_user_s_user',
//             );
//             set({ followings: response.data.msg, loading: false });
//         } catch (error) {
//             set({ error: error.message, loading: false });
//         }
//     },
// }));

// export default useFollowingsStore;

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

interface FollowingsState {
    fb_id_test: string;
    followings: User[];
    loading: boolean;
    error: string | null;
    fetchFollowings: () => Promise<void>;
}

const useFollowingsStore = create<FollowingsState>((set, get) => ({
    fb_id_test: '103961934169215370508',
    followings: [],
    loading: false,
    error: null,
    fetchFollowings: async (fb_id?: string, my_fb_id?: string) => {
        const url = 'https://adminpanel.hithot.club/api/get_followings_user_s_user';

        set(state => ({ ...state, loading: true }));

        try {
            const data = await axios.post(url, {
                fb_id: fb_id,
                my_fb_id: fb_id,
            });

            if (data.data.msg[0]) {
                set(state => ({
                    ...state,
                    followings: data.data.msg,
                    loading: false,
                }));
            }
        } catch (error) {
            // console.log('error fetch user followings:', error);
            set(state => ({ ...state, loading: false }));
        }
    },
}));

export default useFollowingsStore;
