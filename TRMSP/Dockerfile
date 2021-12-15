FROM php:7.2-apache
#WORKDIR /var/www/html
#COPY . /var/www/html/
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
RUN apt-get update -y && apt-get upgrade -y
