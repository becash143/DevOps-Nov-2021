FROM ubuntu:latest
RUN apt update -y
RUN apt install nginx -y
RUN apt install mysql-client -y
RUN apt install curl -y
EXPOSE 80
STOPSIGNAL SIGQUIT
CMD ["nginx", "-g", "daemon off;"]
