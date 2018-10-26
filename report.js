$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("navigation/Common_2.feature");
formatter.feature({
  "line": 1,
  "name": "Market smoke test cases second scenarios",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 278,
      "value": "#---------------------------------------------------------------------------------------------------------------------------------------------------------"
    }
  ],
  "line": 285,
  "name": "Catg : Global Header/Navigation ; Click/Tap Change Account - use view all accounts option",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---use-view-all-accounts-option",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 279,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 280,
      "name": "@market_smoke3"
    },
    {
      "line": 281,
      "name": "@market_smoke"
    },
    {
      "line": 282,
      "name": "@market_smoke_prod"
    },
    {
      "line": 283,
      "name": "@global_header"
    },
    {
      "line": 284,
      "name": "@all_account_view"
    }
  ]
});
formatter.step({
  "line": 286,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 287,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 288,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 289,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "the system must display an account selection section on the page as \u003cselectAccountLabel\u003e,\u003csoldToLabel\u003e,\u003cshipToLabel\u003e,\u003csearchBoxDefaultText\u003e,\u003cviewAllAccountsLink\u003e,\u003ccancelLink\u003e,\u003cchangeAccountButtonLabel\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 291,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 293,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.examples({
  "line": 295,
  "name": "",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---use-view-all-accounts-option;",
  "rows": [
    {
      "cells": [
        "selectAccountLabel",
        "soldToLabel",
        "shipToLabel",
        "searchBoxDefaultText",
        "viewAllAccountsLink",
        "cancelLink",
        "changeAccountButtonLabel"
      ],
      "line": 296,
      "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---use-view-all-accounts-option;;1"
    },
    {
      "cells": [
        "Select Account",
        "Sold To",
        "Ship To",
        "Search Sold To\u0027s or Ship To\u0027s",
        "View All Accounts",
        "Cancel",
        "Change Account"
      ],
      "line": 297,
      "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---use-view-all-accounts-option;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7868505360,
  "status": "passed"
});
formatter.scenario({
  "line": 297,
  "name": "Catg : Global Header/Navigation ; Click/Tap Change Account - use view all accounts option",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---use-view-all-accounts-option;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 281,
      "name": "@market_smoke"
    },
    {
      "line": 282,
      "name": "@market_smoke_prod"
    },
    {
      "line": 280,
      "name": "@market_smoke3"
    },
    {
      "line": 284,
      "name": "@all_account_view"
    },
    {
      "line": 279,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 283,
      "name": "@global_header"
    }
  ]
});
formatter.step({
  "line": 286,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 287,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 288,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 289,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "the system must display an account selection section on the page as Select Account,Sold To,Ship To,Search Sold To\u0027s or Ship To\u0027s,View All Accounts,Cancel,Change Account",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 291,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 293,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 27374701858,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 10341370934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 5100487081,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 9173163561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select Account",
      "offset": 68
    },
    {
      "val": "Sold To",
      "offset": 83
    },
    {
      "val": "Ship To",
      "offset": 91
    },
    {
      "val": "Search Sold To\u0027s or Ship To\u0027s",
      "offset": 99
    },
    {
      "val": "View All Accounts",
      "offset": 129
    },
    {
      "val": "Cancel",
      "offset": 147
    },
    {
      "val": "Change Account",
      "offset": 154
    }
  ],
  "location": "changeaccountdropdown.groovy:25"
});
formatter.result({
  "duration": 14599747582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAllAccounts",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 8303934870,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 832811342,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9403957672,
  "status": "passed"
});
formatter.after({
  "duration": 7077671,
  "status": "passed"
});
formatter.before({
  "duration": 24339082,
  "status": "passed"
});
formatter.scenario({
  "line": 306,
  "name": "Catg : Global Header/Navigation ; Get Products details and verify Product landing and Category Landing Page",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-get-products-details-and-verify-product-landing-and-category-landing-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 299,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 300,
      "name": "@market_smoke3"
    },
    {
      "line": 301,
      "name": "@market_smoke"
    },
    {
      "line": 302,
      "name": "@market_smoke_prod"
    },
    {
      "line": 303,
      "name": "@global_header"
    },
    {
      "line": 304,
      "name": "@getpoductdetails"
    },
    {
      "line": 305,
      "name": "@products_plp_clp"
    }
  ]
});
formatter.step({
  "line": 307,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 308,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "There should be image and title attribute displayed for each item",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 313,
  "name": "Verify items list details related to product",
  "keyword": "And "
});
formatter.step({
  "line": 314,
  "name": "I should see the Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "I click at Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 316,
  "name": "I should see the Item \u0027availabilitymsg\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 317,
  "name": "I click at Item \u0027itemslabel\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "I must be taken to an \u0027ItemDetailsPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 319,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 24781374957,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1742425415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:273"
});
formatter.result({
  "duration": 13460641284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 180833815511,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 180.0 seconds (failed with exception)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:138)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:46)\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:516)\n\tat geb.Page.waitFor(Page.groovy)\n\tat pages.CategoryLandingPage$__clinit__closure1.doCall(CategoryLandingPage.groovy:10)\n\tat pages.CategoryLandingPage$__clinit__closure1.doCall(CategoryLandingPage.groovy)\n\tat geb.Page.verifyThisPageAtOnly(Page.groovy:228)\n\tat geb.Page.verifyAt(Page.groovy:182)\n\tat geb.Page$verifyAt$4.call(Unknown Source)\n\tat geb.Page$verifyAt$4.call(Unknown Source)\n\tat geb.Browser.doAt(Browser.groovy:454)\n\tat geb.Browser.at(Browser.groovy:336)\n\tat geb.binding.BindingUpdater$InvocationForwarding.doCall(BindingUpdater.groovy:73)\n\tat steps.basepage.basepage$_run_closure31.doCall(basepage.groovy:203)\n\tat ✽.And I must be taken to an \u0027CategoryLandingPage\u0027(navigation/Common_2.feature:310)\nCaused by: Assertion failed: \n\n$(\u0027div\u0027, \u0027data-id\u0027: \u0027clpCategoryName\u0027) || $(\u0027#categoryLandingPageContainer\u0027) || $(\"div\", class: \"subCategoryGridWrapper\")\n|                                      |  |                                  |  |\n[]                                     |  []                                 |  []\n                                       false                                 false\n\n\tat pages.CategoryLandingPage$__clinit__closure1$_closure3.doCall(CategoryLandingPage.groovy:11)\n\tat pages.CategoryLandingPage$__clinit__closure1$_closure3.doCall(CategoryLandingPage.groovy)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:127)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:46)\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:516)\n\tat geb.Page.waitFor(Page.groovy)\n\tat pages.CategoryLandingPage$__clinit__closure1.doCall(CategoryLandingPage.groovy:10)\n\tat pages.CategoryLandingPage$__clinit__closure1.doCall(CategoryLandingPage.groovy)\n\tat geb.Page.verifyThisPageAtOnly(Page.groovy:228)\n\tat geb.Page.verifyAt(Page.groovy:182)\n\tat geb.Page$verifyAt$4.call(Unknown Source)\n\tat geb.Page$verifyAt$4.call(Unknown Source)\n\tat geb.Browser.doAt(Browser.groovy:454)\n\tat geb.Browser.at(Browser.groovy:336)\n\tat geb.binding.BindingUpdater$InvocationForwarding.doCall(BindingUpdater.groovy:73)\n\tat steps.basepage.basepage$_run_closure31.doCall(basepage.groovy:203)\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:155)\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:71)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:68)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.runtime.Runtime.run(Runtime.java:121)\n\tat cucumber.runtime.Runtime$run.call(Unknown Source)\n\tat com.cardinalhealth.market.config.CucumberRunner.run(CucumberRunner.groovy:29)\n\tat com.cardinalhealth.market.config.CucumberRunner$run$0.callStatic(Unknown Source)\n\tat com.cardinalhealth.market.config.CucumberRunner.runCucumber(CucumberRunner.groovy:19)\n\tat com.cardinalhealth.market.config.CucumberRunner$runCucumber.call(Unknown Source)\n\tat com.cardinalhealth.market.TestRunner.main(TestRunner.groovy:31)\n",
  "status": "failed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:58"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "shoppingcartpage.groovy:422"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "checkavailibity",
      "offset": 23
    }
  ],
  "location": "itemdetailspage.groovy:19"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "checkavailibity",
      "offset": 17
    }
  ],
  "location": "itemdetailspage.groovy:62"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "availabilitymsg",
      "offset": 23
    }
  ],
  "location": "itemdetailspage.groovy:19"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "itemslabel",
      "offset": 17
    }
  ],
  "location": "itemdetailspage.groovy:62"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1299455744,
  "status": "passed"
});
formatter.before({
  "duration": 26717121,
  "status": "passed"
});
formatter.scenario({
  "line": 327,
  "name": "Catg : Global Header/Navigation ; Click/Tap Change Account - CHANGE account to new ship and sold to account",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---change-account-to-new-ship-and-sold-to-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 321,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 322,
      "name": "@market_smoke3"
    },
    {
      "line": 323,
      "name": "@market_smoke"
    },
    {
      "line": 324,
      "name": "@market_smoke_prod"
    },
    {
      "line": 325,
      "name": "@global_header"
    },
    {
      "line": 326,
      "name": "@account_change"
    }
  ]
});
formatter.step({
  "line": 328,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 329,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 330,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 331,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 332,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 333,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 335,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 336,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 337,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 338,
  "name": "I verify that \u0027SoldToNum\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 339,
  "name": "I verify that \u0027ShipToNum\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 30940058994,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 7694479472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 2006376188,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 13489104565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAllAccounts",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 7994676142,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 1660025568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newsoldto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 3115480023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newshipto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 5067912796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountslistnonselectedrow",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 59
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 10828132661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "changeButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 20178577085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToNum",
      "offset": 15
    },
    {
      "val": "temp_newsoldto",
      "offset": 42
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 17720923006,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToNum",
      "offset": 15
    },
    {
      "val": "temp_newshipto",
      "offset": 42
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 12504882199,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7773679913,
  "status": "passed"
});
formatter.after({
  "duration": 808259,
  "status": "passed"
});
formatter.before({
  "duration": 29455503,
  "status": "passed"
});
formatter.scenario({
  "line": 348,
  "name": "Catg : Global Header/Navigation ; Search by sold to account and make sure search results rows contains that number",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-search-by-sold-to-account-and-make-sure-search-results-rows-contains-that-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 342,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 343,
      "name": "@market_smoke3"
    },
    {
      "line": 344,
      "name": "@market_smoke"
    },
    {
      "line": 345,
      "name": "@market_smoke_prod"
    },
    {
      "line": 346,
      "name": "@global_header"
    },
    {
      "line": 347,
      "name": "@searchby_soldto_verifyreturned_changeACCOUNT"
    }
  ]
});
formatter.step({
  "line": 349,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 350,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 351,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 352,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 355,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 356,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "I click on element \"cancelButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 359,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 360,
  "name": "Enter Text \"temp_newsoldto\" in Text Box field \"search\" in module \"changeAccountDropDown\"",
  "keyword": "And "
});
formatter.step({
  "line": 361,
  "name": "I click on element \"searchButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 362,
  "name": "Make sure the search results contains the account \"number\" that is being searched for",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 365,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 366,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 367,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "I verify that \u0027SoldToNum\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 369,
  "name": "I verify that \u0027ShipToNum\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 370,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 23530922996,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 7738132471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 1805255437,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 8885645317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAllAccounts",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 6284330773,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 752121681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newsoldto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 3050306383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newshipto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 2853884207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancelButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 6838282376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 1009908466,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 9618946301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_newsoldto",
      "offset": 12
    },
    {
      "val": "search",
      "offset": 47
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 7294967378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 8012709110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "number",
      "offset": 51
    }
  ],
  "location": "changeaccountdropdown.groovy:123"
});
formatter.result({
  "duration": 3096495082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newsoldto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 4050491723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newshipto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 4790802628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountslistnonselectedrow",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 59
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 12391974705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "changeButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 17454981677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToNum",
      "offset": 15
    },
    {
      "val": "temp_newsoldto",
      "offset": 42
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 14706094340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToNum",
      "offset": 15
    },
    {
      "val": "temp_newshipto",
      "offset": 42
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 11890614368,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7506915279,
  "status": "passed"
});
formatter.after({
  "duration": 633179,
  "status": "passed"
});
formatter.before({
  "duration": 31187653,
  "status": "passed"
});
formatter.scenario({
  "line": 378,
  "name": "Catg : Global Header/Navigation ; Search by sold to NAME and make sure search results rows contains that name",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-search-by-sold-to-name-and-make-sure-search-results-rows-contains-that-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 372,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 373,
      "name": "@market_smoke3"
    },
    {
      "line": 374,
      "name": "@market_smoke"
    },
    {
      "line": 375,
      "name": "@market_smoke_prod"
    },
    {
      "line": 376,
      "name": "@global_header"
    },
    {
      "line": 377,
      "name": "@searchby_soldto_verifyreturned_changeNAME"
    }
  ]
});
formatter.step({
  "line": 379,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 380,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 381,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 382,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 383,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 384,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "Save value of element \"firstnonselectedrowSoldToName\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 386,
  "name": "Save value of element \"firstnonselectedrowShipToName\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 387,
  "name": "I click on element \"cancelButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 388,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 389,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "Enter Text \"temp_newsoldto\" in Text Box field \"search\" in module \"changeAccountDropDown\"",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "I click on element \"searchButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 392,
  "name": "Make sure the search results contains the account \"name\" that is being searched for",
  "keyword": "And "
});
formatter.step({
  "line": 394,
  "name": "Save value of element \"firstnonselectedrowSoldToName\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 395,
  "name": "Save value of element \"firstnonselectedrowShipToName\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 396,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 397,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 399,
  "name": "I verify that \u0027SoldToName\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 400,
  "name": "I verify that \u0027ShipToName\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 401,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 24746783632,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 7967350609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 1033006532,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 12545828366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAllAccounts",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 9174865396,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 950803288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToName",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 65
    },
    {
      "val": "temp_newsoldto",
      "offset": 101
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 16933169937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToName",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 65
    },
    {
      "val": "temp_newshipto",
      "offset": 101
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 13814252438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancelButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 9344511319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 1153225622,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 10829958374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_newsoldto",
      "offset": 12
    },
    {
      "val": "search",
      "offset": 47
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 9471390854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 9263065292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 51
    }
  ],
  "location": "changeaccountdropdown.groovy:123"
});
formatter.result({
  "duration": 7056164301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToName",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 65
    },
    {
      "val": "temp_newsoldto",
      "offset": 101
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 15826739543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToName",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 65
    },
    {
      "val": "temp_newshipto",
      "offset": 101
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 12853993853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountslistnonselectedrow",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 59
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 8349416590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "changeButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 24261232330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToName",
      "offset": 15
    },
    {
      "val": "temp_newsoldto",
      "offset": 43
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 14820956036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToName",
      "offset": 15
    },
    {
      "val": "temp_newshipto",
      "offset": 43
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 19136090270,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7841199617,
  "status": "passed"
});
formatter.after({
  "duration": 511982,
  "status": "passed"
});
formatter.before({
  "duration": 24456007,
  "status": "passed"
});
formatter.scenario({
  "line": 409,
  "name": "Catg : Global Header/Navigation ; Search by SHIP to account and make sure search results rows contains that SHIPTO ACT number",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-search-by-ship-to-account-and-make-sure-search-results-rows-contains-that-shipto-act-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 403,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 404,
      "name": "@market_smoke3"
    },
    {
      "line": 405,
      "name": "@market_smoke"
    },
    {
      "line": 406,
      "name": "@market_smoke_prod"
    },
    {
      "line": 407,
      "name": "@global_header"
    },
    {
      "line": 408,
      "name": "@searchby_Shipto_verifyreturned_changeACCOUNT"
    }
  ]
});
formatter.step({
  "line": 410,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 411,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 412,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 413,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "I click on element \"cancelButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 419,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 420,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 421,
  "name": "Enter Text \"temp_newshipto\" in Text Box field \"search\" in module \"changeAccountDropDown\"",
  "keyword": "And "
});
formatter.step({
  "line": 422,
  "name": "I click on element \"searchButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 423,
  "name": "Make sure the search results contains the account \"number\" that is being searched for",
  "keyword": "And "
});
formatter.step({
  "line": 425,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 426,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 427,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 428,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 429,
  "name": "I verify that \u0027SoldToNum\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 430,
  "name": "I verify that \u0027ShipToNum\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 431,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 25686762041,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 8399497603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 1231871918,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 10546649740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAllAccounts",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 7772747625,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 673222764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newsoldto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 3281652549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newshipto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 4596166494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancelButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 9094695349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 997719918,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 8168004339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_newshipto",
      "offset": 12
    },
    {
      "val": "search",
      "offset": 47
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 10918381881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 8854000502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "number",
      "offset": 51
    }
  ],
  "location": "changeaccountdropdown.groovy:123"
});
formatter.result({
  "duration": 1170127054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newsoldto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 3092217380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newshipto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 3732662469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountslistnonselectedrow",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 59
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 8291016035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "changeButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 23423827942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToNum",
      "offset": 15
    },
    {
      "val": "temp_newsoldto",
      "offset": 42
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 15220428540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToNum",
      "offset": 15
    },
    {
      "val": "temp_newshipto",
      "offset": 42
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 15450635820,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9986729877,
  "status": "passed"
});
formatter.after({
  "duration": 517360,
  "status": "passed"
});
formatter.before({
  "duration": 26398194,
  "status": "passed"
});
formatter.scenario({
  "line": 439,
  "name": "Catg : Global Header/Navigation ; Search by ship to NAME and make sure search results rows contains that ship to name",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-search-by-ship-to-name-and-make-sure-search-results-rows-contains-that-ship-to-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 433,
      "name": "@market_smoke3"
    },
    {
      "line": 434,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 435,
      "name": "@market_smoke"
    },
    {
      "line": 436,
      "name": "@market_smoke_prod"
    },
    {
      "line": 437,
      "name": "@global_header"
    },
    {
      "line": 438,
      "name": "@searchby_shipto_verifyreturned_changeNAME"
    }
  ]
});
formatter.step({
  "line": 440,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 441,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 442,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 443,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 444,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 445,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 446,
  "name": "Save value of element \"firstnonselectedrowSoldToName\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 447,
  "name": "Save value of element \"firstnonselectedrowShipToName\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 448,
  "name": "I click on element \"cancelButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 449,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 450,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 451,
  "name": "Enter Text \"temp_newshipto\" in Text Box field \"search\" in module \"changeAccountDropDown\"",
  "keyword": "And "
});
formatter.step({
  "line": 452,
  "name": "I click on element \"searchButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 453,
  "name": "Make sure the search results contains the account \"name\" that is being searched for",
  "keyword": "And "
});
formatter.step({
  "line": 455,
  "name": "Save value of element \"firstnonselectedrowSoldToName\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 456,
  "name": "Save value of element \"firstnonselectedrowShipToName\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 457,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 458,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 459,
  "name": "Wait for 5000 ms",
  "keyword": "And "
});
formatter.step({
  "line": 460,
  "name": "I verify that \u0027SoldToName\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 461,
  "name": "I verify that \u0027ShipToName\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 462,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 29985184167,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 10044287285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 1257336013,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 10704615648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAllAccounts",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 10348681441,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 1451885151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToName",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 65
    },
    {
      "val": "temp_newsoldto",
      "offset": 101
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 15789248306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToName",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 65
    },
    {
      "val": "temp_newshipto",
      "offset": 101
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 13993675783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancelButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 8765757210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 1507774873,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 15096263710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_newshipto",
      "offset": 12
    },
    {
      "val": "search",
      "offset": 47
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 9825819528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 10070572342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 51
    }
  ],
  "location": "changeaccountdropdown.groovy:123"
});
formatter.result({
  "duration": 12597456103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToName",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 65
    },
    {
      "val": "temp_newsoldto",
      "offset": 101
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 16684315090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToName",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 65
    },
    {
      "val": "temp_newshipto",
      "offset": 101
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 19418889294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountslistnonselectedrow",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 59
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 8790896157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "changeButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 21980108912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:346"
});
formatter.result({
  "duration": 5000481776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToName",
      "offset": 15
    },
    {
      "val": "temp_newsoldto",
      "offset": 43
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 23257816165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToName",
      "offset": 15
    },
    {
      "val": "temp_newshipto",
      "offset": 43
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 18705124608,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9387643702,
  "status": "passed"
});
formatter.after({
  "duration": 484601,
  "status": "passed"
});
formatter.before({
  "duration": 23706011,
  "status": "passed"
});
formatter.scenario({
  "line": 470,
  "name": "Catg : Global Header/Navigation ; Sold to account details",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-sold-to-account-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 464,
      "name": "@market_smoke3"
    },
    {
      "line": 465,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 466,
      "name": "@market_smoke"
    },
    {
      "line": 467,
      "name": "@market_smoke_prod"
    },
    {
      "line": 468,
      "name": "@global_header"
    },
    {
      "line": 469,
      "name": "@soldto_shipto_account_details"
    }
  ]
});
formatter.step({
  "line": 471,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 472,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 473,
  "name": "I click element \u0027SoldTo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 474,
  "name": "Make sure element \"SoldToName\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 475,
  "name": "Make sure element \"SoldToName2\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 476,
  "name": "Make sure element \"SoldToAddress1\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 477,
  "name": "Make sure element \"SoldToState\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 478,
  "name": "Make sure element \"SoldToBaseValue\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "I click element \u0027ShipTo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 481,
  "name": "Make sure element \"ShipToName\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 482,
  "name": "Make sure element \"ShipToName2\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 483,
  "name": "Make sure element \"ShipToAddress1\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 484,
  "name": "Make sure element \"ShipToState\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 485,
  "name": "Make sure element \"ShipToBaseValue\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 486,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 31541919965,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 11466465749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldTo",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 10167911504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToName",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 34
    },
    {
      "val": "global",
      "offset": 51
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 5745608509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToName2",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 35
    },
    {
      "val": "global",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 302421653076,
  "error_message": "java.lang.AssertionError: ERROR ERROR : Please check the condition again, Scenario failed as element SoldToName2 is not present or was not displayed/returned in due time, On page- pages.BasePage -\u003e globalHeader: modules.header.GlobalHeader. Expression: false\n\tat steps.common_csp.common_csp$_run_closure9.doCall(common_csp.groovy:94)\n\tat ✽.And Make sure element \"SoldToName2\" is present in page \"global\"(navigation/Common_2.feature:475)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToAddress1",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 38
    },
    {
      "val": "global",
      "offset": 55
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToState",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 35
    },
    {
      "val": "global",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToBaseValue",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 39
    },
    {
      "val": "global",
      "offset": 56
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipTo",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToName",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 34
    },
    {
      "val": "global",
      "offset": 51
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToName2",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 35
    },
    {
      "val": "global",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToAddress1",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 38
    },
    {
      "val": "global",
      "offset": 55
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToState",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 35
    },
    {
      "val": "global",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToBaseValue",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 39
    },
    {
      "val": "global",
      "offset": 56
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1211347007,
  "status": "passed"
});
formatter.before({
  "duration": 23504075,
  "status": "passed"
});
formatter.scenario({
  "line": 494,
  "name": "Catg : Global Header/Navigation ; Click/Tap logo to go to Home page",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-logo-to-go-to-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 488,
      "name": "@market_smoke3"
    },
    {
      "line": 489,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 490,
      "name": "@market_smoke"
    },
    {
      "line": 491,
      "name": "@market_smoke_prod"
    },
    {
      "line": 492,
      "name": "@global_header"
    },
    {
      "line": 493,
      "name": "@logo_homepage"
    }
  ]
});
formatter.step({
  "line": 495,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 496,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 497,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 498,
  "name": "I click on \u0027Logo\u0027 in Tablet Header",
  "keyword": "When "
});
formatter.step({
  "line": 499,
  "name": "I am on \"BasePage\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 44137564371,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 689686610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:273"
});
formatter.result({
  "duration": 18504914823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logo",
      "offset": 12
    }
  ],
  "location": "basepage.groovy:104"
});
formatter.result({
  "duration": 8806608968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 477492873,
  "status": "passed"
});
formatter.after({
  "duration": 573747,
  "status": "passed"
});
formatter.before({
  "duration": 36899345,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 529,
      "value": "#In Process"
    }
  ],
  "line": 536,
  "name": "Catg : Shopping Cart ; Chnage price and quantity and try to navigate out of shopping cart to get update/discard changes messages",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-chnage-price-and-quantity-and-try-to-navigate-out-of-shopping-cart-to-get-update/discard-changes-messages",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 530,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 531,
      "name": "@market_smoke_prod"
    },
    {
      "line": 532,
      "name": "@market_smoke3"
    },
    {
      "line": 533,
      "name": "@market_smoke"
    },
    {
      "line": 534,
      "name": "@shopping"
    },
    {
      "line": 535,
      "name": "@shiopping2"
    }
  ]
});
formatter.step({
  "line": 537,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 538,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 539,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 540,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 541,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 542,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 543,
  "name": "I verify the Text on \u0027itemsaddedtocart\u0027 is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 544,
  "name": "I verify the Text on \u0027HeaderCartItemCount\u0027 is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 545,
  "name": "I click element \u0027cartItemIcon\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 546,
  "name": "I am on \"ShoppingCartPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 547,
  "name": "Update Price and quantity on shopping cart page",
  "keyword": "And "
});
formatter.step({
  "line": 548,
  "name": "Make sure element \"update\" is enabled in page \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 549,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 550,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 551,
  "name": "Make sure elements \"dialogdiscard\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 552,
  "name": "I click on element \"dialogdiscard\" in module \"globalHeader\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 553,
  "name": "I click element \u0027cartItemIcon\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 554,
  "name": "I am on \"ShoppingCartPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 555,
  "name": "Make sure element \"update\" is disabled in page \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 34269432755,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 728900630,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:13"
});
formatter.result({
  "duration": 310852715557,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 300.0 seconds\n\tat geb.waiting.Wait.waitFor(Wait.groovy:138)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:38)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.waiting.WaitingSupport$waitFor$0.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:506)\n\tat geb.Page.waitFor(Page.groovy)\n\tat geb.Browser.methodMissing(Browser.groovy:206)\n\tat geb.binding.BindingUpdater$InvocationForwarding.doCall(BindingUpdater.groovy:73)\n\tat steps.shoppingcart.shoppingcartpage$_run_closure1.doCall(shoppingcartpage.groovy:15)\n\tat ✽.And Delete any existing products in cart(navigation/Common_2.feature:539)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "shoppingcartpage.groovy:294"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "itemsaddedtocart",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:389"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "HeaderCartItemCount",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:389"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "cartItemIcon",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ShoppingCartPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "shoppingcartpage.groovy:436"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "update",
      "offset": 19
    },
    {
      "val": "enabled",
      "offset": 30
    },
    {
      "val": "\u003cstring\u003e",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:253"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:273"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "dialogdiscard",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "dialogdiscard",
      "offset": 20
    },
    {
      "val": "globalHeader",
      "offset": 46
    }
  ],
  "location": "common_csp.groovy:524"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "cartItemIcon",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ShoppingCartPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "update",
      "offset": 19
    },
    {
      "val": "disabled",
      "offset": 30
    },
    {
      "val": "\u003cstring\u003e",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:253"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1419747813,
  "status": "passed"
});
});