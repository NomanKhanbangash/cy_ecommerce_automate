import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { loginPg } from "../page_objects/bloginPage";

Given("I enter valid email {string} and valid {string}", (email, password) => {
  loginPg.enterEmail(email);
  loginPg.enterPassword(password);
});

When("Click on login button", () => {
  loginPg.login_btn();
});

Then("User Logged in Successfully", () => {
  loginPg.get_Success_Msg();
});

Then("User should error message Your email or password is incorrect!", () => {
  loginPg.get_error_Msg();
});
