// api.ts
import axios from 'axios';

const HOSTURL = 'https://adminpanel.hithot.club'; // Replace with your API URL

export interface VerificationData {
    fb_id: string;
    attachment: string;
    attachment1: string;
    facebook: string;
    youtube: string;
    instagram: string;
}

export const verificationStore = async (
    verificationData: VerificationData,
): Promise<any> => {
    try {
        console.log('verificationData_store', verificationData);

        const response = await axios.post(
            `${HOSTURL}/api/getVerifiedNew`,
            verificationData,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
        console.log('response+++=', response.data.msg);

        return response.data.msg;
    } catch (error) {
        console.log('Error', error);
    }
};
