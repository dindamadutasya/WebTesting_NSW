Feature: Find Locations Navigation
  @ALl @FindLoc
  Scenario: User do click the Find Locations button
    Given User already on NSW website
    When User click the Find Locations button
    Then User will direct to Find a Service NSW location page

  @All @FindLoc
  Scenario Outline: Verify search result for multiple location suburbs
    Given User already on NSW website
    When User click the Find Locations button
    Then User will direct to Find a Service NSW location page
    When User enters "<LocationSuburb>" in the search input
    And User clicks the search button
    Then User should see "<ExpectedResult>" in the search result list

    Examples:
      | LocationSuburb               | ExpectedResult              |
      | Sydney 2000                  | Marrickville Service Centre |
      | Sydney Domestic Airport 2020 | Rockdale Service Centre     |