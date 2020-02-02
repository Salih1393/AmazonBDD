@HomePage
Feature: Home Page Test
@homepageAndsearchButtonVerifyTitle @SmokeTest
  Scenario Outline:Verifies home page title and search button
    Given User opens home page
    When User sees home page logo
    Then Verifies "Home" page title
    When User click "Search Box" button
    And User searches for "<keyword>" keyword
    Then Verifies title is "<expectedTitle>"
    Examples:
    | keyword        | expectedTitle             |
    | book           | Amazon.com: Books         |
    | computer       | Amazon.com: computer      |
    | woman dresses  | Amazon.com: woman dresses |
