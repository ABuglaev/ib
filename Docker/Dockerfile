FROM ubuntu/nginx:1.18-20.04_edge

COPY myapp /var/www/html

RUN apt update \
        && apt install nodejs npm -y \
        && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html/server/

RUN npm install

EXPOSE 3012

EXPOSE 80

CMD ["nodejs", "app.js"]
