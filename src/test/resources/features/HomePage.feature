@HomePage
Feature: Home Page Test
@homepageVerifyTitle
  Scenario: Verifies home page title
    Given User opens home page
    When User click "Search Box" button
    Then Verifies "Home" page title