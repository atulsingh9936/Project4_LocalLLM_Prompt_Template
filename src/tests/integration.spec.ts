import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Integration Tests - Third Party', () => {
    test('Verify Google Analytics Integration Request', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login(process.env.VWO_USERNAME!, process.env.VWO_PASSWORD!);

        // Mock GA request
        const gaRequestPromise = page.waitForRequest(request =>
            request.url().includes('google-analytics.com/collect') && request.method() === 'POST'
        );

        // Perform action that triggers GA event (e.g., enable integration in settings)
        await page.goto('/settings/integrations');
        await page.click('#enable-ga'); // Assumption

        const request = await gaRequestPromise;
        expect(request.url()).toContain('google-analytics.com');
    });
});
