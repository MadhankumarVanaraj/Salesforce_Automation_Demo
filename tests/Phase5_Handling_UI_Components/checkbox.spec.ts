import {expect, test} from '@playwright/test'

test(`Demo QA - Checkbox - Verify page loads successfully`, async({page})=>{

    await page.goto(`https://demoqa.com/checkbox`);
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(`https://demoqa.com/checkbox`);
    await expect(page).toHaveTitle(`demosite`);
    await page.waitForTimeout(5000);
})


test.only(`Verify no checkbox is selected by default`,async({page})=>
{
    await page.goto(`https://demoqa.com/checkbox`);
    await expect(page).toHaveURL(`https://demoqa.com/checkbox`);
    await expect(page.locator(`.rc-tree-checkbox`)).toBeVisible();

    await page.locator(`.rc-tree-switcher`).click();
    const expandedNodes = await page.locator('.rc-tree-treenode').count();
    expect(expandedNodes).toBeGreaterThan(0);
    console.log(`The total no of expanded nodes are ${expandedNodes}`);
    await page.waitForTimeout(5000);

// test
})
