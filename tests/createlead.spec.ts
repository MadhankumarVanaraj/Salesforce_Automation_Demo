import {test, expect} from '@playwright/test';
import testData1 from '../Utilities/config.json'

test('Create Lead in Salesfoce', async ({page}) =>
{
    await page.goto(testData1[1].PostLogin as string);
    

})

