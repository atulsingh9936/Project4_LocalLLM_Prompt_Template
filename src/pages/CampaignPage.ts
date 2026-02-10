import { BasePage } from './BasePage';
import { Page, expect } from '@playwright/test';

export class CampaignPage extends BasePage {
    // Selectors - [NEEDS CLARIFICATION]
    private createButton = 'button#create-test'; // Assumption
    private abTestOption = 'text=A/B Test'; // Assumption
    private campaignNameInput = 'input[name="campaignName"]'; // Assumption
    private urlInput = 'input[name="url"]'; // Assumption
    private nextButton = 'button#next'; // Assumption
    private visualEditorFrame = 'iframe#visual-editor'; // Assumption

    constructor(page: Page) {
        super(page);
    }

    async createABTest(name: string, url: string) {
        await this.clickElement(this.createButton);
        await this.clickElement(this.abTestOption);
        await this.fillText(this.campaignNameInput, name);
        await this.fillText(this.urlInput, url);
        await this.clickElement(this.nextButton);
    }

    async verifyVisualEditorLoaded() {
        // Wait for the Visual Editor iframe to appear
        await this.page.waitForSelector(this.visualEditorFrame);
        const frame = this.page.frameLocator(this.visualEditorFrame);
        await expect(frame.locator('body')).toBeVisible();
    }
}
