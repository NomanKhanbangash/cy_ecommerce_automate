Feature: Login Feature
    Background: Visiting Application Home Page
        Given I visit the Automation Exercise Home page

    Scenario: Login with Valid Credentails
        Given Visit to SignUp Page
        Given I enter valid email "<Email>" and valid "<Password>"
        When Click on login button
        Then User Logged in Successfully
        Examples:
            | Email              | Password    |
            | tech77@gmail.com | Testing@123 |



    Scenario: Login with InValid Credentails
        Given Visit to SignUp Page
        Given I enter valid email "<InValidEmail>" and valid "<InvalidPassword>"
        When Click on login button
        Then User should error message Your email or password is incorrect!
        Examples:
            | InValidEmail       | InvalidPassword |
            | tech89@example.com | Testing@12      |


# asdahgdhga
