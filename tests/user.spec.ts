import {test, expect} from '@playwright/test';
import { firstName, lastName, userEmail, userPassword } from './myFakerInfo.ts';

test ('should be able to register to our application', async({page}) => {
    await page.goto("/signup");
    await page.getByTestId("first-name").fill(firstName);
    await page.getByTestId("last-name").fill(lastName);
    await page.getByTestId("email").fill(userEmail);
    await page.getByTestId("password").fill(userPassword);
    await page.getByTestId("confirm-password").fill(userPassword);
    await page.click("[data-testid=submit]");
    const welcomeMessage = page.locator("[data-testid=welcome]")
    await expect(welcomeMessage).toBeVisible()
});
