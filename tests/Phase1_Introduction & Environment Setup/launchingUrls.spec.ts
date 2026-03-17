import { chromium, test, expect, firefox, webkit } from '@playwright/test'


test("Validate multiple URLs – Chrome", async ({ }) => {
    const browser = await chromium.launch({ headless: false, channel: 'chrome' });
    // const browser= await firefox.launch({ headless: false, channel: 'firefox' });
    // const browser = await webkit.launch({ headless: false });
    const context = await browser.newContext();

    const page = await context.newPage();
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page.goto("https://google.com");
    await expect(page).toHaveTitle('Google');
    
    await page1.goto("https://playwright.dev/");
    await expect(page1).toHaveURL('https://playwright.dev/');

    await page2.goto("https://www.facebook.com/");
    await expect(page2).toHaveTitle('Facebook');

    // await page.pause();
})


test("Validate multiple URLs – msEdge", async ({ }) => {
    const browser = await chromium.launch({ headless: false, channel: 'msedge' });
    // const browser= await firefox.launch({ headless: false, channel: 'firefox' });
    // const browser = await webkit.launch({ headless: false });
    const context = await browser.newContext();

    const page = await context.newPage();
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page.goto("https://google.com");
    await expect(page).toHaveTitle('Google');

    await page1.goto("https://playwright.dev/");
    await expect(page1).toHaveURL('https://playwright.dev/');

    await page2.goto("https://www.facebook.com/");
    await expect(page2).toHaveTitle('Facebook');

    // await page.pause();
})

test("Validate multiple URLs – Firefox", async ({ }) => {
    // const browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const browser= await firefox.launch({ headless: false, channel: 'firefox' });
    // const browser = await webkit.launch({ headless: false });
    const context = await browser.newContext();

    const page = await context.newPage();
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page.goto("https://google.com");
    await expect(page).toHaveTitle('Google');

    await page1.goto("https://playwright.dev/");
    await expect(page1).toHaveURL('https://playwright.dev/');

    await page2.goto("https://www.facebook.com/");
    await expect(page2).toHaveTitle('Facebook');

    // await page.pause();
})

test("Validate multiple URLs – WebKit", async ({ }) => {
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
    await expect(page2).toHaveTitle('Facebook');

    // await page.pause();
})


test.only(`Launch Redbus and Webkit URL`, async({page})=>{

    const RedbusURL = 'https://www.redbus.in/';
    const FlipkarURL = 'https://www.flipkart.com/';
    
    await page.goto(RedbusURL);
    await expect(page).toHaveTitle('Bus Booking Online and Train Tickets at Lowest Price - redBus');
    await expect(page).toHaveURL(RedbusURL);
    await page.goBack();
    await page.waitForTimeout(3000);
    await page.goForward();
    await page.waitForLoadState('networkidle');

    await page.goto(FlipkarURL);
    await expect(page).toHaveTitle(`Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!`);
    await expect(page).toHaveURL(FlipkarURL);
});

// we are using call back function(parameter1("Testcase name"), parameter2(Arrow function)

/*test - Comes from Playwright Test Runner (@playwright/test package).
         It’s a global function provided by Playwright to define a test case.*/

//"Open Chrome Browser"- This is the test name.

//async- Declares the test function as asynchronous.With async, you can use await inside the test

// Asynchronous - We are going to test web application, the web application is asynchronous in nature since we are using asyn.

/* 
({ browser }) - 
1)This is parameter destructuring from the Playwright test fixtures.
2)Playwright provides many built-in fixtures (e.g., page, browser, context).
3)Here you are specifically asking for the browser fixture → which gives you a Browser instance (Chromium/Firefox/WebKit depending on config).
4)Normally, people use 'page' fixture directly (which gives you a ready-to-use browser tab).
5)But using { browser }, you can manually create new contexts/pages for advanced scenarios.
*/

/*
=> { ... } - This is an arrow function (ES6 syntax). Instead of prviding the function name we are using this syntax. 
            Represents the test body (all your test steps go inside { ... }).   
            Everything inside gets executed when Playwright runs the test.
*/