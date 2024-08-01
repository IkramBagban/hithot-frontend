import { create } from 'zustand';
import {
    emailSignInService,
    emailSignUpService,
} from '../services/AuthService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../config';
import {
    showFailureToast,
    showSuccessToast,
} from '../components/Toast/HitHotToast';

interface ContentStore {
    authLoader: boolean;
    isLoggedIn: boolean;
    emailSignIn: (reqParams: any) => void;
    emailSignUp: (reqParams: any) => void;
    logoutApp: (reqParams?: any) => void;
    setUserDetail: (reqParams?: any) => void;
    userDetails: any;
}

export const useAuthStore = create<ContentStore>((set, get) => ({
    isLoggedIn: false,
    authLoader: false,
    userDetails: null,
    emailSignIn: async formData => {
        try {
            const { reqParams, callback } = formData;
            set({ authLoader: true });
            const res = await emailSignInService(reqParams);
            const signInRes = res.msg[0];
            set({
                authLoader: false,
                userDetails: signInRes,
                isLoggedIn: true,
            });
            console.log('signInRes ----> ', signInRes);
            showSuccessToast('Sign in successfull!');
            await AsyncStorage.setItem(StorageKey.$FBID, signInRes?.fb_id);
            await AsyncStorage.setItem(
                StorageKey.$USERDATA,
                JSON.stringify(signInRes),
            );
            // callback to navigate on success
            if (callback) callback();
        } catch (e) {
            console.log('Error while signup --> ', e);
            showFailureToast('Failed to sign in!');
        }
    },
    emailSignUp: async formData => {
        try {
            const { reqParams, callback } = formData;
            set({ authLoader: true });
            const res = await emailSignUpService(reqParams);
            const signUpRes = res.msg[0];
            set({
                authLoader: false,
                userDetails: signUpRes,
                isLoggedIn: true,
            });
            console.log('signUpRes ----> ', signUpRes);
            showSuccessToast('Sign up succefully!');
            await AsyncStorage.setItem(StorageKey.$FBID, signUpRes?.fb_id);
            await AsyncStorage.setItem(
                StorageKey.$USERDATA,
                JSON.stringify(signUpRes),
            );
            // callback to navigate on success
            if (callback) callback();
        } catch (e) {
            console.log('Error while signup --> ', e);
            showFailureToast('Failed to sign up!');
        }
    },
    logoutApp: async formData => {
        try {
            await AsyncStorage.clear();
            set({ userDetails: null, isLoggedIn: false });
        } catch (e) {
            console.log('Error while logout --> ', e);
        }
    },
    setUserDetail: userDetails => {
        set({ isLoggedIn: true, userDetails });
    },
}));
