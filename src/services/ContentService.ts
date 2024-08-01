import API from './index';

// End urls
const UPLOAD_CLIP_URL = 'https://adminpanel.hithot.club/api/uploadVideoClip';
const UPLOAD_SHORT_URL = 'https://upload.hithot.club/api/uploadVideoNew';
const UPLOAD_IMAGE_URL = 'https://adminpanel.hithot.club/api/uploadImage_';
const UPLOAD_STORY_URL = 'https://adminpanel.hithot.club/api/addStory';

let headers = {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
};

// Upload services
export const uploadClip = (body: Record<string, any>) =>
    API.post(UPLOAD_CLIP_URL, body, headers);

export const uploadShort = (body: Record<string, any>) =>
    API.post(UPLOAD_SHORT_URL, body, headers);

export const uploadStory = (body: Record<string, any>) =>
    API.post(UPLOAD_STORY_URL, body, headers);

export const uploadImage = (body: Record<string, any>) =>
    API.post(UPLOAD_IMAGE_URL, body, headers);
