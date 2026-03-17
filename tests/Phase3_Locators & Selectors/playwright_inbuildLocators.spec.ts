import { test, expect } from '@playwright/test';

test(`TestAutomationPractice_getByRole_Locators_Test`, async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#");
  // Fill form
  await page.getByRole(`button`, { name: `Primary Action` }).click();
  await page.getByRole(`button`, { name: `Toggle Button` }).click();
  await page.getByRole('textbox', { name: `Username` }).fill('Madhan Kumar');
  await page.getByRole('checkbox', { name: 'Accept terms' }).check();

  // Use scoped navigation to avoid strict mode errors
  const navSection = page.locator('#role-locators');
  await navSection.getByRole('link', { name: 'Home' }).click();
  await navSection.getByRole('link', { name: 'Products' }).click();
  await navSection.getByRole('link', { name: 'Contact' }).click();

  // Assert alert
  const alertMessage = page.getByRole('alert');
  await expect(alertMessage).toBeVisible();
  await expect(alertMessage).toHaveText('This is an important alert message!');

  await page.waitForTimeout(5000);
});


test(`TestAutomationPractice_getByText_Locators_Test`, async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#");

  await expect(page.getByText(`important`, { exact: true })).toBeVisible();
  await expect(page.getByText(`colored text`, { exact: true })).toBeVisible();
  await page.getByText(`Submit Form`).click();
  await expect(page.getByText(`Submit Form`)).toBeVisible();

  const submitmsg = page.getByText(`Click the button above to submit your information.`);
  await expect(submitmsg).toBeVisible();

});


test('TestAutomationPractice_getByLabel_Locators_Test', async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#");

  // Fill fields
  await page.getByLabel('Email Address:').fill('kumar.madhanmca@gmail.com');
  await page.getByLabel('Password:').fill('Mahanyaash#5');
  await page.getByLabel('Your Age:').fill('30')

  // Assert fields are enabled and visible
  await expect(page.getByLabel('Email Address:')).toBeEnabled();
  await expect(page.getByLabel('Password:')).toBeEnabled();
  await expect(page.getByLabel('Your Age:')).toBeEnabled();

  // Check delivery options & Assert checkboxes are checked
  await page.getByLabel(' Standard').check();
  await expect(page.getByLabel(' Standard')).toBeChecked();
  await page.getByLabel(' Express').check();
  await expect(page.getByLabel(' Express')).toBeChecked();

  // Wait for demo purposes
  await page.waitForTimeout(2000);
});

test(`TestAutomationPractice_getByPlaceholder_Locators_Test`, async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#");
  await page.getByPlaceholder(`Enter your full name`).fill('Madhan Kumar');
  await page.getByPlaceholder(`Phone number (xxx-xxx-xxxx)`).fill('+91-8015766771');
  await page.getByPlaceholder(`Type your message here...`).fill('This is a test message for Playwright locators.');
  await page.getByPlaceholder(`Search products...`).fill('Playwright Book');

  // Assert placeholders are visible
  await expect(page.getByPlaceholder(`Enter your full name`)).toBeVisible();
  await expect(page.getByPlaceholder(`Phone number (xxx-xxx-xxxx)`)).toBeVisible();
  await expect(page.getByPlaceholder(`Type your message here...`)).toBeVisible();
  await expect(page.getByPlaceholder(`Search products...`)).toBeVisible();

  await page.waitForTimeout(2000);
});

test(`TestAutomationPractice_getByAltText_Locators_Test`, async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#");
  await expect(page.getByAltText(`logo image`)).toBeVisible();
});


test(`TestAutomationPractice_getByTitle_Locators_Test`, async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#");
  await page.getByTitle(`Home page link`).click();
  const htmlTitle = page.getByTitle(`HyperText Markup Language`);
  await htmlTitle.hover();
  await expect(htmlTitle).toHaveAttribute(`title`, `HyperText Markup Language`);
  await page.waitForTimeout(2000);
});


test(`TestAutomationPractice_getByTestId_Locators_Test`, async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#");
  await page.getByTestId(`edit-profile-btn`).click();
  await page.waitForTimeout(2000);
});


