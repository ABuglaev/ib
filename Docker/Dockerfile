FROM ubuntu/nginx

COPY . /var/www/html

RUN apt update && apt install nodejs npm -y

RUN npm install /var/www/html/server/

EXPOSE 3012

EXPOSE 80

CMD ["nodejs", "/var/www/html/server/app.js"]
