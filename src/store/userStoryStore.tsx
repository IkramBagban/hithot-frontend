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
//     storyData: User[];
//     loading: boolean;
//     error: string | null;
//     fetchStories: () => Promise<void>;
// }

// const userStoryStore = create<FollowersState>((set, get) => ({
//     fb_id_test: '595550746661780',
//     storyData: [],
//     loading: false,
//     error: null,
//     fetchStories: async (fb_id?: string, my_fb_id?: string, page = 1) => {
//         const url = 'https://adminpanel.hithot.club/api/get_storyData_user_s_user'; // Update to the correct API endpoint for storyData

//         set({ loading: true });

//         try {
//             const data = await axios.post(url, {
//                 fb_id: '595550746661780',
//                 my_fb_id: '5619156648190032',
//                 page: page,
//             });

//             if (data.data.msg) {
//                 set({
//                     storyData: data.data.msg,
//                     loading: false,
//                 });
//             }
//         } catch (error) {
//             console.log('Error fetching user storyData:', error);
//             set({ loading: false, error: error.message });
//         }
//     },
// }));

// export default userStoryStore;

import create from 'zustand';
import axios from 'axios';

interface storyData {
    fb_id: string;
    title: string;
    post: string;
}

interface FollowersState {
    fb_id_test: string;
    storyData: storyData[];
    loading: boolean;
    error: string | null;
    fetchStories: (fb_id?: string, my_fb_id?: string) => Promise<void>;
}

const userStoryStore = create<FollowersState>((set, get) => ({
    fb_id_test: '595550746661780',
    storyData: [],
    loading: false,
    error: null,
    fetchStories: async (fb_id?: string, my_fb_id?: string) => {
        const url = 'https://adminpanel.hithot.club/api/getUserStory';

        set(state => ({ ...state, loading: true }));

        try {
            const data = await axios.post(url, {
                fb_id: fb_id,
                // my_fb_id: '99898806172469',
            });

            if (data.data.msg[0]) {
                set(state => ({
                    ...state,
                    storyData: data.data.msg,
                    loading: false,
                }));
            }
        } catch (error) {
            // console.log('error fetch user followings:', error);
            set(state => ({ ...state, loading: false }));
        }
    },
}));

export default userStoryStore;
