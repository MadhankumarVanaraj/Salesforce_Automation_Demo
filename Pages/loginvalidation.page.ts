import { Page } from "@playwright/test";
import { LoginValidationLocators } from "../Locators/loginvalidation.locators";

export class LoginValidationPage {
  constructor(private page: Page) {}

  async loginValidation(username: string, password: string) {
      await this.page.fill(LoginValidationLocators.usernameField, username);
      await this.page.fill(LoginValidationLocators.passwordField, password);
      await this.page.click(LoginValidationLocators.loginButton);
    }

}

