package step_definitions;

import cucumber.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import utils.Driver;

public class Hooks {
    public static Scenario CurrentScenario;

    @Before
    public void setUp(Scenario scenario){
        Driver.getDriver();
        CurrentScenario = scenario;
    }

    @After
    public void  tearDown(){
        Driver.closeDriver();
    }
}
