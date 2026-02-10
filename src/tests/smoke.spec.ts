import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { CampaignPage } from '../pages/CampaignPage';
import { generateUniqueEmail, generateCampaignName } from '../utils/testData';

test.describe('Smoke Tests - Critical Paths', () => {
    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;
    let campaignPage: CampaignPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        campaignPage = new CampaignPage(page);

        await loginPage.navigate();
        await loginPage.login(process.env.VWO_USERNAME!, process.env.VWO_PASSWORD!);
        // Handle 2FA if strictly required in environment
        // await loginPage.handleTwoFactorAuth('123456'); 
    });

    test('Verify User Login', async ({ page }) => {
        await dashboardPage.verifyUserLoggedIn();
    });

    test('Verify A/B Test Creation Workflow', async ({ page }) => {
        await dashboardPage.navigateToCreateCampaign();
        const campaignName = generateCampaignName();
        await campaignPage.createABTest(campaignName, 'https://example.com');
        await campaignPage.verifyVisualEditorLoaded();
    });
});
