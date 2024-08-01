// localizationStore.ts
import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Translations {
    [key: string]: {
        [key: string]: string;
    };
}

const translations: Translations = {
    en: {
        beYou: 'Be you. Without limits.',
        nextGenApp: 'Next gen social media app',
        getPaid: 'Get paid for your content you post',
        createExclusive:
            'Create exclusive content yourself, gain subscribers, and make money.',
        howToMonetize: 'How to get monetized?',
        waysToMonetize: 'There are three ways to get monetized',
        subscribe: '1. Subscribe',
        lovePosts: '2. Love posts',
        unlockPosts: '3. Unlock posts',
    },
    hi: {
        beYou: 'खुद बनो। बिना किसी सीमा के।',
        nextGenApp: 'अगली पीढ़ी का सोशल मीडिया ऐप',
        getPaid: 'आपके द्वारा पोस्ट की गई सामग्री के लिए भुगतान प्राप्त करें',
        createExclusive:
            'स्वयं विशेष सामग्री बनाएं, ग्राहक प्राप्त करें, और पैसे कमाएं।',
        howToMonetize: 'कैसे मोनेटाइज करें?',
        waysToMonetize: 'मोनेटाइज करने के तीन तरीके हैं',
        subscribe: '1. सदस्यता लें',
        lovePosts: '2. पोस्ट्स को पसंद करें',
        unlockPosts: '3. पोस्ट्स को अनलॉक करें',
    },
};

interface LocalizationStore {
    language: string;
    setLanguage: (lang: string) => void;
    toggleLanguage: () => void;
    t: (key: string) => string;
    loadLanguage: () => void;
}

const useLocalizationStore = create<LocalizationStore>((set, get) => ({
    language: 'en',
    setLanguage: async (lang: string) => {
        await AsyncStorage.setItem('language', lang);
        set({ language: lang });
    },
    toggleLanguage: async () => {
        const newLang = get().language === 'en' ? 'hi' : 'en';
        await AsyncStorage.setItem('language', newLang);
        set({ language: newLang });
    },
    t: (key: string) => translations[get().language][key] || key,
    loadLanguage: async () => {
        const savedLang = await AsyncStorage.getItem('language');
        console.log('savedLang', savedLang);
        
        if (savedLang) {
            set({ language: savedLang });
        }
    },
}));

export default useLocalizationStore;
