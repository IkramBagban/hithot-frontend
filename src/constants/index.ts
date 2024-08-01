import { Images } from '../theme/Images';

export const ContentType = {
    POST: 'POST',
    SHORT: 'SHORT',
    STORY: 'STORY',
    GO_LIVE: 'GO LIVE',
    CLIP: 'CLIP',
};

export const PostType = {
    IMAGE: 'IMAGE',
    VIDEO: 'VIDEO',
    TEXT: 'TEXT',
};

export const contentOptions = [
    {
        id: 0,
        type: ContentType.POST,
    },
    {
        id: 1,
        type: ContentType.STORY,
    },
    {
        id: 2,
        type: ContentType.SHORT,
    },
    {
        id: 3,
        type: ContentType.GO_LIVE,
    },
    {
        id: 4,
        type: ContentType.CLIP,
    },
];

export interface Song {
    id: string;
    title: string;
    artist: string;
    imageUrl: any;
    category: string;
}

export const songsData: Song[] = [
    {
        id: '1',
        title: 'Zinda baad (From BADAL)',
        artist: 'Anirudh Rai, Neha Bhardwaj',
        imageUrl: Images.musicAlbumIcon,
        category: 'Hindi songs',
    },
    {
        id: '2',
        title: 'Shape of You',
        artist: 'Ed Sheeran',
        imageUrl: Images.musicAlbumIcon,
        category: 'English',
    },
    {
        id: '3',
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        imageUrl: Images.musicAlbumIcon,
        category: 'English',
    },
    {
        id: '4',
        title: 'Tum Hi Ho',
        artist: 'Arijit Singh',
        imageUrl: Images.musicAlbumIcon,
        category: 'Hindi songs',
    },
    {
        id: '5',
        title: 'Levitating',
        artist: 'Dua Lipa',
        imageUrl: Images.musicAlbumIcon,
        category: 'Trending',
    },
    {
        id: '6',
        title: 'Senorita',
        artist: 'Shawn Mendes, Camila Cabello',
        imageUrl: Images.musicAlbumIcon,
        category: 'Trending',
    },
    {
        id: '7',
        title: 'Ghungroo',
        artist: 'Arijit Singh, Shilpa Rao',
        imageUrl: Images.musicAlbumIcon,
        category: 'Hindi songs',
    },
    {
        id: '8',
        title: 'Despacito',
        artist: 'Luis Fonsi, Daddy Yankee',
        imageUrl: Images.musicAlbumIcon,
        category: 'Trending',
    },
    {
        id: '9',
        title: 'Lover',
        artist: 'Diljit',
        imageUrl: Images.musicAlbumIcon,
        category: 'Punjabi songs',
    },
    {
        id: '10',
        title: 'Bekhayali',
        artist: 'Sachet Tandon',
        imageUrl: Images.musicAlbumIcon,
        category: 'Hindi songs',
    },
    {
        id: '11',
        title: 'Rolling in the Deep',
        artist: 'Adele',
        imageUrl: Images.musicAlbumIcon,
        category: 'English',
    },
    {
        id: '12',
        title: 'Perfect',
        artist: 'Ed Sheeran',
        imageUrl: Images.musicAlbumIcon,
        category: 'English',
    },
    {
        id: '13',
        title: 'Kalank',
        artist: 'Arijit Singh',
        imageUrl: Images.musicAlbumIcon,
        category: 'Hindi',
    },
    {
        id: '14',
        title: 'Memories',
        artist: 'Maroon 5',
        imageUrl: Images.musicAlbumIcon,
        category: 'English',
    },
    {
        id: '15',
        title: 'Agar Tum Saath Ho',
        artist: 'Alka Yagnik, Arijit Singh',
        imageUrl: Images.musicAlbumIcon,
        category: 'Hindi',
    },
    {
        id: '16',
        title: 'Mai shayar to nahi',
        artist: 'Alka Yagnik, Arijit Singh',
        imageUrl: Images.musicAlbumIcon,
        category: 'Old songs',
    },
];

export const categories = [
    'All',
    'Loved by you',
    'Punjabi songs',
    'Old songs',
    'Hindi songs',
    'Trending',
];

export const shareContentOptions = [
    {
        id: 1,
        icon: Images.addToStoryIcon,
        text: 'Add Story',
        action: 'add_to_story',
    },
    {
        id: 2,
        icon: Images.downloadIcon,
        text: 'Download',
        action: 'download',
    },
    {
        id: 3,
        icon: Images.shareIcon,
        text: 'Share',
        action: 'share',
    },
    {
        id: 4,
        icon: Images.copylinkIcon,
        text: 'Copy Link',
        action: 'copy_link',
    },
    {
        id: 5,
        icon: Images.smsIcon,
        text: 'SMS',
        action: 'sms',
    },
];