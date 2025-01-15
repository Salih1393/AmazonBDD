@LaptopPage
Feature: Laptop Page Testing
  @laptop_pageVerifyTitle @SmokeTest
  Scenario: Verifies laptop page title and add laptop to cart
    Given User opens home page
    When User clicks "Open Menu" button
    And User clicks "See all" button
    And User clicks "electronics" button
    And User clicks "computers" button
    And User clicks "laptops" button
    Then Verifies "Laptops" page title
    When User clicks "laptop for work" button
    And User adds to cart
    Then User verifies product added

