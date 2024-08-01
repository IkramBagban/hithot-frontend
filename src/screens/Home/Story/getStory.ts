import axios from 'axios';
export interface StoryData {
    id: number;
    fb_id: string;
    title: string;
    post: string;
    created: string;
}

export interface User {
    fb_id: string;
    userName: string;
    firstName: string;
    lastName: string;
    profilePic: string;
    storySeenStaus: string;
    StoryData: StoryData[]; //commented for dummy story
}

interface ApiResponse {
    code: string;
    msg: {
        response: string;
        data: User[];
    }[];
}

interface VideoData {
    fb_id: string;
    id: string;
}

const getStory = async (fb_id: string): Promise<User[]> => {
    try {
        const { data } = await axios.post<ApiResponse>(
            'https://adminpanel.hithot.club/api/getUserStory',
            { fb_id },
        );
        if (data.msg && data.msg[0].data) {
            return data.msg[0].data;
        } else {
            console.error('Unexpected response format', data);
            return [];
        }
    } catch (error) {
        console.error('Error fetching stories', error);
        return [];
    }
};

export default getStory;
