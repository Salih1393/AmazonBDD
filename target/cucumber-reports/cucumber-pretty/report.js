$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/HomePage.feature");
formatter.feature({
  "name": "Home Page Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@HomePage"
    }
  ]
});
formatter.scenario({
  "name": "Verifies home page title",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@HomePage"
    },
    {
      "name": "@homepageTitle"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User opens home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage_STEPS.user_opens_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees home page logo",
  "keyword": "When "
});
formatter.match({
  "location": "HomePage_STEPS.user_sees_home_page_logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies \"Home\" page title",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_STEPS.verifies_page_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifies search button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchButtonTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User opens home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User click \"Search Box\" button",
  "keyword": "When "
});
formatter.step({
  "name": "User searches for \"\u003ckeyword\u003e\" keyword",
  "keyword": "And "
});
formatter.step({
  "name": "Verifies title is \"\u003cexpectedTitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "keyword",
        "expectedTitle"
      ]
    },
    {
      "cells": [
        "book",
        "Amazon.com: Books"
      ]
    },
    {
      "cells": [
        "computer",
        "Amazon.com: computer"
      ]
    },
    {
      "cells": [
        "woman dresses",
        "Amazon.com: woman dresses"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifies search button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HomePage"
    },
    {
      "name": "@SearchButtonTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User opens home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage_STEPS.user_opens_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"Search Box\" button",
  "keyword": "When "
});
formatter.match({
  "location": "HomePage_STEPS.user_click_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User searches for \"book\" keyword",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage_STEPS.user_searches_for_keyword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies title is \"Amazon.com: Books\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_STEPS.verifies_title_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifies search button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HomePage"
    },
    {
      "name": "@SearchButtonTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User opens home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage_STEPS.user_opens_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"Search Box\" button",
  "keyword": "When "
});
formatter.match({
  "location": "HomePage_STEPS.user_click_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User searches for \"computer\" keyword",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage_STEPS.user_searches_for_keyword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies title is \"Amazon.com: computer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_STEPS.verifies_title_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifies search button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HomePage"
    },
    {
      "name": "@SearchButtonTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User opens home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage_STEPS.user_opens_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"Search Box\" button",
  "keyword": "When "
});
formatter.match({
  "location": "HomePage_STEPS.user_click_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User searches for \"woman dresses\" keyword",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage_STEPS.user_searches_for_keyword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies title is \"Amazon.com: woman dresses\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_STEPS.verifies_title_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifies trend deals adding to cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@HomePage"
    },
    {
      "name": "@TrendDealTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User opens home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage_STEPS.user_opens_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"first\" trend deal product",
  "keyword": "When "
});
formatter.match({
  "location": "HomePage_STEPS.user_click_trend_deal_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User deals item adds to cart",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage_STEPS.user_deals_item_adds_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies \"Sign In\" page title",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_STEPS.verifies_page_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/LaptopPage.feature");
formatter.feature({
  "name": "Laptop Page Testing",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LaptopPage"
    }
  ]
});
formatter.scenario({
  "name": "Verifies laptop page title and add laptop to cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LaptopPage"
    },
    {
      "name": "@laptop_pageVerifyTitle"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User opens home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage_STEPS.user_opens_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"Open Menu\" button",
  "keyword": "When "
});
formatter.match({
  "location": "HomePage_STEPS.user_click_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"electronics\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage_STEPS.user_click_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"computers\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage_STEPS.user_click_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"laptops\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage_STEPS.user_click_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies \"Laptops\" page title",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_STEPS.verifies_page_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"laptop for work\" button",
  "keyword": "When "
});
formatter.match({
  "location": "HomePage_STEPS.user_click_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User adds to cart",
  "keyword": "And "
});
formatter.match({
  "location": "LaptopPage_STEPS.user_adds_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies product added",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopPage_STEPS.user_verifies_laptop_added()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});