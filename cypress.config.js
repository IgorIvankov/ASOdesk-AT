
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  responseTimeout: 30000,
  requestTimeout: 30000,
  viewportWidth: 1366,
  viewportHeight: 760,
  numTestsKeptInMemory: 0,
  blockHosts: [
    '*.yandex.ru*',
    '*.ads.linkedin.com*',
    '*.g.doubleclick.net',
    '*.clarity.*',
  ],
  video: false,
  retries: 1,
  projectId: 'ASOdesk-AT',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reported-config.json',
  },
  videoCompression: 15,
  env: {
    MAILSLURP_API_KEY:
      '860a7fb57097264b1b15b568967a98d092bc6c2a6db22363c12b53a5030caee2',
    RECORD_KEY: '5ef94309-37b4-4f43-81e9-d1a0d79f5add',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: './cypress/e2e/**/*.{js,jsx,ts,tsx}',
    baseUrl: 'https://hq.asodesk.com/',
  },
})
