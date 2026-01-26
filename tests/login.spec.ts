import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/login.page';
import testData1 from '../Utilities/config.json';
import data from '../Utilities/login.json';
test.use({ storageState: 'Data/login_SF.json' });

test(`Login Salesforce using Storage session`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto(testData1[1].PostLogin as string);
  await page.waitForTimeout(5000);
  // await loginPage.login(data[0].username, data[0].password);
  // await page.waitForLoadState('networkidle');
  //Created new repository
})


