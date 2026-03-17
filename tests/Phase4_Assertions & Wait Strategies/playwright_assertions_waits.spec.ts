import { test, expect, chromium } from '@playwright/test'

test(`TestLeaf : 1. UI Assersion`, async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(`https://orgfarm-f2e792f5b2-dev-ed.develop.my.salesforce.com/`);
    await page.waitForURL(`https://orgfarm-f2e792f5b2-dev-ed.develop.my.salesforce.com/`);
    await page.waitForLoadState('networkidle');
    await page.locator(`#username`).fill(`madhansrs681@agentforce.com`);
    const usernametxtbox = page.locator(`#username`);
    await page.locator(`#password`).click();

    //toHaveValue - Input has a value- To check whether the text box has particular value.
    await expect(usernametxtbox).toHaveValue(`madhansrs681@agentforce.com`);

    //toHaveText - Element matches text(Exact match validation)
    const Element = page.locator(`#forgot_password_link`);
    await expect(Element).toHaveText(`Forgot Your Password?`);

    //toContainText - Element contains text (Partial match also we can verify)
    const Elementhastxt = page.locator(`#forgot_password_link`);
    await expect(Elementhastxt).toContainText(`Forgot Your Password`);

    await page.waitForTimeout(3000);
})

test(`TestLeaf : 2. Locator Assersion`, async ({ page }) => {
    await page.goto(`https://orgfarm-f2e792f5b2-dev-ed.develop.my.salesforce.com/`);
    await page.waitForSelector(`#username`); // Wait for the username field to be present in the DOM
     await page.waitForLoadState('domcontentloaded');

    // await expect(locator).toBeVisible() - Element is visible
    const btnvisible = page.locator(`#Login`);
    await expect(btnvisible).toBeVisible();
    await page.waitForTimeout(3000);

    //await expect(locator).toBeEnabled() - Element is enabled
    const usernametxtbox = page.locator(`#username`);
    await expect(usernametxtbox).toBeEnabled();

    // await expect(locator).toBeEditable() - Element is editable
    await expect(usernametxtbox).toBeEditable();

})


test(`Test Leaf: 3. Page assersion`, async ({ page }) => {
    await page.goto("https://login.salesforce.com/");
    await page.waitForLoadState('load');
    await page.getByLabel('username').fill('madhansrs681@agentforce.com');
   
    await page.waitForSelector(`#password`); // Wait for the password field to be present in the DOM

    await page.getByLabel('password').fill('Mahanyaash$5');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.waitForTimeout(10000);
    await expect(page).toHaveTitle('Home | Salesforce');
    await expect(page).toHaveURL(`https://orgfarm-f2e792f5b2-dev-ed.develop.lightning.force.com/lightning/page/home`);
})

//Depregatted - waitForNavigation() is deprecated in Playwright 1.30.0 and later versions. Instead, you can use the waitForLoadState() method to wait for the page to load after a navigation event. Here's how you can modify your test to use waitForLoadState() instead of waitForNavigation():
test.only(`Site - browserstack - waitForNavigation()`, async({page})=>{

 await page.goto('https://www.bstackdemo.com/');
const waitPromise = page.waitForNavigation();
await page.locator('#orders').click();
await waitPromise;
await page.waitForTimeout(5000);
});