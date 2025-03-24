Feature: Registration

    Background: Visiting Application Home Page
        Given I visit the Automation Exercise Home page

    Scenario: Register with a new user
        Given Visit to SignUp Page
        When register with following details "<Name>","<Email>","<Password>","<Day>","<Month>","<Year>","<FirstName>","<LastName>","<Company>","<Address1>","<Address2>","<Country>","<State>","<City>","<Zip>","<Numb>"
        Then User should see a message indicating that user Register successfully
        Examples:
            | Name  | Email              | Password    | Day | Month | Year | FirstName | LastName | Company         | Address1 | Address2 | Country       | State    | City | Zip  | Numb     |
            | tech5 | tech77@gmail.com | Testing@123 | 3   | 5     | 1998 | Tech      | One      | Private Limited | St2      | St4      | United States | New york | Test | 5400 | 03065665 |
