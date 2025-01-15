package utils;

import contstants.SeleniumConstants;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchSessionException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

public class SeleniumUtils{
    private static WebDriver driver = Driver.getDriver();

    public static void sleep(long milliSeconds){
        try{
            Thread.sleep(milliSeconds);
        }catch (InterruptedException e){
            Thread.currentThread().interrupt();
        }
    }

    public static void waitForClickability(WebElement element){
        WebDriverWait explicitWait = new WebDriverWait(driver, Duration.ofSeconds(30));
        explicitWait.until(ExpectedConditions.visibilityOf(element));
    }
    public static void waitForVisibilityOfAll(List<WebElement> list){
        WebDriverWait explicitWait = new WebDriverWait(driver, Duration.ofSeconds(20));
        explicitWait.until(ExpectedConditions.visibilityOfAllElements(list));
    }

    public static void waitForVisibilityOfElement(WebElement element){
        WebDriverWait explicitWait = new WebDriverWait(driver, Duration.ofSeconds(20));
        explicitWait.until(ExpectedConditions.visibilityOf(element));
    }

    public static void waitForPageToLoad(WebDriver driver) {
        new WebDriverWait(driver, Duration.ofSeconds(30))
                .until(webDriver -> {
                    if (((RemoteWebDriver) driver).getSessionId() == null) {
                        throw new NoSuchSessionException("Session is null");
                    }
                    return "complete".equals(((JavascriptExecutor) driver).executeScript("return document.readyState"));
                });
    }

    public static void click(WebElement element){
        moveIntoView(element);
        waitForVisibilityOfElement(element);
        waitForClickability(element);
        highlightElement(element);
        element.click();
    }

    public static void sendKeys(WebElement element, String input){
        waitForVisibilityOfElement(element);
        highlightElement(element);
        element.sendKeys(input);
    }

    public static String getText(WebElement element){
        waitForVisibilityOfElement(element);
        highlightElement(element);
        return element.getText();
    }

    public static void moveIntoView(WebElement element) {
        try {
            ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});", element);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void scrollToEndOfPage(WebDriver driver) {
        try {
            JavascriptExecutor js = (JavascriptExecutor) driver;
            js.executeScript("window.scrollTo(0, document.body.scrollHeight);");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void highlightElement(WebElement element){
        JavascriptExecutor js = (JavascriptExecutor)driver;
        //moveElementIntoView(element);
        for(int i = 0; i < 2; i++){
            try{
                if (i == 0) {
                    js.executeScript("arguments[0].setAttribute('style', arguments[1]);", element, "color: black; border: 3px solid red; background: yellow");
                }else{
                    sleep(500);
                    js.executeScript("arguments[0].setAttribute('style', arguments[1]);", element, "");
                }
            }catch (Exception e){
                e.printStackTrace();
            }
        }
    }
}
