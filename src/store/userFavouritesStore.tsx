import create from 'zustand';
import axios from 'axios';

interface User {
    fb_id: string;
    username: string;
    first_name: string;
    last_name: string;
    profile_pic: string;
}

interface FavouritesState {
    fb_id_test: string;
    favourites: User[];
    loading: boolean;
    error: string | null;
    fetchFavourites: (fb_id?: string, my_fb_id?: string) => Promise<void>;
}

const userFavouritesStore = create<FavouritesState>((set, get) => ({
    fb_id_test: '99898806172469',
    favourites: [],
    loading: false,
    error: null,
    fetchFavourites: async (fb_id?: string, my_fb_id?: string) => {
        const url = 'https://adminpanel.hithot.club/api/getMyFavourites';

        set(state => ({ ...state, loading: true }));

        try {
            const data = await axios.post(url, {
                fb_id: fb_id,
                my_fb_id: '99898806172469',
            });

            if (data.data.msg[0]) {
                set(state => ({
                    ...state,
                    favourites: data.data.msg,
                    loading: false,
                }));
            }
        } catch (error) {
            // console.log('error fetch user followings:', error);
            set(state => ({ ...state, loading: false }));
        }
    },
}));

export default userFavouritesStore;
