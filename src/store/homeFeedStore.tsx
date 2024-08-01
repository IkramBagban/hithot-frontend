import { create } from 'zustand';
import { VideoData } from '../components/Reels/ReelSection2';
import axios from 'axios';
import { getNotificationsService } from '../services/NotificationService';

interface SuggestedFollower {
    fb_id: string;
    username: string;
    gender: string;
    verified: number;
    first_name: string;
    last_name: string;
    profile_pic: string;
    email: string;
    created: string;
    follow_count: number;
}
interface NotificationReq {
    fb_id: string;
    record_per_page: string;
    page: string;
}
interface HomeFeedStore {
    feedPosts: VideoData[];
    feedLoading: boolean;
    followerSuggestions: SuggestedFollower[];
    suggestionsLoading: boolean;
    fetchFeedPosts: (fb_id?: string, my_fb_id?: string) => Promise<string>;
    fetchFollowerSuggestions: () => Promise<void>;
    notificationLoader: boolean;
    appNotifications: [];
    getAllNotifications: (req: NotificationReq) => Promise<void>;
    loadMoreNotifications: (req: NotificationReq) => Promise<void>;
}

export const useHomeFeed = create<HomeFeedStore>((set, get) => ({
    appNotifications: [],
    notificationLoader: false,
    getAllNotifications: async (req: NotificationReq) => {
        try {
            set({ notificationLoader: true });
            const res = await getNotificationsService(req);
            console.log('all notifications ---> ', res);
            set({
                appNotifications: res?.msg || [],
            });
        } catch (e) {
            console.log(`getAllNotifications error `, e);
        } finally {
            set({
                notificationLoader: false,
            });
        }
    },
    loadMoreNotifications: async (req: NotificationReq) => {
        const {appNotifications}=get()
        try {
            set({ notificationLoader: true });
            const res = await getNotificationsService(req);
            console.log('more notifications ---> ',res?.msg?.length);
            set({
                appNotifications: [...appNotifications, ...res?.msg],
            });
        } catch (e) {
            console.log(`getAllNotifications error `, e);
        } finally {
            set({
                notificationLoader: false,
            });
        }
    },
    feedPosts: [],
    feedLoading: false,
    followerSuggestions: [],
    suggestionsLoading: false,
    fetchFeedPosts: async (fb_id?: string, my_fb_id?: string) => {
        const url = 'https://adminpanel.hithot.club/api/showHomeFeed';
        // console.log('fetch feed post');
        set(state => ({ ...state, feedLoading: true }));
        try {
            const data = await axios.post(url, {
                fb_id: '108079010412844413016',
                token: '',
                category: '',
                device_id: '01095eedb13d10f9',
                type: '',
            });

            if (data.data.msg) {
                // console.log(data.data.msg[0].id, '1st id from api');
                set(state => ({
                    ...state,
                    feedPosts: data.data.msg as VideoData[],
                    feedLoading: false,
                }));
                return data.data.msg[0].id;
            }
        } catch (error) {
            // console.log('error fetch user profile:', error);
            set(state => ({ ...state, feedLoading: false }));
        }
    },
    fetchFollowerSuggestions: async () => {
        const url = 'https://adminpanel.hithot.club/api/followerSuggestion';
        // console.log('fetch follower suggestions');
        set(state => ({ ...state, suggestionsLoading: true }));
        try {
            const list = await axios.post(url, {
                page: 1,
            });

            if (list.data) {
                set(state => ({
                    ...state,
                    followerSuggestions: list.data.msg,
                    suggestionsLoading: false,
                }));
            }
        } catch (error) {
            // console.log('error fetch follower suggestions:', error);
            set(state => ({ ...state, suggestionsLoading: false }));
        }
    },
}));
