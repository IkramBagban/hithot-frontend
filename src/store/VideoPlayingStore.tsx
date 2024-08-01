import { create } from 'zustand';

type Store = {
    orientationMode: string;
    isOpenComment: boolean;
    postData: Object;
    changeMode: (mode: string) => void;
    handlePost: (obj: Object) => void;
    handleComment: (mode: boolean) => void;
};

const useVideoPlayingStore = create<Store>()(set => ({
    orientationMode: 'PORTRAIT',
    isOpenComment: false,
    postData: {},
    changeMode: (mode: string) => set(state => ({ orientationMode: mode })),
    handleComment: (mode: boolean) => set(state => ({ isOpenComment: mode })),
    handlePost: (obj: Object) => set(state => ({ postData: obj })),
}));

export default useVideoPlayingStore;
