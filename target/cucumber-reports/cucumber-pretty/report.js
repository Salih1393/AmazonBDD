<<<<<<< Updated upstream
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/HomePage.feature");
formatter.feature({
  "name": "Home Page Test",
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/LaptopPage.feature");
formatter.feature({
  "name": "Laptop Page Testing",
>>>>>>> Stashed changes
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
<<<<<<< Updated upstream
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
=======
      "name": "@LaptopPage"
>>>>>>> Stashed changes
    }
  ]
});
formatter.scenario({
<<<<<<< Updated upstream
  "name": "Verifies home page title and search button",
=======
  "name": "Verifies laptop page title and add laptop to cart",
>>>>>>> Stashed changes
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
<<<<<<< Updated upstream
      "name": "@HomePage"
    },
    {
      "name": "@homepageAndsearchButtonVerifyTitle"
    },
    {
=======
      "name": "@LaptopPage"
    },
    {
      "name": "@laptop_pageVerifyTitle"
    },
    {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  "name": "User sees home page logo",
  "keyword": "When "
=======
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
>>>>>>> Stashed changes
});
formatter.match({
  "location": "HomePage_STEPS.user_sees_home_page_logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< Updated upstream
  "name": "Verifies \"Home\" page title",
=======
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
>>>>>>> Stashed changes
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_STEPS.verifies_page_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< Updated upstream
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
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-4QP1H49J\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat utils.SeleniumUtils.waitForVisibilityOfElement(SeleniumUtils.java:35)\r\n\tat step_definitions.HomePage_STEPS.user_sees_home_page_logo(HomePage_STEPS.java:27)\r\n\tat ✽.User sees home page logo(file:src/test/resources/features/HomePage.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verifies \"Home\" page title",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_STEPS.verifies_page_title(String)"
=======
  "name": "User click \"laptop for work\" button",
  "keyword": "When "
});
formatter.match({
  "location": "HomePage_STEPS.user_click_button(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //*[@id\u003d\"contentGrid_351992\"]/div/div[2]/div[2]/div/div/a/img\u0027 (tried for 20 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat utils.SeleniumUtils.waitForClickability(SeleniumUtils.java:26)\r\n\tat utils.SeleniumUtils.click(SeleniumUtils.java:45)\r\n\tat step_definitions.step_impl.HomePage_impl.clickButton(HomePage_impl.java:41)\r\n\tat step_definitions.HomePage_STEPS.user_click_button(HomePage_STEPS.java:23)\r\n\tat ✽.User click \"laptop for work\" button(file:src/test/resources/features/LaptopPage.feature:11)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"contentGrid_351992\"]/div/div[2]/div[2]/div/div/a/img\"}\n  (Session info: chrome\u003d79.0.3945.130)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-0OPMKS7R\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\islan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58133}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: afa3469852978fe0de4cb382c1589875\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contentGrid_351992\"]/div/div[2]/div[2]/div/div/a/img}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat utils.SeleniumUtils.waitForClickability(SeleniumUtils.java:26)\r\n\tat utils.SeleniumUtils.click(SeleniumUtils.java:45)\r\n\tat step_definitions.step_impl.HomePage_impl.clickButton(HomePage_impl.java:41)\r\n\tat step_definitions.HomePage_STEPS.user_click_button(HomePage_STEPS.java:23)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User adds to cart",
  "keyword": "And "
});
formatter.match({
  "location": "LaptopPage_STEPS.user_adds_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies laptop added",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopPage_STEPS.user_verifies_laptop_added()"
>>>>>>> Stashed changes
});
formatter.result({
  "status": "skipped"
});
<<<<<<< Updated upstream
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
=======
formatter.after({
  "status": "passed"
>>>>>>> Stashed changes
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
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-4QP1H49J\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat utils.SeleniumUtils.waitForVisibilityOfElement(SeleniumUtils.java:35)\r\n\tat step_definitions.HomePage_STEPS.user_sees_home_page_logo(HomePage_STEPS.java:27)\r\n\tat ✽.User sees home page logo(file:src/test/resources/features/HomePage.feature:6)\r\n",
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
  "name": "User searches for \"woman dresses\" keyword",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage_STEPS.user_searches_for_keyword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verifies title is \"Amazon.com: woman dresses\"",
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
});