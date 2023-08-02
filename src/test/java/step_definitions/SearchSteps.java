package step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.eo.Se;
import org.example.SearchPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import java.time.Duration;

public class SearchSteps {

    private WebDriver webDriver;
    public SearchSteps(){
        super();
        this.webDriver= Hooks.webDriver;
    }

    @Given("User already on NSW website")
    public void userAlreadyOnNSWWebsite(){
        SearchPage searchPage = new SearchPage(webDriver);
        Assert.assertTrue(searchPage.landingHomePage());
        webDriver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
    }

    @And("User input the keyword <\"([^\"]*)\"> in search field for do searching")
    public void userInputTheKeywordInSearchFieldForDoSearching(String keyword) {
        SearchPage searchPage = new SearchPage(webDriver);
        searchPage.setSearchKey(keyword);
        webDriver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
    }

    @When("User click the search button")
    public void userClickTheSearchButton() {
        SearchPage searchPage = new SearchPage(webDriver);
        searchPage.clickSearchButton();
        webDriver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
    }

    @Then("User will direct to result page")
    public void userWillDirectToResultPage() {
        SearchPage searchPage = new SearchPage(webDriver);
        searchPage.landingResultPage();
        webDriver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
    }
}