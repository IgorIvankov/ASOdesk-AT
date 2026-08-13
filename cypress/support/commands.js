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
    }).then(() => {
      return cy.request({
        method: 'POST',
        url: `${BASE_URL}/token`,
        body: {
          address: email,
          password
        }
      }).then(tokenResponse => {
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
        return cy.request({
          method: 'GET',
          url: `${BASE_URL}/messages/${messages[0].id}`,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(messageResponse => messageResponse.body);
      }

      return cy.wait(3000).then(checkEmail);
    });
  }

  return checkEmail();
});