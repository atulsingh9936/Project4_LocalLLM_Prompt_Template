export const generateRandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

export const generateCampaignName = (): string => {
    return `Test_Campaign_${generateRandomString(6)}_${Date.now()}`;
};

export const generateUniqueEmail = (): string => {
    return `testuser_${generateRandomString(5)}@example.com`;
};
