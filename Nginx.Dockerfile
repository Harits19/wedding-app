FROM nginx:1.23.3-alpine as nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY harits-fia.key /etc/nginx/ssl/harits-fia.key
COPY harits-fia.my.id.crt /etc/nginx/ssl/harits-fia.my.id.crt 

EXPOSE 80
EXPOSE 443