import { createMailTmInbox, waitForLatestEmail } from './mailTm';

Cypress.Commands.add('createEmailInbox', () => {
  return cy.wrap(createMailTmInbox());
});

Cypress.Commands.add('waitForLatestEmail', (token, timeoutMs = 60000) => {
  return cy.wrap(waitForLatestEmail(token, timeoutMs), {
    timeout: timeoutMs + 5000
  });
});