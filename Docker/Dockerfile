FROM ubuntu/nginx

COPY . /var/www/html

RUN apt update && apt install nodejs npm -y

RUN cd /var/www/html/server/ && ls -la && npm install

EXPOSE 3012

CMD ["node", "/var/www/html/server/app.js", ";", "nginx", "-g", "daemon off;"]
