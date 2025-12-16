import { Page, expect } from '@playwright/test';
import { LoginLocators } from '../Locators/login.locators';

export class LoginPage {
  constructor(private page: Page) { }

  async login(username: string, password: string) {
    await this.page.fill(LoginLocators.usernameField, username);
    await this.page.fill(LoginLocators.passwordField, password);
    await this.page.click(LoginLocators.loginButton);
  }

  async assertLoginPageLoaded() {
    await expect(this.page).toHaveURL(LoginLocators.loginPageUrl);
    await expect(this.page).toHaveTitle(LoginLocators.loginPageTitle);
  }

  async assertLoginFieldsVisible() {
    await expect(this.page.locator(LoginLocators.usernameField)).toBeVisible();
    await expect(this.page.locator(LoginLocators.passwordField)).toBeVisible();
  }

  async assertLoginButton() {
    await expect(this.page.locator(LoginLocators.loginButton)).toBeVisible();
    await expect(this.page.locator(LoginLocators.loginButton)).toBeEnabled();
    await expect(this.page.locator(LoginLocators.loginButton)).toHaveText(`Log In`);
  }

  async assertFogotLogin() {
    await expect(this.page.locator(LoginLocators.forgotLogin)).toBeVisible();
  }

  async assertRememberMe() {
    await expect(this.page.locator(LoginLocators.rememberMe)).not.toBeChecked();
  }

  async assertHomePageLoaded() {
    await expect(this.page).toHaveURL(LoginLocators.postLoginPageUrl);
    await expect(this.page).toHaveTitle(LoginLocators.postLoginTitle);
  }

  async assertLoginErrorMessage(expectedText: string) {
    const errorBox = this.page.locator(LoginLocators.errorMessage);
    await expect(errorBox).toBeVisible();
    await expect(errorBox).toContainText(expectedText);
  }


  async navigateToDevZone() {

    await this.page.click(LoginLocators.clickNavToDZ);
    // Wait for the new page (tab) to open after clicking

    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),  // Wait for new page
      this.page.click(LoginLocators.navToDZ)     // This action opens the new tab
    ]);

    // Wait until the new page is fully loaded
    await newPage.waitForLoadState('domcontentloaded');

    // Now you can perform actions in the new page
    await newPage.click(LoginLocators.buildClick);
    await newPage.click(LoginLocators.pageClick);

    await this.page.bringToFront();

    await this.page.click(LoginLocators.clickNavToDZ);
    await this.page.click(LoginLocators.navToDZ);
  }
}
