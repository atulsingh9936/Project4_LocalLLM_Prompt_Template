import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { generateCampaignName } from '../utils/testData';

test.describe('UI/UX Validation', () => {
    test('Verify Visual Editor Canvas Loads', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login(process.env.VWO_USERNAME!, process.env.VWO_PASSWORD!);

        // Navigate to editor directly or via Campaign flow (using stub URL for speed)
        await page.goto('/campaign/edit/1234'); // Assumption

        // Verify Editor Key Components
        await expect(page.locator('#editor-toolbar')).toBeVisible(); // Assumption
        await expect(page.locator('#device-toggle-mobile')).toBeVisible(); // Assumption
        await expect(page.locator('iframe#visual-editor')).toBeVisible(); // Assumption
    });

    test('Verify Responsive Design of Dashboard', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login(process.env.VWO_USERNAME!, process.env.VWO_PASSWORD!);

        // Viewport Emulation
        await page.setViewportSize({ width: 375, height: 667 }); // iPhone
        await expect(page.locator('.mobile-menu-icon')).toBeVisible(); // Assumption

        await page.setViewportSize({ width: 1920, height: 1080 }); // Desktop
        await expect(page.locator('.sidebar-nav')).toBeVisible(); // Assumption
    });
});
