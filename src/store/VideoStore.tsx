import { create } from 'zustand';
import { VideoData } from '../components/Reels/ReelSection2';

interface VideoStore {
    videos: VideoData[];
    isLoading: boolean;
    fetchVideos: () => void;
    loadMoreVideos: (pg:string) => void;
    isNextLoading: boolean;
    showMoreOptions: boolean;
    toggleMoreOptions: () => void;
}

const useVideoStore = create<VideoStore>((set, get) => ({
    showMoreOptions:false,
    toggleMoreOptions:()=>
        set(state => ({showMoreOptions:!state.showMoreOptions})),
    videos: [],
    page: 1,
    isLoading: false,
    isNextLoading: false,
    fetchVideos: async () => {
        set({ isLoading: true });
        const response = await fetch(
            'https://adminpanel.hithot.club/api/showAllVideos_1',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fb_id: '108079010412844413016',
                    // token: '',
                    // category: '',
                    // device_id: '01095eedb13d10f9',
                    // type: '',
                    page: '1',
                }),
            },
        );
        const data = await response.json();
        set(state => ({
            videos: [...state.videos, ...data.msg],
            isLoading: false,
        }));
    },
    loadMoreVideos: async (page) => {
        const { isNextLoading } = get();
        if (isNextLoading) return;

        set({ isNextLoading: true });
        const response = await fetch(
            'https://adminpanel.hithot.club/api/showAllVideos_1',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fb_id: '108079010412844413016',
                    // token: '',
                    // category: '',
                    // device_id: '01095eedb13d10f9',
                    // type: '',
                    page,
                }),
            },
        );
        const data = await response.json();
        set(state => ({
            videos: [...state.videos, ...data.msg],
            isNextLoading: false,
        }));
    },
}));

export default useVideoStore;
