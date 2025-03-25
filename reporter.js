const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./json-logs/",
  reportPath: "./cypress/cucumber-report/",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Automation Exercise" },
      { label: "Release", value: "1.2.3" },
      { label: "Execution Start Time", value: new Date().toLocaleString() }, 
      { label: "Execution End Time", value: new Date().toLocaleString() },
    ],
  },
});
