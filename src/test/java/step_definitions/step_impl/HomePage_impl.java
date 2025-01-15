package step_definitions.step_impl;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import pages.HomePage;
import pages.LaptopPage;
import utils.ConfigReader;
import utils.Driver;
import utils.SeleniumUtils;

public class HomePage_impl {
    private WebDriver driver = Driver.getDriver();
    HomePage homePage = new HomePage();
    LaptopPage laptopPage = new LaptopPage();

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
            case "Open Menu":
                SeleniumUtils.click(homePage.main_menu);
                break;
            case "See all":
                SeleniumUtils.click(homePage.see_all_menu);
                break;
            case "electronics":
                SeleniumUtils.click(homePage.electronic_Btn);
                break;
            case "computers":
                SeleniumUtils.click(homePage.computer_Btn);
                break;
            case "laptops":
                SeleniumUtils.click(laptopPage.laptop_Btn);
                break;
            case "laptop for work":
                SeleniumUtils.click(laptopPage.lap_work);
                break;
            case "add_to_cart":
                SeleniumUtils.click(laptopPage.add_to_cart);
                break;
        }
    }

    public String expectedTitle(String title) {
        String expectedTitle = null;
        switch (title) {
            case "Home":
                expectedTitle = "Amazon.com. Spend less. Smile more.";
                break;
            case "Laptops":
                expectedTitle = "Laptops | Amazon.com";
                break;
            case "Sign In":
                expectedTitle = "Amazon Sign-In";
                break;


        }

        return expectedTitle;
    }
    public void clickTrendDeal(String deal){
        switch (deal) {
            case "first":
               SeleniumUtils.click(homePage.first_deals);
                break;
            case "second":
                break;
        }
    }

    public void navigateToHomePage() {
        Driver.getDriver().get(ConfigReader.readProperty("url"));
    }
}