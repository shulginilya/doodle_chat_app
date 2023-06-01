interface CommonConfigType {
    apiEndpoint: string;
    token: string;
    startTs: number;
    messagesPerPage: number;
};

export const commonConfig: CommonConfigType = {
    apiEndpoint: 'https://chatty.doodle-test.com/api/chatty/v1.0',
    token: '8ZJrWBFgx5ML',
    startTs: 1521096352339,
    messagesPerPage: 10,
};