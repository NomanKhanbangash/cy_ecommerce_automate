/// <reference types="cypress" />

export class SignupPage {
  elements = {
    login_page: () => cy.get(".shop-menu > .nav > :nth-child(4) > a"),
    name: () => cy.get("input[placeholder='Name']"),
    email: () => cy.get("input[data-qa='signup-email']"),
    sign_btn: () => cy.get("button[data-qa='signup-button']"),
    gender: () => cy.get("#uniform-id_gender1"),
    pass: () => cy.get("#password"),
    dayDropdown: () => cy.get("#days"),
    monthDropdown: () => cy.get("#months"),
    yearDropdown: () => cy.get("#years"),
    firstName: () => cy.get("#first_name"),
    lastName: () => cy.get("#last_name"),
    company: () => cy.get("#company"),
    add1: () => cy.get("#address1"),
    add2: () => cy.get("#address2"),
    country: () => cy.get("#country"),
    state: () => cy.get("#state"),
    city: () => cy.get("#city"),
    zipcode: () => cy.get("#zipcode"),
    num: () => cy.get("#mobile_number"),
    cont: () => cy.get("button[data-qa='create-account']"),
    success_msg: () => cy.get(".col-sm-9 > :nth-child(2)"),
  };

  navigate() {
    cy.visit("/");
  }

  visit_signup() {
    this.elements.login_page().click();
  }

  register_with(
    Name,
    Email,
    Pass,
    Day,
    Month,
    Year,
    FirstName,
    LastName,
    Company,
    Add1,
    Add2,
    Count,
    States,
    City,
    Zipcode,
    Numbers
  ) {
    this.elements.name().type(Name);
    this.elements.email().type(Email);
    this.elements.sign_btn().click();
    this.elements.gender().click();
    this.elements.pass().type(Pass);
    this.elements
      .dayDropdown()
      .should("exist")
      .should("be.visible")
      .select(Day)
      .should("have.value", Day);
    this.elements
      .monthDropdown()
      .should("exist")
      .should("be.visible")
      .select(Month)
      .should("have.value", Month);
    this.elements
      .yearDropdown()
      .should("exist")
      .should("be.visible")
      .select(Year)
      .should("have.value", Year);
    this.elements.firstName().type(FirstName);
    this.elements.lastName().type(LastName);
    this.elements.company().type(Company);
    this.elements.add1().type(Add1);
    this.elements.add2().type(Add2);
    this.elements
      .country()
      .should("exist")
      .should("be.visible")
      .select(Count)
      .should("have.value", Count);
    this.elements.state().type(States);
    this.elements.city().type(City);
    this.elements.zipcode().type(Zipcode);
    this.elements.num().type(Numbers);
    this.elements.cont().click();
  }

  getSuccessMessage() {
    return this.elements
      .success_msg()
      .should("be.visible")
      .should(
        "contain",
        "Congratulations! Your new account has been successfully created!"
      );
  }
}

export const signupPg = new SignupPage();
