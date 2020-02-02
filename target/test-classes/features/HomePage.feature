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
    When User click "Search Box" button
    And User searches for "<keyword>" keyword
    Then Verifies title is "<expectedTitle>"
    Examples:
      | keyword       | expectedTitle             |
      | book          | Amazon.com: Books         |
      | computer      | Amazon.com: computer      |
      | woman dresses | Amazon.com: woman dresses |

@TrendDealTest @SmokeTest
    Scenario: Verifies trend deals adding to cart
      Given User opens home page
      When User click "first" trend deal product
      And User deals item adds to cart
      Then Verifies "Sign In" page title


