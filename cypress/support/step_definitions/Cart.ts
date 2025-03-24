import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { addCart } from "../page_objects/Cart";

When("Visit to Products Page", () => {
  addCart.Product_Page();
});

Then("User successfuly visit to Products Page", () => {
  addCart.Title();
});

When("Search product {string}", (product) => {
  addCart.SearchProduct(product);
});

Then(
  "Product Price should be {string} and Description {string}",
  (price, description) => {
    addCart.SearchProduct_Des(price, description);
  }
);

When("Add search porduct on Add to cart", () => {
  addCart.AddProduct();
});

When("Click on Continue button", () => {
  addCart.Continue();
});

When("Move to cart for check to proceed", () => {
  addCart.Cart_Menu();
});
Then(
  "Verify Product detail should be {string}, {string}, {string}",
  (description, price, quantity) => {
    addCart.SearchProduct_Description(description, price, quantity);
  }
);

When("Proceed to checkout", () => {
  addCart.Proceed();
});
