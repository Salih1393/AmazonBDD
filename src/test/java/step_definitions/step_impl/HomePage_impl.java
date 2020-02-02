package step_definitions.step_impl;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import pages.HomePage;
import utils.ConfigReader;
import utils.Driver;
import utils.SeleniumUtils;

public class HomePage_impl {
    private static WebDriver driver = Driver.getDriver();
    HomePage homePage = new HomePage();

    public void searchKey(String string) {
        SeleniumUtils.sendKeys(homePage.searchTxt_Box, string);
        SeleniumUtils.click(homePage.searchClick_Btn);
    }

    public void clickButton(String button) {
        switch (button) {
            case "Sign In":
                SeleniumUtils.click(homePage.signIn_Btn);
                break;
            case "Search Box":
                SeleniumUtils.click(homePage.searchTxt_Box);
                break;
        }
    }

    public String expectedTitle(String title) {
        String expectedTitle = null;
        switch (title) {
            case "Home":
                expectedTitle = "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more";
                break;
        }

        return expectedTitle;
    }

    public void navigateToHomePage() {
        Driver.getDriver().get(ConfigReader.readProperty("url"));
    }
}