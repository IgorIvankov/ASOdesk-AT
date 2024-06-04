const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  responseTimeout: 30000,
  requestTimeout: 30000,
  viewportWidth: 1366,
  viewportHeight: 760,
  numTestsKeptInMemory: 0,
  video: false,
  retries: 1,
  projectId: 'ASOdesk-AT',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reported-config.json',
  },
  videoCompression: 15,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})