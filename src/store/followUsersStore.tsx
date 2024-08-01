// apiService.js
import axios from 'axios';

const API_BASE_URL = 'https://adminpanel.hithot.club/api';

export const followUsersStore = async (
    fb_id: string,
    followed_fb_id: string,
    status: string,
) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/follow_users`, {
            fb_id,
            followed_fb_id,
            status,
        });
        console.log('response.data', response.data);

        return response.data;
    } catch (error) {
        console.error('Error updating follow status:', error);
        throw error;
    }
};
