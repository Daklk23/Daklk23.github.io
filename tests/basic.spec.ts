import { test, expect } from '@playwright/test';

// NOTE: These tests are placeholders and do not mock Discord auth.

test('homepage has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Vantage Roleplay/);
});
