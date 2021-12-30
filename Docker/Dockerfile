FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY . .

RUN apk add --update npm openrc 

RUN cd server/ && npm install

EXPOSE 3012

EXPOSE 80

ENTRYPOINT node server/app.js

ENTRYPOINT nginx -g "daemon off;"

CMD sleep 5m
