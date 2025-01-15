package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

import java.util.List;

public class HomePage {
    public  WebDriver driver = Driver.getDriver();
    public HomePage(){
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//span[contains(text(),'Hello, Sign in')]")
    public WebElement signIn_Btn;

    @FindBy(xpath = "//input[@id='twotabsearchtextbox']")
    public WebElement searchTxt_Box;

    @FindBy(xpath = "//input[@id='nav-search-submit-button']")
    public WebElement searchClick_Btn;

    @FindBy(xpath = "//span[@class='nav-sprite nav-logo-base']")
    public WebElement homePageLogo;

    @FindBy(xpath = "//body/div[@id='hmenu-container']/div[@id='hmenu-canvas']/div[@id='hmenu-content']/ul[1]/ul[1]/li[3]/a[1]/i[1]")
    public WebElement electronic_Btn;

    @FindBy(xpath = "//body/div[@id='hmenu-container']/div[@id='hmenu-canvas']/div[@id='hmenu-content']/ul[16]/li[5]/a[1]")
    public WebElement computer_Btn;

    @FindBy(xpath = "//*[@id=\"nav-hamburger-menu\"]")
    public WebElement main_menu;

    @FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[8]/div[1]/div[2]/div[1]/ul[1]/li[1]/span")
    public WebElement first_deals;

    @FindBy(xpath = "//a[@id='a-autoid-0-announce']")
    public  WebElement add_to_cart;

    @FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[3]/a[1]/span[1]/span[2]")
    public  WebElement see_all_deals;

    @FindBy(xpath = "//body/div[@id='hmenu-container']/div[@id='hmenu-canvas']/div[@id='hmenu-content']/ul[1]/li[22]/a[1]/i[1]")
    public  WebElement see_all_menu;

}
