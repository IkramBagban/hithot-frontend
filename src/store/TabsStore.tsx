import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TabsStore = create((set, get) => ({
    videos: [], // Initialize with an empty array or appropriate initial state

    fetchData: async (fb_id, my_fb_id) => {
        try {
            const hosturl = 'https://adminpanel.hithot.club';
            const [data1, data2, data3, data4] = await Promise.all([
                fetch(`${hosturl}/api/showMyAllVideos`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ fb_id, my_fb_id }),
                }).then(res => res.json()),
                fetch(`${hosturl}/api/showMyAllImage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ fb_id, my_fb_id }),
                }).then(res => res.json()),
                fetch(`${hosturl}/api/showMyAllSubscribed`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ fb_id, my_fb_id }),
                }).then(res => res.json()),
                fetch(`${hosturl}/api/showMyAllVideosClip`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ fb_id, my_fb_id }),
                }).then(res => res.json()),
            ]);

            const videosData = { data1, data2, data3, data4 };
            console.log('Videos Data:', videosData);

            set({ videos: videosData }); // Store data in Zustand store

            // Store data in AsyncStorage
            await AsyncStorage.setItem(
                'userVideos',
                JSON.stringify(videosData),
            );
        } catch (error) {
            console.error('Error fetching and storing videos:', error);
        }
    },

    loadDataFromStorage: async () => {
        try {
            const storedData = await AsyncStorage.getItem('userVideos');
            if (storedData) {
                const videosData = JSON.parse(storedData);
                set({ videos: videosData });
            }
        } catch (error) {
            console.error('Error loading data from AsyncStorage:', error);
        }
    },
}));

export default TabsStore;
