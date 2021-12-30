FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY . .

RUN apk add --update npm openrc 

RUN cd server/ && npm install

EXPOSE 3012

EXPOSE 80

ENTRYPOINT nginx -g "daemon on;"

ENTRYPOINT node server/app.js

CMD sleep 5m
