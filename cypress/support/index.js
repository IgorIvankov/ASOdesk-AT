// // cypress/support/index.js

// // Импортируем скрипт для отправки сообщения в Slack
// import '../../sendReportToSlack';

// // Используем глобальный хук `after`
// after(() => {
//   // Вызываем скрипт для отправки сообщения в Slack
//   sendSlackMessage();
// });