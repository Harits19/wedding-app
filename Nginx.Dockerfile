FROM nginx:1.23.3-alpine as nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY ssl.key /etc/nginx/ssl/ssl.key
COPY ssl.crt /etc/nginx/ssl/ssl.crt 

EXPOSE 80
EXPOSE 443