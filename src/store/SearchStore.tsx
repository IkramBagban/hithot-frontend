// import axios from 'axios';
// import { SearchResult } from './types';

// const API_URL = 'https://adminpanel.hithot.club/api/searchAll';

// interface SearchParams {
//     fb_id: string;
//     keyword: string;
// }

// export const searchStore = async ({
//     fb_id,
//     keyword,
// }: SearchParams): Promise<SearchResult> => {
//     console.log('fb_ID', fb_id);
//     console.log('k', keyword);

//     try {
//         const response = await axios.post<SearchResult>(
//             API_URL,
//             {
//                 fb_id,
//                 keyword,
//             },
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             },
//         );

//         console.log('API response:', response.data);

//         const {
//             users = [],
//             videos = [],
//             images = [],
//             sounds = [],
//         } = response.data;

//         return {
//             users: users.filter(item =>
//                 Object.values(item).some(value =>
//                     value.toLowerCase().includes(keyword.toLowerCase()),
//                 ),
//             ),
//             videos: videos.filter(item =>
//                 Object.values(item).some(value =>
//                     value.toLowerCase().includes(keyword.toLowerCase()),
//                 ),
//             ),
//             images: images.filter(item =>
//                 Object.values(item).some(value =>
//                     value.toLowerCase().includes(keyword.toLowerCase()),
//                 ),
//             ),
//             sounds: sounds.filter(item =>
//                 Object.values(item).some(value =>
//                     value.toLowerCase().includes(keyword.toLowerCase()),
//                 ),
//             ),
//         };
//     } catch (error) {
//         console.error('Error fetching search data:', error);
//         return {
//             users: [],
//             videos: [],
//             images: [],
//             sounds: [],
//         };
//     }
// };

// api.ts
import axios from 'axios';
import { SearchResult } from './types';

const API_URL = 'https://adminpanel.hithot.club/api/searchAll';

interface SearchParams {
    fb_id: string;
    keyword: string;
}

export const searchStore = async ({
    fb_id,
    keyword,
}: SearchParams): Promise<SearchResult> => {
    try {
        const response = await axios.post(
            API_URL,
            {
                fb_id,
                keyword,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );

        // console.log('API response:', response.data);

        const {
            users = [],
            videos = [],
            image = [],
            sounds = [],
        } = response.data.msg;

        const filteredUsers = users
            ? users.filter(item => {
                  const passesFilter = Object.values(item).some(value =>
                      String(value)
                          .toLowerCase()
                          .includes(keyword.toLowerCase()),
                  );

                  if (passesFilter) {
                      //   console.log('Filtered user:', item);
                  }

                  return passesFilter;
              })
            : [];

        const filteredVideos = videos
            ? videos.filter(item => {
                  const passesFilter = Object.values(item).some(value =>
                      String(value)
                          .toLowerCase()
                          .includes(keyword.toLowerCase()),
                  );

                  if (passesFilter) {
                      //   console.log('Filtered video:', item);
                  }

                  return passesFilter;
              })
            : [];

        const filteredImages = image
            ? image.filter(item => {
                  //   console.log('item____________________', item);

                  const passesFilter = Object.values(item).some(value =>
                      String(value)
                          .toLowerCase()
                          .includes(keyword.toLowerCase()),
                  );

                  if (passesFilter) {
                      //   console.log('Filtered image:', item);
                  }

                  return passesFilter;
              })
            : [];

        const filteredSounds = sounds
            ? sounds.filter(item => {
                  const passesFilter = Object.values(item).some(value =>
                      String(value)
                          .toLowerCase()
                          .includes(keyword.toLowerCase()),
                  );

                  if (passesFilter) {
                      //   console.log('Filtered sound:', item);
                  }

                  return passesFilter;
              })
            : [];

        return {
            users: filteredUsers,
            videos: filteredVideos,
            images: filteredImages,
            sounds: filteredSounds,
        };
    } catch (error) {
        console.error('Error fetching search data:', error);
        return {
            users: [],
            videos: [],
            images: [],
            sounds: [],
        };
    }
};
