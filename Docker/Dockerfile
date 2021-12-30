FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY . .

RUN apk add --update npm openrc 

RUN cd server/ && npm install && npm i -g forever

EXPOSE 3012

EXPOSE 80

#ENTRYPOINT forever start server/app.js

CMD nginx -g "daemon off;"
