import { Page, expect } from '@playwright/test';
import { LoginLocators } from '../Locators/login.locators';

export class CreateLeadPage {
  
  constructor(private page: Page) { }
  async assertLoginPageLoaded() {
    await expect(this.page).toHaveURL(LoginLocators.loginPageUrl);
    await expect(this.page).toHaveTitle(LoginLocators.loginPageTitle);
  }

  
}
