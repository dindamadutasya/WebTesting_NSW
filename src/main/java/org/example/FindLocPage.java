package org.example;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FindLocPage {

    public static WebDriver driver;

    public FindLocPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath = "//ul[@class='MainNav__list-peZtddYtxn']//a[.='Find locations']")
    private WebElement findLocationsbtn;

    @FindBy(xpath = "//h1[@id='page-title']")
    private WebElement findLocationsPage;

    @FindBy(xpath = "//input[@id='locatorTextSearch']")
    private WebElement suburbSearch;

    @FindBy(css = ".button--primary > [width='31']")
    private WebElement searchSuburbBtn;

    @FindBy(xpath = "//button[@class='filter-bar__button button button--secondary button--short is-active']")
    private WebElement filterAll;

    @FindBy(xpath = "//div[@class='gmnoprint gm-bundled-control gm-bundled-control-on-bottom']/div[3]//button[2]")
    private WebElement minMapBtn;


    public boolean landingFindLocationsPage(){
        return findLocationsPage.isDisplayed();
    }

    public void clickFindLocationsBtn(){
        findLocationsbtn.click();
    }

    public void searchSuburb (String suburb){
        suburbSearch.sendKeys(suburb);
    }

    public void clickSuburbBtn(){
        searchSuburbBtn.click();
    }

    public void clickAllFilter(){
        filterAll.click();
    }

    public void clickMinMapBtn(){
        minMapBtn.click();
    }



}
