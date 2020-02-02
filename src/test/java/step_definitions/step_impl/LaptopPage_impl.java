package step_definitions.step_impl;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pages.HomePage;
import pages.LaptopPage;
import utils.Driver;
import utils.SeleniumUtils;

public class LaptopPage_impl {

    public static WebDriver driver = Driver.getDriver();
    HomePage_impl homePage_impl=new HomePage_impl();
    LaptopPage laptopPage=new LaptopPage();

    public void add_to_cart(String string){
        homePage_impl.clickButton(string);
    }

    public void check_added(){
        Assert.assertEquals("Added to Cart",laptopPage.title_check.getText());
    }
}