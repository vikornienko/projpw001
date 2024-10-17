import {test, expect} from '@playwright/test';

test ('should be able to register to our application', async({page}) => {
    await page.goto("https://todo.qacart.com/signup");
    await page.getByTestId("first-name").fill("QAcarttesting");
    await page.getByTestId("last-name").fill("Testawesome");
    await page.getByTestId("email").fill("mytesting8888888@example.com");
    await page.getByTestId("password").fill("mytesting888");
    await page.getByTestId("confirm-password").fill("mytesting888");
    await page.click("[data-testid=submit]");
    const welcomeMessage = page.locator("[data-testid=welcome]")
    await expect(welcomeMessage).toBeVisible()
});