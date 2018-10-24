$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("navigation/Common.feature");
formatter.feature({
  "line": 1,
  "name": "Market smoke test cases",
  "description": "",
  "id": "market-smoke-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9338212530,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#hardcoded"
    }
  ],
  "line": 10,
  "name": "Catg : Alternatives ; Search for product with alternative option and make sure can view alternative products",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-alternatives-;-search-for-product-with-alternative-option-and-make-sure-can-view-alternative-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@market_smoke1"
    },
    {
      "line": 5,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 6,
      "name": "@market_smoke"
    },
    {
      "line": 7,
      "name": "@market_smoke_prod"
    },
    {
      "line": 8,
      "name": "@alternative"
    },
    {
      "line": 9,
      "name": "@alternativeproducts"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Search product by word \"DRAINAGE POUCH ONE-PIECE ACTIVELIFE OPEN PRE-CUT\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I am on the \"SearchResultPage\" Page and click at item \"SearchViewAlternativeLink\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I must be taken to an \u0027ShopAlternativesPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Element \"alternativesTitle\" has value \"Shop Alternatives\" in page \"ShopAlternativesPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Make sure element \"no_alternatives_present\" is not present in page \"\"",
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
  "duration": 31323744725,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1348829850,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 38256657293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DRAINAGE POUCH ONE-PIECE ACTIVELIFE OPEN PRE-CUT",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 33854933867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 13
    },
    {
      "val": "SearchViewAlternativeLink",
      "offset": 55
    }
  ],
  "location": "itemdetailspage.groovy:77"
});
formatter.result({
  "duration": 17707386265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShopAlternativesPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 841599410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alternativesTitle",
      "offset": 9
    },
    {
      "val": "Shop Alternatives",
      "offset": 39
    },
    {
      "val": "ShopAlternativesPage",
      "offset": 67
    }
  ],
  "location": "common_csp.groovy:263"
});
formatter.result({
  "duration": 762922554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no_alternatives_present",
      "offset": 19
    },
    {
      "val": "not present",
      "offset": 47
    },
    {
      "val": "",
      "offset": 68
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 2036676142,
  "status": "passed"
});
formatter.after({
  "duration": 8481533,
  "status": "passed"
});
formatter.before({
  "duration": 38138801,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 20,
      "value": "#hardcoded"
    }
  ],
  "line": 27,
  "name": "Catg : Alternatives : View alternatives - link on the IDP",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-alternatives-:-view-alternatives---link-on-the-idp",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@market_smoke1"
    },
    {
      "line": 22,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 23,
      "name": "@market_smoke"
    },
    {
      "line": 24,
      "name": "@market_smoke_prod"
    },
    {
      "line": 25,
      "name": "@alternative"
    },
    {
      "line": 26,
      "name": "@alternative_plp"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select \"O.R. \u0026 Surgical\" from products dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I am on the \"PlpPage\" Page and click at item \"AlternativeLink\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I must be taken to an \u0027ShopAlternativesPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Make sure element \"no_alternatives_present\" is not present in page \"\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Element \"alternativesTitle\" has value \"Shop Alternatives\" in page \"ShopAlternativesPage\"",
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
  "duration": 36537702828,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1352300658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O.R. \u0026 Surgical",
      "offset": 10
    }
  ],
  "location": "categorynavigation.groovy:291"
});
formatter.result({
  "duration": 21033341460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1177179012,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 39688364151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    },
    {
      "val": "AlternativeLink",
      "offset": 46
    }
  ],
  "location": "itemdetailspage.groovy:77"
});
formatter.result({
  "duration": 15275255791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShopAlternativesPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 880453536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no_alternatives_present",
      "offset": 19
    },
    {
      "val": "not present",
      "offset": 47
    },
    {
      "val": "",
      "offset": 68
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 2379756821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alternativesTitle",
      "offset": 9
    },
    {
      "val": "Shop Alternatives",
      "offset": 39
    },
    {
      "val": "ShopAlternativesPage",
      "offset": 67
    }
  ],
  "location": "common_csp.groovy:263"
});
formatter.result({
  "duration": 775390619,
  "status": "passed"
});
formatter.after({
  "duration": 697602,
  "status": "passed"
});
formatter.before({
  "duration": 23816872,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 38,
      "value": "#hardcoded"
    }
  ],
  "line": 45,
  "name": "Catg : Alternatives ; Open Alternative option and Verify details of ORIGINAL products",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-alternatives-;-open-alternative-option-and-verify-details-of-original-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@market_smoke"
    },
    {
      "line": 40,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 41,
      "name": "@market_smoke1"
    },
    {
      "line": 42,
      "name": "@market_smoke_prod"
    },
    {
      "line": 43,
      "name": "@alternative"
    },
    {
      "line": 44,
      "name": "@alternativeproducts_orig_prod_details"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Search product by word \"DRAINAGE POUCH ONE-PIECE ACTIVELIFE OPEN PRE-CUT\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I am on the \"SearchResultPage\" Page and click at item \"SearchViewAlternativeLink\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I must be taken to an \u0027ShopAlternativesPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Element \"alternativesTitle\" has value \"Shop Alternatives\" in page \"ShopAlternativesPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Make sure element \"no_alternatives_present\" is not present in page \"\"",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Make sure elements \"orig_prod_manufacturername,orig_prod_material,orig_prod_title,orig_prod_selectbutton\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Make sure elements \"orig_prod_price,orig_prod_availibity,orig_prod_description,orig_prod_manufacturernumber,orig_prod_product\" are present",
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
  "duration": 33138289859,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 874577736,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 11041056857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DRAINAGE POUCH ONE-PIECE ACTIVELIFE OPEN PRE-CUT",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 30454875970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 13
    },
    {
      "val": "SearchViewAlternativeLink",
      "offset": 55
    }
  ],
  "location": "itemdetailspage.groovy:77"
});
formatter.result({
  "duration": 11927232423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShopAlternativesPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1153419034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alternativesTitle",
      "offset": 9
    },
    {
      "val": "Shop Alternatives",
      "offset": 39
    },
    {
      "val": "ShopAlternativesPage",
      "offset": 67
    }
  ],
  "location": "common_csp.groovy:263"
});
formatter.result({
  "duration": 1311737265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no_alternatives_present",
      "offset": 19
    },
    {
      "val": "not present",
      "offset": 47
    },
    {
      "val": "",
      "offset": 68
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1380298879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orig_prod_manufacturername,orig_prod_material,orig_prod_title,orig_prod_selectbutton",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 110
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 5767142659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orig_prod_price,orig_prod_availibity,orig_prod_description,orig_prod_manufacturernumber,orig_prod_product",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 131
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 19936142432,
  "status": "passed"
});
formatter.after({
  "duration": 562877,
  "status": "passed"
});
formatter.before({
  "duration": 24164841,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 57,
      "value": "#hardcoded"
    }
  ],
  "line": 64,
  "name": "Catg : Alternatives ; Search for alternative option and Verify details of ALTERNATIVE products",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-alternatives-;-search-for-alternative-option-and-verify-details-of-alternative-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@market_smoke"
    },
    {
      "line": 59,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 60,
      "name": "@market_smoke1"
    },
    {
      "line": 61,
      "name": "@market_smoke_prod"
    },
    {
      "line": 62,
      "name": "@alternative"
    },
    {
      "line": 63,
      "name": "@alternativeproducts_alternative_prod_details"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Search product by word \"DRAINAGE POUCH ONE-PIECE ACTIVELIFE OPEN PRE-CUT\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I am on the \"SearchResultPage\" Page and click at item \"SearchViewAlternativeLink\"",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I must be taken to an \u0027ShopAlternativesPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Element \"alternativesTitle\" has value \"Shop Alternatives\" in page \"ShopAlternativesPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Make sure element \"no_alternatives_present\" is not present in page \"\"",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Make sure elements \"all_alternatives,each_alternative,each_alternative_image,each_alternative_product,each_alternative_price,each_alternative_availibity,each_alternative_manufacturernumber\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Make sure elements \"each_alternative_manufacturername,each_alternative_material,each_alternative_title,each_alternative_selectbutton,each_alternative_description\" are present",
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
  "duration": 38344355328,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 892515604,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 8210133784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DRAINAGE POUCH ONE-PIECE ACTIVELIFE OPEN PRE-CUT",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 23176438470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 13
    },
    {
      "val": "SearchViewAlternativeLink",
      "offset": 55
    }
  ],
  "location": "itemdetailspage.groovy:77"
});
formatter.result({
  "duration": 9701298745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShopAlternativesPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 771219862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alternativesTitle",
      "offset": 9
    },
    {
      "val": "Shop Alternatives",
      "offset": 39
    },
    {
      "val": "ShopAlternativesPage",
      "offset": 67
    }
  ],
  "location": "common_csp.groovy:263"
});
formatter.result({
  "duration": 1266970442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no_alternatives_present",
      "offset": 19
    },
    {
      "val": "not present",
      "offset": 47
    },
    {
      "val": "",
      "offset": 68
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1156226124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all_alternatives,each_alternative,each_alternative_image,each_alternative_product,each_alternative_price,each_alternative_availibity,each_alternative_manufacturernumber",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 194
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 14785017898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "each_alternative_manufacturername,each_alternative_material,each_alternative_title,each_alternative_selectbutton,each_alternative_description",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 167
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 10161891906,
  "status": "passed"
});
formatter.after({
  "duration": 652994,
  "status": "passed"
});
formatter.before({
  "duration": 24476642,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Catg : Compare : Add items to compare not more than 4 items /check for clear all/try",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-add-items-to-compare-not-more-than-4-items-/check-for-clear-all/try",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 77,
      "name": "@market_smoke"
    },
    {
      "line": 78,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 79,
      "name": "@market_smoke1"
    },
    {
      "line": 80,
      "name": "@market_smoke_prod"
    },
    {
      "line": 81,
      "name": "@compare"
    },
    {
      "line": 82,
      "name": "@add_items_to_compare"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Add \"4\" items to compare and make sure compare tray appears",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "The count of element \"CompareTrayItem\" is \u00274\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "Make sure elements \"CompareTrayClearAll\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I must see compare tray item \u00273\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I must see compare tray item \u00273\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I must see compare tray item \u00273\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I must see compare tray item \u00273\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I must see compare tray item \u00274\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I must see compare tray item \u00274\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I must see compare tray item \u00274\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I must see compare tray item \u00274\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "I must not see compare tray items",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
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
  "duration": 32735867320,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 882801500,
  "status": "passed"
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
  "duration": 33796625857,
  "status": "passed"
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
  "duration": 1287604930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 12
    },
    {
      "val": "CompareTrayClearAll",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:349"
});
formatter.result({
  "duration": 945392091,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 5751213982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 5
    }
  ],
  "location": "searchresultpage.groovy:579"
});
formatter.result({
  "duration": 44960627793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayItem",
      "offset": 22
    },
    {
      "val": "4",
      "offset": 43
    }
  ],
  "location": "searchresultpage.groovy:716"
});
formatter.result({
  "duration": 250978123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 2760393701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 719688583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 916415687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayClearAll",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1474738019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 371486369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayItemImage",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 435853373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayItemNum",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 461378616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 450606357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 1702494536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "CompareTrayItemImage",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 417928352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "CompareTrayItemNum",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 657561720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 464371958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 436220680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    },
    {
      "val": "CompareTrayItemImage",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 443741571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    },
    {
      "val": "CompareTrayItemNum",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 1252298629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 925528696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 484147392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 30
    },
    {
      "val": "CompareTrayItemImage",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 422846148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 30
    },
    {
      "val": "CompareTrayItemNum",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 548775025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 455167048,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9714357903,
  "status": "passed"
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
  "duration": 36479664403,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 6510844793,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 11035979993,
  "status": "passed"
});
formatter.after({
  "duration": 677301,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 123,
  "name": "Catg : Compare : Repeat 4times..(based on item ctn# 1-4)-Compare tray persist after 2nd search/page up/down \u0026 button disabled/enabled as expected",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 117,
      "name": "@market_smoke"
    },
    {
      "line": 118,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 119,
      "name": "@market_smoke1"
    },
    {
      "line": 120,
      "name": "@market_smoke_prod"
    },
    {
      "line": 121,
      "name": "@compare"
    },
    {
      "line": 122,
      "name": "@compare_two_four_items"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "Add \"\u003ccompare_items\u003e\" items to compare and make sure compare tray appears",
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "The count of element \"CompareTrayItem\" is \u0027\u003ccompare_items\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I see that the \"CompareTrayButton\" button is displayed as \u003cenabled_disabled\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "Search product by word \"P50\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I see that the \"CompareTrayButton\" button is displayed as \u003cenabled_disabled\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Navigate to element \"LoadMoreBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "Navigate to element module \"Logo\" on module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I see that the \"CompareTrayButton\" button is displayed as \u003cenabled_disabled\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.examples({
  "line": 151,
  "name": "",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;",
  "rows": [
    {
      "cells": [
        "compare_items",
        "enabled_disabled"
      ],
      "line": 152,
      "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;1"
    },
    {
      "cells": [
        "1",
        "disabled"
      ],
      "line": 153,
      "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;2"
    },
    {
      "cells": [
        "2",
        "enabled"
      ],
      "line": 154,
      "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;3"
    },
    {
      "cells": [
        "3",
        "enabled"
      ],
      "line": 155,
      "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;4"
    },
    {
      "cells": [
        "4",
        "enabled"
      ],
      "line": 156,
      "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23454498,
  "status": "passed"
});
formatter.scenario({
  "line": 153,
  "name": "Catg : Compare : Repeat 4times..(based on item ctn# 1-4)-Compare tray persist after 2nd search/page up/down \u0026 button disabled/enabled as expected",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 118,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 117,
      "name": "@market_smoke"
    },
    {
      "line": 120,
      "name": "@market_smoke_prod"
    },
    {
      "line": 121,
      "name": "@compare"
    },
    {
      "line": 122,
      "name": "@compare_two_four_items"
    },
    {
      "line": 119,
      "name": "@market_smoke1"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "Add \"1\" items to compare and make sure compare tray appears",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "The count of element \"CompareTrayItem\" is \u00271\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I see that the \"CompareTrayButton\" button is displayed as disabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "Search product by word \"P50\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I see that the \"CompareTrayButton\" button is displayed as disabled",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Navigate to element \"LoadMoreBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "Navigate to element module \"Logo\" on module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I see that the \"CompareTrayButton\" button is displayed as disabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 149,
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
  "duration": 36624437763,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2191641122,
  "status": "passed"
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
  "duration": 29822531257,
  "status": "passed"
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
  "duration": 891640605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 12
    },
    {
      "val": "CompareTrayClearAll",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:349"
});
formatter.result({
  "duration": 3175882868,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 9615343930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    }
  ],
  "location": "searchresultpage.groovy:579"
});
formatter.result({
  "duration": 15424863448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayItem",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 43
    }
  ],
  "location": "searchresultpage.groovy:716"
});
formatter.result({
  "duration": 281065616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "disabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 2876762670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1821266824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 743614200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P50",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 36600500865,
  "status": "passed"
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
  "duration": 354032639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "disabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 3478484666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 670592737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 701550185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoadMoreBtn",
      "offset": 21
    }
  ],
  "location": "common_csp.groovy:356"
});
formatter.result({
  "duration": 3101778918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 792605162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 687037549,
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
  "duration": 1919563590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logo",
      "offset": 28
    },
    {
      "val": "globalHeader",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:360"
});
formatter.result({
  "duration": 4042196111,
  "status": "passed"
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
  "duration": 399563382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "disabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 5614019591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1751413480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 774784424,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9367569869,
  "status": "passed"
});
formatter.after({
  "duration": 521140,
  "status": "passed"
});
formatter.before({
  "duration": 34569735,
  "status": "passed"
});
formatter.scenario({
  "line": 154,
  "name": "Catg : Compare : Repeat 4times..(based on item ctn# 1-4)-Compare tray persist after 2nd search/page up/down \u0026 button disabled/enabled as expected",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 118,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 117,
      "name": "@market_smoke"
    },
    {
      "line": 120,
      "name": "@market_smoke_prod"
    },
    {
      "line": 121,
      "name": "@compare"
    },
    {
      "line": 122,
      "name": "@compare_two_four_items"
    },
    {
      "line": 119,
      "name": "@market_smoke1"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "Add \"2\" items to compare and make sure compare tray appears",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "The count of element \"CompareTrayItem\" is \u00272\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "Search product by word \"P50\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Navigate to element \"LoadMoreBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "Navigate to element module \"Logo\" on module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 149,
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
  "duration": 34520904335,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1385660306,
  "status": "passed"
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
  "duration": 27531418679,
  "status": "passed"
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
  "duration": 484407845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 12
    },
    {
      "val": "CompareTrayClearAll",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:349"
});
formatter.result({
  "duration": 957976665,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 5105359157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    }
  ],
  "location": "searchresultpage.groovy:579"
});
formatter.result({
  "duration": 24923654539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayItem",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 43
    }
  ],
  "location": "searchresultpage.groovy:716"
});
formatter.result({
  "duration": 344329552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 3110228989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 677270144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 633710055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P50",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 25432938323,
  "status": "passed"
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
  "duration": 423030920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 4843539041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 703578189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1603100438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoadMoreBtn",
      "offset": 21
    }
  ],
  "location": "common_csp.groovy:356"
});
formatter.result({
  "duration": 2287200991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 713433319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 754785283,
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
  "duration": 1896742629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logo",
      "offset": 28
    },
    {
      "val": "globalHeader",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:360"
});
formatter.result({
  "duration": 6065075165,
  "status": "passed"
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
  "duration": 432064865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 3672092993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 632201016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1787199290,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8747878688,
  "status": "passed"
});
formatter.after({
  "duration": 506608,
  "status": "passed"
});
formatter.before({
  "duration": 24262145,
  "status": "passed"
});
formatter.scenario({
  "line": 155,
  "name": "Catg : Compare : Repeat 4times..(based on item ctn# 1-4)-Compare tray persist after 2nd search/page up/down \u0026 button disabled/enabled as expected",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 118,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 117,
      "name": "@market_smoke"
    },
    {
      "line": 120,
      "name": "@market_smoke_prod"
    },
    {
      "line": 121,
      "name": "@compare"
    },
    {
      "line": 122,
      "name": "@compare_two_four_items"
    },
    {
      "line": 119,
      "name": "@market_smoke1"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "Add \"3\" items to compare and make sure compare tray appears",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "The count of element \"CompareTrayItem\" is \u00273\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "Search product by word \"P50\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Navigate to element \"LoadMoreBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "Navigate to element module \"Logo\" on module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 149,
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
  "duration": 32409954490,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1133904295,
  "status": "passed"
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
  "duration": 56300512511,
  "status": "passed"
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
  "duration": 394944350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 12
    },
    {
      "val": "CompareTrayClearAll",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:349"
});
formatter.result({
  "duration": 816160314,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 5986571010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 5
    }
  ],
  "location": "searchresultpage.groovy:579"
});
formatter.result({
  "duration": 39247140545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayItem",
      "offset": 22
    },
    {
      "val": "3",
      "offset": 43
    }
  ],
  "location": "searchresultpage.groovy:716"
});
formatter.result({
  "duration": 335479975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 3031343027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 664116694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 716171314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P50",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 30752402427,
  "status": "passed"
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
  "duration": 486048606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 3633551100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1581956071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1692665430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoadMoreBtn",
      "offset": 21
    }
  ],
  "location": "common_csp.groovy:356"
});
formatter.result({
  "duration": 3516735468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1793780123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 764668850,
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
  "duration": 1210743266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logo",
      "offset": 28
    },
    {
      "val": "globalHeader",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:360"
});
formatter.result({
  "duration": 8680626754,
  "status": "passed"
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
  "duration": 486992313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 4702890762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1074380369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 833863482,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7959665563,
  "status": "passed"
});
formatter.after({
  "duration": 562620,
  "status": "passed"
});
formatter.before({
  "duration": 23541155,
  "status": "passed"
});
formatter.scenario({
  "line": 156,
  "name": "Catg : Compare : Repeat 4times..(based on item ctn# 1-4)-Compare tray persist after 2nd search/page up/down \u0026 button disabled/enabled as expected",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 118,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 117,
      "name": "@market_smoke"
    },
    {
      "line": 120,
      "name": "@market_smoke_prod"
    },
    {
      "line": 121,
      "name": "@compare"
    },
    {
      "line": 122,
      "name": "@compare_two_four_items"
    },
    {
      "line": 119,
      "name": "@market_smoke1"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "Add \"4\" items to compare and make sure compare tray appears",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "The count of element \"CompareTrayItem\" is \u00274\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "Search product by word \"P50\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Navigate to element \"LoadMoreBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "Navigate to element module \"Logo\" on module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 149,
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
  "duration": 34407095002,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2277864809,
  "status": "passed"
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
  "duration": 28721881254,
  "status": "passed"
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
  "duration": 1647929985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 12
    },
    {
      "val": "CompareTrayClearAll",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:349"
});
formatter.result({
  "duration": 1613221183,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 6169911385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 5
    }
  ],
  "location": "searchresultpage.groovy:579"
});
formatter.result({
  "duration": 43902190471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayItem",
      "offset": 22
    },
    {
      "val": "4",
      "offset": 43
    }
  ],
  "location": "searchresultpage.groovy:716"
});
formatter.result({
  "duration": 287220964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 2829751541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 736324462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 701104042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P50",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 32943772780,
  "status": "passed"
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
  "duration": 407849305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 4217186187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 706159838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1435996039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoadMoreBtn",
      "offset": 21
    }
  ],
  "location": "common_csp.groovy:356"
});
formatter.result({
  "duration": 2851636326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1078203995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 940674578,
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
  "duration": 987723621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logo",
      "offset": 28
    },
    {
      "val": "globalHeader",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:360"
});
formatter.result({
  "duration": 5825883770,
  "status": "passed"
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
  "duration": 487606054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 3105461472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1298109563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1889048524,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9678941962,
  "status": "passed"
});
formatter.after({
  "duration": 743936,
  "status": "passed"
});
formatter.before({
  "duration": 34810556,
  "status": "passed"
});
formatter.scenario({
  "line": 164,
  "name": "Catg : Compare : Add items to compare which not remained after log out",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-add-items-to-compare-which-not-remained-after-log-out",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 158,
      "name": "@market_smoke"
    },
    {
      "line": 159,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 160,
      "name": "@market_smoke1"
    },
    {
      "line": 161,
      "name": "@market_smoke_prod"
    },
    {
      "line": 162,
      "name": "@compare"
    },
    {
      "line": 163,
      "name": "@compare_tray_notafter_logout"
    }
  ]
});
formatter.step({
  "line": 165,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 166,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "Add \"2\" items to compare and make sure compare tray appears",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "The count of element \"CompareTrayItem\" is \u00272\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "Make sure elements \"CompareTrayClearAll\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 187,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "I must not see compare tray items",
  "keyword": "Then "
});
formatter.step({
  "line": 190,
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
  "duration": 35960299395,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 890211593,
  "status": "passed"
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
  "duration": 30465588333,
  "status": "passed"
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
  "duration": 417973005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 12
    },
    {
      "val": "CompareTrayClearAll",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:349"
});
formatter.result({
  "duration": 2274619486,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 5541870327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    }
  ],
  "location": "searchresultpage.groovy:579"
});
formatter.result({
  "duration": 20204842559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayItem",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 43
    }
  ],
  "location": "searchresultpage.groovy:716"
});
formatter.result({
  "duration": 259597286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 2682103643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 857443481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 791206676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayClearAll",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 720254558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 916205153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayItemImage",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 1516606369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayItemNum",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 428640933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 390949403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 1414205206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "CompareTrayItemImage",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 377369453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "CompareTrayItemNum",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 391396034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 401777707,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8673995969,
  "status": "passed"
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
  "duration": 34588204439,
  "status": "passed"
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
  "duration": 30750179968,
  "status": "passed"
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
  "duration": 358271245,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 6599159229,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7973702032,
  "status": "passed"
});
formatter.after({
  "duration": 1161265,
  "status": "passed"
});
formatter.before({
  "duration": 35082936,
  "status": "passed"
});
formatter.scenario({
  "line": 198,
  "name": "Catg : Search ; Goto search results of selected product, capture item label of first, Search by itemlabel FULL name and verify details on SEARCH results",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-goto-search-results-of-selected-product,-capture-item-label-of-first,-search-by-itemlabel-full-name-and-verify-details-on-search-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 192,
      "name": "@market_smoke"
    },
    {
      "line": 193,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 194,
      "name": "@market_smoke1"
    },
    {
      "line": 195,
      "name": "@market_smoke_prod"
    },
    {
      "line": 196,
      "name": "@search"
    },
    {
      "line": 197,
      "name": "@search_by_full_product_name"
    }
  ]
});
formatter.step({
  "line": 199,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 200,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 204,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "Save value of element \"itemslabel\" to variable \"temp_product_name\"",
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "Search product by word \"temp_product_name\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "Make sure elements \"ResultForm\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 209,
  "name": "Make sure elements \"ResultCategory\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "Make sure elements \"ResultItemList\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 211,
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
  "duration": 35386612231,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1066925911,
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
  "duration": 207217211977,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 180.0 seconds\n\tat geb.waiting.Wait.waitFor(Wait.groovy:138)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:46)\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:516)\n\tat geb.Page.waitFor(Page.groovy)\n\tat geb.Browser.methodMissing(Browser.groovy:206)\n\tat geb.Browser.invokeMethod(Browser.groovy)\n\tat functionlib.Elements$_waitforspinner_closure11.doCall(Elements.groovy:341)\n\tat functionlib.Elements$_waitforspinner_closure11.doCall(Elements.groovy)\n\tat geb.Browser.drive(Browser.groovy:1061)\n\tat geb.Browser$drive$1.callStatic(Unknown Source)\n\tat geb.Browser.drive(Browser.groovy:1031)\n\tat geb.Browser$drive$0.call(Unknown Source)\n\tat functionlib.Elements.waitforspinner(Elements.groovy:339)\n\tat functionlib.Elements$_click_object_closure14.doCall(Elements.groovy:657)\n\tat functionlib.Elements$_click_object_closure14.doCall(Elements.groovy)\n\tat geb.Browser.drive(Browser.groovy:1061)\n\tat geb.Browser$drive$1.callStatic(Unknown Source)\n\tat geb.Browser$drive$1.callStatic(Unknown Source)\n\tat geb.Browser.drive(Browser.groovy:1031)\n\tat geb.Browser$drive$0.call(Unknown Source)\n\tat functionlib.Elements.click_object(Elements.groovy:651)\n\tat functionlib.Elements$click_object$4.call(Unknown Source)\n\tat steps.header.categorynavigation$_run_closure41$_closure92.doCall(categorynavigation.groovy:282)\n\tat ✽.And I select 0 item from products menu(navigation/Common.feature:201)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
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
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:334"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "itemslabel",
      "offset": 23
    },
    {
      "val": "temp_product_name",
      "offset": 48
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_product_name",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
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
      "val": "ResultForm",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 36
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
      "val": "ResultCategory",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 40
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
      "val": "ResultItemList",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 40
    }
  ],
  "location": "common_csp.groovy:308"
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
  "duration": 1954604645,
  "status": "passed"
});
formatter.before({
  "duration": 24898535,
  "status": "passed"
});
formatter.scenario({
  "line": 219,
  "name": "Catg : Search ; Goto search results of selected product, capture item label of first, Search by itemlabel partial name and verify details on SEARCH results",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-goto-search-results-of-selected-product,-capture-item-label-of-first,-search-by-itemlabel-partial-name-and-verify-details-on-search-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 213,
      "name": "@market_smoke1"
    },
    {
      "line": 214,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 215,
      "name": "@market_smoke"
    },
    {
      "line": 216,
      "name": "@market_smoke_prod"
    },
    {
      "line": 217,
      "name": "@search"
    },
    {
      "line": 218,
      "name": "@search_by_partialword"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 221,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 225,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "Save string part of element \"itemslabel\" to variable \"temp_product_name\"",
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "Search product by word \"temp_product_name\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "Make sure elements \"ResultForm\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 230,
  "name": "Make sure elements \"ResultCategory\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "Make sure elements \"ResultItemList\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 232,
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
  "duration": 37758290865,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 762234244,
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
  "duration": 28166329751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 942759981,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 65098579352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:334"
});
formatter.result({
  "duration": 2084557989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "string",
      "offset": 5
    },
    {
      "val": "itemslabel",
      "offset": 29
    },
    {
      "val": "temp_product_name",
      "offset": 54
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 1271046222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_product_name",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 33339926275,
  "status": "passed"
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
  "duration": 428724989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultForm",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 36
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 771262932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultCategory",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 40
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 784487218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultItemList",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 40
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 931531725,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8471720022,
  "status": "passed"
});
formatter.after({
  "duration": 508765,
  "status": "passed"
});
formatter.before({
  "duration": 24597111,
  "status": "passed"
});
formatter.scenario({
  "line": 240,
  "name": "Catg : Search ; Goto search results of selected product, capture material number, Search by material number and verify details on PLP",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-goto-search-results-of-selected-product,-capture-material-number,-search-by-material-number-and-verify-details-on-plp",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 234,
      "name": "@market_smoke1"
    },
    {
      "line": 235,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 236,
      "name": "@market_smoke"
    },
    {
      "line": 237,
      "name": "@market_smoke_prod"
    },
    {
      "line": 238,
      "name": "@search"
    },
    {
      "line": 239,
      "name": "@search_by_material_number"
    }
  ]
});
formatter.step({
  "line": 241,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 242,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 246,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "Save value of element \"material\" to variable \"temp_materialnum\"",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "Save value of element \"manufacturer\" to variable \"temp_manufacturernum\"",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "Search product by word \"temp_materialnum\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "if \"SearchResultPage\" page returned than hit on item that contains \"temp_materialnum\" and \"temp_manufacturernum\" and get to idp page",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 253,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I verify the Text on \u0027materialnum\u0027 is \u0027temp_materialnum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 260,
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
  "duration": 38196324591,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1837286441,
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
  "duration": 31504073477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1406929258,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 57745889279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:334"
});
formatter.result({
  "duration": 1770605062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 23
    },
    {
      "val": "temp_materialnum",
      "offset": 46
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 4688930684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturer",
      "offset": 23
    },
    {
      "val": "temp_manufacturernum",
      "offset": 50
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 3235667341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_materialnum",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 27839602988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 4
    },
    {
      "val": "temp_materialnum",
      "offset": 68
    },
    {
      "val": "temp_manufacturernum",
      "offset": 91
    }
  ],
  "location": "common_csp.groovy:442"
});
formatter.result({
  "duration": 2554976036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 4446141314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TitleInfo",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 867658955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Image_container",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 41
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 817235976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 33
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 2025004545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 37
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 873879342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Specification",
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
  "duration": 1177371173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Packaging",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 772162639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturerName",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 935839312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "materialnum",
      "offset": 22
    },
    {
      "val": "temp_materialnum",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 30170752361,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8192911117,
  "status": "passed"
});
formatter.after({
  "duration": 566630,
  "status": "passed"
});
formatter.before({
  "duration": 25093451,
  "status": "passed"
});
formatter.scenario({
  "line": 268,
  "name": "Catg : Search ; Goto search results of selected product, capture manufacturer number,  Search by manufacturer number and verify details on PLP",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-goto-search-results-of-selected-product,-capture-manufacturer-number,--search-by-manufacturer-number-and-verify-details-on-plp",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 262,
      "name": "@market_smoke1"
    },
    {
      "line": 263,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 264,
      "name": "@market_smoke"
    },
    {
      "line": 265,
      "name": "@market_smoke_prod"
    },
    {
      "line": 266,
      "name": "@search"
    },
    {
      "line": 267,
      "name": "@search_by_manufacturer"
    }
  ]
});
formatter.step({
  "line": 269,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 270,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "There should be image and title attribute displayed for each item",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 275,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "Save value of element \"material\" to variable \"temp_materialnum\"",
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "Save value of element \"manufacturer\" to variable \"temp_manufacturernum\"",
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "Search product by word \"temp_manufacturernum\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "if \"SearchResultPage\" page returned than hit on item that contains \"temp_materialnum\" and \"temp_manufacturernum\" and get to idp page",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I verify the Text on \u0027materialnum\u0027 is \u0027temp_materialnum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "I verify the Text on \u0027manufacturernum\u0027 is \u0027temp_manufacturernum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 284,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 290,
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
  "duration": 28510661893,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1900757205,
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
  "duration": 29354398505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1128079842,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:58"
});
formatter.result({
  "duration": 80004170272,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 53234730283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:334"
});
formatter.result({
  "duration": 1583277334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 23
    },
    {
      "val": "temp_materialnum",
      "offset": 46
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 3199782316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturer",
      "offset": 23
    },
    {
      "val": "temp_manufacturernum",
      "offset": 50
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 4324860915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_manufacturernum",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 27739883466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 4
    },
    {
      "val": "temp_materialnum",
      "offset": 68
    },
    {
      "val": "temp_manufacturernum",
      "offset": 91
    }
  ],
  "location": "common_csp.groovy:442"
});
formatter.result({
  "duration": 3781114800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 5691861518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "materialnum",
      "offset": 22
    },
    {
      "val": "temp_materialnum",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 27936695466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturernum",
      "offset": 22
    },
    {
      "val": "temp_manufacturernum",
      "offset": 43
    }
  ],
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 25385056517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TitleInfo",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 719612023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Image_container",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 41
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 664813237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 33
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 734628008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 37
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 747975081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Specification",
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
  "duration": 665152788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Packaging",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1684756878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturerName",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 808815425,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 6657195627,
  "status": "passed"
});
formatter.after({
  "duration": 636958,
  "status": "passed"
});
formatter.before({
  "duration": 37635007,
  "status": "passed"
});
formatter.scenario({
  "line": 298,
  "name": "Catg : Search ; TYPEAHEAD CHECK- search results of product, capture item label,Search by itemlabel partial name and verify details on TYPEAHEAD results",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-typeahead-check--search-results-of-product,-capture-item-label,search-by-itemlabel-partial-name-and-verify-details-on-typeahead-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 292,
      "name": "@market_smoke1"
    },
    {
      "line": 293,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 294,
      "name": "@market_smoke"
    },
    {
      "line": 295,
      "name": "@market_smoke_prod"
    },
    {
      "line": 296,
      "name": "@search"
    },
    {
      "line": 297,
      "name": "@search_typeahead_product_name"
    }
  ]
});
formatter.step({
  "line": 299,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 300,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 303,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 304,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 305,
  "name": "Save string part of element \"itemslabel\" to variable \"temp_product_name\"",
  "keyword": "And "
});
formatter.step({
  "line": 306,
  "name": "Save string part of element \"ResultCategory\" to variable \"temp_category\"",
  "keyword": "And "
});
formatter.step({
  "line": 307,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "Enter Text \"temp_product_name\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "Verify if option with name \"temp_category\" in list \"TypeaheadCategoriesList\" is present on global module",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "Save current url value in variable \"temp_current_url\"",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "Select option with name \"temp_category\" from \"TypeaheadCategoriesList\" on global module",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "verify if current url contains \"temp_current_url\"",
  "keyword": "And "
});
formatter.step({
  "line": 313,
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
  "duration": 32179665952,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 872242176,
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
  "duration": 27929688018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1027860354,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 47616014935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:334"
});
formatter.result({
  "duration": 1275540754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "string",
      "offset": 5
    },
    {
      "val": "itemslabel",
      "offset": 29
    },
    {
      "val": "temp_product_name",
      "offset": 54
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 1242400520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "string",
      "offset": 5
    },
    {
      "val": "ResultCategory",
      "offset": 29
    },
    {
      "val": "temp_category",
      "offset": 58
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 1629138086,
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
  "duration": 1113072179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_product_name",
      "offset": 12
    },
    {
      "val": "SearchBox",
      "offset": 50
    },
    {
      "val": "globalHeader",
      "offset": 72
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 11860344953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_category",
      "offset": 28
    },
    {
      "val": "TypeaheadCategoriesList",
      "offset": 52
    },
    {
      "val": "present",
      "offset": 80
    }
  ],
  "location": "searchresultpage.groovy:1221"
});
formatter.result({
  "duration": 5030902923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_current_url",
      "offset": 36
    }
  ],
  "location": "common_csp.groovy:374"
});
formatter.result({
  "duration": 141921188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_category",
      "offset": 25
    },
    {
      "val": "TypeaheadCategoriesList",
      "offset": 46
    }
  ],
  "location": "searchresultpage.groovy:1182"
});
formatter.result({
  "duration": 5595419886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_current_url",
      "offset": 32
    }
  ],
  "location": "common_csp.groovy:380"
});
formatter.result({
  "duration": 240034076,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 6368318839,
  "status": "passed"
});
formatter.after({
  "duration": 561640,
  "status": "passed"
});
formatter.before({
  "duration": 26043713,
  "status": "passed"
});
formatter.scenario({
  "line": 321,
  "name": "Catg : Search ; TYPEAHEAD CHECK- Search results ,capture material num of first, Search by \u0026 select from typeahead material num and verify result returned",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-typeahead-check--search-results-,capture-material-num-of-first,-search-by-\u0026-select-from-typeahead-material-num-and-verify-result-returned",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 315,
      "name": "@market_smoke1"
    },
    {
      "line": 316,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 317,
      "name": "@market_smoke"
    },
    {
      "line": 318,
      "name": "@market_smoke_prod"
    },
    {
      "line": 319,
      "name": "@search"
    },
    {
      "line": 320,
      "name": "@search_typeahead_material"
    }
  ]
});
formatter.step({
  "line": 322,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 323,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 324,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 325,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 326,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 327,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 328,
  "name": "Save whole part of element \"material\" to variable \"temp_materialnum\"",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "Save value of element \"manufacturer\" to variable \"temp_manufacturernum\"",
  "keyword": "And "
});
formatter.step({
  "line": 330,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 331,
  "name": "Enter Text \"temp_materialnum\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 332,
  "name": "Verify if option with name \"temp_materialnum\" in list \"TypeaheadMaterialsList\" is present on global module",
  "keyword": "And "
});
formatter.step({
  "line": 333,
  "name": "Select option with name \"temp_materialnum\" from \"TypeaheadMaterialsList\" on global module",
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "if \"SearchResultPage\" page returned than hit on item that contains \"temp_materialnum\" and \"temp_manufacturernum\" and get to idp page",
  "keyword": "And "
});
formatter.step({
  "line": 335,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 336,
  "name": "I verify the Text on \u0027materialnum\u0027 is \u0027temp_materialnum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 338,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 339,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 342,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 344,
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
  "duration": 32342361333,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 848806031,
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
  "duration": 28368381700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 2007694654,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 53762694020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:334"
});
formatter.result({
  "duration": 1502128597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whole",
      "offset": 5
    },
    {
      "val": "material",
      "offset": 28
    },
    {
      "val": "temp_materialnum",
      "offset": 51
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 1131290545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturer",
      "offset": 23
    },
    {
      "val": "temp_manufacturernum",
      "offset": 50
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 4225304673,
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
  "duration": 752043934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_materialnum",
      "offset": 12
    },
    {
      "val": "SearchBox",
      "offset": 49
    },
    {
      "val": "globalHeader",
      "offset": 71
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 10458092210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_materialnum",
      "offset": 28
    },
    {
      "val": "TypeaheadMaterialsList",
      "offset": 55
    },
    {
      "val": "present",
      "offset": 82
    }
  ],
  "location": "searchresultpage.groovy:1221"
});
formatter.result({
  "duration": 7075451066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_materialnum",
      "offset": 25
    },
    {
      "val": "TypeaheadMaterialsList",
      "offset": 49
    }
  ],
  "location": "searchresultpage.groovy:1182"
});
formatter.result({
  "duration": 8898643045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 4
    },
    {
      "val": "temp_materialnum",
      "offset": 68
    },
    {
      "val": "temp_manufacturernum",
      "offset": 91
    }
  ],
  "location": "common_csp.groovy:442"
});
formatter.result({
  "duration": 157296964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 2140401239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "materialnum",
      "offset": 22
    },
    {
      "val": "temp_materialnum",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 24996547627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TitleInfo",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 658094487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Image_container",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 41
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1747205970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 33
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 863327574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 37
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 775783755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Specification",
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
  "duration": 688772834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Packaging",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 746719238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturerName",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1076097269,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8709721603,
  "status": "passed"
});
formatter.after({
  "duration": 1342345,
  "status": "passed"
});
formatter.before({
  "duration": 26644525,
  "status": "passed"
});
formatter.scenario({
  "line": 353,
  "name": "Catg : Search ; TYPEAHEAD CHECK- search results ,capture manufacturer num of first, Search by \u0026 select from typeahead manufacturer num and verify result returned",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-typeahead-check--search-results-,capture-manufacturer-num-of-first,-search-by-\u0026-select-from-typeahead-manufacturer-num-and-verify-result-returned",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 347,
      "name": "@market_smoke1"
    },
    {
      "line": 348,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 349,
      "name": "@market_smoke"
    },
    {
      "line": 350,
      "name": "@market_smoke_prod"
    },
    {
      "line": 351,
      "name": "@search"
    },
    {
      "line": 352,
      "name": "@search_typeahead_manufacturer"
    }
  ]
});
formatter.step({
  "line": 354,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 355,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 356,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 359,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 360,
  "name": "Save whole part of element \"manufacturer\" to variable \"temp_manufacturernum\"",
  "keyword": "And "
});
formatter.step({
  "line": 361,
  "name": "Save value of element \"material\" to variable \"temp_materialnum\"",
  "keyword": "And "
});
formatter.step({
  "line": 362,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 363,
  "name": "Enter Text \"temp_manufacturernum\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "Verify if option with name \"temp_manufacturernum\" in list \"TypeaheadManufacturerList\" is present on global module",
  "keyword": "And "
});
formatter.step({
  "line": 365,
  "name": "Select option with name \"temp_manufacturernum\" from \"TypeaheadManufacturerList\" on global module",
  "keyword": "And "
});
formatter.step({
  "line": 366,
  "name": "if \"SearchResultPage\" page returned than hit on item that contains \"temp_materialnum\" and \"temp_manufacturernum\" and get to idp page",
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "I verify the Text on \u0027manufacturernum\u0027 is \u0027temp_manufacturernum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 370,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 371,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 374,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 375,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 376,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 377,
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
  "duration": 30182818530,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 867422638,
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
  "duration": 26678620527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1040672396,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 51084645743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:334"
});
formatter.result({
  "duration": 1661898161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whole",
      "offset": 5
    },
    {
      "val": "manufacturer",
      "offset": 28
    },
    {
      "val": "temp_manufacturernum",
      "offset": 55
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 1034675056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 23
    },
    {
      "val": "temp_materialnum",
      "offset": 46
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 6025330853,
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
  "duration": 786795173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_manufacturernum",
      "offset": 12
    },
    {
      "val": "SearchBox",
      "offset": 53
    },
    {
      "val": "globalHeader",
      "offset": 75
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 10473877390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_manufacturernum",
      "offset": 28
    },
    {
      "val": "TypeaheadManufacturerList",
      "offset": 59
    },
    {
      "val": "present",
      "offset": 89
    }
  ],
  "location": "searchresultpage.groovy:1221"
});
formatter.result({
  "duration": 5961771638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_manufacturernum",
      "offset": 25
    },
    {
      "val": "TypeaheadManufacturerList",
      "offset": 53
    }
  ],
  "location": "searchresultpage.groovy:1182"
});
formatter.result({
  "duration": 7249038625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 4
    },
    {
      "val": "temp_materialnum",
      "offset": 68
    },
    {
      "val": "temp_manufacturernum",
      "offset": 91
    }
  ],
  "location": "common_csp.groovy:442"
});
formatter.result({
  "duration": 3537149206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 3618426129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturernum",
      "offset": 22
    },
    {
      "val": "temp_manufacturernum",
      "offset": 43
    }
  ],
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 24031068314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TitleInfo",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 659847323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Image_container",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 41
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 801792720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 33
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 710432241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 37
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 672605770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Specification",
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
  "duration": 616753540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Packaging",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1743537755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturerName",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 843405869,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 5817757873,
  "status": "passed"
});
formatter.after({
  "duration": 844530,
  "status": "passed"
});
formatter.before({
  "duration": 25802570,
  "status": "passed"
});
formatter.scenario({
  "line": 385,
  "name": "Catg : My Account ; Access My Account options",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-my-account-;-access-my-account-options",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 379,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 380,
      "name": "@market_smoke1"
    },
    {
      "line": 381,
      "name": "@market_smoke_prod"
    },
    {
      "line": 382,
      "name": "@market_smoke"
    },
    {
      "line": 383,
      "name": "@my_account"
    },
    {
      "line": 384,
      "name": "@My_Account_options"
    }
  ]
});
formatter.step({
  "line": 386,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 387,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 388,
  "name": "Make sure element \"welcomeUser\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "Make sure element \"welcomeUser_Username\" value is not null in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "I click element \u0027MyAccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "Make sure element \"myAccountdropdown\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 392,
  "name": "Make sure element \"myAccount_changeaccount\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 393,
  "name": "Make sure element \"myAccount_logout\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 394,
  "name": "I click element \u0027myAccount_changeaccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 395,
  "name": "the system must display an account selection section on the page as Select Account,Sold To,Ship To,Search Sold To\u0027s or Ship To\u0027s,View All Accounts,Cancel,Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 396,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.step({
  "line": 397,
  "name": "verify if current url contains \"cardinalhealth.com/login\"",
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
  "duration": 24521773047,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 6967007006,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "welcomeUser",
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
  "duration": 5661089813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "welcomeUser_Username",
      "offset": 19
    },
    {
      "val": "not null",
      "offset": 50
    },
    {
      "val": "global",
      "offset": 68
    }
  ],
  "location": "common_csp.groovy:130"
});
formatter.result({
  "duration": 17733502025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MyAccount",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 11585819267,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myAccountdropdown",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 41
    },
    {
      "val": "global",
      "offset": 58
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1315593640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myAccount_changeaccount",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 47
    },
    {
      "val": "global",
      "offset": 64
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1899937027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myAccount_logout",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 40
    },
    {
      "val": "global",
      "offset": 57
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1662240653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myAccount_changeaccount",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 8457938687,
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
  "location": "changeaccountdropdown.groovy:23"
});
formatter.result({
  "duration": 9869283757,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8777697317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cardinalhealth.com/login",
      "offset": 32
    }
  ],
  "location": "common_csp.groovy:380"
});
formatter.result({
  "duration": 146980041,
  "status": "passed"
});
formatter.after({
  "duration": 433947,
  "status": "passed"
});
formatter.before({
  "duration": 24330858,
  "status": "passed"
});
formatter.scenario({
  "line": 405,
  "name": "Catg : My Account ; My profile info in My Account options",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-my-account-;-my-profile-info-in-my-account-options",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 399,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 400,
      "name": "@market_smoke1"
    },
    {
      "line": 401,
      "name": "@market_smoke_prod"
    },
    {
      "line": 402,
      "name": "@market_smoke"
    },
    {
      "line": 403,
      "name": "@my_account"
    },
    {
      "line": 404,
      "name": "@My_Account_profile_info"
    }
  ]
});
formatter.step({
  "line": 406,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 407,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 408,
  "name": "I click element \u0027MyAccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 409,
  "name": "I click element \u0027Profileinfo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 410,
  "name": "I am on \"UserProfilePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 411,
  "name": "Make sure element \"profile_FirstName\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 412,
  "name": "Make sure element \"profile_LastName\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "Make sure element \"profile_PhoneNumber1\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "Make sure element \"profile_PhoneNumber2\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "Make sure element \"profile_PhoneNumber3\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "Make sure element \"profile_PhoneExtension\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "Make sure element \"profile_EmailAddress\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "Make sure element \"profile_SaveChangesButton\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 419,
  "name": "Make sure element \"profile_user_pass_security\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "Make sure element \"profile_username\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 421,
  "name": "Make sure element \"profile_password\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 422,
  "name": "Make sure element \"profile_security\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 423,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 424,
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
  "duration": 27542172791,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 9553131846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MyAccount",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 13564077477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Profileinfo",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 16759146488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UserProfilePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 2451275103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_FirstName",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 41
    },
    {
      "val": "",
      "offset": 58
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1112253411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_LastName",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 40
    },
    {
      "val": "",
      "offset": 57
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 2430588228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneNumber1",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 44
    },
    {
      "val": "",
      "offset": 61
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1253783801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneNumber2",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 44
    },
    {
      "val": "",
      "offset": 61
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1173631008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneNumber3",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 44
    },
    {
      "val": "",
      "offset": 61
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1154373976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneExtension",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 46
    },
    {
      "val": "",
      "offset": 63
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1076030817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_EmailAddress",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 44
    },
    {
      "val": "",
      "offset": 61
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1103030574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_SaveChangesButton",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 49
    },
    {
      "val": "",
      "offset": 66
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 2267287087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_user_pass_security",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 50
    },
    {
      "val": "",
      "offset": 67
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1013273156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_username",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 40
    },
    {
      "val": "",
      "offset": 57
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 3287108374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_password",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 40
    },
    {
      "val": "",
      "offset": 57
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 2958374150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_security",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 40
    },
    {
      "val": "",
      "offset": 57
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 3869927093,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 8653148793,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 6920856751,
  "status": "passed"
});
formatter.after({
  "duration": 440907,
  "status": "passed"
});
formatter.before({
  "duration": 25829357,
  "status": "passed"
});
formatter.scenario({
  "line": 432,
  "name": "Catg : My Account ; TEST CASE WILL FAIL- NEW REQUIREMENT, MKT-5645 CREATED for EDITING PROFILE - Edit My profile options",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-my-account-;-test-case-will-fail--new-requirement,-mkt-5645-created-for-editing-profile---edit-my-profile-options",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 426,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 427,
      "name": "@market_smoke1"
    },
    {
      "line": 428,
      "name": "@market_smoke_prod"
    },
    {
      "line": 429,
      "name": "@market_smoke"
    },
    {
      "line": 430,
      "name": "@my_account"
    },
    {
      "line": 431,
      "name": "@My_Account_profile_edit"
    }
  ]
});
formatter.step({
  "line": 433,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 434,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 435,
  "name": "I click element \u0027MyAccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 436,
  "name": "I click element \u0027Profileinfo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 437,
  "name": "I am on \"UserProfilePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 439,
  "name": "Save value of element \"profile_FirstName\" to variable \"temp_firstname\"",
  "keyword": "And "
});
formatter.step({
  "line": 440,
  "name": "Save value of element \"profile_LastName\" to variable \"temp_lastname\"",
  "keyword": "And "
});
formatter.step({
  "line": 441,
  "name": "Save value of element \"profile_PhoneNumber1\" to variable \"temp_phonenumber1\"",
  "keyword": "And "
});
formatter.step({
  "line": 442,
  "name": "Save value of element \"profile_PhoneNumber2\" to variable \"temp_phonenumber2\"",
  "keyword": "And "
});
formatter.step({
  "line": 443,
  "name": "Save value of element \"profile_PhoneNumber2\" to variable \"temp_phonenumber2\"",
  "keyword": "And "
});
formatter.step({
  "line": 444,
  "name": "Save value of element \"profile_PhoneExtension\" to variable \"temp_phoneextension\"",
  "keyword": "And "
});
formatter.step({
  "line": 445,
  "name": "Save value of element \"profile_EmailAddress\" to variable \"temp_emailaddress\"",
  "keyword": "And "
});
formatter.step({
  "line": 447,
  "name": "I Enter Text \"profile_FirstName\" in Text Box field \"profile_FirstName\"",
  "keyword": "And "
});
formatter.step({
  "line": 448,
  "name": "I Enter Text \"profile_LastName\" in Text Box field \"profile_LastName\"",
  "keyword": "And "
});
formatter.step({
  "line": 449,
  "name": "I Enter Text \"213\" in Text Box field \"profile_PhoneNumber1\"",
  "keyword": "And "
});
formatter.step({
  "line": 450,
  "name": "I Enter Text \"456\" in Text Box field \"profile_PhoneNumber2\"",
  "keyword": "And "
});
formatter.step({
  "line": 451,
  "name": "I Enter Text \"2341\" in Text Box field \"profile_PhoneNumber3\"",
  "keyword": "And "
});
formatter.step({
  "line": 452,
  "name": "I Enter Text \"231\" in Text Box field \"profile_PhoneExtension\"",
  "keyword": "And "
});
formatter.step({
  "line": 453,
  "name": "I Enter Text \"test@test.com\" in Text Box field \"profile_EmailAddress\"",
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "I click at Item \u0027profile_SaveChangesButton\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 455,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 456,
  "name": "I click element \u0027MyAccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 457,
  "name": "I click element \u0027Profileinfo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 458,
  "name": "I am on \"UserProfilePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 459,
  "name": "I verify the Text on \u0027profile_FirstName\u0027 is \u0027profile_FirstName\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 460,
  "name": "I verify the Text on \u0027profile_LastName\u0027 is \u0027profile_LastName\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 461,
  "name": "I verify the Text on \u0027profile_PhoneNumber1\u0027 is \u0027213\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 462,
  "name": "I verify the Text on \u0027profile_PhoneNumber2\u0027 is \u0027456\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 463,
  "name": "I verify the Text on \u0027profile_PhoneNumber2\u0027 is \u00272341\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 464,
  "name": "I verify the Text on \u0027profile_PhoneExtension\u0027 is \u0027231\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 465,
  "name": "I verify the Text on \u0027profile_EmailAddress\u0027 is \u0027test@test.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 467,
  "name": "I Enter Text \"temp_firstname\" in Text Box field \"profile_FirstName\"",
  "keyword": "And "
});
formatter.step({
  "line": 468,
  "name": "I Enter Text \"temp_lastname\" in Text Box field \"profile_LastName\"",
  "keyword": "And "
});
formatter.step({
  "line": 469,
  "name": "I Enter Text \"temp_phonenumber1\" in Text Box field \"213\"",
  "keyword": "And "
});
formatter.step({
  "line": 470,
  "name": "I Enter Text \"temp_phonenumber2\" in Text Box field \"456\"",
  "keyword": "And "
});
formatter.step({
  "line": 471,
  "name": "I Enter Text \"temp_phonenumber3\" in Text Box field \"2341\"",
  "keyword": "And "
});
formatter.step({
  "line": 472,
  "name": "I Enter Text \"temp_phoneextension\" in Text Box field \"231\"",
  "keyword": "And "
});
formatter.step({
  "line": 473,
  "name": "I Enter Text \"temp_emailaddress\" in Text Box field \"test@test.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 474,
  "name": "I click at Item \u0027profile_SaveChangesButton\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 475,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 476,
  "name": "I click element \u0027MyAccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 477,
  "name": "I click element \u0027Profileinfo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 478,
  "name": "I am on \"UserProfilePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I verify the Text on \u0027profile_FirstName\u0027 is \u0027temp_firstname\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "I verify the Text on \u0027profile_LastName\u0027 is \u0027temp_lastname\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 481,
  "name": "I verify the Text on \u0027profile_PhoneNumber1\u0027 is \u0027temp_phonenumber1\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 482,
  "name": "I verify the Text on \u0027profile_PhoneNumber2\u0027 is \u0027temp_phonenumber2\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 483,
  "name": "I verify the Text on \u0027profile_PhoneNumber3\u0027 is \u0027temp_phonenumber3\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 484,
  "name": "I verify the Text on \u0027profile_PhoneExtension\u0027 is \u0027temp_phoneextension\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 485,
  "name": "I verify the Text on \u0027profile_EmailAddress\u0027 is \u0027temp_emailaddress\u0027",
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
  "duration": 26434333582,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 9425546844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MyAccount",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 13003326296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Profileinfo",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 15396669134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UserProfilePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 1035998543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_FirstName",
      "offset": 23
    },
    {
      "val": "temp_firstname",
      "offset": 55
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 4536426281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_LastName",
      "offset": 23
    },
    {
      "val": "temp_lastname",
      "offset": 54
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 4451062537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneNumber1",
      "offset": 23
    },
    {
      "val": "temp_phonenumber1",
      "offset": 58
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 2969395296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneNumber2",
      "offset": 23
    },
    {
      "val": "temp_phonenumber2",
      "offset": 58
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 3886842175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneNumber2",
      "offset": 23
    },
    {
      "val": "temp_phonenumber2",
      "offset": 58
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 3716353492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneExtension",
      "offset": 23
    },
    {
      "val": "temp_phoneextension",
      "offset": 60
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 3406338172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_EmailAddress",
      "offset": 23
    },
    {
      "val": "temp_emailaddress",
      "offset": 58
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 4140269853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_FirstName",
      "offset": 14
    },
    {
      "val": "profile_FirstName",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 5713357408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_LastName",
      "offset": 14
    },
    {
      "val": "profile_LastName",
      "offset": 51
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 5504486789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "213",
      "offset": 14
    },
    {
      "val": "profile_PhoneNumber1",
      "offset": 38
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 5724627134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 14
    },
    {
      "val": "profile_PhoneNumber2",
      "offset": 38
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 5067698240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2341",
      "offset": 14
    },
    {
      "val": "profile_PhoneNumber3",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 4901789938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "231",
      "offset": 14
    },
    {
      "val": "profile_PhoneExtension",
      "offset": 38
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 5952615838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test.com",
      "offset": 14
    },
    {
      "val": "profile_EmailAddress",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 4399482114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_SaveChangesButton",
      "offset": 17
    }
  ],
  "location": "itemdetailspage.groovy:62"
});
formatter.result({
  "duration": 4871388206,
  "error_message": "java.lang.AssertionError: pages.UserProfilePage -\u003e profile_SaveChangesButton: geb.navigator.NonEmptyNavigator cannot be interacted and hence cannot be clicked ,exception ...org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d69.0.3497.81)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 247 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u00272983abfb-0c07-42dc-5522-11f647b5f34e\u0027, ip: \u002710.254.0.122\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.14.62-65.117.amzn1.x86_64\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49748}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, takesScreenshot\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e), userDataDir\u003dC:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\scoped_dir888_21393}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, hasMetadata\u003dtrue, handlesAlerts\u003dtrue, databaseEnabled\u003dfalse, version\u003d69.0.3497.81, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, webdriver.remote.sessionid\u003ddde4ed6a0cec44b49b392e7d5131c6c2, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: dde4ed6a0cec44b49b392e7d5131c6c2. Expression: false\n\tat functionlib.Elements.click_on_page(Elements.groovy:367)\n\tat functionlib.Elements.click_on_page(Elements.groovy)\n\tat functionlib.Elements$click_on_page$2.call(Unknown Source)\n\tat steps.itemdetails.itemdetailspage$_run_closure7.doCall(itemdetailspage.groovy:66)\n\tat ✽.And I click at Item \u0027profile_SaveChangesButton\u0027(navigation/Common.feature:454)\n",
  "status": "failed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MyAccount",
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
      "val": "Profileinfo",
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
      "val": "UserProfilePage",
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
      "val": "profile_FirstName",
      "offset": 22
    },
    {
      "val": "profile_FirstName",
      "offset": 45
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
      "val": "profile_LastName",
      "offset": 22
    },
    {
      "val": "profile_LastName",
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
      "val": "profile_PhoneNumber1",
      "offset": 22
    },
    {
      "val": "213",
      "offset": 48
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
      "val": "profile_PhoneNumber2",
      "offset": 22
    },
    {
      "val": "456",
      "offset": 48
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
      "val": "profile_PhoneNumber2",
      "offset": 22
    },
    {
      "val": "2341",
      "offset": 48
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
      "val": "profile_PhoneExtension",
      "offset": 22
    },
    {
      "val": "231",
      "offset": 50
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
      "val": "profile_EmailAddress",
      "offset": 22
    },
    {
      "val": "test@test.com",
      "offset": 48
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
      "val": "temp_firstname",
      "offset": 14
    },
    {
      "val": "profile_FirstName",
      "offset": 49
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_lastname",
      "offset": 14
    },
    {
      "val": "profile_LastName",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_phonenumber1",
      "offset": 14
    },
    {
      "val": "213",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_phonenumber2",
      "offset": 14
    },
    {
      "val": "456",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_phonenumber3",
      "offset": 14
    },
    {
      "val": "2341",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_phoneextension",
      "offset": 14
    },
    {
      "val": "231",
      "offset": 54
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_emailaddress",
      "offset": 14
    },
    {
      "val": "test@test.com",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_SaveChangesButton",
      "offset": 17
    }
  ],
  "location": "itemdetailspage.groovy:62"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MyAccount",
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
      "val": "Profileinfo",
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
      "val": "UserProfilePage",
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
      "val": "profile_FirstName",
      "offset": 22
    },
    {
      "val": "temp_firstname",
      "offset": 45
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
      "val": "profile_LastName",
      "offset": 22
    },
    {
      "val": "temp_lastname",
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
      "val": "profile_PhoneNumber1",
      "offset": 22
    },
    {
      "val": "temp_phonenumber1",
      "offset": 48
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
      "val": "profile_PhoneNumber2",
      "offset": 22
    },
    {
      "val": "temp_phonenumber2",
      "offset": 48
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
      "val": "profile_PhoneNumber3",
      "offset": 22
    },
    {
      "val": "temp_phonenumber3",
      "offset": 48
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
      "val": "profile_PhoneExtension",
      "offset": 22
    },
    {
      "val": "temp_phoneextension",
      "offset": 50
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
      "val": "profile_EmailAddress",
      "offset": 22
    },
    {
      "val": "temp_emailaddress",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:389"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 959673479,
  "status": "passed"
});
formatter.before({
  "duration": 36730581,
  "status": "passed"
});
formatter.scenario({
  "line": 493,
  "name": "Catg : Check Availability ; Hit on Check availibity on search results and items details page and check current status",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-check-availability-;-hit-on-check-availibity-on-search-results-and-items-details-page-and-check-current-status",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 487,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 488,
      "name": "@market_smoke1"
    },
    {
      "line": 489,
      "name": "@market_smoke_prod"
    },
    {
      "line": 490,
      "name": "@market_smoke"
    },
    {
      "line": 491,
      "name": "@check_availability"
    },
    {
      "line": 492,
      "name": "@check_availablity_search_idp"
    }
  ]
});
formatter.step({
  "line": 494,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 495,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 496,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 497,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 498,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 499,
  "name": "Verify items list details related to product",
  "keyword": "And "
});
formatter.step({
  "line": 500,
  "name": "I should see the Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 501,
  "name": "I click at Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 502,
  "name": "I should see the Item \u0027availabilitymsg\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 503,
  "name": "I click at Item \u0027itemslabel\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 504,
  "name": "I must be taken to an \u0027ItemDetailsPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 505,
  "name": "I should see the Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 506,
  "name": "I click at Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 507,
  "name": "I should see the Item \u0027availabilitymsg\u0027",
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
  "duration": 32072398027,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 805975234,
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
  "duration": 22460532422,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 869603552,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 58858826795,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:421"
});
formatter.result({
  "duration": 5353350848,
  "status": "passed"
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
  "duration": 1008609979,
  "status": "passed"
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
  "duration": 9254343195,
  "status": "passed"
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
  "duration": 837182371,
  "status": "passed"
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
  "duration": 10178179303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 2341231588,
  "status": "passed"
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
  "duration": 868987679,
  "status": "passed"
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
  "duration": 9141280673,
  "status": "passed"
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
  "duration": 3215678549,
  "status": "passed"
});
formatter.after({
  "duration": 483512,
  "status": "passed"
});
formatter.before({
  "duration": 25589046,
  "status": "passed"
});
formatter.scenario({
  "line": 514,
  "name": "Catg : Search ; Typeahead -Item detail page when hit on item and category landing when hit on category",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-typeahead--item-detail-page-when-hit-on-item-and-category-landing-when-hit-on-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 509,
      "name": "@typeahead_itemdetail"
    },
    {
      "line": 510,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 511,
      "name": "@market_smoke1"
    },
    {
      "line": 512,
      "name": "@market_smoke_prod"
    },
    {
      "line": 513,
      "name": "@market_smoke"
    }
  ]
});
formatter.step({
  "line": 515,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 516,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 517,
  "name": "Enter Text \"glov\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 518,
  "name": "I click \u0027ONCE\u0027 on 1 item from the \u0027TypeaheadProductsList\u0027 in tablet header navigation",
  "keyword": "And "
});
formatter.step({
  "line": 519,
  "name": "I must be taken to an \u0027ItemDetailsPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 520,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 521,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 522,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 523,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 524,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 525,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 526,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 527,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 528,
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
  "duration": 28735439030,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 910648962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "glov",
      "offset": 12
    },
    {
      "val": "SearchBox",
      "offset": 37
    },
    {
      "val": "globalHeader",
      "offset": 59
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 13776471605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ONCE",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 18
    },
    {
      "val": "TypeaheadProductsList",
      "offset": 35
    }
  ],
  "location": "categorynavigation.groovy:120"
});
formatter.result({
  "duration": 14722064287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 2270069020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 699186809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TitleInfo",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 798270608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Image_container",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 41
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 799449288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 33
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1000583640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 37
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 683219266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Specification",
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
  "duration": 741743241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Packaging",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1871357271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturerName",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1037843145,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9012575654,
  "status": "passed"
});
formatter.after({
  "duration": 426033,
  "status": "passed"
});
formatter.before({
  "duration": 26628994,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 530,
      "value": "#SE12"
    }
  ],
  "line": 536,
  "name": "Catg : Search ; Typeahead - category landing when hit on category for searched product",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-typeahead---category-landing-when-hit-on-category-for-searched-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 531,
      "name": "@typeahead_categorylanding"
    },
    {
      "line": 532,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 533,
      "name": "@market_smoke1"
    },
    {
      "line": 534,
      "name": "@market_smoke_prod"
    },
    {
      "line": 535,
      "name": "@market_smoke"
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
  "name": "Enter Text \"glov\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 540,
  "name": "I click \u0027ONCE\u0027 on 1 item from the \u0027TypeaheadCategoriesList\u0027 in tablet header navigation",
  "keyword": "And "
});
formatter.step({
  "line": 541,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 542,
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
  "duration": 26801166800,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2524454773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "glov",
      "offset": 12
    },
    {
      "val": "SearchBox",
      "offset": 37
    },
    {
      "val": "globalHeader",
      "offset": 59
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 11492376289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ONCE",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 18
    },
    {
      "val": "TypeaheadCategoriesList",
      "offset": 35
    }
  ],
  "location": "categorynavigation.groovy:120"
});
formatter.result({
  "duration": 13597763607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 841027514,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7873170034,
  "status": "passed"
});
formatter.after({
  "duration": 617650,
  "status": "passed"
});
formatter.before({
  "duration": 26311926,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 576,
      "value": "#in process"
    }
  ],
  "line": 582,
  "name": "Catg : Barcode ; Verify Barcode option",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-barcode-;-verify-barcode-option",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 577,
      "name": "@barcode"
    },
    {
      "line": 578,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 579,
      "name": "@market_smoke1"
    },
    {
      "line": 580,
      "name": "@market_smoke_prod"
    },
    {
      "line": 581,
      "name": "@market_smoke"
    }
  ]
});
formatter.step({
  "line": 583,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 584,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 585,
  "name": "I click element \u0027quickorder\u0027 on globalHeader",
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
  "duration": 27403682230,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1784644118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quickorder",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 4633982455,
  "status": "passed"
});
formatter.after({
  "duration": 415755,
  "status": "passed"
});
formatter.uri("navigation/Common_2.feature");
formatter.feature({
  "line": 1,
  "name": "Market smoke test cases second scenarios",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 26361239,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Catg : Login ; Login with Valid credentials",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-login-;-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 4,
      "name": "@market_smoke2"
    },
    {
      "line": 5,
      "name": "@market_smoke_prod"
    },
    {
      "line": 6,
      "name": "@market_smoke"
    },
    {
      "line": 7,
      "name": "@login"
    },
    {
      "line": 8,
      "name": "@login_valid"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
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
  "duration": 28437184766,
  "status": "passed"
});
formatter.after({
  "duration": 594863,
  "status": "passed"
});
formatter.before({
  "duration": 26378427,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Catg : Login ; DO NOT Remember logged in username",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-login-;-do-not-remember-logged-in-username",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 13,
      "name": "@market_smoke2"
    },
    {
      "line": 14,
      "name": "@market_smoke_prod"
    },
    {
      "line": 15,
      "name": "@market_smoke"
    },
    {
      "line": 16,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@login_do_notremember"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page but not logged in",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Element \"username\" value is null",
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
  "duration": 28847649340,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1639725249,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7803529938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:24"
});
formatter.result({
  "duration": 10074264762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "null",
      "offset": 28
    }
  ],
  "location": "common_csp.groovy:431"
});
formatter.result({
  "duration": 4611638194,
  "status": "passed"
});
formatter.after({
  "duration": 475149,
  "status": "passed"
});
formatter.before({
  "duration": 26974908,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Catg : Login ; REMEMBER logged in username",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-login-;-remember-logged-in-username",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 26,
      "name": "@market_smoke2"
    },
    {
      "line": 27,
      "name": "@market_smoke"
    },
    {
      "line": 28,
      "name": "@market_smoke_prod"
    },
    {
      "line": 29,
      "name": "@login"
    },
    {
      "line": 30,
      "name": "@login_remember"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with remember me option",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page but not logged in",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Element \"username\" value is not null",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I click on \u0027remember\u0027 in Tablet Header",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:29"
});
formatter.result({
  "duration": 33733486494,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 925092547,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 10017010941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:24"
});
formatter.result({
  "duration": 11887541410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "not null",
      "offset": 28
    }
  ],
  "location": "common_csp.groovy:431"
});
formatter.result({
  "duration": 4136995399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "remember",
      "offset": 12
    }
  ],
  "location": "basepage.groovy:104"
});
formatter.result({
  "duration": 1703107216,
  "status": "passed"
});
formatter.after({
  "duration": 446305,
  "status": "passed"
});
formatter.before({
  "duration": 26040161,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Catg : My Account ; Log Out successfully",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-my-account-;-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 40,
      "name": "@market_smoke2"
    },
    {
      "line": 41,
      "name": "@market_smoke"
    },
    {
      "line": 42,
      "name": "@market_smoke_prod"
    },
    {
      "line": 43,
      "name": "@My_Account"
    },
    {
      "line": 44,
      "name": "@logout"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "Log out of Market application",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I am on \"LoginPage\" page",
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
  "duration": 34124837762,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7504694807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 442733097,
  "status": "passed"
});
formatter.after({
  "duration": 587887,
  "status": "passed"
});
formatter.before({
  "duration": 31275706,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 50,
      "value": "#    not in list"
    }
  ],
  "line": 57,
  "name": "Catg : Login ; Mega Menus (Products,Order management ,quick order , resources and my account) links verification",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-login-;-mega-menus-(products,order-management-,quick-order-,-resources-and-my-account)-links-verification",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 52,
      "name": "@market_smoke2"
    },
    {
      "line": 53,
      "name": "@market_smoke"
    },
    {
      "line": 54,
      "name": "@market_smoke_prod"
    },
    {
      "line": 55,
      "name": "@login"
    },
    {
      "line": 56,
      "name": "@mega_menu"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I should see the \u0027products\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "I should see the \u0027orderManagement\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I should see the \u0027quickorder\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I should see the \u0027resources\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I should see the \u0027MyAccount\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 65,
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
  "duration": 30069771628,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1569092084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "products",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "duration": 2277896040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orderManagement",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "duration": 1906720059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quickorder",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "duration": 602245433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "resources",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "duration": 831092796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MyAccount",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "duration": 2513627139,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7986056072,
  "status": "passed"
});
formatter.after({
  "duration": 427440,
  "status": "passed"
});
formatter.before({
  "duration": 27191407,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Catg : Login ; Search bar, Navigation bar , sold to ship to ,logo and change account verification",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-login-;-search-bar,-navigation-bar-,-sold-to-ship-to-,logo-and-change-account-verification",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 68,
      "name": "@market_smoke2"
    },
    {
      "line": 69,
      "name": "@market_smoke"
    },
    {
      "line": 70,
      "name": "@market_smoke_prod"
    },
    {
      "line": 71,
      "name": "@login"
    },
    {
      "line": 72,
      "name": "@login_market"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I should see the \u0027Sold-To/Ship-To\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "I should see the \u0027ChangeAccount\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I should see the \u0027Logo\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I should see the \u0027SearchBar\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I should see the \u0027NavigationBar\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I should see the \u0027ShoppingCartShortcut\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 82,
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
  "duration": 25151759916,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2101918991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sold-To/Ship-To",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "duration": 3691997836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ChangeAccount",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "duration": 1113548135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logo",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "duration": 1075108142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchBar",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "duration": 1304028324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NavigationBar",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "duration": 1900358943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShoppingCartShortcut",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "duration": 1181964583,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8213068809,
  "status": "passed"
});
formatter.after({
  "duration": 454066,
  "status": "passed"
});
formatter.before({
  "duration": 26564203,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Catg : Shopping Cart ; Add items to shopping cart and verify Items details (product_name,product_num etc) before adding to cart",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-add-items-to-shopping-cart-and-verify-items-details-(product-name,product-num-etc)-before-adding-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 109,
      "name": "@market_smoke2"
    },
    {
      "line": 110,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 111,
      "name": "@market_smoke"
    },
    {
      "line": 112,
      "name": "@market_smoke_prod"
    },
    {
      "line": 113,
      "name": "@shopping"
    },
    {
      "line": 114,
      "name": "@view_items_in_cart"
    }
  ]
});
formatter.step({
  "line": 116,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "Select the product that is available",
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
  "duration": 28724388762,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 833451275,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 12068399341,
  "status": "passed"
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
  "duration": 37099785067,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "duration": 36365222590,
  "status": "passed"
});
formatter.after({
  "duration": 498733,
  "status": "passed"
});
formatter.before({
  "duration": 26413714,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "Catg : Shopping Cart ; Add items to shopping cart and verify item count after addition",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-add-items-to-shopping-cart-and-verify-item-count-after-addition",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 122,
      "name": "@market_smoke2"
    },
    {
      "line": 123,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 124,
      "name": "@market_smoke"
    },
    {
      "line": 125,
      "name": "@market_smoke_prod"
    },
    {
      "line": 126,
      "name": "@shopping"
    },
    {
      "line": 127,
      "name": "@add_tems_to_cart"
    }
  ]
});
formatter.step({
  "line": 129,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 130,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 133,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I verify the Text on \u0027itemsaddedtocart\u0027 is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I verify the Text on \u0027HeaderCartItemCount\u0027 is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "Search product by word \"laboratory\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I verify the Text on \u0027itemsaddedtocart\u0027 is \u00271\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "I verify the Text on \u0027HeaderCartItemCount\u0027 is \u00272\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 142,
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
  "duration": 31307616468,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1136179597,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 32720994409,
  "status": "passed"
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
  "duration": 32830479537,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "duration": 35179589780,
  "status": "passed"
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
  "duration": 524631337,
  "status": "passed"
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
  "duration": 5532708881,
  "status": "passed"
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
  "duration": 6981675203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "laboratory",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 33063592466,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "duration": 34548698592,
  "status": "passed"
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
  "duration": 366533645,
  "status": "passed"
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
  "duration": 6473433120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeaderCartItemCount",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 6757235039,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8451801534,
  "status": "passed"
});
formatter.after({
  "duration": 739615,
  "status": "passed"
});
formatter.before({
  "duration": 26859725,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 144,
      "value": "#  New requirement"
    },
    {
      "line": 145,
      "value": "#    User is able to see the Barcode Printing icon and text (disabled)"
    },
    {
      "line": 146,
      "value": "# remaining : add amount from each item and see total matching"
    }
  ],
  "line": 153,
  "name": "Catg : Shopping Cart ; Add items to shopping cart and verify details in cart",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-add-items-to-shopping-cart-and-verify-details-in-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 147,
      "name": "@market_smoke2"
    },
    {
      "line": 148,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 149,
      "name": "@market_smoke"
    },
    {
      "line": 150,
      "name": "@market_smoke_prod"
    },
    {
      "line": 151,
      "name": "@shopping"
    },
    {
      "line": 152,
      "name": "@cart_items_verification"
    }
  ]
});
formatter.step({
  "line": 154,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 155,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "Search product by word \"laboratory\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 161,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "I verify the Text on \u0027itemsaddedtocart\u0027 is \u00271\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 164,
  "name": "I verify the Text on \u0027HeaderCartItemCount\u0027 is \u00272\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "I click element \u0027cartItemIcon\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "I am on \"ShoppingCartPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "Make sure elements \"cartsummary,CartSummaryItemCount,CartSummaryItemTotal,checkoutButton,poNumberField,pohelptext,POMemo,poMemoField,department,PackingSlipMessage,PackingSliplabel,packingSlipField\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 168,
  "name": "Make sure elements \"printericon,selectAll,delete,update,all_items,each_item\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "Make sure elements \"each_item_check,each_item_image,each_item_title,each_item_material,each_item_manufacturer,each_item_availibity,each_item_qtylabel,each_item_quantity,each_item_price\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "I verify the \"class\" attribute of \u0027delete\u0027 is \u0027delete-link cta-link primary disabled\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "I verify the \"class\" attribute of \u0027update\u0027 is \u0027cta-btn primary disabled\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
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
  "duration": 26196254495,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1466572501,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 36103963001,
  "status": "passed"
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
  "duration": 26421795648,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "duration": 31827581851,
  "status": "passed"
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
  "duration": 462007582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "laboratory",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 28961526056,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "duration": 34007665780,
  "status": "passed"
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
  "duration": 390192699,
  "status": "passed"
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
  "duration": 7115042401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeaderCartItemCount",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 6391514344,
  "status": "passed"
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
  "duration": 11130318363,
  "status": "passed"
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
  "duration": 953083054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cartsummary,CartSummaryItemCount,CartSummaryItemTotal,checkoutButton,poNumberField,pohelptext,POMemo,poMemoField,department,PackingSlipMessage,PackingSliplabel,packingSlipField",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 202
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 7381102076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "printericon,selectAll,delete,update,all_items,each_item",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 81
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 3690998400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "each_item_check,each_item_image,each_item_title,each_item_material,each_item_manufacturer,each_item_availibity,each_item_qtylabel,each_item_quantity,each_item_price",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 190
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 11589594825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "class",
      "offset": 14
    },
    {
      "val": "delete",
      "offset": 35
    },
    {
      "val": "delete-link cta-link primary disabled",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:483"
});
formatter.result({
  "duration": 4724058497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "class",
      "offset": 14
    },
    {
      "val": "update",
      "offset": 35
    },
    {
      "val": "cta-btn primary disabled",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:483"
});
formatter.result({
  "duration": 6174733344,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 6935388565,
  "status": "passed"
});
formatter.after({
  "duration": 496039,
  "status": "passed"
});
formatter.before({
  "duration": 67859972,
  "status": "passed"
});
formatter.scenario({
  "line": 181,
  "name": "Catg : Shopping Cart ; View shopping cart Details",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-view-shopping-cart-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 175,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 176,
      "name": "@market_smoke2"
    },
    {
      "line": 177,
      "name": "@market_smoke"
    },
    {
      "line": 178,
      "name": "@market_smoke_prod"
    },
    {
      "line": 179,
      "name": "@shopping"
    },
    {
      "line": 180,
      "name": "@view_cart_details"
    }
  ]
});
formatter.step({
  "line": 182,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 183,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 185,
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
  "duration": 28057126006,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1225997250,
  "status": "passed"
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
  "duration": 30551241884,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9723198835,
  "status": "passed"
});
formatter.after({
  "duration": 426728,
  "status": "passed"
});
formatter.before({
  "duration": 34157284,
  "status": "passed"
});
formatter.scenario({
  "line": 193,
  "name": "Catg : Search ; Basic Search by material number verification to verify if search is returning results or not",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-search-;-basic-search-by-material-number-verification-to-verify-if-search-is-returning-results-or-not",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 187,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 188,
      "name": "@market_smoke2"
    },
    {
      "line": 189,
      "name": "@market_smoke"
    },
    {
      "line": 190,
      "name": "@market_smoke_prod"
    },
    {
      "line": 191,
      "name": "@search"
    },
    {
      "line": 192,
      "name": "@search_test"
    }
  ]
});
formatter.step({
  "line": 194,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 195,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "The search results page displays",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "Make sure elements \"ResultForm\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 198,
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
  "duration": 32645692379,
  "status": "passed"
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
  "duration": 26746203612,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:51"
});
formatter.result({
  "duration": 230453319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultForm",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 36
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 735000213,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7943682173,
  "status": "passed"
});
formatter.after({
  "duration": 478777,
  "status": "passed"
});
formatter.before({
  "duration": 27631826,
  "status": "passed"
});
formatter.scenario({
  "line": 206,
  "name": "Catg : Search ; Search with alphanumeric words and make sure 0 results are returned",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-search-;-search-with-alphanumeric-words-and-make-sure-0-results-are-returned",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 200,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 201,
      "name": "@market_smoke2"
    },
    {
      "line": 202,
      "name": "@market_smoke"
    },
    {
      "line": 203,
      "name": "@market_smoke_prod"
    },
    {
      "line": 204,
      "name": "@search"
    },
    {
      "line": 205,
      "name": "@search_no_results"
    }
  ]
});
formatter.step({
  "line": 207,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 208,
  "name": "Search product by word \"dsfsdfsdf342344\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "I verify the Text on \u0027ResultCountNumber\u0027 is \u00270\u0027",
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
  "duration": 34709052155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dsfsdfsdf342344",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 22487130777,
  "status": "passed"
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
  "duration": 421324889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultCountNumber",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 8033341420,
  "status": "passed"
});
formatter.after({
  "duration": 505128,
  "status": "passed"
});
formatter.before({
  "duration": 28429836,
  "status": "passed"
});
formatter.scenario({
  "line": 218,
  "name": "Catg : Search ; Verify details of each item returned",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-search-;-verify-details-of-each-item-returned",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 212,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 213,
      "name": "@market_smoke2"
    },
    {
      "line": 214,
      "name": "@market_smoke"
    },
    {
      "line": 215,
      "name": "@market_smoke_prod"
    },
    {
      "line": 216,
      "name": "@search"
    },
    {
      "line": 217,
      "name": "@results_each_item_details"
    }
  ]
});
formatter.step({
  "line": 219,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 220,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "I must see the \u0027ProductTitle\u0027 attribute displayed for each item",
  "keyword": "Then "
});
formatter.step({
  "line": 223,
  "name": "I must see the \u0027MaterialNum\u0027 attribute displayed for each item",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "I must see the \u0027ManufacturerNum\u0027 attribute displayed for each item",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "I must see the \u0027CheckAvailibity\u0027 attribute displayed for each item",
  "keyword": "Then "
});
formatter.step({
  "line": 226,
  "name": "I must see the \u0027QtyValueBoxText\u0027 attribute displayed for each item",
  "keyword": "Then "
});
formatter.step({
  "line": 227,
  "name": "I must see the \u0027QtyTitle\u0027 attribute displayed for each item",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "I must see the \u0027ManufacturerName\u0027 attribute displayed for each item",
  "keyword": "Then "
});
formatter.step({
  "line": 229,
  "name": "I must see the \u0027itemImage\u0027 attribute displayed for each item",
  "keyword": "Then "
});
formatter.step({
  "line": 230,
  "name": "I must see the \u0027UOMSelections\u0027 attribute displayed for each item",
  "keyword": "Then "
});
formatter.step({
  "line": 231,
  "name": "I must see the \u0027CompareCheckbox\u0027 attribute displayed for each item",
  "keyword": "Then "
});
formatter.step({
  "line": 232,
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
  "duration": 35590966790,
  "status": "passed"
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
  "duration": 27450573902,
  "status": "passed"
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
  "duration": 507905880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ProductTitle",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 9891244441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MaterialNum",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 8703956644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturerNum",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 12735093241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CheckAvailibity",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 9772952254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QtyValueBoxText",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 10428549762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QtyTitle",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 9310589441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturerName",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 8918260947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "itemImage",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 9369413853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UOMSelections",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 10767902529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareCheckbox",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 9620169494,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7968399769,
  "status": "passed"
});
formatter.after({
  "duration": 559588,
  "status": "passed"
});
formatter.before({
  "duration": 31142518,
  "status": "passed"
});
formatter.scenario({
  "line": 241,
  "name": "Catg : Search ; Item details default attributes",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-search-;-item-details-default-attributes",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 235,
      "name": "@market_smoke2"
    },
    {
      "line": 236,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 237,
      "name": "@market_smoke"
    },
    {
      "line": 238,
      "name": "@market_smoke_prod"
    },
    {
      "line": 239,
      "name": "@search"
    },
    {
      "line": 240,
      "name": "@item_details_default"
    }
  ]
});
formatter.step({
  "line": 242,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 243,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 247,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "Save whole part of element \"manufacturer\" to variable \"temp_manufacturernum\"",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "Save value of element \"material\" to variable \"temp_materialnum\"",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "Enter Text \"temp_manufacturernum\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I click element \u0027SearchBarSubmit\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "if \"SearchResultPage\" page returned than hit on item that contains \"temp_materialnum\" and \"temp_manufacturernum\" and get to idp page",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "Make sure elements \"Logo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 256,
  "name": "Make sure elements \"SearchBox\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 257,
  "name": "Make sure elements \"SearchBarSubmit\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 258,
  "name": "Make sure elements \"SoldToNum\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 259,
  "name": "Make sure elements \"SoldToName\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 260,
  "name": "Make sure elements \"ShipToNum\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 261,
  "name": "Make sure elements \"ShipToName\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 262,
  "name": "Make sure elements \"changeAccountLink\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 263,
  "name": "Make sure elements \"PrintBtn\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 264,
  "name": "I verify the Text on \u0027manufacturernum\u0027 is \u0027temp_manufacturernum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 266,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "Make sure elements \"product_description_label\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "Make sure elements \"product_description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "Make sure elements \"features_benefits_label\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "Make sure elements \"features_benefits\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 275,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 276,
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
  "duration": 36734919644,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2063869562,
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
  "duration": 30912790273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1069387088,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 50747377622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:334"
});
formatter.result({
  "duration": 2317794096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whole",
      "offset": 5
    },
    {
      "val": "manufacturer",
      "offset": 28
    },
    {
      "val": "temp_manufacturernum",
      "offset": 55
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 1231980178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 23
    },
    {
      "val": "temp_materialnum",
      "offset": 46
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 3079515827,
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
  "duration": 897911305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_manufacturernum",
      "offset": 12
    },
    {
      "val": "SearchBox",
      "offset": 53
    },
    {
      "val": "globalHeader",
      "offset": 75
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 16052113911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchBarSubmit",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 10569464541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 4
    },
    {
      "val": "temp_materialnum",
      "offset": 68
    },
    {
      "val": "temp_manufacturernum",
      "offset": 91
    }
  ],
  "location": "common_csp.groovy:442"
});
formatter.result({
  "duration": 6029149008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 4340764918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logo",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 30
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1126892362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchBox",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 3052617703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchBarSubmit",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 41
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1825302350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToNum",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 3848256282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToName",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 36
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 2436748391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToNum",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 2973447158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToName",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 36
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 6655842381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "changeAccountLink",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 43
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 3417981573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PrintBtn",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 34
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1592334198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturernum",
      "offset": 22
    },
    {
      "val": "temp_manufacturernum",
      "offset": 43
    }
  ],
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 30244463092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TitleInfo",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 710927061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Image_container",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 41
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 698467337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 33
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 677902250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 37
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1757025519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product_description_label",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 51
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1119839469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product_description",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 938062103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "features_benefits_label",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 49
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1043013391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "features_benefits",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 43
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 2907565577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Specification",
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
  "duration": 861096814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Packaging",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 651002004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturerName",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 886687483,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9526378192,
  "status": "passed"
});
formatter.after({
  "duration": 445389,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 284,
  "name": "Catg : Global Header/Navigation ; Click/Tap Change Account - use view all accounts option",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---use-view-all-accounts-option",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 278,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 279,
      "name": "@market_smoke2"
    },
    {
      "line": 280,
      "name": "@market_smoke"
    },
    {
      "line": 281,
      "name": "@market_smoke_prod"
    },
    {
      "line": 282,
      "name": "@global_header"
    },
    {
      "line": 283,
      "name": "@all_account_view"
    }
  ]
});
formatter.step({
  "line": 285,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 286,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 287,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 288,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "the system must display an account selection section on the page as \u003cselectAccountLabel\u003e,\u003csoldToLabel\u003e,\u003cshipToLabel\u003e,\u003csearchBoxDefaultText\u003e,\u003cviewAllAccountsLink\u003e,\u003ccancelLink\u003e,\u003cchangeAccountButtonLabel\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 290,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.examples({
  "line": 294,
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
      "line": 295,
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
      "line": 296,
      "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---use-view-all-accounts-option;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26488514,
  "status": "passed"
});
formatter.scenario({
  "line": 296,
  "name": "Catg : Global Header/Navigation ; Click/Tap Change Account - use view all accounts option",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---use-view-all-accounts-option;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 280,
      "name": "@market_smoke"
    },
    {
      "line": 281,
      "name": "@market_smoke_prod"
    },
    {
      "line": 279,
      "name": "@market_smoke2"
    },
    {
      "line": 283,
      "name": "@all_account_view"
    },
    {
      "line": 278,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 282,
      "name": "@global_header"
    }
  ]
});
formatter.step({
  "line": 285,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 286,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 287,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 288,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 289,
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
  "line": 290,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 292,
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
  "duration": 35478615253,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 9463610292,
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
  "duration": 1025672622,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 12610019628,
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
  "location": "changeaccountdropdown.groovy:23"
});
formatter.result({
  "duration": 10721916757,
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
  "duration": 10817142407,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 1012803159,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9321477542,
  "status": "passed"
});
formatter.after({
  "duration": 419007,
  "status": "passed"
});
formatter.before({
  "duration": 25015346,
  "status": "passed"
});
formatter.scenario({
  "line": 305,
  "name": "Catg : Global Header/Navigation ; Get Products details and verify Product landing and Category Landing Page",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-get-products-details-and-verify-product-landing-and-category-landing-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 298,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 299,
      "name": "@market_smoke2"
    },
    {
      "line": 300,
      "name": "@market_smoke"
    },
    {
      "line": 301,
      "name": "@market_smoke_prod"
    },
    {
      "line": 302,
      "name": "@global_header"
    },
    {
      "line": 303,
      "name": "@getpoductdetails"
    },
    {
      "line": 304,
      "name": "@products_plp_clp"
    }
  ]
});
formatter.step({
  "line": 306,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 307,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "There should be image and title attribute displayed for each item",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 312,
  "name": "Verify items list details related to product",
  "keyword": "And "
});
formatter.step({
  "line": 313,
  "name": "I should see the Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 314,
  "name": "I click at Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "I should see the Item \u0027availabilitymsg\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 316,
  "name": "I click at Item \u0027itemslabel\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "I must be taken to an \u0027ItemDetailsPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 318,
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
  "duration": 30056881010,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 991091027,
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
  "duration": 28787261369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 2871222753,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:58"
});
formatter.result({
  "duration": 88840680748,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 62816841499,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:421"
});
formatter.result({
  "duration": 5932842481,
  "status": "passed"
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
  "duration": 779447523,
  "status": "passed"
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
  "duration": 17511381486,
  "status": "passed"
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
  "duration": 869123276,
  "status": "passed"
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
  "duration": 11420222474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1680329240,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 13520884376,
  "status": "passed"
});
formatter.after({
  "duration": 419991,
  "status": "passed"
});
formatter.before({
  "duration": 25156924,
  "status": "passed"
});
formatter.scenario({
  "line": 326,
  "name": "Catg : Global Header/Navigation ; Click/Tap Change Account - CHANGE account to new ship and sold to account",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---change-account-to-new-ship-and-sold-to-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 320,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 321,
      "name": "@market_smoke2"
    },
    {
      "line": 322,
      "name": "@market_smoke"
    },
    {
      "line": 323,
      "name": "@market_smoke_prod"
    },
    {
      "line": 324,
      "name": "@global_header"
    },
    {
      "line": 325,
      "name": "@account_change"
    }
  ]
});
formatter.step({
  "line": 327,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 328,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 329,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 330,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 331,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 332,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 333,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 335,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 336,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "I verify that \u0027SoldToNum\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 338,
  "name": "I verify that \u0027ShipToNum\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 339,
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
  "duration": 30431266720,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 9454863343,
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
  "duration": 1170605547,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 9819058652,
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
  "duration": 10481313296,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 1411869315,
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
  "duration": 3883493196,
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
  "duration": 2669755996,
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
  "duration": 11268831779,
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
  "duration": 21088356195,
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
  "duration": 12507571225,
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
  "duration": 16844175030,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 11841997453,
  "status": "passed"
});
formatter.after({
  "duration": 373370,
  "status": "passed"
});
formatter.before({
  "duration": 26199959,
  "status": "passed"
});
formatter.scenario({
  "line": 347,
  "name": "Catg : Global Header/Navigation ; Search by sold to account and make sure search results rows contains that number",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-search-by-sold-to-account-and-make-sure-search-results-rows-contains-that-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 341,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 342,
      "name": "@market_smoke2"
    },
    {
      "line": 343,
      "name": "@market_smoke"
    },
    {
      "line": 344,
      "name": "@market_smoke_prod"
    },
    {
      "line": 345,
      "name": "@global_header"
    },
    {
      "line": 346,
      "name": "@searchby_soldto_verifyreturned_changeACCOUNT"
    }
  ]
});
formatter.step({
  "line": 348,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 349,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 350,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 351,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 355,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 356,
  "name": "I click on element \"cancelButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 358,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 359,
  "name": "Enter Text \"temp_newsoldto\" in Text Box field \"search\" in module \"changeAccountDropDown\"",
  "keyword": "And "
});
formatter.step({
  "line": 360,
  "name": "I click on element \"searchButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 361,
  "name": "Make sure the search results contains the account \"number\" that is being searched for",
  "keyword": "And "
});
formatter.step({
  "line": 363,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 365,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 366,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "I verify that \u0027SoldToNum\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 368,
  "name": "I verify that \u0027ShipToNum\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 369,
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
  "duration": 34127041836,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 10924960180,
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
  "duration": 2428788235,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 8932801680,
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
  "duration": 6930981221,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 1335199830,
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
  "duration": 5182547760,
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
  "duration": 4887637173,
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
  "duration": 6570309983,
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
  "duration": 3884361306,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 11182890039,
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
  "duration": 11555573547,
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
  "duration": 9865672202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "number",
      "offset": 51
    }
  ],
  "location": "changeaccountdropdown.groovy:96"
});
formatter.result({
  "duration": 2311917549,
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
  "duration": 4932588913,
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
  "duration": 3455607396,
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
  "duration": 8882064156,
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
  "duration": 22068209685,
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
  "duration": 13276974528,
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
  "duration": 13523750426,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 10293132127,
  "status": "passed"
});
formatter.after({
  "duration": 450887,
  "status": "passed"
});
formatter.before({
  "duration": 38472915,
  "status": "passed"
});
formatter.scenario({
  "line": 377,
  "name": "Catg : Global Header/Navigation ; Search by sold to NAME and make sure search results rows contains that name",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-search-by-sold-to-name-and-make-sure-search-results-rows-contains-that-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 371,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 372,
      "name": "@market_smoke2"
    },
    {
      "line": 373,
      "name": "@market_smoke"
    },
    {
      "line": 374,
      "name": "@market_smoke_prod"
    },
    {
      "line": 375,
      "name": "@global_header"
    },
    {
      "line": 376,
      "name": "@searchby_soldto_verifyreturned_changeNAME"
    }
  ]
});
formatter.step({
  "line": 378,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 379,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 380,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 381,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 382,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 383,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 384,
  "name": "Save value of element \"firstnonselectedrowSoldToName\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "Save value of element \"firstnonselectedrowShipToName\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 386,
  "name": "I click on element \"cancelButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 387,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 388,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "Enter Text \"temp_newsoldto\" in Text Box field \"search\" in module \"changeAccountDropDown\"",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "I click on element \"searchButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "Make sure the search results contains the account \"name\" that is being searched for",
  "keyword": "And "
});
formatter.step({
  "line": 393,
  "name": "Save value of element \"firstnonselectedrowSoldToName\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 394,
  "name": "Save value of element \"firstnonselectedrowShipToName\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 395,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 396,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 398,
  "name": "I verify that \u0027SoldToName\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 399,
  "name": "I verify that \u0027ShipToName\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 400,
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
  "duration": 30859002998,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 11344386617,
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
  "duration": 1485815772,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 9760127888,
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
  "duration": 7582548757,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 793102878,
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
  "duration": 14236695205,
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
  "duration": 12000443051,
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
  "duration": 7235342839,
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
  "duration": 1117016868,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 13832335361,
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
  "duration": 7443572516,
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
  "duration": 8967419151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 51
    }
  ],
  "location": "changeaccountdropdown.groovy:96"
});
formatter.result({
  "duration": 8416467574,
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
  "duration": 11542571492,
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
  "duration": 13049501260,
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
  "duration": 6977938644,
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
  "duration": 20221596885,
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
  "duration": 12756310438,
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
  "duration": 13241902799,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 6186924744,
  "status": "passed"
});
formatter.after({
  "duration": 635608,
  "status": "passed"
});
formatter.before({
  "duration": 31363302,
  "status": "passed"
});
formatter.scenario({
  "line": 408,
  "name": "Catg : Global Header/Navigation ; Search by SHIP to account and make sure search results rows contains that SHIPTO ACT number",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-search-by-ship-to-account-and-make-sure-search-results-rows-contains-that-shipto-act-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 402,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 403,
      "name": "@market_smoke2"
    },
    {
      "line": 404,
      "name": "@market_smoke"
    },
    {
      "line": 405,
      "name": "@market_smoke_prod"
    },
    {
      "line": 406,
      "name": "@global_header"
    },
    {
      "line": 407,
      "name": "@searchby_Shipto_verifyreturned_changeACCOUNT"
    }
  ]
});
formatter.step({
  "line": 409,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 410,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 411,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 412,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "I click on element \"cancelButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 419,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "Enter Text \"temp_newshipto\" in Text Box field \"search\" in module \"changeAccountDropDown\"",
  "keyword": "And "
});
formatter.step({
  "line": 421,
  "name": "I click on element \"searchButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 422,
  "name": "Make sure the search results contains the account \"number\" that is being searched for",
  "keyword": "And "
});
formatter.step({
  "line": 424,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 425,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 426,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 427,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 428,
  "name": "I verify that \u0027SoldToNum\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 429,
  "name": "I verify that \u0027ShipToNum\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 430,
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
  "duration": 27267120855,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 11438080722,
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
  "duration": 1724021425,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 14126839796,
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
  "duration": 11072724990,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 882380903,
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
  "duration": 5322290451,
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
  "duration": 2624832076,
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
  "duration": 6676648574,
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
  "duration": 1065474119,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 8665725552,
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
  "duration": 7646166888,
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
  "duration": 10065037364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "number",
      "offset": 51
    }
  ],
  "location": "changeaccountdropdown.groovy:96"
});
formatter.result({
  "duration": 1235947773,
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
  "duration": 3870612690,
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
  "duration": 4169956649,
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
  "duration": 6551125089,
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
  "duration": 21636735602,
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
  "duration": 17010733481,
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
  "duration": 13321360882,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 10425534281,
  "status": "passed"
});
formatter.after({
  "duration": 506717,
  "status": "passed"
});
formatter.before({
  "duration": 26731643,
  "status": "passed"
});
formatter.scenario({
  "line": 438,
  "name": "Catg : Global Header/Navigation ; Search by ship to NAME and make sure search results rows contains that ship to name",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-search-by-ship-to-name-and-make-sure-search-results-rows-contains-that-ship-to-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 432,
      "name": "@market_smoke2"
    },
    {
      "line": 433,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 434,
      "name": "@market_smoke"
    },
    {
      "line": 435,
      "name": "@market_smoke_prod"
    },
    {
      "line": 436,
      "name": "@global_header"
    },
    {
      "line": 437,
      "name": "@searchby_shipto_verifyreturned_changeNAME"
    }
  ]
});
formatter.step({
  "line": 439,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 440,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 441,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 442,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 443,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 444,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 445,
  "name": "Save value of element \"firstnonselectedrowSoldToName\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 446,
  "name": "Save value of element \"firstnonselectedrowShipToName\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 447,
  "name": "I click on element \"cancelButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 448,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 449,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 450,
  "name": "Enter Text \"temp_newshipto\" in Text Box field \"search\" in module \"changeAccountDropDown\"",
  "keyword": "And "
});
formatter.step({
  "line": 451,
  "name": "I click on element \"searchButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 452,
  "name": "Make sure the search results contains the account \"name\" that is being searched for",
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "Save value of element \"firstnonselectedrowSoldToName\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 455,
  "name": "Save value of element \"firstnonselectedrowShipToName\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 456,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 457,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 458,
  "name": "Wait for 5000 ms",
  "keyword": "And "
});
formatter.step({
  "line": 459,
  "name": "I verify that \u0027SoldToName\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 460,
  "name": "I verify that \u0027ShipToName\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 461,
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
  "duration": 30731864677,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 9159903073,
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
  "duration": 1754178278,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 11924161189,
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
  "duration": 9188822300,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 785422603,
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
  "duration": 10497601548,
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
  "duration": 13947087638,
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
  "duration": 8820934012,
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
  "duration": 1212368100,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 8941247790,
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
  "duration": 10430833596,
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
  "duration": 10192003878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 51
    }
  ],
  "location": "changeaccountdropdown.groovy:96"
});
formatter.result({
  "duration": 6059289551,
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
  "duration": 13770430816,
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
  "duration": 17721461605,
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
  "duration": 10800002568,
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
  "duration": 21068879763,
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
  "duration": 5000442272,
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
  "duration": 15924131446,
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
  "duration": 16936863284,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8704899896,
  "status": "passed"
});
formatter.after({
  "duration": 368314,
  "status": "passed"
});
formatter.before({
  "duration": 27525343,
  "status": "passed"
});
formatter.scenario({
  "line": 469,
  "name": "Catg : Global Header/Navigation ; Sold to account details",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-sold-to-account-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 463,
      "name": "@market_smoke2"
    },
    {
      "line": 464,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 465,
      "name": "@market_smoke"
    },
    {
      "line": 466,
      "name": "@market_smoke_prod"
    },
    {
      "line": 467,
      "name": "@global_header"
    },
    {
      "line": 468,
      "name": "@soldto_shipto_account_details"
    }
  ]
});
formatter.step({
  "line": 470,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 471,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 472,
  "name": "I click element \u0027SoldTo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 473,
  "name": "Make sure element \"SoldToName\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 474,
  "name": "Make sure element \"SoldToName2\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 475,
  "name": "Make sure element \"SoldToAddress1\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 476,
  "name": "Make sure element \"SoldToState\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 477,
  "name": "Make sure element \"SoldToBaseValue\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I click element \u0027ShipTo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "Make sure element \"ShipToName\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 481,
  "name": "Make sure element \"ShipToName2\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 482,
  "name": "Make sure element \"ShipToAddress1\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 483,
  "name": "Make sure element \"ShipToState\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 484,
  "name": "Make sure element \"ShipToBaseValue\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 485,
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
  "duration": 29329875555,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 9004286850,
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
  "duration": 10643095572,
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
  "duration": 3027212755,
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
  "duration": 4623607503,
  "status": "passed"
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
  "duration": 4549318609,
  "status": "passed"
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
  "duration": 4488224862,
  "status": "passed"
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
  "duration": 3971159369,
  "status": "passed"
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
  "duration": 8720413549,
  "status": "passed"
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
  "duration": 4031992169,
  "status": "passed"
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
  "duration": 2837719960,
  "status": "passed"
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
  "duration": 3189099696,
  "status": "passed"
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
  "duration": 3144998853,
  "status": "passed"
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
  "duration": 4917322678,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9466520529,
  "status": "passed"
});
formatter.after({
  "duration": 427771,
  "status": "passed"
});
formatter.before({
  "duration": 28214862,
  "status": "passed"
});
formatter.scenario({
  "line": 493,
  "name": "Catg : Global Header/Navigation ; Click/Tap logo to go to Home page",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-logo-to-go-to-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 487,
      "name": "@market_smoke2"
    },
    {
      "line": 488,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 489,
      "name": "@market_smoke"
    },
    {
      "line": 490,
      "name": "@market_smoke_prod"
    },
    {
      "line": 491,
      "name": "@global_header"
    },
    {
      "line": 492,
      "name": "@logo_homepage"
    }
  ]
});
formatter.step({
  "line": 494,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 495,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 496,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 497,
  "name": "I click on \u0027Logo\u0027 in Tablet Header",
  "keyword": "When "
});
formatter.step({
  "line": 498,
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
  "duration": 27260707018,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1296022965,
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
  "duration": 28875823133,
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
  "duration": 2598126896,
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
  "duration": 2903711469,
  "status": "passed"
});
formatter.after({
  "duration": 317531,
  "status": "passed"
});
});