import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://audio-player.satyamseth.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Audio Player/);
});
