import  { Page, test} from "@playwright/test";
import Credentials from '../Utilities/login.json';
import { LoginValidationPage } from "../Pages/loginvalidation.page";
import { LoginValidationLocators } from "../Locators/loginvalidation.locators";


test.describe.serial(`Login tests using 2 different data set in serial mode`,async () => {
for(let data of Credentials){
test(`Login into Salesforce app by reading data from JSON ${data.testCaseID},${data.description}`, async ({ page }) => {

  const loginpageValidation = new LoginValidationPage(page);
  await page.goto(LoginValidationLocators.loginPageUrl);
  await page.locator(LoginValidationLocators.usernameField).fill(data.username);
  await page.locator(LoginValidationLocators.passwordField).fill(data.password);
  await page.locator(LoginValidationLocators.loginButton).click();
  await page.waitForTimeout(5000);
})

}
});