import { test } from "@playwright/test";
import Credentials from '../Utilities/login.json';
import Credential from "../Utilities/loginvalidation.json";
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

test(`Login with incorrect password`, async ({ page }) => {
  const loginpageValidation = new LoginValidationPage(page);
  await page.goto(LoginValidationLocators.loginPageUrl);
  await loginpageValidation.enterUsername(Credential[0].username);
  await loginpageValidation.enterPassword(Credential[0].password);
  await loginpageValidation.clickLoginButton();
  await loginpageValidation.verifyLoginOutcome(Credential[0].isValid);
});

test(`Login with empty fields`, async ({ page }) => {
  const loginpageValidation = new LoginValidationPage(page);
  await page.goto(LoginValidationLocators.loginPageUrl);
  await loginpageValidation.clickLoginButton();
  await loginpageValidation.verifyErrorMessage("Error: Please enter your username and password.");
});

test(`Login with only username entered`, async ({ page }) => {
  const loginpageValidation = new LoginValidationPage(page);
  await page.goto(LoginValidationLocators.loginPageUrl);
  await loginpageValidation.enterUsername(Credential[0].username);
  await loginpageValidation.clickLoginButton();
 await loginpageValidation.verifyErrorMessage("Error: Please enter your password.");
});

test(`Login with only password entered`, async ({ page }) => {
  const loginpageValidation = new LoginValidationPage(page);
  await page.goto(LoginValidationLocators.loginPageUrl);
  await loginpageValidation.enterPassword(Credential[0].password);
  await loginpageValidation.clickLoginButton();
 await loginpageValidation.verifyErrorMessage("Error: Please enter your username.");
});

