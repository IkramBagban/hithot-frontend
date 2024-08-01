import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://adminpanel.hithot.club/api';

const getResponse = (res: AxiosResponse) => {
    if (res && (res.status === 200 || res.status === 201 || res.status === 204)) {
        return res.data;
    }
    throw new Error('Some error occurred');
};

const get = (path: string, params?: Record<string, any>): Promise<any> => {
    return new Promise((resolve, reject) => {
        try {
            axios
                .get(path, { params })
                .then(getResponse)
                .then(resolve)
                .catch(reject);
        } catch (error) {
            reject(error);
        }
    });
};

const post = (path: string, params?: Record<string, any>, headers?: Record<string, any>): Promise<any> => {
    console.log('Request Path:', path);
    console.log('Request Params:', params);
    console.log('Request Headers:', headers);
    
    return new Promise((resolve, reject) => {
        try {
            axios
                .post(path, params || {}, { headers })
                .then(getResponse)
                .then(resolve)
                .catch(reject);
        } catch (error) {
            reject(error);
        }
    });
};

export default { get, post };
