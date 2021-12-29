FROM ubuntu/nginx

COPY . /var/www/html

RUN apt update && apt install nodejs npm -y

RUN cd /var/www/html/server/

RUN ls -la

RUN npm install /var/www/html/server/

#EXPOSE 3012

#CMD ["nodejs", "/var/www/html/server/app.js"]
