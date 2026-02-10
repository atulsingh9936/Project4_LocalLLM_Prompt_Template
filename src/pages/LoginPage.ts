import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
    // Selectors - [NEEDS CLARIFICATION]
    private usernameInput = 'input[name="username"]'; // Assumption
    private passwordInput = 'input[name="password"]'; // Assumption
    private loginButton = '#login-btn'; // Assumption
    private twoFactorInput = '#two-factor-code'; // Assumption
    private twoFactorSubmit = '#verify-2fa'; // Assumption

    constructor(page: Page) {
        super(page);
    }

    async navigate() {
        await super.navigate('/login');
    }

    async login(username: string, password: string) {
        await this.fillText(this.usernameInput, username);
        await this.fillText(this.passwordInput, password);
        await this.clickElement(this.loginButton);
    }

    async handleTwoFactorAuth(code: string) {
        // [ASSUMPTION]: 2FA screen appears after login if enabled
        if (await this.isElementVisible(this.twoFactorInput)) {
            await this.fillText(this.twoFactorInput, code);
            await this.clickElement(this.twoFactorSubmit);
        }
    }
}
