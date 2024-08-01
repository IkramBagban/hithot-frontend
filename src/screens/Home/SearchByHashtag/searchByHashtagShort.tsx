import axios from 'axios';

interface searchShort {
    fb_id: string;
    token: string;
    tag: string;
    pageNo: string;
}

interface searchShortResult {
    tag: string;
    id: number;
    fb_id: string;
    user_info: {
        first_name: string;
        last_name: string;
        profile_pic: string;
        username: string;
        verified: number;
    };
    count: {
        like_count: number;
        video_comment_count: number;
        view: number;
    };
    liked: number;
    video: string;
    thumb: string;
    gif: string;
    category: string;
    marked: number;
    description: string;
    type: string;
    sound: {
        id: number;
        audio_path: {
            mp3: string;
            acc: string;
        };
        sound_name: string;
        description: string;
        thum: string;
        section: string;
        created: string;
    };
    created: string;
}

const searchByHashtagShort = async (
    props: searchShort,
): Promise<searchShortResult[] | undefined> => {
    const url = 'https://node.hithot.club/api/SearchByHashTagImage';
    try {
        const response = await axios.post<searchShortResult[]>(url, {
            ...props,
        });
        console.log('searchByHashtagImage', response.data);

        return response.data;
    } catch (e) {
        console.log('Console Error in searchByHashtagImage ', e);
        return undefined;
    }
};

export default searchByHashtagShort;
