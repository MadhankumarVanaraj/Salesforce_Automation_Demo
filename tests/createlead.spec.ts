import {test, expect} from '@playwright/test';
import testData1 from '../Utilities/config.json'
import { CreateLeadPage } from '../Pages/createlead.page';
test.use({ storageState: 'Data/login_SF.json' });

test('Create Lead in Salesfoce', async ({page}) =>
{
    await page.goto(testData1[1].PostLogin as string);
    const createLead = new CreateLeadPage(page);
    await createLead.createLead();
    await page.waitForTimeout(5000);
})

