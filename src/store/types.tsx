export interface User {
    name: string;
    info: string;
}

export interface Video {
    title: string;
    url: string;
}

export interface Image {
    title: string;
    url: string;
}

export interface Sound {
    title: string;
    url: string;
}

export interface SearchResult {
    users: User[];
    videos: Video[];
    images: Image[];
    sounds: Sound[];
}
