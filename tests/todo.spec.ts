import {test, expect} from '@playwright/test';
import { userEmail, userPassword } from './myFakerInfo';

test("should be able to add a new todo", async({page}) => {
    await page.goto("/login");
    
    await page.getByTestId("email").fill(userEmail);
    await page.getByTestId("password").fill(userPassword);
    
    await page.click("[data-testid=submit]");
    const welcomeMessage = page.locator("[data-testid=welcome]");
    await expect(welcomeMessage).toBeVisible();
    await page.click("[data-testid=add]");
    await page.getByTestId("new-todo").fill("Learn playwright node.js.");
    await page.click("[data-testid=submit-newTask]");
    const firstTodoTask = page.locator("[data-testid=todo-item]");
    expect(await firstTodoTask.innerText()).toEqual(
      "Learn playwright node.js."
    );
    await page.locator("xpath=//html/body/div/div[1]/div/div/button").click();
});

test("should be able to delete a todo", async({page}) => {
  await page.goto("/login");

  await page.getByTestId("email").fill(userEmail);
  await page.getByTestId("password").fill(userPassword);

  await page.click("[data-testid=submit]");
  const welcomeMessage = page.locator("[data-testid=welcome]");
  await expect(welcomeMessage).toBeVisible();
  const firstTodoTask = page.locator("[data-testid=todo-item]");
  expect(await firstTodoTask.innerText()).toEqual("Learn playwright node.js.");
  await page.click("[data-testid=delete]");
  const noTodoMessage = page.locator("[data-testid=no-todos]");
  await expect(noTodoMessage).toBeVisible();
  await page.locator("xpath=//html/body/div/div[1]/div/div/button").click();
});
