import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string = '/') {
        await this.page.goto(url);
    }

    async clickElement(selector: string) {
        await this.page.waitForSelector(selector);
        await this.page.click(selector);
    }

    async fillText(selector: string, text: string) {
        await this.page.waitForSelector(selector);
        await this.page.fill(selector, text);
    }

    async getText(selector: string): Promise<string | null> {
        await this.page.waitForSelector(selector);
        return await this.page.textContent(selector);
    }

    async isElementVisible(selector: string): Promise<boolean> {
        try {
            await this.page.waitForSelector(selector, { state: 'visible', timeout: 5000 });
            return true;
        } catch {
            return false;
        }
    }

    async waitForUrl(urlFragment: string) {
        await this.page.waitForURL(`**/*${urlFragment}*`);
    }
}
