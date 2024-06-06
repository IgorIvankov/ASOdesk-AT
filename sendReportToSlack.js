
const { IncomingWebhook } = require('@slack/webhook');

async function sendReportToSlack() {
  try {
    // const url = process.env.SLACK_WEBHOOK_URL;
    const webhook = new IncomingWebhook(url);

    // Читаем HTML-отчет из файла
    const report = fs.readFileSync('./mochawesome-report/mochawesome.html', 'utf8');

    await webhook.send({
      text: 'RuStore Cypress Tests Report',
      attachments: [
        {
          fallback: 'HTML-Report',
          text: 'HTML-Report',
          fields: [
            {
              title: 'Report',
              // value: 'https://igorivankov.github.io/ASOdesk-AT/'
              value: report,
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
