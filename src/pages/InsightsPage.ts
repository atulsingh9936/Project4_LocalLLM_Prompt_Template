import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class InsightsPage extends BasePage {
    // Selectors - [NEEDS CLARIFICATION]
    private heatmapsTab = '#tab-heatmaps'; // Assumption
    private recordingsTab = '#tab-recordings'; // Assumption
    private createHeatmapButton = '#create-heatmap'; // Assumption
    private heatmapUrlInput = '#heatmap-url'; // Assumption
    private startHeatmapButton = '#start-heatmap'; // Assumption

    async navigateToHeatmaps() {
        await this.clickElement(this.heatmapsTab);
    }

    async createHeatmap(url: string) {
        await this.clickElement(this.createHeatmapButton);
        await this.fillText(this.heatmapUrlInput, url);
        await this.clickElement(this.startHeatmapButton);
    }

    async verifyHeatmapActive() {
        return await this.isElementVisible('.heatmap-active-status'); // Assumption
    }
}
