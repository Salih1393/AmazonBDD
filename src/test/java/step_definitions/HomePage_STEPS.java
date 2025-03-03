package step_definitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.eo.Se;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pages.HomePage;
import step_definitions.step_impl.HomePage_impl;
import utils.Driver;
import utils.SeleniumUtils;

public class HomePage_STEPS {
    private  WebDriver driver = Driver.getDriver();
    HomePage homePage = new HomePage();
    HomePage_impl homePage_impl = new HomePage_impl();


    @Given("User opens home page")
    public void user_opens_home_page() {
        homePage_impl.navigateToHomePage();
    }

    @When("User sees home page logo")
    public void user_sees_home_page_logo() {
        SeleniumUtils.waitForVisibilityOfElement(homePage.homePageLogo);
    }

    @When("User clicks {string} button")
    public void user_clicks_button(String string) {
        homePage_impl.clickButton(string);
    }

    @Then("Verifies {string} page title")
    public void verifies_page_title(String string) {
        Assert.assertEquals(homePage_impl.expectedTitle(string),driver.getTitle());
    }

    @And("User searches for {string} keyword")
    public void user_searches_for_keyword(String string) {
        homePage_impl.searchKey(string);
    }

    @Then("Verifies title is {string}")
    public void verifies_title_is(String title) {
        SeleniumUtils.waitForPageToLoad(driver);
        Assert.assertEquals(title,Driver.getDriver().getTitle());
    }

    @When("User clicks {string} trend deal product")
    public void user_clicks_trend_deal_product(String string) {
        homePage_impl.clickTrendDeal(string);
    }

    @When("User deals item adds to cart")
    public void user_deals_item_adds_to_cart() {
        SeleniumUtils.click(homePage.add_to_cart);
    }



}
