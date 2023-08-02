$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/FindLoc.feature");
formatter.feature({
  "line": 1,
  "name": "Find Locations Navigation",
  "description": "",
  "id": "find-locations-navigation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19723698200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User do click the Find Locations button",
  "description": "",
  "id": "find-locations-navigation;user-do-click-the-find-locations-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@ALl"
    },
    {
      "line": 2,
      "name": "@FindLoc"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User already on NSW website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click the Find Locations button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User will direct to Find a Service NSW location page",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.userAlreadyOnNSWWebsite()"
});
formatter.result({
  "duration": 907264400,
  "status": "passed"
});
formatter.match({
  "location": "FindLocSteps.userClickTheFindLocationsButton()"
});
formatter.result({
  "duration": 6703645200,
  "status": "passed"
});
formatter.match({
  "location": "FindLocSteps.userWillDirectToFindAServiceNSWLocationPage()"
});
formatter.result({
  "duration": 349320000,
  "status": "passed"
});
formatter.after({
  "duration": 977041900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify search result for multiple location suburbs",
  "description": "",
  "id": "find-locations-navigation;verify-search-result-for-multiple-location-suburbs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@All"
    },
    {
      "line": 8,
      "name": "@FindLoc"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User already on NSW website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User click the Find Locations button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User will direct to Find a Service NSW location page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters \"\u003cLocationSuburb\u003e\" in the search input",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see \"\u003cExpectedResult\u003e\" in the search result list",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "find-locations-navigation;verify-search-result-for-multiple-location-suburbs;",
  "rows": [
    {
      "cells": [
        "LocationSuburb",
        "ExpectedResult"
      ],
      "line": 18,
      "id": "find-locations-navigation;verify-search-result-for-multiple-location-suburbs;;1"
    },
    {
      "cells": [
        "Sydney 2000",
        "Marrickville Service Centre"
      ],
      "line": 19,
      "id": "find-locations-navigation;verify-search-result-for-multiple-location-suburbs;;2"
    },
    {
      "cells": [
        "Sydney Domestic Airport 2020",
        "Rockdale Service Centre"
      ],
      "line": 20,
      "id": "find-locations-navigation;verify-search-result-for-multiple-location-suburbs;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13114991300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify search result for multiple location suburbs",
  "description": "",
  "id": "find-locations-navigation;verify-search-result-for-multiple-location-suburbs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@All"
    },
    {
      "line": 8,
      "name": "@FindLoc"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User already on NSW website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User click the Find Locations button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User will direct to Find a Service NSW location page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters \"Sydney 2000\" in the search input",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see \"Marrickville Service Centre\" in the search result list",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.userAlreadyOnNSWWebsite()"
});
formatter.result({
  "duration": 155904100,
  "status": "passed"
});
formatter.match({
  "location": "FindLocSteps.userClickTheFindLocationsButton()"
});
formatter.result({
  "duration": 4277419300,
  "status": "passed"
});
formatter.match({
  "location": "FindLocSteps.userWillDirectToFindAServiceNSWLocationPage()"
});
formatter.result({
  "duration": 1634574600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney 2000",
      "offset": 13
    }
  ],
  "location": "FindLocSteps.userEntersInTheSearchInput(String)"
});
formatter.result({
  "duration": 1254539800,
  "status": "passed"
});
formatter.match({
  "location": "FindLocSteps.userClicksTheSearchButton()"
});
formatter.result({
  "duration": 3795910500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marrickville Service Centre",
      "offset": 17
    }
  ],
  "location": "FindLocSteps.userShouldSeeInTheSearchResultList(String)"
});
formatter.result({
  "duration": 615900,
  "status": "passed"
});
formatter.after({
  "duration": 1040781600,
  "status": "passed"
});
formatter.before({
  "duration": 15600105900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify search result for multiple location suburbs",
  "description": "",
  "id": "find-locations-navigation;verify-search-result-for-multiple-location-suburbs;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@All"
    },
    {
      "line": 8,
      "name": "@FindLoc"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User already on NSW website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User click the Find Locations button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User will direct to Find a Service NSW location page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters \"Sydney Domestic Airport 2020\" in the search input",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see \"Rockdale Service Centre\" in the search result list",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.userAlreadyOnNSWWebsite()"
});
formatter.result({
  "duration": 142480500,
  "status": "passed"
});
formatter.match({
  "location": "FindLocSteps.userClickTheFindLocationsButton()"
});
formatter.result({
  "duration": 3846893700,
  "status": "passed"
});
formatter.match({
  "location": "FindLocSteps.userWillDirectToFindAServiceNSWLocationPage()"
});
formatter.result({
  "duration": 994163400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney Domestic Airport 2020",
      "offset": 13
    }
  ],
  "location": "FindLocSteps.userEntersInTheSearchInput(String)"
});
formatter.result({
  "duration": 292610400,
  "status": "passed"
});
formatter.match({
  "location": "FindLocSteps.userClicksTheSearchButton()"
});
formatter.result({
  "duration": 2437056700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rockdale Service Centre",
      "offset": 17
    }
  ],
  "location": "FindLocSteps.userShouldSeeInTheSearchResultList(String)"
});
formatter.result({
  "duration": 80700,
  "status": "passed"
});
formatter.after({
  "duration": 894340000,
  "status": "passed"
});
});