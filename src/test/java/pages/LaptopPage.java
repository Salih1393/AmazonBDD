package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

public class LaptopPage {
    public  WebDriver driver = Driver.getDriver();
    public LaptopPage(){
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//a[@class=\"bxc-grid-overlay__link\"]")
    public WebElement laptop_Btn;

    @FindBy(xpath = "//a[@aria-label=\"Work\"]")
    public WebElement lap_work;

    @FindBy(xpath = "//span[@class='a-button-inner']//input[@id='add-to-cart-button']")
    public WebElement add_to_cart;

    @FindBy (xpath = "//div[@id='attachDisplayAddBaseAlert']//h4[@class='a-alert-heading'][contains(text(),'Added to Cart')]")
    public WebElement title_check;

    @FindBy (xpath = "//button[@id='attachSiNoCoverage-announce']")
    public WebElement ignore_add;

}
