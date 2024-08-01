import { create } from 'zustand';

interface ContentStore {
    showSheet: boolean;
    showDiscardModel: boolean;
    showSubscribeModel: boolean;
    showShareStorySheet: boolean;
    sendStorySheet: boolean;
    toggleShowSheet: () => void;
    toggleDiscardModel: () => void;
    toggleSubscribeModel: () => void;
    toggleSendStorySheet: () => void;
    toggleShowShareStorySheet: () => void;
    isUploading: boolean;
    setIsUploading: (b: boolean) => void;
    showMusicSheet: boolean;
    toggleMusicSheet: () => void;
    showReportSheet: boolean;
    toggleReportSheet: () => void;
    showReportSuccess: boolean;
    toggleReportSuccess: () => void;
    isCreateContent:boolean;
    enableCreateContent: (v:boolean) => void;
}

export const useContentStore = create<ContentStore>((set, get) => ({
    showSheet: false,
    showDiscardModel: false,
    showSubscribeModel: false,
    showShareStorySheet: false,
    sendStorySheet: false,
    toggleShowSheet: () => set(state => ({ showSheet: !state.showSheet })),
    toggleDiscardModel: () =>
        set(state => ({ showDiscardModel: !state.showDiscardModel })),
    toggleSubscribeModel: () =>
        set(state => ({ showSubscribeModel: !state.showSubscribeModel })),
    toggleSendStorySheet: () =>
        set(state => ({ sendStorySheet: !state.sendStorySheet })),
    toggleShowShareStorySheet: () =>
        set(state => ({ showShareStorySheet: !state.showShareStorySheet })),
    isUploading: false,
    setIsUploading: (val: boolean) => set({ isUploading: val }),
    showMusicSheet: false,
    toggleMusicSheet: () =>
        set(state => ({ showMusicSheet: !state.showMusicSheet })),
    showReportSheet: false,
    toggleReportSheet: () =>
        set(state => ({ showReportSheet: !state.showReportSheet })),
    showReportSuccess: false,
    toggleReportSuccess: () =>
        set(state => ({ showReportSuccess: !state.showReportSuccess })),
    isCreateContent:false,
    enableCreateContent: (t) =>
        set({ isCreateContent: t })
}));
