@LaptopPage
Feature: Laptop Page Testing
  @laptop_pageVerifyTitle @SmokeTest
  Scenario: Verifies laptop page title and add laptop to cart
    Given User opens home page
    When User click "Open Menu" button
    And User click "electronics" button
    And User click "computers" button
    And User click "laptops" button
    Then Verifies "Laptops" page title
    When User click "laptop for work" button
    And User adds to cart
    Then User verifies laptop added

