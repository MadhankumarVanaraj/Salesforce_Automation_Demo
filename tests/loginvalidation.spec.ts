import { test } from "@playwright/test";
import Credentials from '../Utilities/login.json';
import { LoginValidationPage } from "../Pages/loginvalidation.page";
import { LoginValidationLocators } from "../Locators/loginvalidation.locators";


test.describe.serial(`Login tests using 2 different data set in serial mode`, async () => {
  for (let data of Credentials) {
    test(`Login into Salesforce app by reading data from JSON ${data.testCaseID},${data.description}`, async ({ page }) => {

      const loginpageValidation = new LoginValidationPage(page);
      await page.goto(LoginValidationLocators.loginPageUrl);
      await loginpageValidation.isLoginPageDisplayed();
      await loginpageValidation.enterUsername(data.username);
      await loginpageValidation.enterPassword(data.password);
      await loginpageValidation.isLoginButtonClickable();
      await loginpageValidation.clickLoginButton();
      await page.waitForTimeout(15000);
      await loginpageValidation.verifyLoginOutcome(data.isValid);
    })
  }
});