import { BasePage } from './BasePage';
import { Page, expect } from '@playwright/test';

export class DashboardPage extends BasePage {
    // Selectors - [NEEDS CLARIFICATION]
    private createCampaignButton = '#create-campaign'; // Assumption
    private userProfileIcon = '#user-profile'; // Assumption
    private headerTitle = 'h1.dashboard-title'; // Assumption

    constructor(page: Page) {
        super(page);
    }

    async isLoaded() {
        return await this.isElementVisible(this.createCampaignButton);
    }

    async navigateToCreateCampaign() {
        await this.clickElement(this.createCampaignButton);
    }

    async verifyUserLoggedIn() {
        await expect(this.page.locator(this.userProfileIcon)).toBeVisible();
    }
}
