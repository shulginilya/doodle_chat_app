import { commonConfig } from '@/configs/common';

interface MakeRequestType {
    url: string;
    params?: {
        [key: string]: string
    };
    method?: 'GET' | 'POST';
};

interface OptionsType {
    method: 'GET' | 'POST';
    headers?: {
        [key: string]: string
    },
    body?: string;
};

export const makeRequest = async ({
    url,
    params,
    method = 'GET'
}: MakeRequestType) => {
    const options: OptionsType = {
        method
    };
    if (method === 'POST') {
        options.headers = {
            "Content-Type": "application/json",
            "token": commonConfig.token
        };
    }
    if (params) {
        options['body'] = JSON.stringify(params);
    }
    let apiUrl = `${commonConfig.apiEndpoint}${url}`;
    if (method === 'GET') {
        if (url === '') {
            apiUrl = `${commonConfig.apiEndpoint}?token=${commonConfig.token}`;
        } else {
            apiUrl = `${commonConfig.apiEndpoint}${url}&token=${commonConfig.token}`;
        }
    }
    const response = await fetch(apiUrl, options);
    if (response) {
        const data = await response.json();
        return data;
    }
    return null;
};
