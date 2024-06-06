const fs = require('fs');
const { IncomingWebhook } = require('@slack/webhook');

async function sendReportToSlack() {
  try {
    const url = 'https://hooks.slack.com/services/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';
    const webhook = new IncomingWebhook(url);

    // Читаем HTML-отчет из файла
    //const report = fs.readFileSync('./mochawesome-report/mochawesome.html', 'utf8');

    await webhook.send({
      text: 'RuStore Cypress Tests Report',
      attachments: [
        {
          fallback: 'HTML-Report',
          text: 'HTML-Report',
          fields: [
            {
              title: 'Report',
              value: 'https://igorivankov.github.io/ASOdesk-AT/',
              short: false,
            },
          ],
        },
      ],
    });

    console.log('Отчет успешно отправлен в Slack');
  } catch (error) {
    console.error('Ошибка отправки отчета в Slack:', error);
  }
}

sendReportToSlack();
