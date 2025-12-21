import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/login.page';
import testData1 from '../Utilities/config.json';
import data from '../Utilities/login.json';
test.use({ storageState: 'Data/login_SF.json' });

/*test.describe.serial(`Login tests using 2 different data set in serial mode`,async () => {
for(let data of Credentials){
test(`Login into Salesforce app by reading data from JSON ${data.testCaseID},${data.description}`, async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto(testData1[1].PostLogin as string);
  await page.waitForLoadState('networkidle');
  await loginPage.assertLoginPageLoaded();
  await loginPage.assertLoginFieldsVisible();
  await loginPage.assertFogotLogin();
  await loginPage.assertRememberMe();
  
  await loginPage.login(data.username,data.password);
  await page.waitForTimeout(20000);
  await loginPage.assertHomePageLoaded();

  // await loginPage.assertLoginErrorMessage(`Error: Please check your username and password. If you still can't log in, contact your Salesforce administrator.`);
  // await page.waitForTimeout(5000);
   await loginPage.navigateToDevZone();
  await page.waitForTimeout(3000);
  await page.waitForTimeout(3000); 
})

}
});*/

test(`Login Salesforce using Storage session`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto(testData1[1].PostLogin as string);
  await page.waitForTimeout(5000);
  await loginPage.login(data[0].username, data[0].password);
  // await page.waitForLoadState('networkidle');
  //Created new repository
})


