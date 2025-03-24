/// <reference types="cypress" />
export class AddCart {
  elements = {
    product_page: () => cy.get(".shop-menu > .nav > :nth-child(2) > a"),
    title: () => cy.get(".title"),
    search_product: () => cy.get("#search_product"),
    search_btn: () => cy.get("#submit_search"),
    product_price: (Price: any) =>
      cy.get(".product-image-wrapper > .single-products > .productinfo > h2"),
    product_desc: (Description: any) =>
      cy.get(".product-image-wrapper > .single-products > .productinfo > p"),

    cart_btn: () =>
      cy.get(
        ".product-image-wrapper > .single-products > .productinfo > .add-to-cart"
      ),
    continue: () => cy.get(".modal-footer > .btn"),
    cart_menu: () => cy.get(".shop-menu > .nav > :nth-child(3) > a"),
    total: () =>
      cy.get(
        "#cart_info_table > tbody >  tr > .cart_total > .cart_total_price"
      ),
    Proceed: () => cy.get(".col-sm-6 > .btn"),

    cartRow: (description) =>
      cy
        .get("#cart_info_table > tbody > tr")
        .contains(".cart_description h4 a", description)
        .closest("tr"),

    desc: () => cy.get(".cart_description h4 a"),
    pricee: () => cy.get(".cart_price p"),
    quantity: () => cy.get(".cart_quantity button"),
  };

  Product_Page() {
    this.elements.product_page().click();
  }

  Title() {
    this.elements.title().should("have.text", "All Products");
  }

  SearchProduct(Priduct) {
    this.elements.search_product().type(Priduct);
    this.elements.search_btn().click();
  }

  SearchProduct_Des(Price, Description) {
    this.elements.product_price(Price).should("have.text", "Rs. 1000");
    this.elements
      .product_desc(Description)
      .should("have.text", "Green Side Placket Detail T-Shirt");
  }
  AddProduct() {
    this.elements.cart_btn().click();
  }
  Continue() {
    this.elements.continue().click();
  }
  Cart_Menu() {
    this.elements.cart_menu().click();
  }

  SearchProduct_Description(description, price, quantity) {
    this.elements.cartRow(description).within(() => {
      this.elements.desc().should("have.text", description);
      this.elements.pricee().should("have.text", price);
      this.elements.quantity().should("have.text", quantity);
    });
  }

  Proceed() {
    this.elements.Proceed().click();
  }
}

export const addCart = new AddCart();
