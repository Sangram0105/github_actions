FROM node:12.2.0-alpine
WORKDIR app
COPY . .
RUN npm install
RUN npm test
EXPOSE 8000
CMD ["node","index.js"]