Feature: Search and Add Product to Cart
    Background: Visiting Application Home Page
        Given I visit the Automation Exercise Home page

    Scenario:Search and add product to cart
        Given Visit to SignUp Page
        Given I enter valid email "<Email>" and valid "<Password>"
        When Click on login button
        When Visit to Products Page
        Then User successfuly visit to Products Page
        When Search product "Green Side Placket Detail T-Shirt"
        Then Product Price should be "1000" and Description "Green Side Placket Detail T-Shirt"
        When Add search porduct on Add to cart
        When Click on Continue button
        When Move to cart for check to proceed
        Then Verify Product detail should be "Green Side Placket Detail T-Shirt", "Rs. 1000", "1"
        When Proceed to checkout
        Examples:
            | Email              | Password    |
            | Test4455@gmail.com  | Testing@123 |


            # Testing

            # TestThree


