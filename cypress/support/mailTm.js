const BASE_URL = 'https://api.mail.tm';

Cypress.Commands.add('createEmailInbox', () => {
  return cy.request({
    method: 'GET',
    url: `${BASE_URL}/domains`
  }).then(domainsResponse => {
    const domain = domainsResponse.body['hydra:member'][0].domain;

    const email = `test-${Date.now()}-${Math.random().toString(36).slice(2)}@${domain}`;
    const password = `Password-${Date.now()}!`;

    return cy.request({
      method: 'POST',
      url: `${BASE_URL}/accounts`,
      body: {
        address: email,
        password
      }
    }).then(accountResponse => {
      expect(accountResponse.status).to.eq(201);

      return cy.request({
        method: 'POST',
        url: `${BASE_URL}/token`,
        body: {
          address: email,
          password
        }
      }).then(tokenResponse => {
        expect(tokenResponse.status).to.eq(200);

        return {
          email,
          password,
          token: tokenResponse.body.token
        };
      });
    });
  });
});


Cypress.Commands.add('waitForLatestEmail', (token, timeoutMs = 60000) => {
  const startedAt = Date.now();

  function checkEmail() {
    if (Date.now() - startedAt >= timeoutMs) {
      throw new Error('Email was not received in time');
    }

    return cy.request({
      method: 'GET',
      url: `${BASE_URL}/messages`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      const messages = response.body['hydra:member'];

      if (messages.length > 0) {
        const latestMessage = messages[0];

        return cy.request({
          method: 'GET',
          url: `${BASE_URL}/messages/${latestMessage.id}`,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(messageResponse => {
          return messageResponse.body;
        });
      }

      return cy.wait(3000).then(() => {
        return checkEmail();
      });
    });
  }

  return checkEmail();
});