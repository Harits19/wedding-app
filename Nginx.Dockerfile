FROM nginx:1.23.3-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY harits-fia.key /etc/nginx/ssl/.
COPY harits-fia.my.id.crt /etc/nginx/ssl/.

EXPOSE 80
EXPOSE 443