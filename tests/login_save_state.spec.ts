import { test } from '@playwright/test'; 
import { LoginPage } from '../Pages/login.page';
import Credentials from '../Utilities/login.json';
import testData1 from '../Utilities/config.json'
import data from '../Utilities/login.json'
import { LoginLocators } from '../Locators/login.locators';

test('Save Salesforce Login', async ({ page }) => { 
const loginPage = new LoginPage(page);

await page.goto(testData1[0].baseUrl as string);
await loginPage.login(data[0].username,data[0].password);
await page.waitForLoadState('networkidle');
await page.waitForTimeout(20000);
// Save session after login 
await page.context().storageState({ path: 'Data/login_SF.json' }); 
}); 