# TECHNICAL-TASK_QA-ROLE-AUTOMATION-SCRIPT
This script is a technical task, it automate the E2E test, to buy a T-shirt on the swag labs e-commerce page.

CAUTION: Gitignore has been implemented to remove the node_modules from this project while pushing it to the repo, as it contain large files. To install the node_modules, ensure to run “npm install cypress” command after cloning this repo to the local.

PROJECT STRUCTURE
1.)	PAGE OBJECT: This script is generated using page object module (POM), this is to guarantee code maintainability, the element locators are stored in the page folder in a file named “buyTshirt_page.cy.js. this file also contain the test syntax or commands.
2.)	FIXTURE FOLDER: on the fixture folder, there is file named T-shirtData.json. this file contains all test data.
3.)	SPEC FILE: on the E2E folder, there is a test file named butTshirt_test.cy.js. This file contain the test commands.

REPORT PLUGINS: The following report plugins are installed and stored in the package.json folderMochawesome.
1.)	Mochawesome report generator (will generate a test report after the test is executed).
2.)	Mochawesome merge (this will merge the json and the html report together).
3.)	Rimraf (this will rewrite an existing report with new report each time the test is rerun).

 The script tag on the package.json is also modified with the below syntax, to enable this plugin to run with the test, by running “npm run test” on the root directory on the terminal.
"scripts": {
    "pretest": "rimraf -rf ./cypress/reports/mochawesome.json",
    "test": "npm run cypress-test || npm run posttest",
    "cypress-test": "cypress run",
    "posttest": "npm run merge-reports && npm run generate-htmlreport",
    "merge-reports": "mochawesome-merge ./cypress/reports/*.json > ./report1.json",
    "generate-htmlreport": "marge ./report1.json --reportDir ./cypress/reports"
  },

Also the cypress.config.js is modified to configure the report function;
"reporter" : "mochawesome",
    "reporterOptions" : {
      "charts" : true,
      "overwrite" : false,
      "Html" : false,
      "json" : true,
      "reportDir" : "cypress/reports"
    }

This script will has tested on the following browsers;
1.)	Chrome
2.)	Firefox
3.)	Edge
4.)	Catalon


