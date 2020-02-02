package step_definitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.LaptopPage;
import step_definitions.step_impl.LaptopPage_impl;
import utils.SeleniumUtils;

public class LaptopPage_STEPS {

    LaptopPage_impl laptopPage_impl=new LaptopPage_impl();



    @When("User adds to cart")
    public void user_adds_to_cart() {

        laptopPage_impl.add_to_cart("add_to_cart");
    }

    @Then("User verifies laptop added")
    public void user_verifies_laptop_added() {

        laptopPage_impl.check_added();
    }
}
