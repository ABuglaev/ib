FROM ubuntu/nginx:1.18-20.04_edge

ENV MP $MP

COPY . /var/www/html

RUN apt update && apt install nodejs npm -y

RUN npm install /var/www/html/server/

RUN npm install forever -g

RUN forever -c "nodejs" /var/www/html/server/app.js

EXPOSE 3012

EXPOSE 80
