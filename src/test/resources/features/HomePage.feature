@HomePage
Feature: Home Page Test

  @homepageTitle @SmokeTest
  Scenario: Verifies home page title
    Given User opens home page
    When User sees home page logo
    Then Verifies "Home" page title
@SearchButtonTest @SmokeTest
  Scenario Outline:Verifies search button
    Given User opens home page
    When User clicks "Search Box" button
    And User searches for "<keyword>" keyword
    Then Verifies title is "<expectedTitle>"
    Examples:
      | keyword       | expectedTitle             |
      | book          | Amazon.com: Books         |
      | computer      | Amazon.com : computer     |
      | man dresses   | Amazon.com : man dresses  |
