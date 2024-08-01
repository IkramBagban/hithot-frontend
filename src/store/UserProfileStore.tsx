import { create } from 'zustand';
import { UserInfo, VideoData } from '../components/Reels/ReelSection2';
import axios from 'axios';

interface FollowStatus {
    follow: string;
    follow_status_button: string;
}

interface UserProfileDataInterface {
    fb_id: string;
    user_info: UserInfo;
    follow_Status: FollowStatus;
    total_heart: number;
    total_fans: number;
    total_following: number;
}

interface UserProfileStoreInterface {
    fb_id_test: string;
    profileData: UserProfileDataInterface | null;
    loading: boolean;
    shortsLoading: boolean;
    postsLoading: boolean;
    clipsLoading: boolean;
    subscribedLoading: boolean;
    userShorts: VideoData[];
    userPosts: VideoData[];
    userClips: VideoData[];
    userSubscribed: VideoData[];
    fetchUserProfileData: (fb_id?: string, my_fb_id?: string) => void;
    fetchUserShortsVideo: (fb_id?: string, my_fb_id?: string) => void;
    fetchUserPostsImage: (fb_id?: string, my_fb_id?: string) => void;
    fetchUserClipsVideo: (fb_id?: string, my_fb_id?: string) => void;
    fetchUserSubscribed: (fb_id?: string, my_fb_id?: string) => void;
}

export const useProfileStore = create<UserProfileStoreInterface>(
    (set, get) => ({
        fb_id_test: '99898806172469',
        profileData: null,
        loading: false,
        clipsLoading: false,
        shortsLoading: false,
        postsLoading: false,
        subscribedLoading: false,
        userShorts: [],
        userPosts: [],
        userSubscribed: [],
        userClips: [],
        fetchUserProfileData: async (fb_id?: string, my_fb_id?: string) => {
            const url = 'https://adminpanel.hithot.club/api/showUserProfile';

            set(state => ({ ...state, loading: true }));

            try {
                const data = await axios.post(url, {
                    fb_id: fb_id,
                    my_fb_id: fb_id,
                });

                if (data.data.msg[0]) {
                    set(state => ({
                        ...state,
                        profileData: data.data.msg[0],
                        loading: false,
                    }));
                }
            } catch (error) {
                console.log('error fetch user profile:', error);
                set(state => ({ ...state, loading: false }));
            }
        },
        fetchUserShortsVideo: async (fb_id?: string, my_fb_id?: string) => {
            const url = 'https://adminpanel.hithot.club/api/showMyAllVideos';

            set(state => ({ ...state, shortsLoading: true }));

            try {
                const data = await axios.post(url, {
                    fb_id: fb_id,
                    my_fb_id: fb_id,
                });
                // console.log('ramesh__', data.data.msg[0]);
                // console.log('virji___', data.data.msg[0]?.user_videos);

                const userInfo = data.data.msg[0]?.user_info;
                const userVideos = data.data.msg[0]?.user_videos;

                if (userVideos) {
                    const userShorts = userVideos.map(video => ({
                        ...video,
                        user_info: userInfo,
                    }));

                    set(state => ({
                        ...state,
                        userShorts: userShorts as VideoData[],
                        shortsLoading: false,
                    }));
                }
            } catch (error) {
                // console.log('error fetch user profile:', error);
                set(state => ({ ...state, shortsLoading: false }));
            }
        },
        fetchUserPostsImage: async (fb_id?: string, my_fb_id?: string) => {
            const url = 'https://adminpanel.hithot.club/api/showMyAllImage';

            set(state => ({ ...state, postsLoading: true }));

            try {
                const data = await axios.post(url, {
                    fb_id: fb_id,
                    my_fb_id: fb_id,
                });
                // console.log(data.data.msg[0])
                // console.log(data.data.msg[0]?.user_videos)

                // console.log('ImageData', data.data.msg[0].user_videos[0]);
                // if (data.data.msg[0].user_videos) {
                //     set(state => ({
                //         ...state,
                //         userPosts: data.data.msg[0].user_videos,
                //         postsLoading: false,
                //     }));
                // }

                const userInfo = data.data.msg[0]?.user_info;
                const userVideos = data.data.msg[0]?.user_videos;

                if (userVideos) {
                    const userPosts = userVideos.map(video => ({
                        ...video,
                        user_info: userInfo,
                    }));

                    set(state => ({
                        ...state,
                        userPosts: userPosts as VideoData[],
                        postsLoading: false,
                    }));
                }
            } catch (error) {
                // console.log('error fetch user profile:', error);
                set(state => ({ ...state, postsLoading: false }));
            }
        },
        fetchUserSubscribed: async (fb_id?: string, my_fb_id?: string) => {
            const url =
                'https://adminpanel.hithot.club/api/showMyAllSubscribed';

            set(state => ({ ...state, subscribedLoading: true }));

            // console.log('FB_ID', fb_id);

            try {
                const data = await axios.post(url, {
                    fb_id: fb_id,
                    my_fb_id: fb_id,
                });
                // console.log(data.data.msg[0])
                // console.log(data.data.msg[0]?.user_videos)

                // if (data.data.msg[0]?.user_videos) {
                //     set(state => ({
                //         ...state,
                //         userClips: data.data.msg[0]?.user_videos as VideoData[],
                //         shortsLoading: false,
                //     }));
                // }

                const userInfo = data.data.msg[0]?.user_info;
                // console.log('cbsjcsjraj-----.p.,.,.,,', data.data.msg[0]);

                const userVideos = data.data.msg[0]?.user_videos;

                if (userVideos) {
                    const userSubscribed = userVideos.map(video => ({
                        ...video,
                        user_info: userInfo,
                    }));

                    set(state => ({
                        ...state,
                        userSubscribed: userSubscribed as VideoData[],
                        subscribedLoading: false,
                    }));
                }
            } catch (error) {
                // console.log('error fetch user profile:', error);
                set(state => ({ ...state, subscribedLoading: false }));
            }
        },
        fetchUserClipsVideo: async (fb_id?: string, my_fb_id?: string) => {
            const url =
                'https://adminpanel.hithot.club/api/showMyAllVideosClip';

            set(state => ({ ...state, clipsLoading: true }));

            // console.log('FB_ID', fb_id);

            try {
                const data = await axios.post(url, {
                    fb_id: fb_id,
                    my_fb_id: fb_id,
                });
                // console.log(data.data.msg[0])
                // console.log(data.data.msg[0]?.user_videos)

                // if (data.data.msg[0]?.user_videos) {
                //     set(state => ({
                //         ...state,
                //         userClips: data.data.msg[0]?.user_videos as VideoData[],
                //         shortsLoading: false,
                //     }));
                // }

                const userInfo = data.data.msg[0]?.user_info;
                // console.log('cbsjcsjraj-----.p.,.,.,,', data.data.msg[0]);

                const userVideos = data.data.msg[0]?.user_videos;

                if (userVideos) {
                    const userClips = userVideos.map(video => ({
                        ...video,
                        user_info: userInfo,
                    }));

                    set(state => ({
                        ...state,
                        userClips: userClips as VideoData[],
                        clipsLoading: false,
                    }));
                }
            } catch (error) {
                // console.log('error fetch user profile:', error);
                set(state => ({ ...state, clipsLoading: false }));
            }
        },
    }),
);
