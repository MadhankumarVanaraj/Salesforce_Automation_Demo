import { Page, expect } from '@playwright/test';
import { LoginLocators } from '../Locators/login.locators';
import { createLeadLocators } from '../Locators/createlead.locators';
import { create } from 'node:domain';

export class CreateLeadPage {
  
  constructor(private page: Page) { }


  async createLead() {
    await expect(this.page).toHaveURL(LoginLocators.postLoginPageUrl);
    await expect(this.page).toHaveTitle(LoginLocators.postLoginTitle);
    await this.page.click(createLeadLocators.clickAppLauncher);
    await this.page.waitForTimeout(3000);
    await this.page.click(createLeadLocators.clickViewAll);
    await this.page.waitForTimeout(3000);
    await this.page.fill(createLeadLocators.clickSearchAppBox, 'Mark');
    await this.page.click(createLeadLocators.clickMarketingLink);
    await this.page.click(createLeadLocators.navigateToLeadsTab);

    await expect(this.page.locator(createLeadLocators.clickNewButton)).toBeVisible();

    await this.page.click(createLeadLocators.clickNewButton);
    await this.page.click(createLeadLocators.clickSalutationDropdown);
    await this.page.click(createLeadLocators.selectSalutationMr);
    await this.page.fill(createLeadLocators.fillFirstName, 'Madhan Kumar');
    await this.page.fill(createLeadLocators.fillLastName, 'Vanaraj');
    await this.page.fill(createLeadLocators.fillCompanyName, 'Cognizant Technology Solutions');

    await expect(this.page.locator(createLeadLocators.clickSaveButton)).toBeVisible();

    await this.page.click(createLeadLocators.clickSaveButton);

    const toastMessage = this.page.locator(createLeadLocators.validateToastMessage);
    await expect(toastMessage).toBeVisible();
    await expect(toastMessage).toContainText('Success notification.Lead \"Mr. Madhan Kumar Vanaraj\" was created.Press Control + F6 to navigate to the next toast notification or focusable region.Close');

    await this.page.click(createLeadLocators.clickConvertLeadDropdownIcon);
    await this.page.click(createLeadLocators.clickConvertlink);
    await this.page.click(createLeadLocators.clickCreateNewOpportunity);
    await this.page.fill(createLeadLocators.EnterNewOpportunityName,"BHC_Test Opportunity");
    await this.page.click(createLeadLocators.clickConvertButton);
    await this.page.click(createLeadLocators.clickGoToLead);
    await this.page.waitForTimeout(3000);
    await this.page.click(createLeadLocators.clickSearchLeadsBox);
    await this.page.fill(createLeadLocators.EntersearchTextInLeadsBox,"Madhan Kumar");
    await this.page.click(createLeadLocators.navigateToOpportunities);
    await this.page.fill(createLeadLocators.clickOpportunitySearchBox,"BHC_Test Opportunity");
  }
}
