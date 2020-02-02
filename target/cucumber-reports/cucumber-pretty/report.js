$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/SignIn.feature");
formatter.feature({
  "name": "Sign In Page Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SignInPage"
    }
  ]
});
formatter.scenario({
  "name": "Sign in  as a valid user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SignInPage"
    },
    {
      "name": "@SignAsaValidUser"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User opens home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage_STEPS.user_opens_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click \"Sign In\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage_STEPS.user_click_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verifies \"Sign In\" page title",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_STEPS.verifies_page_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enter  username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "hsynokurer@gmail.com",
        "Kartal96@"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Verifies customer name display",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});