export const timestampToDate = (ts: number): string => {
    const date = new Date(ts);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedDate = `${day.toString().padStart(2, '0')} ${month} ${year} ${hours}:${minutes}`;
    return formattedDate;
};

export const generateUniqueUsername = (): string => {
    const prefix = 'user';
    const randomString = Math.random().toString(36).substring(2, 8);
    const timestamp = Date.now().toString(36);
    const uniqueUsername = `${prefix}-${randomString}-${timestamp}`;
    return uniqueUsername;
};
