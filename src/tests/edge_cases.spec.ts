import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Edge Cases', () => {
    test('Verify Login Rate Limiting (Brute Force Protection)', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();

        // Attempt multiple invalid logins
        for (let i = 0; i < 5; i++) {
            await loginPage.login('invalidUser', 'wrongPass');
            const errorVisible = await page.locator('.error-message').isVisible(); // Assumption
            if (!errorVisible) break;
        }

        // Assert some lock or CAPTCHA appears
        await expect(page.locator('#captcha-challenge')).toBeVisible(); // Assumption
    });

    test('Verify XSS Injection in Campaign Name', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login(process.env.VWO_USERNAME!, process.env.VWO_PASSWORD!);

        await page.goto('/campaign/new');
        const maliciousName = '<script>alert("XSS")</script>';
        await page.fill('input[name="campaignName"]', maliciousName);
        await page.click('#next');

        // Verify input is sanitized
        const displayedName = await page.locator('.campaign-title').textContent();
        expect(displayedName).not.toContain('<script>');
    });
});
