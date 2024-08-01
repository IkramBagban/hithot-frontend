import axios from 'axios';

interface searchImage {
    fb_id: string;
    token: string;
    tag: string;
    pageNo: string;
}

interface searchImageResult {
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
    created: string;
}

const searchByHashtagImage = async (
    props: searchImage,
): Promise<searchImageResult[] | undefined> => {
    const url = 'https://node.hithot.club/api/SearchByHashTagImage';
    try {
        const response = await axios.post<searchImageResult[]>(url, {
            ...props,
        });
        console.log('searchByHashtagImage', response.data);

        return response.data;
    } catch (e) {
        console.log('Console Error in searchByHashtagImage ', e);
        return undefined;
    }
};

export default searchByHashtagImage;
