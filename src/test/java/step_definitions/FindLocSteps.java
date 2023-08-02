package step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.FindLocPage;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.time.Duration;

import static org.example.FindLocPage.driver;

public class FindLocSteps {
    private WebDriver webDriver;
    public FindLocSteps(){
        super();
        this.webDriver= Hooks.webDriver;
    }

//    // Case 1
    @When("User click the Find Locations button")
    public void userClickTheFindLocationsButton() {
        FindLocPage findLocationsPage = new FindLocPage(webDriver);
        findLocationsPage.clickFindLocationsBtn();
    }

    @Then("User will direct to Find a Service NSW location page")
    public void userWillDirectToFindAServiceNSWLocationPage() {
        FindLocPage findLocationsPage = new FindLocPage(webDriver);
        Assert.assertTrue(findLocationsPage.landingFindLocationsPage());
        webDriver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
    }

    @When("User enters \"([^\"]*)\" in the search input")
    public void userEntersInTheSearchInput(String suburb){
          FindLocPage findLocPage = new FindLocPage(webDriver);
          findLocPage.searchSuburb(suburb);

    }

    @And("User clicks the search button")
    public void userClicksTheSearchButton() {
    FindLocPage findLocPage = new FindLocPage(webDriver);
    findLocPage.clickSuburbBtn();
    }



    @And("User click choose All for filter")
    public void userClickChooseAllForFilter() {
        FindLocPage findLocPage = new FindLocPage(webDriver);
        findLocPage.clickAllFilter();
    }

    @And("User click minimize map button")
    public void userClickMinimizeMapButton() {
        FindLocPage findLocPage = new FindLocPage(webDriver);
        findLocPage.clickMinMapBtn();
    }

    @Then("User should see \"([^\"]*)\" in the search result list")
    public void userShouldSeeInTheSearchResultList(String expectedResult) {
        By locator = By.xpath("//div[@class='locator__results']/h2[@class='is-excluded'], //a[.='Rockdale Service Centre']" + expectedResult + "']");
    }
}
