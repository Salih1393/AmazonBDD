package step_definitions;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import org.openqa.selenium.WebDriver;
import step_definitions.step_impl.LaptopPage_impl;
import utils.Driver;

public class LaptopPage_STEPS {
    public  WebDriver driver = Driver.getDriver();
    LaptopPage_impl laptopPage_impl=new LaptopPage_impl();
    @When("User adds to cart")
    public void user_adds_to_cart() {
        laptopPage_impl.add_to_cart("add_to_cart");
    }
    @Then("User verifies product added")
    public void user_verifies_laptop_added() {
        laptopPage_impl.check_added();
    }
}