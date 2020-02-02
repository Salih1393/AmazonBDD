package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

public class LaptopPage {
    public static WebDriver driver = Driver.getDriver();
    public LaptopPage(){
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//a[@class=\"bxc-grid-overlay__link\"]")
    public WebElement laptop_Btn;
    @FindBy(xpath = "//*[@id=\"contentGrid_351992\"]/div/div[2]/div[2]/div/div/a/img")
    public WebElement lap_work;
    @FindBy(xpath = "//*[@id=\"add-to-cart-button\"]")
    public WebElement add_to_cart;
    @FindBy (xpath = "//*[@id=\"huc-v2-order-row-confirm-text\"]/h1")
    public WebElement title_check;

}
