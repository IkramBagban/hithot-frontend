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

// interface FollowersState {
//     fb_id_test: string;
//     followers: User[];
//     loading: boolean;
//     error: string | null;
//     fetchFollowers: () => Promise<void>;
// }

// const userFollowersStore = create<FollowersState>((set, get) => ({
//     fb_id_test: '595550746661780',
//     followers: [],
//     loading: false,
//     error: null,
//     fetchFollowers: async (fb_id?: string, my_fb_id?: string, page = 1) => {
//         const url = 'https://adminpanel.hithot.club/api/get_followers_user_s_user'; // Update to the correct API endpoint for followers

//         set({ loading: true });

//         try {
//             const data = await axios.post(url, {
//                 fb_id: '595550746661780',
//                 my_fb_id: '5619156648190032',
//                 page: page,
//             });

//             if (data.data.msg) {
//                 set({
//                     followers: data.data.msg,
//                     loading: false,
//                 });
//             }
//         } catch (error) {
//             console.log('Error fetching user followers:', error);
//             set({ loading: false, error: error.message });
//         }
//     },
// }));

// export default userFollowersStore;

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

interface FollowersState {
    fb_id_test: string;
    followers: User[];
    loading: boolean;
    error: string | null;
    fetchFollowers: (fb_id?: string, my_fb_id?: string) => Promise<void>;
}

const userFollowersStore = create<FollowersState>((set, get) => ({
    fb_id_test: '595550746661780',
    followers: [],
    loading: false,
    error: null,
    fetchFollowers: async (fb_id?: string, my_fb_id?: string) => {
        const url = 'https://adminpanel.hithot.club/api/get_followers_user_s_user';

        set(state => ({ ...state, loading: true }));

        try {
            const data = await axios.post(url, {
                fb_id: fb_id,
                my_fb_id: fb_id,
            });

            if (data.data.msg[0]) {
                set(state => ({
                    ...state,
                    followers: data.data.msg,
                    loading: false,
                }));
            }
        } catch (error) {
            // console.log('error fetch user followings:', error);
            set(state => ({ ...state, loading: false }));
        }
    },
}));

export default userFollowersStore;
