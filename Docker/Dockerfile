#FROM ubuntu/nginx
#
#COPY . /var/www/html
#
#RUN apt update && apt install nodejs npm -y
#
#RUN cd /var/www/html/server/ && ls -la && npm install
#
#EXPOSE 3012
#
#EXPOSE 80
#
#CMD ["sh", "-c", "service nginx start && nodejs /var/www/html/server/app.js"]

FROM nginx:stable-alpine

COPY . /www

RUN apk add --update npm openrc 

RUN cd /www/server/ && npm install

EXPOSE 3012

EXPOSE 80

#CMD ["sh", "-c", "rc-service nginx start && nodejs /var/www/html/server/app.js"]

CMD ["sh", "-c", "nodejs /www/server/app.js"]
