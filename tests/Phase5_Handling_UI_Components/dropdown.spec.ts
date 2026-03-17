import { test, expect } from '@playwright/test'

//Drop down ravi used for teaching.
test('drop-down practice', async ({ page }) => {
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`#username`).fill(`Demosalesmanager`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`.decorativeSubmit`).click();
    await page.locator(`div a`).nth(1).click();
    await page.locator(`//a[text()='Leads']`).click();
    await page.locator(`//a[text()='Create Lead']`).click();
    await page.selectOption(`#createLeadForm_dataSourceId`, { value: 'LEAD_DIRECTMAIL' });//1)value(1st priority) - Why? - The values are directly coming from data base. 
    await page.waitForTimeout(5000);
    await page.selectOption(`#createLeadForm_dataSourceId`, { label: 'Cold Call' });//2)label-(Label text-visible text-2nd priority) (if we think the value not change then we can use this - like country name drop down, gender)
    await page.waitForTimeout(5000);
    await page.selectOption(`#createLeadForm_dataSourceId`, { index: 5 }); //3)Index(start from 0, and also we have to count from ourself
    await page.waitForTimeout(5000);
})

//Class room activity
//1, Choose the currency dropdown as INR and country dropdown as India while creating the lead in leaftaps

test('drop-down practice1', async ({ page }) => {
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`#username`).fill(`Demosalesmanager`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`.decorativeSubmit`).click();
    await page.locator(`div a`).nth(1).click();
    await page.locator(`//a[text()='Leads']`).click();
    await page.locator(`//a[text()='Create Lead']`).click();
    await page.selectOption('#createLeadForm_currencyUomId', { value: 'INR' });
    await page.selectOption(`#createLeadForm_generalCountryGeoId`, { value: 'IND' });
    await page.waitForTimeout(3000);
});


test.only(`Hussain - Playwright - Dropdown Practice`, async ({page})=>{

    await page.goto(`https://hussain-automation-practice.blogspot.com/?utm_source=copilot.com#forms`);

    //Auto suggest drop down
    const Autosuggestdropdown = page.locator(`#auto`);
    await Autosuggestdropdown.fill(`IND`);
    const suggestionList = page.locator(`//div[text()='India']`);
    await suggestionList.waitFor({ state: 'visible' });
    await suggestionList.click();
    await expect(Autosuggestdropdown).toHaveValue(`India`);

    //Multi select drop down
    await page.locator(`#skills-multi`).selectOption([`js`,`ts`,`pw`]);

    //Custom Dropdown
    const customdropdown =  page.locator(`#role-dropdown`);
    await customdropdown.click();

    const dropdownOptions = page.locator(`//div/button[text()='Admin']`);
    await dropdownOptions.waitFor({ state: 'visible' });
    await dropdownOptions.click();

    //Scrollable Dropdown (hidden items)
    const scrollabledropdown = page.locator(`#scroll-dropdown`);
    await scrollabledropdown.click();

    const scrollableOption = page.locator(`//div/button[text()='Option 12']`);
    await scrollableOption.waitFor({ state: 'visible' });
    await scrollableOption.click();
    await page.waitForTimeout(5000);
})

//asdf