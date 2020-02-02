package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

public class HomePage {
    public static WebDriver driver = Driver.getDriver();
    public HomePage(){
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//span[contains(text(),'Hello, Sign in')]")
    public WebElement signIn_Btn;

    @FindBy(xpath = "//input[@id='twotabsearchtextbox']")
    public WebElement searchTxt_Box;

    @FindBy(xpath = "//div[@class='nav-search-submit nav-sprite']//input[@class='nav-input']")
    public WebElement searchClick_Btn;

    @FindBy(xpath = "//span[@class='nav-sprite nav-logo-base']")
    public WebElement homePageLogo;
}
