const { IncomingWebhook } = require('@slack/webhook');

const url = 'webhook';
const webhook = new IncomingWebhook(url);

webhook.send({
  text: 'RuStore Smoke Tests',
  attachments: [
    {
      fallback: 'RuStore Smoke Tests',
      color: '#0b5394',
      fields: [
        {
          title: 'New report is ready',
          value: '<https://igorivankov.github.io/ASOdesk-AT/|Click here to see results>',
          short: false,
        },
      ],
    },
  ],
});
