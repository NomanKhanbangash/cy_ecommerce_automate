export class LoginPage {
  elements = {
    email: () => cy.get("input[data-qa='login-email']"),
    password: () => cy.get("input[placeholder='Password']"),
    loginButton: () => cy.get("button[data-qa='login-button']"),
    success_msg: () => cy.xpath("//a[contains(.,'Logged in as')]"),
    error: () =>
      cy.get('.login-form > form > p')
  };

  enterEmail(email) {
    this.elements.email().type(email);
  }
  enterPassword(password) {
    this.elements.password().type(password);
  }

  login_btn() {
    this.elements.loginButton().click();
  }

  get_Success_Msg() {
    this.elements
      .success_msg()
      .should("be.visible")
      .should("contain", "Logged in as");
  }
  get_error_Msg() {
    this.elements
      .error()
      .should("be.visible")
      .should("contain", "Your email or password is incorrect!");
  }
}

export const loginPg = new LoginPage();
