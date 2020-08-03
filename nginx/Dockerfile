# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM nginx:alpine

RUN rm /var/log/nginx/*
RUN rm /etc/nginx/conf.d/default.conf
COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf

#CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;'"]
