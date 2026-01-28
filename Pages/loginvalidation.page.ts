import { expect, Page } from "@playwright/test";
import { LoginValidationLocators } from "../Locators/loginvalidation.locators";
import data from '../Utilities/login.json';

export class LoginValidationPage {
  constructor(private page: Page) { }

  async isLoginPageDisplayed() {
    await expect(this.page).toHaveURL(LoginValidationLocators.loginPageUrl);
    await expect(this.page.locator(LoginValidationLocators.usernameField)).toBeVisible();
    await expect(this.page.locator(LoginValidationLocators.passwordField)).toBeVisible();
    await expect(this.page.locator(LoginValidationLocators.loginButton)).toBeVisible();
  }

  async enterUsername(username: string) {
    await this.page.fill(LoginValidationLocators.usernameField, username);
    await expect(this.page.locator(LoginValidationLocators.usernameField)).toHaveValue(username);
  }

  async enterPassword(password: string) {
    await this.page.fill(LoginValidationLocators.passwordField, password);
    await expect(this.page.locator(LoginValidationLocators.passwordField)).toHaveValue(password);
  }

  async isLoginButtonClickable() {
    const loginBtn = this.page.locator(LoginValidationLocators.loginButton);
    // Check that it's visible
    await expect(loginBtn).toBeVisible();
    // Check that it's enabled (not disabled)
    await expect(loginBtn).toBeEnabled();
  }

  async clickLoginButton() {
  await this.page.click(LoginValidationLocators.loginButton);
  }

  async verifyLoginOutcome(expectedSuccess: boolean) {
  if (expectedSuccess) {
    // ✅ Success case: check URL and home tab
    // await expect(this.page).toHaveURL(LoginValidationLocators.postLoginURL);
    await expect(this.page.locator(LoginValidationLocators.homeTab)).toBeVisible();
  } else {
    // ❌ Failure case: check error message
    await expect(this.page.locator(LoginValidationLocators.errorMessage)).toBeVisible();
    await expect(this.page.locator(LoginValidationLocators.errorMessage))
      .toHaveText(LoginValidationLocators.expectedErrorMessage);
  }
}

async verifyErrorMessage(expectedMessage: string) {
  const errorLocator = this.page.locator(LoginValidationLocators.errorMessage);
  await expect(errorLocator).toBeVisible();
  await expect(errorLocator).toHaveText(expectedMessage);
}


}
