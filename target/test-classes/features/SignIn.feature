@SignInPage

Feature: Sign In Page Test

  @SignAsaValidUser
  Scenario: Sign in  as a valid user
    Given User opens home page
    And User click "Sign In" button
    Then Verifies "Sign In" page title
    When User enter  username and password
      | username             | password  |
      | hsynokurer@gmail.com | Kartal96@ |
    Then Verifies customer name display



