import { chromium, test, expect, firefox, webkit } from '@playwright/test'

test("Open Chrome Browser", async ({ }) => {
    // const browser = await chromium.launch({ headless: false, channel: 'chrome' });
    // const browser= await firefox.launch({ headless: false, channel: 'firefox' });
    const browser = await webkit.launch({ headless: false });
    const context = await browser.newContext();

    const page = await context.newPage();
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page.goto("https://google.com");
    await expect(page).toHaveTitle('Google');

    await page1.goto("https://playwright.dev/");
    await expect(page1).toHaveURL('https://playwright.dev/');

    await page2.goto("https://www.facebook.com/");
    await expect(page2).toHaveTitle('Facebook – log in or sign up');
    await page.pause();
})