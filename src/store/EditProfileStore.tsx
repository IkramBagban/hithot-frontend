// api.ts
import axios from 'axios';

const API_URL = 'https://adminpanel.hithot.club/api'; // Replace with your API URL

export interface ProfileData {
    fb_id: string;
    first_name: string;
    last_name: string;
    username: string;
    verified: number;
    gender: string;
    category: string;
    bio: string;
    marked: number;
    link1?: string | null;
    link2?: string | null;
    link3?: string | null;
    is_private: number;
}

export const EditProfileStore = async (
    profileData: ProfileData,
): Promise<any> => {
    try {
        const response = await axios.post(
            `${API_URL}/edit_profile`,
            profileData,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
        // console.log('response+++=', response.data);

        return response.data;
    } catch (error) {
        throw error;
    }
};
