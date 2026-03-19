import { expect, test } from '@playwright/test'

test(`1. Verify page loads successfully`, async ({ page }) => {

    await page.goto(`https://demoqa.com/checkbox`);
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(`https://demoqa.com/checkbox`);
    await expect(page).toHaveTitle(`demosite`);
    await page.waitForTimeout(5000);
})


test(`2. Verify no checkbox is selected by default`, async ({ page }) => {
    await page.goto(`https://demoqa.com/checkbox`);
    await expect(page).toHaveURL(`https://demoqa.com/checkbox`);
    await expect(page.locator(`.rc-tree-checkbox`)).toBeVisible();

    await page.locator(`.rc-tree-switcher`).click();
    const expandedNodes = await page.locator('.rc-tree-checkbox').count();
    expect(expandedNodes).toBeGreaterThan(0);
    console.log(`There are ${expandedNodes} expanded checkboxes after clicking on the expand checkbox`);


    const checkboxes = page.locator(`.rc-tree-checkbox`);
    const count = await checkboxes.count();

    for (let i = 0; i < count; i++) {
        const checkbox = checkboxes.nth(i);
        await expect(checkbox).not.toBeChecked();
        console.log(`Checkbox ${i + 1} is not selected by default`);
    }
    await page.waitForTimeout(5000);
})

test(`3. Verify selecting single child checkbox`, async ({ page }) => {
    await page.goto(`https://demoqa.com/checkbox`);
    await page.waitForLoadState('networkidle');
    await page.locator(`.rc-tree-switcher`).click();
    // await page.waitForTimeout(2000);
    await page.locator(`.rc-tree-switcher`).nth(1).click();
    await page.locator(`.rc-tree-checkbox`).nth(2).click();

    const notification = page.locator(`//span[text()='notes']`);
    expect(notification).toBeVisible();
    await page.waitForTimeout(5000);
});


test(`4. Verify parent checkbox selects all child checkboxes`, async ({ page }) => {
    await page.goto(`https://demoqa.com/checkbox`);
    await page.waitForLoadState('networkidle');

    await page.locator(`.rc-tree-switcher`).nth(0).click();
    await page.locator(`.rc-tree-switcher`).nth(1).click();

    await page.locator(`.rc-tree-checkbox`).nth(1).click();

    await expect(page.locator(`.rc-tree-checkbox`).nth(2)).toBeChecked();
    await expect(page.locator(`.rc-tree-checkbox`).nth(3)).toBeChecked();
    await page.waitForTimeout(5000);
})

test(`5. Verify unchecking child checkbox updates parent state`, async ({ page }) => {

    await page.goto(`https://demoqa.com/checkbox`);
    await page.waitForLoadState('networkidle');

    await page.locator(`.rc-tree-switcher`).nth(0).click();
    await page.locator(`.rc-tree-switcher`).nth(1).click();

    await page.locator(`.rc-tree-checkbox`).nth(1).click();

    await page.locator(`.rc-tree-checkbox`).nth(2).click();
    await page.locator(`.rc-tree-checkbox`).nth(3).click();

    await expect(page.locator(`.rc-tree-checkbox`).nth(1)).not.toBeChecked();   


    await page.waitForTimeout(5000);

});


test(`6.Verify output section displays correct selected values`, async ({ page }) => {

    await page.goto(`https://demoqa.com/checkbox`);
    await page.waitForLoadState('networkidle');

    await page.locator(`.rc-tree-switcher`).nth(0).click();
    await page.locator(`.rc-tree-checkbox`).nth(1).click();
    // await page.locator(`//span[@class='rc-tree-switcher rc-tree-switcher_open']`).click();
    // await page.locator(`//span[@class='rc-tree-checkbox rc-tree-checkbox-checked']`).click();

    const output1 = page.locator(`//span[text()='notes']`);
    await expect(output1).toBeVisible();

    // Get all output texts inside #result
    const outputTexts = await page.locator('#result span').allTextContents();
    console.log(`Action : ${outputTexts}`);

    // Optionally, assert the expected values
    expect(outputTexts).toContain('notes');

    await page.locator(`.rc-tree-checkbox`).nth(1).click();
    await page.locator(`.rc-tree-checkbox`).nth(2).click();
    const output2 = page.locator(`//span[text()='documents']`);
    await expect(output2).toBeVisible();
    const outputTexts2 = await page.locator('#result span').allTextContents();
    console.log(`Action : ${outputTexts2}`);

    await page.locator(`.rc-tree-checkbox`).nth(2).click();
    await page.locator(`.rc-tree-checkbox`).nth(3).click();
    const output3 = page.locator(`//span[text()='downloads']`);
    await expect(output3).toBeVisible();
    const outputTexts3 = await page.locator('#result span').allTextContents();
    console.log(`Action : ${outputTexts3}`);

    await page.waitForTimeout(5000);
});




