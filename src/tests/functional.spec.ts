import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InsightsPage } from '../pages/InsightsPage';
import { PersonalizePage } from '../pages/PersonalizePage';

test.describe('Functional Tests - Core Modules', () => {
    let loginPage: LoginPage;
    let insightsPage: InsightsPage;
    let personalizePage: PersonalizePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        insightsPage = new InsightsPage(page);
        personalizePage = new PersonalizePage(page);

        await loginPage.navigate();
        await loginPage.login(process.env.VWO_USERNAME!, process.env.VWO_PASSWORD!);
    });

    test('Verify Heatmap Creation', async ({ page }) => {
        await insightsPage.navigateToHeatmaps();
        await insightsPage.createHeatmap('https://example.com/pricing');
        expect(await insightsPage.verifyHeatmapActive()).toBeTruthy();
    });

    test('Verify Personalization Segment Selection', async ({ page }) => {
        // Navigate to Personalize (Assuming dashboard link exists)
        await page.goto('/personalize'); // Direct nav for brevity
        await personalizePage.createPersonalizationCampaign('Mobile Users');
        await personalizePage.selectMobileAudience();
        // Assert that segment is applied
        expect(await page.locator('#segment-summary').textContent()).toContain('Mobile'); // Assumption
    });
});
