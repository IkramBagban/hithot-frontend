import create from 'zustand';
import axios from 'axios';

interface walletData {
    fb_id: string;
    balance: number;
}
interface walletHistoryData {
    page: number;
    rowsPerPage: number;
    fb_id: string;
}

interface walletState {
    fb_id_test: string;
    walletData: walletData[];
    walletLoading: boolean;
    walletHistoryData: walletHistoryData[];
    walletHistoryLoading: boolean;
    error: string | null;
    fetchWallet: (fb_id?: string) => Promise<void>;
    fetchWalletHistory: (
        page?: string,
        rowsPerPage?: string,
        fb_id?: string,
    ) => Promise<void>;
}

const WalletStore = create<walletState>((set, get) => ({
    fb_id_test: '595550746661780',
    walletData: [],
    walletLoading: false,
    walletHistoryData: [],
    walletHistoryLoading: false,
    error: null,
    fetchWallet: async (fb_id?: string) => {
        const url = 'https://adminpanel.hithot.club/api/getYourWallet';

        set(state => ({ ...state, walletLoading: true }));

        try {
            const data = await axios.post(url, {
                fb_id: fb_id,
            });
            console.log('fetch user wallet:', data.data);

            if (data.data) {
                set(state => ({
                    ...state,
                    walletData: data.data,
                    walletLoading: false,
                }));
            }
        } catch (error) {
            // console.log('error fetch user followings:', error);
            set(state => ({ ...state, walletLoading: false }));
        }
    },
    fetchWalletHistory: async (
        page?: number,
        rowsPerPage?: number,
        fb_id?: string,
    ) => {
        const url = 'https://adminpanel.hithot.club/api/walletHistory';

        set(state => ({ ...state, walletHistoryLoading: true }));

        try {
            const data = await axios.post(url, {
                data: {
                    page: 0,
                    rowsPerPage: 10,
                    fb_id: fb_id,
                },
            });
            // console.log('fetch user wallet history:', data.data);

            if (data.data) {
                set(state => ({
                    ...state,
                    walletHistoryData: data.data,
                    walletHistoryLoading: false,
                }));
            }
        } catch (error) {
            // console.log('error fetch user followings:', error);
            set(state => ({ ...state, walletHistoryLoading: false }));
        }
    },
}));

export default WalletStore;
