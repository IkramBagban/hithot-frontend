import API from './index';

// End urls
const GET_NOTIFICATIONS_URL = 'https://adminpanel.hithot.club/api/getNotifications_1';


// Upload services
export const getNotificationsService = (body: Record<string, any>) =>
    API.post(GET_NOTIFICATIONS_URL, body);