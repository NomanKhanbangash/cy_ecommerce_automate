import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { signupPg } from "../page_objects/asignupPage";

Given("I visit the Automation Exercise Home page", () => {
  signupPg.navigate();
});

Given("Visit to SignUp Page", () => {
  signupPg.visit_signup();
});

When(
  "register with following details {string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string}",
  (
    Name,
    Email,
    Pass,
    Day,
    Month,
    Year,
    FirstName,
    LastName,
    Company,
    Addres1,
    Addres2,
    Country,
    State,
    City,
    Zip,
    Numbe
  ) => {
    signupPg.register_with(
      Name,
      Email,
      Pass,
      Day,
      Month,
      Year,
      FirstName,
      LastName,
      Company,
      Addres1,
      Addres2,
      Country,
      State,
      City,
      Zip,
      Numbe
    );
  }
);

Then(
  "User should see a message indicating that user Register successfully",
  () => {
    signupPg.getSuccessMessage();
  }
);
