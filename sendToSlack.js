const { IncomingWebhook } = require('@slack/webhook');

const url = 'webhook';
const webhook = new IncomingWebhook(url);

webhook.send({
  text: 'Результаты тестов Cypress',
  attachments: [
    {
      fallback: 'HTML-отчет',
      text: 'HTML-отчет',
      fields: [
        {
          title: 'Отчет',
          value: 'https://igorivankov.github.io/ASOdesk-AT/',
          short: false,
        },
      ],
    },
  ],
});
