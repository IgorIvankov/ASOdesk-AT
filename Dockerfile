FROM cypress/browsers:22.15.0

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV CI=true

CMD ["npm", "run", "smoke:chrome"]