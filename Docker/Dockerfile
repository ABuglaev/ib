FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY . .

RUN apk add --update npm openrc 

RUN cd server/ && npm install

EXPOSE 3012

EXPOSE 80

CMD ["sh", "-c", "nginx -g \"daemon off;\" & && node server/app.js"]
