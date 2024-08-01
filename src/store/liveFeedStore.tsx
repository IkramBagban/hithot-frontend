import create from 'zustand';
import axios from 'axios';

interface live {
    fb_id: string;
    username: string;
    first_name: string;
    last_name: string;
    profile_pic: string;
}

interface LiveState {
    fb_id_test: string;
    tclLive: live[];
    upcomingLive: live[];
    loading: boolean;

    error: string | null;
    fetchLiveFeed: (fb_id?: string) => Promise<void>;
    fetchUpcomingFeed: (fb_id?: string) => Promise<void>;
}

const useLiveFeedStore = create<LiveState>((set, get) => ({
    fb_id_test: '595550746661780',
    tclLive: [],
    upcomingLive: [],
    loading: false,
    error: null,
    fetchLiveFeed: async (fb_id?: string) => {
        const url = 'https://adminpanel.hithot.club/api/getLiveUsers';

        set(state => ({ ...state, loading: true }));

        try {
            const data = await axios.post(url, {
                fb_id: fb_id,
            });

            if (data.data.msg?.length > 0) {
                set(state => ({
                    ...state,
                    tclLive: data.data.msg,
                    loading: false,
                }));
            }
        } catch (error) {
            // console.log('error fetch user followings:', error);
            set(state => ({ ...state, loading: false }));
        }
    },
    fetchUpcomingFeed: async (fb_id?: string) => {
        const url = 'https://adminpanel.hithot.club/api/getUpcomingLiveUsers';

        set(state => ({ ...state, loading: true }));

        try {
            const data = await axios.post(url, {
                fb_id: fb_id,
            });

            if (data.data.msg?.length > 0) {
                set(state => ({
                    ...state,
                    upcomingLive: data.data.msg,
                    loading: false,
                }));
            }
        } catch (error) {
            // console.log('error fetch user followings:', error);
            set(state => ({ ...state, loading: false }));
        }
    },
}));

export default useLiveFeedStore;
