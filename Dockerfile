FROM cypress/included:13.6.2

WORKDIR "D\CypressAutomationJS\cypress"

MAINTAINER yuvraj singh

COPY package*.json package.json

RUN npm install



CMD ["npm", "run", "triggerAllTests-headless"]