// api.ts
import axios from 'axios';

const HOSTURL = 'https://adminpanel.hithot.club'; // Replace with your API URL

export interface ReferData {
    fb_id: string;
    referral_code: string;
}

export const referStore = async (referData: ReferData): Promise<any> => {
    try {
        console.log('referData_store', referData);

        const response = await axios.post(
            `${HOSTURL}/api/manualReferral`,
            referData,
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
