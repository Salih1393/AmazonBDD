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
formatter.scenarioOutline({
  "name": "Verifies home page title and search button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@homepageAndsearchButtonVerifyTitle"
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
  "name": "User sees home page logo",
  "keyword": "When "
});
formatter.step({
  "name": "Verifies \"Home\" page title",
  "keyword": "Then "
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
  "name": "Verifies home page title and search button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HomePage"
    },
    {
      "name": "@homepageAndsearchButtonVerifyTitle"
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
  "name": "Verifies home page title and search button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HomePage"
    },
    {
      "name": "@homepageAndsearchButtonVerifyTitle"
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
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9QBFEI8F\u0027, ip: \u002710.0.0.137\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat utils.SeleniumUtils.waitForVisibilityOfElement(SeleniumUtils.java:35)\r\n\tat step_definitions.HomePage_STEPS.user_sees_home_page_logo(HomePage_STEPS.java:27)\r\n\tat ✽.User sees home page logo(file:src/test/resources/features/HomePage.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verifies \"Home\" page title",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_STEPS.verifies_page_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click \"Search Box\" button",
  "keyword": "When "
});
formatter.match({
  "location": "HomePage_STEPS.user_click_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User searches for \"computer\" keyword",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage_STEPS.user_searches_for_keyword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verifies title is \"Amazon.com: computer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_STEPS.verifies_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifies home page title and search button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HomePage"
    },
    {
      "name": "@homepageAndsearchButtonVerifyTitle"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
