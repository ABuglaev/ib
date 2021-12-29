FROM ubuntu/nginx:1.18-20.04_edge

COPY . /var/www/html

RUN apt update && apt install nodejs npm -y

RUN npm install /var/www/html/server/

RUN npm install forever -g

EXPOSE 3012

EXPOSE 80

CMD ["forever -c nodejs", "/var/www/html/server/app.js"]
