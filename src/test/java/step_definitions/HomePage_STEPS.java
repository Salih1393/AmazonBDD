package step_definitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pages.HomePage;
import step_definitions.step_impl.HomePage_impl;
import utils.Driver;
import utils.SeleniumUtils;

public class HomePage_STEPS {
    private static WebDriver driver = Driver.getDriver();
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

    @When("User click {string} button")
    public void user_click_button(String string) {
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

        Assert.assertEquals(title,Driver.getDriver().getTitle());
    }

}
