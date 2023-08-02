package org.example;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchPage {
    public static WebDriver driver;

    public SearchPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath = "//div[@id='homeautosuggestKccZIMvXRPk']/input[@name='q']")
    private WebElement searchField;

    @FindBy(css = "[data-personalised-variant-id='901'] [width='31']")
    private WebElement searchButton;

    @FindBy(xpath = "//legend[.='Was the information on this page useful?']")
    private WebElement resultPage;

    public boolean landingHomePage(){ return searchField.isDisplayed();}
    public void setSearchKey(String searchKey){
        searchField.sendKeys(searchKey);
    }

    public void clickSearchButton() { searchButton.click(); }

    public boolean landingResultPage() { return resultPage.isDisplayed();}
}