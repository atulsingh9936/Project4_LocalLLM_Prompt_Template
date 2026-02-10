import { test, expect } from '@playwright/test';

test.describe('VWO API Tests', () => {
    const baseURL = process.env.BASE_URL || 'https://app.vwo.com';

    test('Verify Login API Endpoint', async ({ request }) => {
        // [ASSUMPTION]: VWO uses /api/v2/auth/login
        const response = await request.post(`${baseURL}/api/v2/auth/login`, {
            data: {
                username: process.env.VWO_USERNAME,
                password: process.env.VWO_PASSWORD
            }
        });
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body).toHaveProperty('token');
    });

    test('Verify Campaign List API', async ({ request }) => {
        // Pre-req: obtain token (omitted for brevity, assume env var or setup)
        const response = await request.get(`${baseURL}/api/v2/campaigns`, {
            headers: {
                'Authorization': `Bearer ${process.env.API_TOKEN}` // Assumption
            }
        });
        expect(response.status()).toBe(200);
        expect(await response.json()).toBeInstanceOf(Array);
    });
});
