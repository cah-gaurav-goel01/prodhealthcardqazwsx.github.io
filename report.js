$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("navigation/Common.feature");
formatter.feature({
  "line": 1,
  "name": "Market smoke test cases",
  "description": "",
  "id": "market-smoke-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7031898932,
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
  "duration": 19026648978,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2769348927,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 46387381010,
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
  "duration": 33742078738,
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
  "duration": 19488777222,
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
  "duration": 1006672566,
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
  "duration": 949807099,
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
  "duration": 1269900394,
  "status": "passed"
});
formatter.after({
  "duration": 9430749,
  "status": "passed"
});
formatter.before({
  "duration": 43000292,
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
  "duration": 25141622923,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 895582310,
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
  "duration": 25278045012,
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
  "duration": 1242013401,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 46255135442,
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
  "duration": 17695164654,
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
  "duration": 908955747,
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
  "duration": 1501792490,
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
  "duration": 870252992,
  "status": "passed"
});
formatter.after({
  "duration": 1011343,
  "status": "passed"
});
formatter.before({
  "duration": 28158085,
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
  "duration": 27285656071,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 940766223,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 12271703827,
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
  "duration": 31331330379,
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
  "duration": 11999070770,
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
  "duration": 894963451,
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
  "duration": 1827840553,
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
  "duration": 1331130632,
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
  "duration": 3793310039,
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
  "duration": 18072058987,
  "status": "passed"
});
formatter.after({
  "duration": 1045710,
  "status": "passed"
});
formatter.before({
  "duration": 37623447,
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
  "duration": 23473626951,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 976952726,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 9955356146,
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
  "duration": 26507538883,
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
  "duration": 11162549968,
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
  "duration": 982389027,
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
  "duration": 879785672,
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
  "duration": 2427182880,
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
  "duration": 21093753461,
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
  "duration": 11589229746,
  "status": "passed"
});
formatter.after({
  "duration": 1189349,
  "status": "passed"
});
formatter.before({
  "duration": 33480136,
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
  "duration": 24092115720,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2197683328,
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
  "duration": 33961130008,
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
  "duration": 491903990,
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
  "duration": 944823652,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 4728548510,
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
  "duration": 47046889921,
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
  "duration": 1509681331,
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
  "duration": 2683070643,
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
  "duration": 766291024,
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
  "duration": 776784442,
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
  "duration": 776774544,
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
  "duration": 420483807,
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
  "duration": 433924854,
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
  "duration": 425596265,
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
  "duration": 376832497,
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
  "duration": 379357842,
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
  "duration": 357324410,
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
  "duration": 422116891,
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
  "duration": 1218712310,
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
  "duration": 979822062,
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
  "duration": 386264852,
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
  "duration": 509038135,
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
  "duration": 1353047466,
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
  "duration": 421002309,
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
  "duration": 427697354,
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
  "duration": 470434781,
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
  "duration": 471511585,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8653612234,
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
  "duration": 25179835539,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 6464810256,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 6462024604,
  "status": "passed"
});
formatter.after({
  "duration": 1083210,
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
  "duration": 36093232,
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
  "duration": 21394662450,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1819795553,
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
  "duration": 33345323534,
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
  "duration": 482434951,
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
  "duration": 866673857,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 7460837113,
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
  "duration": 9467323944,
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
  "duration": 267668102,
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
  "duration": 2747800807,
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
  "duration": 802953405,
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
  "duration": 715659306,
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
  "duration": 31387048974,
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
  "duration": 433452213,
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
  "duration": 2955669968,
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
  "duration": 724510220,
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
  "duration": 746103172,
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
  "duration": 2338316440,
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
  "duration": 816134797,
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
  "duration": 847731906,
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
  "duration": 1058362172,
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
  "duration": 5129481963,
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
  "duration": 426637331,
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
  "duration": 4304141622,
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
  "duration": 794724767,
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
  "duration": 784281381,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 6116183716,
  "status": "passed"
});
formatter.after({
  "duration": 667815,
  "status": "passed"
});
formatter.before({
  "duration": 31017641,
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
  "duration": 24806545849,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 827228734,
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
  "duration": 24599475445,
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
  "duration": 434924101,
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
  "duration": 941627435,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 7572803414,
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
  "duration": 23920571460,
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
  "duration": 280088447,
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
  "duration": 4174378834,
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
  "duration": 734457075,
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
  "duration": 724224964,
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
  "duration": 25841497578,
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
  "duration": 2325536402,
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
  "duration": 6181896881,
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
  "duration": 782944406,
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
  "duration": 890290125,
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
  "duration": 4253837360,
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
  "duration": 727298457,
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
  "duration": 783221739,
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
  "duration": 968587932,
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
  "duration": 13814743550,
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
  "duration": 1118143137,
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
  "duration": 3387411579,
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
  "duration": 1357190233,
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
  "duration": 838300288,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8320729198,
  "status": "passed"
});
formatter.after({
  "duration": 680557,
  "status": "passed"
});
formatter.before({
  "duration": 29852978,
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
  "duration": 21821727749,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1678623181,
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
  "duration": 39386545281,
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
  "duration": 2474552292,
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
  "duration": 910693373,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 5290469322,
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
  "duration": 40446171189,
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
  "duration": 295540345,
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
  "duration": 2955334269,
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
  "duration": 908516051,
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
  "duration": 964649578,
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
  "duration": 32761057298,
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
  "duration": 443931579,
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
  "duration": 3317041938,
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
  "duration": 3299168302,
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
  "duration": 2548306575,
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
  "duration": 4798578378,
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
  "duration": 1201871139,
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
  "duration": 1467992233,
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
  "duration": 942107266,
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
  "duration": 5452831559,
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
  "duration": 426015057,
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
  "duration": 3203323432,
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
  "duration": 929269495,
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
  "duration": 777117160,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9886299930,
  "status": "passed"
});
formatter.after({
  "duration": 663104,
  "status": "passed"
});
formatter.before({
  "duration": 31215682,
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
  "duration": 23690340241,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 918714205,
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
  "duration": 29097371847,
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
  "duration": 420021650,
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
  "duration": 907481462,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 6645764794,
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
  "duration": 51748019232,
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
  "duration": 299825145,
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
  "duration": 3216124394,
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
  "duration": 823186625,
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
  "duration": 2549864416,
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
  "duration": 33043521506,
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
  "duration": 519837810,
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
  "duration": 4948468144,
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
  "duration": 780782567,
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
  "duration": 894832998,
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
  "duration": 2961564273,
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
  "duration": 948726281,
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
  "duration": 895042322,
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
  "duration": 877109666,
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
  "duration": 4644216512,
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
  "duration": 448201737,
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
  "duration": 3867718182,
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
  "duration": 862985569,
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
  "duration": 801259009,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9504091938,
  "status": "passed"
});
formatter.after({
  "duration": 648484,
  "status": "passed"
});
formatter.before({
  "duration": 28702301,
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
  "duration": 25454667877,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1033148131,
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
  "duration": 30855955194,
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
  "duration": 508714958,
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
  "duration": 1049501198,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 5923017701,
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
  "duration": 26645738430,
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
  "duration": 316310675,
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
  "duration": 5006365141,
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
  "duration": 936480082,
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
  "duration": 984391805,
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
  "duration": 860403659,
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
  "duration": 376623571,
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
  "duration": 410200021,
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
  "duration": 391115834,
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
  "duration": 427640582,
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
  "duration": 438693949,
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
  "duration": 456682293,
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
  "duration": 555764226,
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
  "duration": 587952132,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8161130328,
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
  "duration": 23615327602,
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
  "duration": 28582968200,
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
  "duration": 424580748,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 7784770167,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 6817465748,
  "status": "passed"
});
formatter.after({
  "duration": 771225,
  "status": "passed"
});
formatter.before({
  "duration": 32383609,
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
  "duration": 24310779376,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 915411285,
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
  "duration": 211017991516,
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
  "duration": 1211538938,
  "status": "passed"
});
formatter.before({
  "duration": 32602223,
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
  "duration": 25552763368,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 961505830,
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
  "duration": 37285031521,
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
  "duration": 1127806854,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 71626388533,
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
  "duration": 1394291244,
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
  "duration": 1273677510,
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
  "duration": 40416460214,
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
  "duration": 1066042856,
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
  "duration": 1122688075,
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
  "duration": 1148209470,
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
  "duration": 1017617176,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 10516944812,
  "status": "passed"
});
formatter.after({
  "duration": 634956,
  "status": "passed"
});
formatter.before({
  "duration": 34068126,
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
  "duration": 25123310789,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 979788232,
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
  "duration": 30492115279,
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
  "duration": 1020862061,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 62012558770,
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
  "duration": 905256097,
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
  "duration": 4460013115,
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
  "duration": 3260803076,
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
  "duration": 37922866733,
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
  "duration": 3862427653,
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
  "duration": 4448816877,
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
  "duration": 2301403586,
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
  "duration": 814821571,
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
  "duration": 2392414137,
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
  "duration": 865655562,
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
  "duration": 778086910,
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
  "duration": 787649960,
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
  "duration": 990887333,
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
  "duration": 30193758808,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8080985400,
  "status": "passed"
});
formatter.after({
  "duration": 891588,
  "status": "passed"
});
formatter.before({
  "duration": 33699593,
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
  "duration": 19064237522,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 943277922,
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
  "duration": 29497656340,
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
  "duration": 1042477122,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:58"
});
formatter.result({
  "duration": 82638002571,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 53306290436,
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
  "duration": 883032780,
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
  "duration": 6936314051,
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
  "duration": 4008363903,
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
  "duration": 36351926368,
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
  "duration": 6419956590,
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
  "duration": 5841306045,
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
  "duration": 34045875479,
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
  "duration": 31336265999,
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
  "duration": 798579036,
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
  "duration": 709313232,
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
  "duration": 753791545,
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
  "duration": 1034151372,
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
  "duration": 858002101,
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
  "duration": 827704152,
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
  "duration": 838909630,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 6721673697,
  "status": "passed"
});
formatter.after({
  "duration": 726523,
  "status": "passed"
});
formatter.before({
  "duration": 39852714,
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
  "duration": 21183803359,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1074549026,
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
  "duration": 27169829819,
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
  "duration": 936502962,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 52736701540,
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
  "duration": 949152448,
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
  "duration": 1217315236,
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
  "duration": 1427880050,
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
  "duration": 867319711,
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
  "duration": 15014864629,
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
  "duration": 8129542691,
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
  "duration": 156418172,
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
  "duration": 6943671838,
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
  "duration": 282979753,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 6330721032,
  "status": "passed"
});
formatter.after({
  "duration": 752768,
  "status": "passed"
});
formatter.before({
  "duration": 35432948,
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
  "duration": 25140467646,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 919248193,
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
  "duration": 39354836835,
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
  "duration": 1479721565,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 57474623070,
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
  "duration": 870766198,
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
  "duration": 2359114180,
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
  "duration": 5289272992,
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
  "duration": 920015516,
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
  "duration": 10604517996,
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
  "duration": 6620723242,
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
  "duration": 10673391064,
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
  "duration": 163149458,
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
  "duration": 733180754,
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
  "duration": 34761646159,
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
  "duration": 778821979,
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
  "duration": 855559316,
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
  "duration": 805275466,
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
  "duration": 749928169,
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
  "duration": 770213037,
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
  "duration": 797582686,
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
  "duration": 844864944,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7863052006,
  "status": "passed"
});
formatter.after({
  "duration": 1585280,
  "status": "passed"
});
formatter.before({
  "duration": 25444200,
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
  "duration": 22974215537,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2369337145,
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
  "duration": 34707051600,
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
  "duration": 1062157060,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 57146087152,
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
  "duration": 967755043,
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
  "duration": 1828687220,
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
  "duration": 6534087312,
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
  "duration": 1383996139,
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
  "duration": 11920881041,
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
  "duration": 7739711085,
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
  "duration": 7753422772,
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
  "duration": 1999362194,
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
  "duration": 4451287095,
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
  "duration": 35758976569,
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
  "duration": 753964426,
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
  "duration": 812386565,
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
  "duration": 815275973,
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
  "duration": 791758347,
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
  "duration": 747664671,
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
  "duration": 864604538,
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
  "duration": 989093616,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7623195475,
  "status": "passed"
});
formatter.after({
  "duration": 663544,
  "status": "passed"
});
formatter.before({
  "duration": 25306697,
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
  "duration": 19399953042,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 5548273526,
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
  "duration": 6791102717,
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
  "duration": 18693808438,
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
  "duration": 13383642597,
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
  "duration": 1363942191,
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
  "duration": 2559161831,
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
  "duration": 3042290122,
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
  "duration": 7980742577,
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
  "duration": 10047939619,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 11944089462,
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
  "duration": 140444929,
  "status": "passed"
});
formatter.after({
  "duration": 441489,
  "status": "passed"
});
formatter.before({
  "duration": 24207483,
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
  "duration": 20923776417,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 7107711894,
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
  "duration": 10216290751,
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
  "duration": 14652475319,
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
  "duration": 2160141797,
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
  "duration": 1205067874,
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
  "duration": 2265537222,
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
  "duration": 1255414479,
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
  "duration": 1288822000,
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
  "duration": 1184476995,
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
  "duration": 1354802488,
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
  "duration": 1232220895,
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
  "duration": 1617511809,
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
  "duration": 1169811394,
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
  "duration": 3332175446,
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
  "duration": 4285731583,
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
  "duration": 4168812064,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 6442848013,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9745595040,
  "status": "passed"
});
formatter.after({
  "duration": 477754,
  "status": "passed"
});
formatter.before({
  "duration": 31893292,
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
  "duration": 19946409879,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 7159297547,
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
  "duration": 12107842016,
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
  "duration": 11777330936,
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
  "duration": 1034609986,
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
  "duration": 4948619615,
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
  "duration": 3010687396,
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
  "duration": 3542501812,
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
  "duration": 3352557114,
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
  "duration": 4477504471,
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
  "duration": 3562731953,
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
  "duration": 3108231613,
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
  "duration": 4278120934,
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
  "duration": 6898201444,
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
  "duration": 7158112327,
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
  "duration": 4154222523,
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
  "duration": 7173586283,
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
  "duration": 4898663234,
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
  "duration": 6257859234,
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
  "duration": 6720132454,
  "error_message": "java.lang.AssertionError: pages.UserProfilePage -\u003e profile_SaveChangesButton: geb.navigator.NonEmptyNavigator cannot be interacted and hence cannot be clicked ,exception ...org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d70.0.3538.67)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 219 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u002732079283-66d6-4456-6661-14956d82b25d\u0027, ip: \u002710.254.0.62\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.14.62-65.117.amzn1.x86_64\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49750}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, takesScreenshot\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a), userDataDir\u003dC:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\scoped_dir3836_31335}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, hasMetadata\u003dtrue, handlesAlerts\u003dtrue, databaseEnabled\u003dfalse, version\u003d70.0.3538.67, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, webdriver.remote.sessionid\u003d6a8dfc24db1c4c9bbfd9f5513e9e824c, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 6a8dfc24db1c4c9bbfd9f5513e9e824c. Expression: false\n\tat functionlib.Elements.click_on_page(Elements.groovy:367)\n\tat functionlib.Elements.click_on_page(Elements.groovy)\n\tat functionlib.Elements$click_on_page$2.call(Unknown Source)\n\tat steps.itemdetails.itemdetailspage$_run_closure7.doCall(itemdetailspage.groovy:66)\n\tat ✽.And I click at Item \u0027profile_SaveChangesButton\u0027(navigation/Common.feature:454)\n",
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
  "duration": 885076167,
  "status": "passed"
});
formatter.before({
  "duration": 26672637,
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
  "duration": 23125653212,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2594420365,
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
  "duration": 29964069657,
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
  "duration": 1879527846,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 58250718020,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:421"
});
formatter.result({
  "duration": 5883852610,
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
  "duration": 812059645,
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
  "duration": 11767526433,
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
  "duration": 788738461,
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
  "duration": 10031182590,
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
  "duration": 1132946217,
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
  "duration": 892559393,
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
  "duration": 13182863209,
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
  "duration": 1001057450,
  "status": "passed"
});
formatter.after({
  "duration": 834351,
  "status": "passed"
});
formatter.before({
  "duration": 35137174,
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
  "duration": 22802632262,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1822389105,
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
  "duration": 13629685124,
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
  "duration": 19098432874,
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
  "duration": 1160929942,
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
  "duration": 686567976,
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
  "duration": 798878371,
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
  "duration": 794812620,
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
  "duration": 767429956,
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
  "duration": 722273958,
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
  "duration": 738516377,
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
  "duration": 826476488,
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
  "duration": 1462358413,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7817303387,
  "status": "passed"
});
formatter.after({
  "duration": 450163,
  "status": "passed"
});
formatter.before({
  "duration": 29672093,
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
  "duration": 24318819189,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 839172680,
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
  "duration": 14198970883,
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
  "duration": 11942475911,
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
  "duration": 918224120,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 6936312625,
  "status": "passed"
});
formatter.after({
  "duration": 790768,
  "status": "passed"
});
formatter.before({
  "duration": 33443427,
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
  "duration": 19970653727,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 789636551,
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
  "duration": 4365255015,
  "status": "passed"
});
formatter.after({
  "duration": 501899,
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
  "duration": 30954035,
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
  "duration": 21889257852,
  "status": "passed"
});
formatter.after({
  "duration": 673479,
  "status": "passed"
});
formatter.before({
  "duration": 42045580,
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
  "duration": 23349422555,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 890710968,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9662235957,
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
  "duration": 6527556244,
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
  "duration": 7421129686,
  "status": "passed"
});
formatter.after({
  "duration": 475009,
  "status": "passed"
});
formatter.before({
  "duration": 26537699,
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
  "duration": 30570083437,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2084633760,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 6677429365,
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
  "duration": 6664608968,
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
  "duration": 5468060311,
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
  "duration": 1658129537,
  "status": "passed"
});
formatter.after({
  "duration": 500955,
  "status": "passed"
});
formatter.before({
  "duration": 26389652,
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
  "duration": 19433256883,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7794799899,
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
  "duration": 439992045,
  "status": "passed"
});
formatter.after({
  "duration": 362375,
  "status": "passed"
});
formatter.before({
  "duration": 27656047,
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
  "duration": 18142098032,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2615821825,
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
  "duration": 2496097069,
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
  "duration": 1199387515,
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
  "duration": 2130296986,
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
  "duration": 680472111,
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
  "duration": 3676871457,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8091558775,
  "status": "passed"
});
formatter.after({
  "duration": 530283,
  "status": "passed"
});
formatter.before({
  "duration": 33248735,
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
  "duration": 19645504294,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 915704552,
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
  "duration": 2683378420,
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
  "duration": 1415324279,
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
  "duration": 2595832744,
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
  "duration": 1342562949,
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
  "duration": 1222259138,
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
  "duration": 1253023332,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7327854713,
  "status": "passed"
});
formatter.after({
  "duration": 470934,
  "status": "passed"
});
formatter.before({
  "duration": 28672479,
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
  "duration": 18132182505,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2042861562,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 8035331405,
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
  "duration": 31783979922,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "duration": 37029543957,
  "status": "passed"
});
formatter.after({
  "duration": 606012,
  "status": "passed"
});
formatter.before({
  "duration": 36016938,
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
  "duration": 23807749698,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 916322291,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 38233104762,
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
  "duration": 28402143955,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "duration": 35294534052,
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
  "duration": 447322930,
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
  "duration": 4672103949,
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
  "duration": 6383272977,
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
  "duration": 42912641008,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "duration": 44203337542,
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
  "duration": 412205638,
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
  "duration": 6745505962,
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
  "duration": 8819966320,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 10445746127,
  "status": "passed"
});
formatter.after({
  "duration": 1239342,
  "status": "passed"
});
formatter.before({
  "duration": 39882852,
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
  "duration": 20125468622,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 893454025,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 43914678303,
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
  "duration": 37074442368,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "duration": 35474380284,
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
  "duration": 449078344,
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
  "duration": 29717131262,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "duration": 44373336813,
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
  "duration": 475884829,
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
  "duration": 8811672254,
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
  "duration": 6639749376,
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
  "duration": 12183131354,
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
  "duration": 664660372,
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
  "duration": 8849600818,
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
  "duration": 4781864681,
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
  "duration": 17648244525,
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
  "duration": 3584499042,
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
  "duration": 3171449174,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8217024964,
  "status": "passed"
});
formatter.after({
  "duration": 488263,
  "status": "passed"
});
formatter.before({
  "duration": 29089207,
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
  "duration": 26900272238,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 3108278982,
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
  "duration": 27854792691,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8159330895,
  "status": "passed"
});
formatter.after({
  "duration": 479477,
  "status": "passed"
});
formatter.before({
  "duration": 29292711,
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
  "duration": 24018209857,
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
  "duration": 35174815587,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:51"
});
formatter.result({
  "duration": 346064270,
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
  "duration": 931575896,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7097902599,
  "status": "passed"
});
formatter.after({
  "duration": 513714,
  "status": "passed"
});
formatter.before({
  "duration": 37133552,
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
  "duration": 24211250537,
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
  "duration": 23224052397,
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
  "duration": 415447862,
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
  "duration": 11605645894,
  "status": "passed"
});
formatter.after({
  "duration": 729628,
  "status": "passed"
});
formatter.before({
  "duration": 39837705,
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
  "duration": 25845080735,
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
  "duration": 42700777418,
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
  "duration": 497418221,
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
  "duration": 10346387124,
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
  "duration": 14561035325,
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
  "duration": 9938247648,
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
  "duration": 19093805217,
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
  "duration": 10010499477,
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
  "duration": 8778344535,
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
  "duration": 10434194434,
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
  "duration": 11519228917,
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
  "duration": 11050396235,
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
  "duration": 14342022212,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8430419098,
  "status": "passed"
});
formatter.after({
  "duration": 814103,
  "status": "passed"
});
formatter.before({
  "duration": 33137411,
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
  "duration": 20880003462,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 864630056,
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
  "duration": 35739261323,
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
  "duration": 1051086063,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 54703094714,
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
  "duration": 908384391,
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
  "duration": 3778264463,
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
  "duration": 5305396978,
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
  "duration": 993333914,
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
  "duration": 14577084297,
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
  "duration": 18703179516,
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
  "duration": 7988834367,
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
  "duration": 3839055173,
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
  "duration": 3733882889,
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
  "duration": 2067881494,
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
  "duration": 2596288806,
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
  "duration": 2464967240,
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
  "duration": 3810851803,
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
  "duration": 4357962285,
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
  "duration": 3034035076,
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
  "duration": 1483607259,
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
  "duration": 931722780,
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
  "duration": 30818098361,
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
  "duration": 890237381,
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
  "duration": 864782165,
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
  "duration": 907728648,
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
  "duration": 2370849861,
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
  "duration": 1071078053,
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
  "duration": 1023098349,
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
  "duration": 2059556684,
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
  "duration": 1007854374,
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
  "duration": 2440041699,
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
  "duration": 1989426269,
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
  "duration": 2579353772,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8612263844,
  "status": "passed"
});
formatter.after({
  "duration": 588041,
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
  "duration": 60643690,
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
  "duration": 25175233439,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 6066813125,
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
  "duration": 1440712696,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 10446439372,
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
  "duration": 12529300502,
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
  "duration": 14438632743,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 911613348,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8053370090,
  "status": "passed"
});
formatter.after({
  "duration": 404337,
  "status": "passed"
});
formatter.before({
  "duration": 26634813,
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
  "duration": 24818729370,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2076372380,
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
  "duration": 32889655567,
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
  "duration": 1993412935,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:58"
});
formatter.result({
  "duration": 105031494646,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 64739034697,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:421"
});
formatter.result({
  "duration": 4989413410,
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
  "duration": 1104961530,
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
  "duration": 9919023670,
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
  "duration": 1095414033,
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
  "duration": 9681516485,
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
  "duration": 1359604301,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7149126517,
  "status": "passed"
});
formatter.after({
  "duration": 398593,
  "status": "passed"
});
formatter.before({
  "duration": 26683354,
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
  "duration": 23869859759,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 5275234926,
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
  "duration": 3430630652,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 8651583579,
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
  "duration": 7881749590,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 1074893847,
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
  "duration": 4051618390,
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
  "duration": 3251805486,
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
  "duration": 11742520621,
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
  "duration": 16478277248,
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
  "duration": 11168398491,
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
  "duration": 17411258996,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 10212355694,
  "status": "passed"
});
formatter.after({
  "duration": 475065,
  "status": "passed"
});
formatter.before({
  "duration": 32859124,
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
  "duration": 20915155670,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 5397508235,
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
  "duration": 2329082584,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 9247816240,
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
  "duration": 9344889809,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 864722357,
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
  "duration": 4188657693,
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
  "duration": 4935912951,
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
  "duration": 7016233997,
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
  "duration": 3046638548,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 13044040776,
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
  "duration": 8482608937,
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
  "duration": 11306972783,
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
  "duration": 1438460996,
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
  "duration": 3098071156,
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
  "duration": 5412544319,
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
  "duration": 12686466950,
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
  "duration": 16852373187,
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
  "duration": 12957947087,
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
  "duration": 16231689396,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 10542611317,
  "status": "passed"
});
formatter.after({
  "duration": 453837,
  "status": "passed"
});
formatter.before({
  "duration": 33619891,
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
  "duration": 19439281758,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 7107515713,
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
  "duration": 1848689457,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 11040719100,
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
  "duration": 8326476794,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 825847048,
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
  "duration": 14987408789,
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
  "duration": 15057154419,
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
  "duration": 7425823275,
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
  "duration": 1614216214,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 11183394752,
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
  "duration": 10133158950,
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
  "duration": 8709291185,
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
  "duration": 5990205997,
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
  "duration": 11660872168,
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
  "duration": 11833929203,
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
  "duration": 9608612888,
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
  "duration": 20097547864,
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
  "duration": 10722972497,
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
  "duration": 14146060167,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 11528143268,
  "status": "passed"
});
formatter.after({
  "duration": 476832,
  "status": "passed"
});
formatter.before({
  "duration": 27221006,
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
  "duration": 25908562220,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 7740438804,
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
  "duration": 2264949473,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 10745542824,
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
  "duration": 9831062298,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 1028987535,
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
  "duration": 3189202365,
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
  "duration": 3373968560,
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
  "duration": 6635811748,
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
  "duration": 1319902332,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 10597013850,
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
  "duration": 13262774493,
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
  "duration": 8642164700,
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
  "duration": 1369708952,
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
  "duration": 3059944053,
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
  "duration": 5925688135,
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
  "duration": 8776213036,
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
  "duration": 18454905140,
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
  "duration": 13490540920,
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
  "duration": 15546754529,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 15916051050,
  "status": "passed"
});
formatter.after({
  "duration": 610697,
  "status": "passed"
});
formatter.before({
  "duration": 35364180,
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
  "duration": 25159914898,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 6633123204,
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
  "duration": 1066981758,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 8852703037,
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
  "duration": 7437614148,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 850405352,
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
  "duration": 10728068734,
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
  "duration": 15199943689,
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
  "duration": 8066824175,
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
  "duration": 1458679956,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 11355707947,
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
  "duration": 11623528404,
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
  "duration": 10881116394,
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
  "duration": 6290480800,
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
  "duration": 14129352260,
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
  "duration": 20291569944,
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
  "duration": 10088100274,
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
  "duration": 19075069128,
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
  "duration": 5000485643,
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
  "duration": 15343535922,
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
  "duration": 14136934465,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9397200646,
  "status": "passed"
});
formatter.after({
  "duration": 478623,
  "status": "passed"
});
formatter.before({
  "duration": 34976930,
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
  "duration": 26715856705,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 6180147550,
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
  "duration": 8473329231,
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
  "duration": 6937987196,
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
  "duration": 3671814297,
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
  "duration": 6378858820,
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
  "duration": 3172392250,
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
  "duration": 3409186397,
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
  "duration": 7439387891,
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
  "duration": 4998690915,
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
  "duration": 4562787988,
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
  "duration": 4962968043,
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
  "duration": 4420880602,
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
  "duration": 3740725131,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9890090604,
  "status": "passed"
});
formatter.after({
  "duration": 528117,
  "status": "passed"
});
formatter.before({
  "duration": 32381937,
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
  "duration": 22301791356,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1721292511,
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
  "duration": 29468456243,
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
  "duration": 3810458898,
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
  "duration": 1610998252,
  "status": "passed"
});
formatter.after({
  "duration": 437059,
  "status": "passed"
});
});