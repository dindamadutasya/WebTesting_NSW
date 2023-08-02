Feature: Search the keyword
  @All @Search
  Scenario: User do search with input the information keyword to find the information
    Given User already on NSW website
    And User input the keyword <"Apply for a number plate"> in search field for do searching
    When User click the search button
    Then User will direct to result page