test.only(`hussain-automation-practice - Playwright in-built locators`, async ({ page }) => {
  await page.goto("https://hussain-automation-practice.blogspot.com/?utm_source=copilot.com");

  await page.getByLabel(`Name`).fill('Madhan Kumar');
  await page.getByLabel(`Email`).fill(`kumar.madhanmca@gmail.com`);
  await page.getByPlaceholder(`Enter phone`).fill(`+91-8015766771`);

  await page.getByPlaceholder(`Enter password`).fill(`Airtel@123`);
  await page.getByRole(`spinbutton`, { name: `AGE` }).fill(`30`);

  await page.getByLabel(` Male`).nth(0).check();
  await page.getByLabel(` Playwright`).click();

  await page.selectOption(`#country`, { value: `USA` });

  await page.getByPlaceholder(`About you`).fill(`I am a Senior Associate Quality Analyst specializing in automation testing with Playwright and JavaScript/TypeScript. I have designed and executed over 150 end‑to‑end regression test cases, applying Page Object Model design patterns to ensure scalability and maintainability. My automation work integrates seamlessly into CI/CD pipelines, reducing manual effort and improving reliability across releases.`);

  await page.getByRole(`button`, { name: `Submit` }).click();
  const successMessage = page.getByText(`Submitted successfully`);
  await expect(successMessage).toHaveText(`Submitted successfully`);

  await page.getByText(`Reset`).click();

  const resetmsg = page.getByText(`Reset complete`);
  await expect(resetmsg).toHaveText(`Reset complete`);

  await page.waitForTimeout(10000);
});



/* const SF_LOGIN_URL = 'https://orgfarm-f2e792f5b2-dev-ed.develop.my.salesforce.com';
const SF_INSTANCE_URL = 'https://orgfarm-f2e792f5b2-dev-ed.develop.my.salesforce.com';
const SF_USERNAME = process.env.SF_USER || 'madhansrs681@agentforce.com'; // use env var in CI
const SF_PASSWORD = process.env.SF_PASS || 'Mahanyaash#5'; // use env var in CI

// Test 1: Create a new Account in Salesforce Service app with toast notification
test('Salesforce Service App: Create new Account with success toast message validation', async ({ page }) => {
  await page.goto(SF_LOGIN_URL);
  
  // Login
  await page.getByLabel('username').fill(SF_USERNAME);
  await page.getByLabel('password').fill(SF_PASSWORD);
  await page.getByLabel('Remember me').check();
  await page.getByRole('button', { name: 'Log In' }).click();

  await page.waitForTimeout(10000);
  
  // Verify successful login
  await expect(page).toHaveTitle('Home | Salesforce', { timeout: 30000 });
  await expect(page).toHaveURL(/lightning\/page\/home/, { timeout: 30000 });
  
  // Navigate to Service app
  await page.locator('.slds-r4').click();
  await page.getByRole('button', { name: 'View All' }).click();
  await page.getByPlaceholder('Search apps or items...').fill('Service');
  await page.locator("(//p[@class='slds-truncate'])[1]").click();
  
  // Navigate to Accounts
  await page.locator("span[class='slds-truncate']").nth(3).click();
  await page.getByRole('button', { name: 'New' }).click();
  
  // Fill account details
  await page.locator("[name='Name']").fill('Boston');
  await page.locator("//button[@class='slds-button slds-button_brand']").click();
  
  // Verify success toast message
  const toastMessage = page.locator('.toastContainer');
  await expect(toastMessage).toContainText('Account', { timeout: 10000 });
  await expect(toastMessage).toContainText('was created', { timeout: 10000 });
});

// Test 2: Navigate to Leads, initiate creation, cancel, and verify Contacts page loads
test('Salesforce: Cancel Lead creation and navigate to Contacts for verification', async ({ page }) => {
  await page.goto(SF_INSTANCE_URL);
  
  // Login
  await page.getByRole('textbox', { name: 'Username' }).fill(SF_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).fill(SF_PASSWORD);
  await page.getByLabel('Remember me').check();
  await page.getByRole('button', { name: 'Log In' }).click();

  await page.waitForTimeout(10000);
  
  // Wait for page load
  await page.waitForLoadState('networkidle', { timeout: 30000 });
  
  // Navigate to Leads and attempt to create
  await page.getByText('Leads', { exact: true }).click();
  await page.getByRole('button', { name: 'New' }).click();
  
  // Fill first name and cancel
  await page.getByPlaceholder('First Name').fill('Madhan Kumar');
  await page.getByRole('button', { name: 'Cancel' }).click();
  
  // Verify we're back on Leads page
  await expect(page).toHaveTitle(/Leads/, { timeout: 10000 });
  
  // Navigate to Contacts
  await page.getByTitle('Contacts').click();
  await page.getByAltText('User').click();
  
  // Wait for Contacts page to load and verify
  await page.waitForLoadState('networkidle', { timeout: 30000 });
  await expect(page).toHaveTitle(/Contacts/, { timeout: 10000 });
}); */