package step_definitions;

import cucumber.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.WebDriver;
import utils.Driver;

public class Hooks {
    public static Scenario CurrentScenario;


    @Before
    public void setUp(Scenario scenario){

        Driver.getDriver();
        if(Driver.getDriver() == null){
            System.out.println("driver null");
        }
        CurrentScenario = scenario;
    }

    @After
    public void  tearDown(){

        Driver.quitDriver();
    }
}
