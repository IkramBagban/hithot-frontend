import API from './index';

// End urls
const SIGN_UP_URL = '/manualsignup';
const SIGN_IN_URL = '/manualsignin';
const USE_REFERRAL_URL = '/manualReferral';
const MY_REFERRAL_URL = '/getYourReferral';
const SOCIAL_SIGNUP_URL = '/signup';
const CHECK_USERNAME_URL = '/checkUserName';

// Auth services
export const emailSignUpService = (body: Record<string, any>) =>
    API.post(SIGN_UP_URL, body);

export const emailSignInService = (body: Record<string, any>) =>
    API.post(SIGN_IN_URL, body);

export const useReferralService = (body: Record<string, any>) =>
    API.post(USE_REFERRAL_URL, body);

export const myReferralsService = (body: Record<string, any>) =>
    API.post(MY_REFERRAL_URL, body);

export const socialSignupService = (body: Record<string, any>) =>
    API.post(SOCIAL_SIGNUP_URL, body);

export const checkUsernameService = (body: Record<string, any>) =>
    API.post(CHECK_USERNAME_URL, body);
