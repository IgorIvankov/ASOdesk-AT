module.exports = {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results/json',
      "overwrite": false,
      "html": false,
      "json": true
    }
  };