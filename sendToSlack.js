const { IncomingWebhook } = require('@slack/webhook');

const url = 'https://hooks.slack.com/services/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';
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
