FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY . .

RUN apk add --update npm openrc 

RUN cd server/ && npm install && npm i -g forever

EXPOSE 3012

EXPOSE 80

CMD forever start server/app.js && nginx -g "daemon off;"
