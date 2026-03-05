import { test as base, expect, type Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { LoginPage } from '../Pages/login.page';
import { CreateLeadPage } from '../Pages/createlead.page';

const ROOT = process.cwd();
const ALLURE_RESULTS = path.join(ROOT, 'allure-results');
const ALLURE_REPORT = path.join(ROOT, 'allure-report');
const PLAYWRIGHT_OUTPUT = path.join(ROOT, 'test-results');
const BASE_URL = process.env.BASE_URL ?? 'https://orgfarm-f2e792f5b2-dev-ed.develop.my.salesforce.com';

type MyFixtures = {
  loginPage: LoginPage;
  createLeadPage: CreateLeadPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => { await use(new LoginPage(page)); },
  createLeadPage: async ({ page }, use) => { await use(new CreateLeadPage(page)); },
});
export { expect };

// Clear previous artifacts once per run
test.beforeAll(async () => {
  [ALLURE_RESULTS, ALLURE_REPORT, PLAYWRIGHT_OUTPUT].forEach(dir => {
    if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
  });
});

// Start each test at base URL
test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});

// ...existing code...
test.afterEach(async ({ page }, testInfo) => {
  // no manual screenshot/video attachment — let Playwright + allure-playwright collect artifacts
  try { await page.close(); } catch {}
});


test.afterAll(async () => {
  if (fs.existsSync(ALLURE_RESULTS)) {
    try {
      execSync(`npx allure generate ${ALLURE_RESULTS} -o ${ALLURE_REPORT} --clean`, { stdio: 'inherit' });
    } catch (e) {
      console.warn('Allure generation failed:', e);
    }
  }
});