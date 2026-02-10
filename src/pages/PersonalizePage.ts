import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class PersonalizePage extends BasePage {
    // Selectors - [NEEDS CLARIFICATION]
    private createCampaignBtn = '#create-personalization'; // Assumption
    private segmentDropdown = '#segment-select'; // Assumption
    private customSegmentOption = '#custom-segment'; // Assumption
    private deviceCondition = '#condition-device'; // Assumption

    async createPersonalizationCampaign(segmentName: string) {
        await this.clickElement(this.createCampaignBtn);
        await this.clickElement(this.segmentDropdown);
        // Logic to select segment would go here
    }

    async selectMobileAudience() {
        await this.clickElement(this.customSegmentOption);
        await this.clickElement(this.deviceCondition);
        // Select 'Mobile' from dropdown
    }
}
