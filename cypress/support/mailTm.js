const BASE_URL = 'https://api.mail.tm';

export async function createMailTmInbox() {
  const domainsResponse = await fetch(`${BASE_URL}/domains`);
  const domainsData = await domainsResponse.json();

  const domain = domainsData['hydra:member'][0].domain;

  const email = `test-${Date.now()}-${Math.random().toString(36).slice(2)}@${domain}`;
  const password = `Password-${Date.now()}!`;

  const accountResponse = await fetch(`${BASE_URL}/accounts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      address: email,
      password
    })
  });

  if (!accountResponse.ok) {
    throw new Error(`Failed to create mail.tm account: ${accountResponse.status}`);
  }

  const tokenResponse = await fetch(`${BASE_URL}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      address: email,
      password
    })
  });

  if (!tokenResponse.ok) {
    throw new Error(`Failed to get mail.tm token: ${tokenResponse.status}`);
  }

  const tokenData = await tokenResponse.json();

  return {
    email,
    password,
    token: tokenData.token
  };
}

export async function waitForLatestEmail(token, timeoutMs = 60000) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    const response = await fetch(`${BASE_URL}/messages`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch mail.tm messages: ${response.status}`);
    }

    const data = await response.json();
    const messages = data['hydra:member'];

    if (messages.length > 0) {
      const latestMessage = messages[0];

      const messageResponse = await fetch(`${BASE_URL}/messages/${latestMessage.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!messageResponse.ok) {
        throw new Error(`Failed to read mail.tm message: ${messageResponse.status}`);
      }

      return messageResponse.json();
    }

    await new Promise(resolve => setTimeout(resolve, 3000));
  }

  throw new Error('Email was not received in time');
}